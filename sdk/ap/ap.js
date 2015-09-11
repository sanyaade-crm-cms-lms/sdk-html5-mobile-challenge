/**
 * Provides the global namespace for SDK framework classes.  Provides convenience
 * methods for app management.
 * @module AP
 * @static
 */
window.AP = (function() {

	function AP() {}

	function extend(dest, src) {
		for(var prop in src) {
			if(src.hasOwnProperty(prop)) {
				dest[prop] = src[prop];
			}
		}
	}

	var properties = {
		/**
		 * Name of the active application.
		 * @property activeAppName
		 * @type String
		 */
		activeAppName: null,

		/**
		 * Namespace for authentication/authorization classes.
		 * @property auth
		 * @type Object
		 */
		auth: {},

		/**
		 * Namespace for general utility classes.
		 * @property utility
		 * @type Object
		 */
		utility: {},

		/**
		 * Namespace for SDK model superclasses.
		 * @property model
		 * @type Object
		 */
		model: {},

		 /**
		  * Namespace for SDK collection superclasses.
		  * @property collection
		  * @type Object
		  */
		 collection: {},

		 /**
		  * Namespace for model relationship classes.
		  * @property relationship
		  * @type Object
		  */
		 relationship: {},

		/**
		* Namespace for adapter classes.
		* @property adapter
		* @type Object
		*/
		adapter: {},

		 /**
		  * Namespace for apps.  In most cases only one app is present.
		  * @property apps
		  * @type Object
		  */
		 apps: {},

		 /**
		  * Base URL for all XHR requests.
		  * @property baseUrl
		  * @type String
		  */
		 baseUrl: null,

		 /**
		  * Enables mock server in all applications.  SinonJS is required if
		  * `useMockServer` is `true`.
		  * @property useMockServer
		  * @type Boolean
		  */
		 useMockServer: false,

		 /**
		  * Enables offline caching of successful `GET` requests.
		  * @property useOfflineCache
		  * @type Boolean
		  */
		 useOfflineCache: true,

		 /**
		  * Offline cache storage capacity in bytes.
		  * @property offlineStorageCapacity
		  * @type Number
		  */
		 offlineStorageCapacity: 5 * 1024 * 1024, // request capacity in bytes

		 /**
		  * Registers an app class with a given name.  The name may be used later
		  * for look-up.  Registering an app with a duplicate name replaces any
		  * existing app.
		  * @method registerApp
		  * @param {AP.Application} app the application class
		  * @param {String} name the name of the application
		  */
		 registerApp: function(app, name) {
			if(app && name) {
				this.apps[name] = app;
			}
		 },

		 /**
		  * Returns an app class registered under the given name.
		  * @method getApp
		  * @param {String} name the name of the application to look up
		  * @return {AP.Application} the application class
		  */
		 getApp: function(name) {
			 return this.apps[name];
		 },

		 /**
		  * Returns the currently active app, if any.
		  * @method getActiveApp
		  * @return {AP.Application} the active application class, if any.
		  */
		 getActiveApp: function() {
			 return this.getApp(this.activeAppName);
		 }
	};

	extend(AP, properties);

	// return the module
	return AP;
})();
