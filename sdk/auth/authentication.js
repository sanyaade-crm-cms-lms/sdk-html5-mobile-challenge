AP.auth = (AP.auth === null) ? {} : AP.auth;
/**
Provides methods for user authentication and deauthentication.

To login:
@example
    AP.auth.Authentication.login({
        username: "johndoe",
        password: "doe123"
    });

    AP.auth.Authentication.isAuthenticated();
    // true

To logout:
@example
    AP.auth.Authentication.logout();
    
    AP.auth.Authentication.isAuthenticated();
    # false

@module AP
@submodule auth
@class Authentication
@static
 */
AP.auth.Authentication = (function($class, Backbone) {

	
	var authentication = $class({
  
    _constructor: function Authentication() {},
    
    static: {
      
      
      
      /**
      Custom header to send/retrieve the session ID when using CORS.
      @private
      @property _authSessionIdHeaderName
      @type String
       */
      _authSessionIdHeaderName: "X-Session-Id",
      
      /**
      Transient storage instance for persisting session data.
      @private
      @property store
      @type AP.utility.TransientStore
       */
      store: (function() {
        if(AP.utility.TransientLocalStore.supported) {
          return new AP.utility.TransientLocalStore({ namespace: "ap-auth" });
        } else {
          return new AP.utility.TransientCookieStore({ namespace: "ap-auth" });
        }
      })(),
      
      /**
      Executes login request with passed `credentials`.
      @method login
      @static
      @param {Object} credentials the user credentials
       */
      login: function(credentials) {
        if(!this.isAuthenticated()) {
          return this.authenticate(credentials);
        }
      },
      
      /**
      Executes logout request.
      @method logout
      @static
       */
      logout: function() {
        if(this.isAuthenticated()) {
          return this.deauthenticate();
        }
      },
      
      /**
      @method isAuthenticatable
      @static
      @return {Boolean} `true` if authentication is enabled
       */
      isAuthenticatable: function() {
        return !!this.authenticationSettings;
      },
      
      /**
      @method isAuthenticated
      @static
      @return {Boolean} `true` if a user is logged-in
       */
      isAuthenticated: function() {
        return !!(this.getAuthSessionData() && this.getAuthSessionId());
      },
      
      /**
      Performs authentication request with HTTP basic auth.  Upon a successful
      login the user object returned by the API is stored for later use.
      @method authenticate
      @static
      @param {Object} credentials user credentials object, for example:
      `{"username": "johndoe", "password": "doe123"}`.
       */
      authenticate: function(credentials) {
        var AP = window.AP;
        var settings = this.getAuthenticationSettings();
        $.ajax({
          url: settings.authentication_url, //+ ".json",
          type: "POST",
          dataType: "json",
          data: credentials,
          
          beforeSend: function(request, settings) {
            var baseUrl = AP.utility.Url.parseUrl(AP.baseUrl);
            var requestUrl = AP.utility.Url.parseUrl(settings.url);
            var hasNoRequestServer = !(requestUrl.host && requestUrl.protocol);
            var isRequestUrlSameAsBaseUrl = (
              (baseUrl.protocol === requestUrl.protocol) &&
              (baseUrl.host === requestUrl.host) &&
              (baseUrl.port === requestUrl.port)
            ) || hasNoRequestServer;
            if(isRequestUrlSameAsBaseUrl) {
              // send the auth credentials
              request.setRequestHeader("Authorization", this.makeHTTPBasicAuthHeader(credentials))
            }
            // point the request to the proper server
            if(!AP.useMockServer && AP.baseUrl && hasNoRequestServer) {
              // if no host or protocol, add the base URL
              _.extend(settings, {
                crossDomain: true,
                url: AP.baseUrl+settings.url,
                xhrFields: _.extend({}, settings.xhrFields, { withCredentials: true })
              });
            }
          }.bind(this),
          
          success: function(response, status, xhr) {
            // save auth session data into store
            if(response) {
              this.store.set(this.getAuthSessionDataKey(), response, 7)
            }
            // save auth session ID into store
            var sessionId = xhr.getResponseHeader(this.getAuthSessionIdHeaderName());
            if(!sessionId && typeof settings.session_id_field !== "undefined" && settings.session_id_field !== null) {
              sessionId = (typeof response !== "undefined" && response !== null) ? response[settings.session_id_field] : void 0;
            }
            if(sessionId) {
              this.store.set(this.getAuthSessionIdKey(), sessionId, 7);
            }
            // successful login requires auth session data and an auth session ID
            if(response && sessionId) {
              /**
              @event 'auth:authenticated'
              An authenticated event is triggered after a successful login.
               */
              this.trigger("auth:authenticated");
            } else {
              this.trigger("auth:error");
            }
          }.bind(this),
          
          error: function() {
            /**
            @event 'auth:error'
            An auth error event is triggered if a login or logout fails for
            any reason.
             */
            this.trigger("auth:error");
          }.bind(this)
        });
      },
      
      /**
      Performs deauthentication request.  Upon a successful logout, stored user data
      is removed.
      @method deauthenticate
      @static
       */
      deauthenticate: function() {
        var AP = window.AP;
        var settings = this.getAuthenticationSettings();
        $.ajax({
          url: settings.deauthentication_url, //+ "json",
          type: "POST",
          dataType: "text",
          
          beforeSend: function(request, settings) {
            var baseUrl = AP.utility.Url.parseUrl(AP.baseUrl);
            var requestUrl = AP.utility.Url.parseUrl(settings.url);
            var hasNoRequestServer = !(requestUrl.host && requestUrl.protocol);
            var isRequestUrlSameAsBaseUrl = (
              (baseUrl.protocol === requestUrl.protocol) &&
              (baseUrl.host === requestUrl.host) &&
              (baseUrl.port === requestUrl.port)
            ) || hasNoRequestServer;
            if(isRequestUrlSameAsBaseUrl) {
              // send the session ID with the deauthentication request
              var authSessionIdHeader = this.getAuthSessionIdHeaderName();
              var authSessionId = this.getAuthSessionId();
              if(authSessionId) {
                request.setRequestHeader(authSessionIdHeader, authSessionId); 
              }
            }
            // point the request to the proper server
            if(!AP.useMockServer && AP.baseUrl && hasNoRequestServer) {
              // if no host or protocol, add the base URL
              _.extend(settings, {
                crossDomain: true,
                url: AP.baseUrl+settings.url,
                xhrFields: _.extend({}, settings.xhrFields, { withCredentials: true })
              });
            }
          }.bind(this),
          
          complete: function(response) {
            this.destroySession();
          }.bind(this)
        });
      },
      
      /**
      Destroys session by deleting data in auth store.
      @private
      @method destroySession
      @static
       */
      destroySession: function() {
        // delete auth data
        this.store.remove(this.getAuthSessionDataKey());
        this.store.remove(this.getAuthSessionIdKey());
        /**
        @event auth:deauthenticated
        A deauthenticated event is triggered after the session is destroyed.
         */
        this.trigger("auth:deauthenticated");
      },
      
      /**
      Returns the name of the custom session ID header.
      @method getAuthSessionIdHeaderName
      @static
       */
      getAuthSessionIdHeaderName: function() {
        return this._authSessionIdHeaderName;
      },
      
      /**
      Builds a base-URL-specific auth key.  Since multiple apps may
      sometimes be served from the same domain, auth keys must include the name
      of the base URL (API server) in the key name for uniqueness.
      @private
      @method getAuthSessionDataKey
      @static
      @return {String} auth store key, unique by base URL
       */
      getAuthSessionDataKey: function() {
        var baseName = "session";
        var baseUrl;
        if(AP.baseUrl) {
          baseUrl = AP.baseUrl.replace(/[^a-zA-Z\-0-9]/g, ''); 
        }
        if(baseUrl) {
          return baseName+"-"+baseUrl;
        } else {
          return baseName;
        }
      },
      
      /**
      Builds a key name from `getAuthSessionDataKey` with `-session-id` appended.
      @private
      @static
      @method getAuthSessionIdKey
      @return {String} auth session ID key name
       */
      getAuthSessionIdKey: function() {
        return this.getAuthSessionDataKey()+"-id";
      },
      
      /**
      Returns the auth session data (a user) from auth store if logged in.
      @method getAuthSessionData
      @static
      @return {Object/null} the authenticated user object
       */
      getAuthSessionData: function() {
        return this.store.get(this.getAuthSessionDataKey());
      },
      
      /**
      Returns the lookup field value (username) of the currently logged-in user.
      @return {Object/null} the authenticated user's lookup field value (username)
       */
      getUsername: function() {
        var settings = this.getAuthenticationSettings();
        var credentials = this.getAuthSessionData();
        if(typeof credentials !== "undefined" && credentials !== null) {
          if(typeof settings !== "undefined" && settings !== null) {
            return credentials[settings.lookup_field];
          }
        }
      },
      
      /**
      Returns the role(s) of the currently logged-in user.
      @return {Object/null} the authenticated user's role(s)
       */
      getUserRole: function() {
        var settings = this.getAuthenticationSettings();
        var credentials = this.getAuthSessionData();
        if(typeof credentials !== "undefined" && credentials !== null) {
          if(typeof settings !== "undefined" && settings !== null) {
            return credentials[settings.role_field];
          }
        }
      },
      
      /**
      Returns the auth ID from auth store.
      @private
      @static
      @method getAuthSessionId
      @return {String/null} the current session ID
       */
      getAuthSessionId: function() {
        return this.store.get(this.getAuthSessionIdKey());
      },
      
      /**
      @private
      @static
      @method getAuthenticationSettings
      @return {Object/null} the authenticatable object if one is specified.
      Otherwise null.
       */
      getAuthenticationSettings: function() {
        return this.authenticationSettings || null;
      },
      
      /**
      @private
      @static
      @method getAuthenticatableObject
      @return {Object/null} the model specified as the authenticatable object if one
      is specified.  Otherwise null.
       */
      getAuthenticatableObject: function() {
        if(this.getAuthenticationSettings() !== null) {
         return window.AP.getActiveApp().getModel(this.getAuthenticationSettings().object_definition_id); 
        }
      },
      
      /**
      Builds a Base64-encoded HTTP basic auth header for use in an
      authentication request.
      @private
      @static
      @method makeHTTPBasicAuthHeader
      @param {Object} credentials the user credentials
      @return {String} Base-64 encoded HTTP basic auth header with user credentials
       */
      makeHTTPBasicAuthHeader: function(credentials) {
        var settings = this.getAuthenticationSettings();
        var lookup = credentials[settings.lookup_field];
        var match = credentials[settings.match_field];
        return "Basic "+AP.utility.Base64.encode([lookup, match].join(":"));
      }
      
    }
    
	});
  
  _.extend(authentication, Backbone.Events);
  
  // if server ever responds with 401, assume the session expired
  $.ajaxSetup({
    complete: _.debounce((function(auth) {
      return function(xhr, result) {
        if(xhr.status === 401 && result === "error") {
          auth.destroySession();
        }
      };
    })(authentication), 150)
  });
	
	return authentication;
	
})(AP.utility.createClass, Backbone);
