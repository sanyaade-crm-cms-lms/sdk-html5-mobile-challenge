/**
Mock server instances are used by the test framework to intercept XHR requests
and simulate the functionality of an API backend, entirely offline.  A mock
server handles all requests matching collections within the application within
which it is instantiated.

To enable a mock server in an application, simply enable the global
`useMockServer` flag:
@example
    AP.useMockServer = true

@module AP
@submodule utility
@class MockServer
 */
AP.utility.MockServer = (function($class) {
  
  var mockServer = $class({
    
    _constructor: function MockServer() {
      this.initialize.apply(this, arguments);
    },
    
    /**
    The application class with which this mock server as instantiated.
    See {@link #initialize}.
    @property application
    @type AP.Application
     */
    application: null,

    /**
    A sinon fake server instance, automatically instantiated.  The sinon fake
    server intercepts XHR requests and handles the low-level request/response
    cycle.  See [Sinon.JS](http://sinonjs.org) for more information.
    @private
    @property server
    @type sinon.fakeServer
     */
    server: null,

    /**
    The collections property is an internal datastore used by the mock server to
    simulate a database.  The collections property is a collection (database) of
    collections (tables) with additional metadata for ease of use.
    @private
    @property collections
    @type Backbone.Collection
     */
    collections: null,


    /**
    Constructs a mock server instance.
    @method initialize
    @param {AP.Application} application an application class to which this
    mock server applies
     */
    initialize: function(application) {
      this.application = application;
      this.server = sinon.fakeServer.create();
      this.server.autoRespond = true;
      this.collections = new Backbone.Collection();
      return this.initResponses();
    },

    /**
    Initializes XHR request interceptors via sinon for requests originating from
    any collection within the application.
    @method initResponses
     */
    initResponses: function() {
      var responseUrls;
      responseUrls = [];
      return _.each(this.application.collections, (function(_this) {
        return function(collectionClass) {
          var url, urlWithQueryString;
          url = _this.getEndpointUrlFor(collectionClass);
          urlWithQueryString = _this.getEndpointRegexWithQueryStringFor(collectionClass);
          _this.server.respondWith('GET', urlWithQueryString, function(xhr) {
            return _this.handleRequest(xhr, collectionClass);
          });
          if (_.indexOf(responseUrls, url) < 0) {
            responseUrls.push(url);
            url = _this.getEndpointRegexFor(collectionClass);
            _this.server.respondWith('POST', url, function(xhr) {
              return _this.handleRequest(xhr, collectionClass);
            });
            _this.server.respondWith('PUT', url, function(xhr) {
              return _this.handleRequest(xhr, collectionClass);
            });
            return _this.server.respondWith('DELETE', url, function(xhr) {
              return _this.handleRequest(xhr, collectionClass);
            });
          }
        };
      })(this));
    },

    /**
    Returns the API endpoint URL associated with a given collection class.
    @method getEndpointUrlFor
    @param {AP.collection.Collection} collectionClass a collection class
    @return {String} the API enpoint URL for the collection class
     */
    getEndpointUrlFor: function(collectionClass) {
      return collectionClass.prototype.apiEndpoint;
    },

    /**
    Returns a regular expression used to match URLs for the given
    collection class.
    @method getEndpointRegexFor
    @param {AP.collection.Collection} collectionClass a collection class
    @return {RegExp} a regular expression matching the API endpoint URL of the
    collection class
     */
    getEndpointRegexFor: function(collectionClass) {
      return new RegExp(("" + (this.getEndpointUrlFor(collectionClass).replace('.json', ''))).replace('.', '\\.'));
    },

    /**
    Returns a regular expression used to match URLs for the given
    collection class with respect for URL query parameters matching the collection
    class' `extraParams`.
    @method getEndpointRegexWithQueryStringFor
    @param {AP.collection.Collection} collectionClass a collection class
    @return {RegExp} a regular expression matching the API endpoint URL of the
    collection class with respect for `extraParams` as query parameters
     */
    getEndpointRegexWithQueryStringFor: function(collectionClass) {
      return new RegExp(((this.getEndpointUrlFor(collectionClass)) + "?" + ($.param(collectionClass.prototype.extraParams))).replace('?', '\\?').replace('&', '\\&').replace('.', '\\.'));
    },

    /**
    Gets the previously instantiated collection matching the given colleciton
    class, if one exists in the internal datastore, otherwise instantiates one.
    @method getOrCreateCollectionInstanceFor
    @param {AP.collection.Collection} collectionClass a collection class
    @return {AP.collection.Collection} a collection instance from the datastore
     */
    getOrCreateCollectionInstanceFor: function(collectionClass) {
      var collection, name;
      name = collectionClass.prototype.model.name;
      collection = this.collections.findWhere({
        name: name
      });
      if (!collection) {
        collection = AP.utility.MockServer.Collections.createCollectionInstanceFor(collectionClass);
        this.collections.add({
          id: collectionClass.prototype.collectionId,
          name: name,
          instance: collection
        });
      }
      return (collection != null ? collection.get('instance') : void 0) || collection;
    },

    /**
    Resets internal datastore.
    This is useful when tests require consistent datastore behavior across runs.
    @method resetDatastore
     */
    resetDatastore: function() {
      return this.collections.reset([]);
    },

    /**
    Parses query parameters out of URL, if any, and transforms them according to
    the given collection class' query fields, if any.
    See `AP.collection.ScopeCollection`.
    @method parseQuery
    @param {AP.collection.Collection} collectionClass a collection class
    @return {Object} query parameters parsed from a URL with respect to the given
    collection class' query fields
     */
    parseQuery: function(url, collectionClass) {
      var modelClass, parsed, query, queryFields;
      modelClass = collectionClass.prototype.model;
      queryFields = collectionClass.prototype.queryFields;
      parsed = _.map(url.split('?')[1].split('&'), function(bits) {
        bits = bits.split('=');
        return [decodeURIComponent(bits[0]), decodeURIComponent(bits[1])];
      });
      query = _.filter(parsed, function(pair) {
        return pair[0].indexOf('query') === 0;
      });
      if (query.length) {
        query = _.map(query, function(pair) {
          var key, value;
          key = pair[0].replace(/query\[(.*)\]/, '$1');
          value = pair[1];
          return [key, value];
        });
        query = _.map(query, function(pair) {
          var queryField;
          queryField = _.findWhere(queryFields, {
            paramName: pair[0]
          });
          if (queryField) {
            pair[0] = queryField.fieldName;
          }
          return pair;
        });
        query = _.map(query, (function(_this) {
          return function(pair) {
            var key, value;
            key = pair[0];
            value = _this.castValue(modelClass, key, pair[1]);
            return [key, value];
          };
        })(this));
        return _.object(query);
      } else {
        return null;
      }
    },

    /**
    @method castValue
    @param {AP.model.Model} modelClass a model class
    @param {String} fieldName name of field in `modelClass`
    @param {String} fieldValue uncast value of field
     */
    castValue: function(modelClass, fieldName, fieldValue) {
      var fieldDef;
      fieldDef = _.findWhere(modelClass.prototype.fieldDefinitions, {
        name: fieldName
      });
      if (fieldDef.name === modelClass.prototype.idAttribute) {
        return fieldValue;
      } else {
        switch (fieldDef.type) {
          case 'integer':
            return parseInt(fieldValue, 10);
          case 'float':
            return parseFloat(fieldValue);
          default:
            return fieldValue;
        }
      }
    },

    /**
    Delegates an intercepted XHR request to the appropriate method, depending on
    the request method.  `GET`, `POST`, and `PUT` are supported at this time, but
    `DELETE` is not.
    @method handleRequest
    @param {AP.collection.Collection} collectionClass a collection class
    @return {Object} query parameters parsed from a URL with respect to the given
    collection class' query fields
     */
    handleRequest: function(xhr, collectionClass) {
      switch (xhr.method.toLowerCase()) {
        case 'get':
          return this.handleGetRequest(xhr, collectionClass);
        case 'post':
          return this.handlePostRequest(xhr, collectionClass);
        case 'put':
          return this.handlePutRequest(xhr, collectionClass);
        case 'delete':
          return this.handleDeleteRequest(xhr, collectionClass);
      }
    },

    /**
    Handles an intercepted XHR `GET` request for the given collection class.  If
    no query is passed, all model instances in the appropriate collection are
    serialized to JSON and returned via a mock XHR `200` response.
    
    If a query is passed, only matching models are returned.
    
    @method handleGetRequest
    @param {Object} xhr mock XHR request object generated by sinon
    @param {AP.collection.Collection} collectionClass the collection class to
    which this request applies
     */
    handleGetRequest: function(xhr, collectionClass) {
      var collectionInstance, query, responseBody, results;
      query = this.parseQuery(xhr.url, collectionClass);
      collectionInstance = this.getOrCreateCollectionInstanceFor(collectionClass);
      if (query) {
        results = collectionInstance.where(query);
      }
      responseBody = JSON.stringify(results || collectionInstance.toJSON());
      return xhr.respond(200, {
        "Content-Type": "application/json"
      }, responseBody);
    },

    /**
    Handles an intercepted XHR `POST` request for the given collection class.  The
    passed request body must be valid JSON.  It is parsed and used to instantiate
    a new model instance of the appropriate type using a randomly generated ID.
    The new model instance is added to the internal datastore and will be returned
    by future requests to the collection.  The resulting model instances is JSON
    serialized and returned via a mock XHR `201` response.
    @method handlePostRequest
    @param {Object} xhr mock XHR request object generated by sinon
    @param {AP.collection.Collection} collectionClass the collection class to
    which this request applies
     */
    handlePostRequest: function(xhr, collectionClass) {
      var collectionInstance, data, idFieldDef, instance, model, responseBody;
      collectionInstance = this.getOrCreateCollectionInstanceFor(collectionClass);
      model = collectionInstance.model;
      data = JSON.parse(xhr.requestBody);
      instance = new model(data);
      idFieldDef = _.findWhere(instance.fieldDefinitions, {
        name: model.prototype.idAttribute
      });
      instance.set(model.prototype.idAttribute, AP.utility.MockServer.Models.generateRandomFieldDataFor(idFieldDef));
      collectionInstance.add(instance);
      responseBody = JSON.stringify(instance.toJSON());
      return xhr.respond(201, {
        "Content-Type": "application/json"
      }, responseBody);
    },

    /**
    Handles an intercepted XHR `PUT` request for the given collection class.  The
    passed request body must be valid JSON and must contain an ID attribute.
    It is parsed and used to update an existing model instance of the appropriate
    type within the datastore.
    
    If the requested instance exists, it is JSON  serialized and returned via a
    mock XHR `200` response.
    
    If the requested instance does not exist, a mock XHR `404` response is sent.
    
    @method handlePutRequest
    @param {Object} xhr mock XHR request object generated by sinon
    @param {AP.collection.Collection} collectionClass the collection class to
    which this request applies
     */
    handlePutRequest: function(xhr, collectionClass) {
      var collectionInstance, data, id, idAttribute, instance, model, responseBody, whereClause;
      collectionInstance = this.getOrCreateCollectionInstanceFor(collectionClass);
      model = collectionInstance.model;
      data = JSON.parse(xhr.requestBody);
      id = xhr.url.split('/').reverse()[0].replace('.json', '');
      idAttribute = model.prototype.idAttribute;
      whereClause = {};
      whereClause[idAttribute] = this.castValue(model, idAttribute, id);
      instance = collectionInstance.findWhere(whereClause);
      if (instance) {
        instance.set(data);
        responseBody = JSON.stringify(instance.toJSON());
        return xhr.respond(200, {
          "Content-Type": "application/json"
        }, responseBody);
      } else {
        return xhr.respond(404);
      }
    },

    /**
    Handles an intercepted XHR `DELETE` request for the given collection class.
    The passed request body must be valid JSON and must contain an ID attribute.
    It is parsed and used to remove an existing model instance from the datastore.
    
    If the requested instance exists, an empty XHR `204` response is returned.
    
    If the requested instance does not exist, a mock XHR `404` response is sent.
    
    @method handleDeleteRequest
    @param {Object} xhr mock XHR request object generated by sinon
    @param {AP.collection.Collection} collectionClass the collection class to
    which this request applies
     */
    handleDeleteRequest: function(xhr, collectionClass) {
      var collectionInstance, id, idAttribute, instance, model, responseBody, whereClause;
      collectionInstance = this.getOrCreateCollectionInstanceFor(collectionClass);
      model = collectionInstance.model;
      id = xhr.url.split('/').reverse()[0].replace('.json', '');
      idAttribute = model.prototype.idAttribute;
      whereClause = {};
      whereClause[idAttribute] = this.castValue(model, idAttribute, id);
      instance = collectionInstance.findWhere(whereClause);
      if (instance) {
        collectionInstance.remove(instance);
        responseBody = '';
        return xhr.respond(204, {
          "Content-Type": "application/json"
        }, responseBody);
      } else {
        return xhr.respond(404);
      }
    }
    
  });
  
  /**
    @module AP
    @submodule utility
    @submodule MockServer
    @class Collections
    @static
     */
  mockServer.Collections = $class({
    
    _constructor: function Collections() {},
    
    /**
     * class @static methods and properties
     */
    static: {      
        /**
        Number of model instances with which to prepopulate a collection
        instantiated via `AP.utility.MockServer.Collections.createCollectionInstanceFor`.
        @property instancesPerCollection
        @type Number
        @static
         */
        instancesPerCollection: 3,
  
        /**
        Generates an `AP.collection.Collection` collection instance from the given
        collection class.  The instance is prepopulated with a number of model
        instances appropriate to the collection, the number of which is defined
        by {@link #instancesPerCollection}.
        @method createCollectionInstanceFor
        @static
        @param {AP.collection.Collection} collectionClass a class object
        @return {AP.collection.Collection} prepopulated collection instance
         */
        createCollectionInstanceFor: function(collectionClass) {
          var collection, instances;
          collection = new collectionClass();
          instances = this.createInstancesFor(collectionClass.prototype.model);
          collection.add(instances);
          return collection;
        },
  
        /**
        Generates a number of `AP.model.Model` model instances from the given model
        class.  The number generated
        @method createInstancesFor
        @static
        @param {AP.model.Model} modelClass a class object
        @return {AP.model.Model[]} array of model instances
         */
        createInstancesFor: function(modelClass) {
          var i, idAttribute, instance, num, ref, results1;
          results1 = [];
          for (num = i = 0, ref = this.instancesPerCollection; 0 <= ref ? i < ref : i > ref; num = 0 <= ref ? ++i : --i) {
            instance = this.createInstanceFor(modelClass, num);
            idAttribute = modelClass.prototype.idAttribute;
            instance.set(idAttribute, modelClass.prototype.name + "-" + num);
            results1.push(instance);
          }
          return results1;
        },
  
        /**
        Generates a single `AP.model.Model` model instance from the given model
        class, prepopulated with random field data
        via {@link AP.utility.MockServer.Models.generateRandomInstanceDataFor}.
        @method createInstanceFor
        @static
        @param {AP.model.Model} modelClass a class object
        @return {AP.model.Model} a model instance
         */
        createInstanceFor: function(modelClass) {
          var instanceData;
          instanceData = AP.utility.MockServer.Models.generateRandomInstanceDataFor(modelClass);
          return new modelClass(instanceData);
        }
      
    }
    
  });
  
  
  /**
    @module AP
    @submodule utility
    @submodule MockServer
    @class Models
    @static
     */
  mockServer.Models = $class({
    
    _constructor: function Models() {},
    
    /**
     * class @static methods and properties
     */
    static: {
        /**
        Generates random field data for a model class based on that class'
        field definitions.
        @method generateRandomInstanceDataFor
        @static
        @param {AP.model.Model} modelClass a class object
        @return {Object} key/value hash of field names and randomly generated values
        appropriate for use in instantiating the model class
         */
        generateRandomInstanceDataFor: function(modelClass) {
          return _.object(_.map(modelClass.prototype.fieldDefinitions, (function(_this) {
            return function(fieldDef) {
              var name, value;
              name = fieldDef.name;
              value = _this.generateRandomFieldDataFor(fieldDef);
              return [name, value];
            };
          })(this)));
        },
  
        /**
        Generates random field data for a model class based on that class'
        field definitions.
        @method generateRandomFieldDataFor
        @static
        @param {AP.model.Model} fieldDef a class object
        @return {Object} key/value hash of field names and randomly generated values
        appropriate for use in instantiating the model class
         */
        generateRandomFieldDataFor: function(fieldDef) {
          switch (fieldDef.type) {
            case 'string':
              return _.uniqueId(fieldDef.name + "_");
            case 'boolean':
              return (Math.random() * 100) < 50;
            case 'integer':
              return _.random(0, 1000000000);
            case 'float':
              return Math.random() * 1000000000;
            case 'date':
            case 'time':
              return (new Date()).toISOString();
            case 'array':
              return [_.random(0, 1000000000), _.random(0, 1000000000), _.random(0, 1000000000)];
            case 'hash':
              return {
                "field1": _.uniqueId('field1'),
                "field2": _.uniqueId('field2'),
                "field3": _.uniqueId('field3')
              };
          }
        }
    }
    
  });
  
  return mockServer;
  
})(AP.utility.createClass);
