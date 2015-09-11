/**
 * Provides convenience methods common to apps.  Generally, apps are
 * namespaces not intended for instantiation.
 *
 * All apps should inherit from this class and execute setup.  It is important to
 * execute setup before adding members.
 *
 * For example (Coffeescript):
 * @example
 *  var AppClass = AP.utility.createClass({
 *    extends: AP.Application,
 *    _constructor: function AppClass() {
  *     AppClass._super.constructor.apply(this, arguments);
  *   }
 *  });
 *  AppClass.setup();
 *
 * @module AP
 * @class Application
 * @static
 */
 AP.Application = (function($class) {

   /**
    * Helper function to bind functions in case browser does not support it
    */
   function bindTo(context, fn) {
     if(context && fn && typeof fn === "function") {
       return function() {
         return fn.apply(context, arguments);
       }
     }
     return null;
   }

   var application = $class({

     _constructor: function Application() {},

     /**
     * class @static methods and properties
     */
     static: {

       /**
        * Adds static members to the class:
        *
        * - `name`
        * - `description`
        * - `models`
        * - `collections`
        *
        * It is important to execute setup before adding members.
        * @method setup
        * @static
        */
       setup: function() {
         this.name = this.name || "";
         this.description = this.description || "";
         this.models = {};
         this.collections = {};
         this.adapters = {};
         this.mockServer = null;
       },

       /**
        * @method init
        * @static
        */
       init: function(adapters) {
         AP = window.AP;
         // Initialize the adapter dispatcher into the current Application.
         AP.Application.initDispatcher.apply(this, arguments);
         if(AP.useMockServer) {
           this.mockServer = new AP.utility.MockServer(this);
         }
         if(AP.useOfflineCache) {
           AP.Application.initOfflineCache();
         }
         return AP.Application.initAjaxSetup();
       },

       /**
       * @method initDispatcher
       * @static
       */
       initDispatcher: function(adapters) {
         var _this = this;
         this.dispatcher = new AP.adapter.Dispatcher(adapters);
         Backbone._sync_original = Backbone.sync;
         Backbone.sync = function(method, obj, options) {
           return _this.dispatcher.send(method, obj, options);
         };
       },

       /**
        * @method initOfflineCache
        * @static
        */
       initOfflineCache: function() {
         AP = window.AP;
         AP.offlineDataStore = new AP.utility.TransientLargeLocalStore({
           storageName: "ap-offline-data-store",
           storageCapacity: AP.offlineStorageCapacity
         });
         Backbone._sync = Backbone.sync;
         Backbone.sync = function(method, obj, options) {
           var url = options.url || _.result(obj, "url");
           // cache only on GET
           if(url && method === "read") {
             var data = options.data || JSON.stringify(options.attrs || (obj !== null ? obj.toJSON(options) : void 0) );
             var oldSuccess = options.success;
             var oldError = options.error;
             // build cache key
             var user = null;
             if(AP.auth.Authentication.isAuthenticated()) {
               user = {
                 username: AP.auth.Authentication.getUsername(),
                 role: AP.auth.Authentication.getUserRole()
               };
             }
             var cacheKey = [AP.baseUrl, url, data, user];
             // override success and error callbacks to handle caching
             options.success = bindTo(this, function(response) {
               AP.offlineDataStore.set(cacheKey, response);
               oldSuccess.apply(this, arguments);
             });

             options.error = bindTo(this, function(xhr) {
               var status = xhr.status;
               if(status < 400 || status >=500) {
                 AP.offlineDataStore.get(cacheKey, {
                  success: bindTo(this, function(cached) {
                    oldSuccess.apply(this, [cached]);
                  }),
                  error: function() {
                    oldError.apply(this, arguments);
                  }
                 });
               } else {
                 oldError.apply(this, arguments);
               }
             });
           }
           return Backbone._sync.apply(this, arguments);
         };
       },


       /**
        * @method proxy
        * @static
        */
        proxy: function(fn) {
          return function() {
            fn.apply(this, arguments);
          }.bind(this);
        },

        /**
         * Returns a model class for this application by name or model ID.
         * @method getModel
         * @static
         * @param {String} str the name or ID of a model
         * @return {AP.model.Model} a model class
         */
        getModel: function(str) {
          return _.find(this.models, function(val, key) {
            return key === str || val.modelId === str || val.name === str;
          });
        },

        /**
         * Returns a collection class for this application by name or collection ID.
         * @param {String} str the name or ID of a collection
         * @return {AP.collection.Collection} a collection class
         * @method getCollection
         * @static
         */
        getCollection: function(str) {
          return _.find(this.collections, function(val, key) {
            return key === str || val.collectionId === str || val.name === str;
          });
        },

        /**
         * @method initAjaxSetup
         * @static
         */
        initAjaxSetup: function() {
          AP = window.AP;
          $.ajaxSetup({
            beforeSend: function(request, settings) {
              var baseUrl = AP.utility.Url.parseUrl(AP.baseUrl);
              var requestUrl = AP.utility.Url.parseUrl(settings.url);
              var hasNoRequestServer = !(requestUrl.host && requestUrl.protocol);
              var isRequestUrlSameAsBaseUrlServer =
                (
                  (baseUrl.protocol === requestUrl.protocol) &&
                  (baseUrl.host === requestUrl.host) &&
                  (baseUrl.port === requestUrl.port)
                ) || hasNoRequestServer;
              if(isRequestUrlSameAsBaseUrlServer) {
                // send the session ID with the deauthentication request
                var authSessionIdHeader = AP.auth.Authentication.getAuthSessionIdHeaderName();
                var authSessionId = AP.auth.Authentication.getAuthSessionId();
                if(authSessionId) {
                  request.setRequestHeader(authSessionIdHeader, authSessionId)
                }
              }
              // point the request to the proper server
              if(!AP.useMockServer && AP.baseUrl && hasNoRequestServer) {
                // if no host or protocol, add the base URL
                _.extend(settings, {
                  crossDomain: true,
                  url: AP.baseUrl + settings.url,
                  xhrFields: _.extend({}, settings.xhrFields, {withCredentials: true})
                });
              }
            }
          });
        }

     }

   });

   return application;

 }(AP.utility.createClass));
