
/**
Base collection class.  In addition to the standard methods provided by the
[Backbone JS collection class](http://backbonejs.org/#Collection), this base
collection implements paginaton and query parameter mapping.

This class should be subclassed, not used directly.  For example:
@example
    var People = AP.utility.createClass({
        extends: AP.collection.Collection,
        static: {
          collectionId: "people"
        },
        _constructor: function People() {
          People._super.constructor.apply(this, arguments);
        },
        model: Person,
        apiEndpoint: "/person/",
        extraParams: {
          format: "json"
        }
    });

For full collection usage documentation,
refer to [Backbone JS](http://backbonejs.org/#Collection).

@module AP
@submodule collection
@class Collection
@extends Backbone.Collection
 */
AP.collection.Collection = (function($class, Backbone) {
  
  var collection = $class({
    
    extends: Backbone.Collection,
    
    _constructor: function Collection() {
      AP.collection.Collection._super.constructor.apply(this, arguments);
    },
    
    initialize: function() {
      this.extraParams = _.clone(this.extraParams || {});
    },
    
    /**
    Name/value pairs appended to URL of requests to server.  For example, extra
    parameters `{format: 'json'}` is passed to server as:  `/url/?format=json`.
    @property extraParams
    @type Object
     */
    extraParams: {},
    
    /**
    Returns the URL for this collection.  By default this is the value of the
    `apiEndpoint` member of the collection.
    @method url
    @return {String} URL of this collection
     */
    url: function() {
      return this.apiEndpoint;
    },
    
    /**
    Copies keys in object to keys of the format `query[key_name]`  in a new
    object, where `key_name` is the original key.  Returns a new object leaving
    the original intact.  For example, an input object `{foo: 'bar'}` would
    result in an output object `{query[foo]: 'bar'}`.
    @method mapQueryParams
    @param {Object} data name/value pairs to map to query-format
    @return {Object} a new object with mapped keys
     */
    mapQueryParams: function(data) {
      var key, query, value;
      query = {};
      for (key in data) {
        value = data[key];
        if (value) {
          query["query[" + key + "]"] = value;
        }
      }
      return query;
    },
    
    /**
    Fetches objects from the collection instance's URL.  Calls the underlaying
    [Backbone Collection.fetch method](http://backbonejs.org/#Collection-fetch).
    Note:  data from the collection's optional {@link #extraParams} is passed
    through the URL of every request.
    @method fetch
    @param {Object} options optional request data
    @param {Object} options.data optional request parameters are passed through
    request URL as-is
    @param {Object} options.query optional query parameters are passed through
    request URL after being transformed by {@link #mapQuerParams}.
    @param args... optional additional arguments passed-through to underlaying
    [Backbone Collection.fetch method](http://backbonejs.org/#Collection-fetch).
     */
    fetch: function() {
      var args, options, query;
      options = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (options == null) {
        options = {};
      }
      if (options != null ? options.query : void 0) {
        query = this.mapQueryParams(options.query);
      }
      options.data = _.extend({}, this.extraParams, options.data, query);
      return AP.collection.Collection._super.fetch.apply(this, [options].concat(args));
    },
    
    /**
    Convenience method calls {@link #fetch} passing `query` as query parameters.
    @method query
    @param {Object} query name/value pairs passed to {@link #fetch} as query data
     */
    query: function(query, options) {
      return this.fetch(_.extend({
        query: query
      }, options));
    }
    
    
  });
  
  return collection;
  
})(AP.utility.createClass, Backbone);
