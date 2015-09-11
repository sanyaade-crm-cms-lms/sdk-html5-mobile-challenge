
if(AP.auth == null) { AP.auth = {}; }


/**
 * Authorizes arbitrary objects against the currently logged-in user (see
 * `AP.auth.Authentication`).  Any object may be made permission-based by adding
 * an auth rules field.  If the currently logged-in user has _any role_ specified
 * in the rules array, it is considered authorized.
 *
 * Example arbitrary permission-based object:
 * @example
 *    var myObject1 = {
 *      member1: "foo",
 *      rules: [{roles: 'manager'}, {roles: 'admin'}]
 *    };
 *    *authorized if logged-in user has _either_ `manager` _or_ `admin` roles
 *
 *    var myObject2 = {
 *      member: "bar",
 *      rules: [{roles: 'manager,admin'}]
 *    };
 *    *authorized if logged-in user has both `manager` and `admin` roles
 *
 * Example usage:
 * @example
 *    AP.auth.Authorization.isAuthorized(myObject1.rules)
 *    AP.auth.Authorization.isAuthorized(myObject2.rules)
 *
 * @module AP
 * @submodule auth
 * @class Authorization
 * @static
 * */
AP.auth.Authorization = (function($class) {
  
  
  var authorization = $class({
    
    _constructor: function Authorization() {},
    
    /**
     * class @static methods and properties
     */
    static: {
      /**
      @method isAuthorized
      @static
      @param {String} rules array of rule objects
      @return {Boolean} `true` if logged-in user has any role in at least one
      rule _or_ there are no rules
       */
      isAuthorized: function(rules) {
        if ((rules == null) || rules.length === 0) {
          return true;
        }
        return this._passesAnyRule(rules);
      },
      
      /**
      @private
      @method _passesAnyRule
      @static
      @param {String} rules array of rule objects
      @return {Boolean} `true` if logged-in user has any role in at least
      one rule
       */
      _passesAnyRule: function(rules) {
        var i, len, rule;
        for (i = 0, len = rules.length; i < len; i++) {
          rule = rules[i];
          if (this._passesRule(rule)) {
            return true;
          }
        }
        return false;
      },
      
      /**
      @private
      @method _passesRule
      @static
      @param {String} rule rule object
      @return {Boolean} `true` if logged-in user has any roles in rule object or
      rule has no roles specified
       */
      _passesRule: function(rule) {
        return this._ruleHasNoRoles(rule) || this._hasAnyRole(rule.roles);
      },
      
      
      /**
      @private
      @static
      @method _ruleHasNoRoles
      @param {String} rule rule object
      @return {Boolean} `true` if rule has no `roles` field
       */
      _ruleHasNoRoles: function(rule) {
        return !rule.hasOwnProperty('roles');
      },
      
      
      /**
      @private
      @static
      @method _hasAnyRole
      @param {String} roles_string string containing comma-separated role names
      @return {Boolean} `true` if logged-in user has any role in the roles string
       */
      _hasAnyRole: function(roles_string) {
        var i, len, ref, role, user_roles;
        user_roles = this._getRoles();
        ref = roles_string.split(',');
        for (i = 0, len = ref.length; i < len; i++) {
          role = ref[i];
          if (user_roles.indexOf($.trim(role)) >= 0) {
            return true;
          }
        }
        if (!roles_string && AP.auth.Authentication.isAuthenticated()) {
          return true;
        }
        return false;
      },
      
      
      /**
      @private
      @static
      @method _getRoles
      @return {String[]} array of roles for the currently logged-in user.  Returns
      an empty array if no user is logged in.
       */
      _getRoles: function() {
        var authSettings, data, roles, rolesField;
        authSettings = AP.auth.Authentication.getAuthenticationSettings();
        rolesField = authSettings.role_field;
        data = AP.auth.Authentication.getUserRole();
        roles = data != null ? data.split(',') : [];
        roles.map(function(x) {
          return $.trim(x);
        });
        return roles;
      } 
      
    }
  });
  
  return authorization;
  
})(AP.utility.createClass);
