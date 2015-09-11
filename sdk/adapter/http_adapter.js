/**
* Datasource adapter to connect over HTTP to a non-anypresence API
*
* @module AP
* @submodule adapter
* @class HttpAdapter
*/
AP.adapter.HttpAdapter = (function($class, _JSON, _XML) {

    var _HttpAdapter = $class({
        _constructor: function HttpAdapter() {},

        /**
        * Regular expression to find "{{}}" expressions within templates during interpolation operations.
        * @property interpolationRegexp
        * @type RegExp
        */
        interpolationRegexp: /{{([^{}]*)}}/g,

        /**
        * Context from where to obtain data during an interpolation operation.
        * If an empty context array is provided then the default context will always be the window plus the model attributes.
        * @property interpolationContext
        * @type Array
        */
        interpolationContext: [],

        /**
        * Parse a javascript object from a string
        * @method parseObject
        * @param {String} string to parse into an object
        * @returns {Object}
        */
        parseObject: function(str) {
          result = null, parser = null, xmlDoc = null;
          if(str && typeof str === "string") {
            result = eval('('+str+')');
          }
          return result;
        },

        /**
        * Interpolate values from a context into a string using {{ }} as a placeholder
        * Example: {{myValue}} with context = { myValue: "foo" }
        * @method interpolate
        * @param {String} string to interpolate values into
        * @param {Object} context from where values are taken
        * @returns {String} string with all values interpolated in
        */
        interpolate: function interpolate(str, context) {
            /**
             * Interpolate strings using {{}} notation
             */
            var resultStr = str.replace(this.interpolationRegexp, function(match, capture) {
                var trimmedCapture = capture.trim();
                var fields = trimmedCapture.split(".");
                var replacementValue = context;
                var field = undefined;
                if(fields && fields.length) {
                    for(var i= 0; i<fields.length; i++) {
                        if(replacementValue === undefined) {
                            break;
                        }
                        field = fields[i];
                        replacementValue = replacementValue[field];
                    }
                    return (replacementValue !== undefined) ? replacementValue : "";
                } else {
                    return "";
                }
            });

            return resultStr;
        },

        /**
        * Get the appropiate interpolation context for a specific model.
        * The interpolation context hierarchy goes like this, first the model-defined context if present,
        * if not then the adapter-defined context, finally if no higher context is provided then the default context
        * which is [window, model.attributes] or [window, collection.model, collection.models] if dealing with a collection
        * @method getInterpolationContext
        * @param {AP.model.Model}/{AP.collection.Collection}
        * @returns {Object} interpolation context object
        */
        getInterpolationContext: function(model) {
            var context = {};
            var contextArray = this.interpolationContext;

            if(contextArray.length === 0) {
              contextArray.push(window);
            }

            _.each(contextArray, function(obj) {
                _.extend(context, obj);
            });


            if(model) {
                if(model instanceof AP.model.Model) {
                    _.extend(context, model.attributes);
                }
                if(model instanceof AP.collection.Collection) {
                    _.extend(context, {
                       model: model.model,
                       models: model.models
                    });
                }
            }
            return context;
        },

        /**
        * Get the appropiate adapter_configuration object based on a Model and the action being performed
        * @method getTargetConfiguration
        * @param {AP.model.Model}/{AP.collection.Collection}
        * @param {String} name of the action being performed (i.e. "create", "update", "read", etc.)
        * @returns {Object}
        */
        getTargetConfiguration: function(model, actionName) {
          if(model && actionName && actionName !== "") {
              var targetConfiguration = null;
              if(model instanceof AP.model.Model) {
                  switch(actionName) {
                      case "create":
                          targetConfiguration = model.adapter_configuration.create;
                          break;
                      case "read":
                          targetConfiguration = model.adapter_configuration.read;
                          break;
                      case "update":
                          targetConfiguration = model.adapter_configuration.update;
                          break;
                      case "delete":
                          targetConfiguration = model.adapter_configuration.delete;
                          break;
                  }
              } else if(model instanceof AP.collection.Collection) {
                  if(actionName === "read") {
                      targetConfiguration = model.adapter_configuration;
                  }
              }

              return targetConfiguration;
          }
          return null;
        },

        /**
        * Get the final headers object to add into the $.ajax call.
        * This operation entails getting the headers from the adapter,
        * adding the headers from the model if any (overriding the adapter headers if necessary)
        * and interpolating values into the headers if any of them has an interpolation expression as a value
        * @method buildIncrementalHeaders
        * @param {AP.model.Model}/{AP.collection.Collection}
        * @param {Object} the appropiate adapter_configuration for that model and action
        * @param {Object} context to use when interpolating
        * @returns {Object} headers
        */
        buildIncrementalHeaders: function(model, targetConfiguration, context) {
            var headers = {}, name = "", value = "";
            _.each(this.headers, function(header) {
              name = this.interpolate(header.name, context);
              value = this.interpolate(header.value, context);
              headers[name] = value;
            }, this);

            if(targetConfiguration) {
                _.each(targetConfiguration.incremental_headers, function(header) {
                  name = this.interpolate(header.name, context);
                  value = this.interpolate(header.value, context);
                  headers[name] = value;
                }, this);
            }

            return headers;
        },

        /**
        * Get the url to hit. Use the adapters url as base then append the url from
        * the target configuration and finally interpolate values into the hole url if necessary.
        * @method buildIncrementalPath
        * @param {AP.model.Model}/{AP.collection.Collection}
        * @param {Object} appropiate adapter_configuration for that model and action
        * @param {Object} context to use during interpolation
        * @returns {String} url
        */
        buildIncrementalPath: function(model, targetConfiguration, context) {
            if(targetConfiguration) {
                var url = this.base_uri.substr(0);
                var path = targetConfiguration.incremental_path;
                if(path) {
                  path = this.interpolate(path, context);
                  url += "/"+path;
                }

                return url;
            }

            return this.base_uri;
        },

        /**
        * Get a query string to send, built from the url parameters using the same incremental logic as with headers.
        * @method buildIncrementalUrlParams
        * @param {AP.model.Model}/{AP.collection.Collection}
        * @param {Object} appropiate adapter_configuration for that model and action
        * @param {Object} context to use during interpolation
        * @returns {String} query string to append to a url
        */
        buildIncrementalUrlParams: function(model, targetConfiguration, context) {
            var urlParams = {}, paramArray = [], queryString = "";
            _.each(this.url_parameters, function(param) {
               urlParams[param.name] = param.value;
            });
            if(targetConfiguration) {
                _.each(targetConfiguration.incremental_url_parameters, function(param) {
                  urlParams[param.name] = param.value;
                });
            }
            for(var name in urlParams) {
              if(urlParams.hasOwnProperty(name)) {
                paramArray.push({
                  name: name,
                  value: urlParams[name]
                });
              }
            }
            _.map(paramArray, function(param) {
              param.name = this.interpolate(param.name, context);
              param.value = this.interpolate(param.value, context);
              return param;
            }, this);

            queryString = $.param(paramArray);
            return queryString;
        },

        /**
        * Build a body payload string out of a body payload template by concatenating values into it.
        * @method buildBodyPayload
        * @param {AP.model.Model}/{AP.collection.Collection}
        * @param {Object}
        * @param {Object}
        * @returns {String}
        */
        buildBodyPayload: function(model, targetConfiguration, context) {
            var bodyPayload = null;
            if(targetConfiguration && targetConfiguration.body_payload_template !== "") {
              bodyPayload = this.parseObject(this.interpolate(targetConfiguration.body_payload_template, context));
            }
            return bodyPayload;
        },

        /**
        * Build a request field mappings object, following the hierarchical structure of headers and interpolating values into them.
        * @method buildRequestFieldMappings
        * @param {AP.model.Model}/{AP.collection.Collection}
        * @param {Object}
        * @param {Object}
        * @returns {Object} key/value request fields
        */
        buildRequestFieldMappings: function(model, targetConfiguration, context) {
            var requestFields = {};
            var requestFieldMappings = [];
            var fieldName = undefined;
            var fieldRemoteName = undefined;

            if(model) {
                if(targetConfiguration) {
                    requestFieldMappings = targetConfiguration.request_field_level_mappings;
                    _.each(requestFieldMappings, function(mapping) {
                        fieldRemoteName = mapping.remote_field_name;
                        fieldName = mapping.field_definition.name;
                        requestFields[fieldRemoteName] = model.get(fieldName);
                    }, this);
                } else {
                    _.extend(requestFields, model.attributes);
                }
            }

            return requestFields;
        },

        /**
        * Build response field mappings object for a single object.
        * @method buildModelResponseFieldMappings
        * @param {Object} data of a model as returned by the server
        * @param {Object}
        */
        buildModelResponseFieldMappings: function(data, targetConfiguration) {
          var responseFields = {};
          var responseFieldMappings = [];

          if(data && targetConfiguration) {
            responseFieldMappings = targetConfiguration.response_field_level_mappings;
            _.each(responseFieldMappings, function(mapping) {
              var dataTarget = undefined;
              var fieldRemoteName = mapping.remote_field_name;
              var fieldName = mapping.field_definition.name;
              var path = this.getPath(fieldRemoteName, data);
              if(path && path.length > 0) {
                  dataTarget = path[0];
              }
              if(dataTarget instanceof XMLDocument || dataTarget instanceof Element || dataTarget instanceof Node) {
                  dataTarget = _XML.xmlToString(dataTarget);
              }
              responseFields[fieldName] = dataTarget;
            }, this);
          }

          return responseFields;
        },

        /**
        * Build response field mappings from data returned from the server mapped to either a model or a collection.
        * If 'model' is a collection then it iterates over the given data and maps fields from each iteration to a single model which gets
        * added to an array. Returns an Object if model is {AP.model.Model} or an Array if model is {AP.collection.Collection}
        * @method buildResponseFieldMappings
        * @param {AP.model.Model}/{AP.collection.Collection}
        * @param {Object} data returned from the server
        * @param {Object}
        * @returns {Object}/{Array}
        */
        buildResponseFieldMappings: function(model, data, targetConfiguration) {
          var responseMappings = undefined, nodeData = undefined;
          if(model && data && targetConfiguration) {
            if(model instanceof AP.model.Model) {
              if(data instanceof Array) {
                data = data[0];
              }
              responseMappings = this.buildModelResponseFieldMappings(data, targetConfiguration);
            } else if(model instanceof AP.collection.Collection) {
              responseMappings = [];
              if(data instanceof Array) {
                _.each(data, function(node) {
                  nodeData = this.buildModelResponseFieldMappings(node, targetConfiguration);
                  if(nodeData) {
                    responseMappings.push(nodeData);
                  }
                }, this);
              }
            }
          }
          return responseMappings;
        },

        /**
        * Return the result of evaluating a selector expression over a data object. The expression selector may be either a JSONPath expression or
        * an XPath expression. The method will attempt to evaluate the expression as XPath first and upon failure will treat it as JSONPath. It
        * is meant to provide a homogeneous way of selecting data from responses, regardless of the response format.
        * @method getPath
        * @param {String} selector XPath/JSONPath expression
        * @param {Object} data returned from the server
        * @returns {Object} result of the selector evaluation, if the expression wasn't found then it returns undefined.
        */
        getPath: function(expression, data) {
          /**
            Requires JQuery.xpath plugin for XPath expressions
          */
          var result = undefined;
          if(expression && expression !== "" && data) {

            try {
              if($.xpath === undefined) {
                console.log("JQuery.xpath plugin is not defined. You must add it to your application in order to use XPath expressions. Find it at https://github.com/ilinsky/jquery-xpath.");
                throw new Error("JQuery.xpath is not defined.");
              }
              result = $(data).xpath(expression).toArray();
            } catch(error) {
              var _result = _JSON.jsonPath(data, expression);
              if(_result !== false) {
                result = _result;
              }
            }
          }
          return result;
        },

        /**
        * Create the full request to send to the server in a 'send' call, including success and error callbacks
        * @method buildRequest
        * @param {String}
        * @param {AP.model.Model}/{AP.collection.Collection}
        * @param {Object}
        * @returns {Object} object representing the options to pass to JQuery.ajax function
        */
        buildRequest: function(actionName, model, options) {
          var targetConfiguration = null,
              context = {},
              _options = options || {},
              verb = "GET",
              urlParamString = undefined,
              ajaxConfiguration = {
                  async: true,
                  crossDomain: true
              };

          targetConfiguration = this.getTargetConfiguration(model, actionName, _options);
          if(actionName && model && targetConfiguration) {
              verb = (targetConfiguration.http_verb === "null") ? "GET" : targetConfiguration.http_verb;

              _.extend(ajaxConfiguration, _options);
              if(!ajaxConfiguration.data) {
                  ajaxConfiguration.data = {};
              }

              context = ajaxConfiguration.interpolationContext;
              if(!context || !(context instanceof Array)) {
                context = this.getInterpolationContext(model);
              }

              ajaxConfiguration.url = this.buildIncrementalPath(model, targetConfiguration, context);
              ajaxConfiguration.headers = this.buildIncrementalHeaders(model, targetConfiguration, context);
              ajaxConfiguration.method = verb;

              urlParamString = this.buildIncrementalUrlParams(model, targetConfiguration, context);
              //  Append query string to url
              if(urlParamString && urlParamString !== "") {
                ajaxConfiguration.url += "?"+urlParamString;
              }

              if(verb === "GET") {
                //  If "GET" only send data from request field mapppings
                _.extend(ajaxConfiguration.data, this.buildRequestFieldMappings(model, targetConfiguration, context));
              } else {
                //  Else send body payload template if present or request field mappings if no body template is provided
                if(targetConfiguration.body_payload_template && targetConfiguration.body_payload_template !== "") {
                  var bodyPayload = this.buildBodyPayload(model, targetConfiguration, context);
                  if(targetConfiguration.body_format === "json" || targetConfiguration.body_format === "form-encoded") {
                    _.extend(ajaxConfiguration.data, bodyPayload);
                  } else if(targetConfiguration.body_format === "xml") {
                    ajaxConfiguration.data = bodyPayload;
                  }
                } else {
                  var requestFields = this.buildRequestFieldMappings(model, targetConfiguration, context);
                  if(targetConfiguration.body_format === "json" || targetConfiguration.body_format === "form-encoded") {
                    _.extend(ajaxConfiguration.data, requestFields);
                  } else if(targetConfiguration.body_format === "xml") {
                    requestFields = _XML.objectToXmlString(model.name, requestFields);
                    ajaxConfiguration.data = requestFields;
                  }
                }

                //  If sending data as body payload then add appropiate format
                if(targetConfiguration.body_format === "form-encoded") {
                  ajaxConfiguration.contentType = "application/x-www-form-urlencoded; charset=UTF-8";
                } else if(targetConfiguration.body_format === "xml") {
                  ajaxConfiguration.contentType = "text/xml";
                } else {
                  ajaxConfiguration.contentType = "application/json";
                }
              }

              ajaxConfiguration.success = (function(_this) {
                return function(data, textStatus, jqXHR) {
                  var responseData = _this.mapResponse(model, data, targetConfiguration);
                  if(_options.success && _options.success instanceof Function) {
                    _options.success.call(this, responseData);
                  }
                };
              })(this);

              ajaxConfiguration.error = function(resp) {
                var error = _options.error;
                if (error) error.call(_options.context, model, resp, _options);
                model.trigger('error', model, resp, _options);
              }

              return ajaxConfiguration;
          }

          return null;
        },

        /**
        * Map the data returned from the server to a {AP.model.Model} or {AP.collection.Collection}
        * @method mapResponse
        * @param {AP.model.Model}/{AP.collection.Collection}
        * @param {Object} server data
        * @param {Object}
        * @returns {Object}/{Array} data to add to the model or collection (setting the data is left to Backbone)
        */
        mapResponse: function(model, data, targetConfiguration) {
          var selectedData = data;
          if(targetConfiguration.path_selector && targetConfiguration.path_selector !== "") {
            selectedData = this.getPath(targetConfiguration.path_selector, data);
            if(selectedData === false || selectedData === undefined) {
              selectedData = data;
            }
          }
          var responseData = this.buildResponseFieldMappings(model, selectedData, targetConfiguration);
          return responseData;
        },

        /**
        * Send model data to the server
        * @method send
        * @param {String} action being performed
        * @param {AP.model.Model}/{AP.collection.Collection} model/collection to sync with the server
        * @param {Object} options
        */
        send: function(actionName, model, options) {

          var request = this.buildRequest(actionName, model, options);
          if(request) {
            return $.ajax(request);
          }
          return null;
        }
    });

    return _HttpAdapter;

})(AP.utility.createClass, AP.utility.JSON, AP.utility.XML);
