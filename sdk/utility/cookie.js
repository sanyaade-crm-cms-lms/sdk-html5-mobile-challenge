/**
Simplifies interaction with browser cookies.
@module AP
@submodule utility
@class Cookie
@static
 */
AP.utility.Cookie = (function($class) {
  
  var cookie = $class({
    
    _constructor: function Cookie() {},
    
    /**
     * class @static methods and properties
     */
    static: {
        /**
        @method getFromCookieStorage
        @static
        @return {String} a copy of the raw cookie string
         */
        getFromCookieStorage: function() {
          return document.cookie.toString();
        },
    
        /**
        Saves cookie to document cookies.
        @method saveToCookieStorage
        @static
        @param {String} cookie a formatted cookie-string to save to document cookies
         */
        saveToCookieStorage: function(cookie) {
          return document.cookie = cookie;
        },
    
        /**
        Formats an expiration date for a cookie string.
        @method formatCookieStorageDate
        @static
        @param {Integer/Date} expiration number of days from today after which to
        expire cookie *or* a JavaScript `Date` of the absolute expiration date.
         */
        formatCookieStorageDate: function(expiration) {
          var d;
          if (_.isNumber(expiration)) {
            d = new Date();
            d.setTime(d.getTime() + (expiration * 86400000));
            expiration = d;
          }
          if (_.isDate(expiration)) {
            return expiration.toGMTString();
          }
        },
    
        /**
        Builds a formatted cookie-string for saving to `document.cookies`.
        @method buildCookieStorageString
        @static
        @param {String} n name of cookie
        @param {String} v value of cookie
        @param {Integer/Date} expiration optional number of days from today after
        which to expire cookie *or* a JavaScript `Date` of the absolute
        expiration date.
         */
        buildCookieStorageString: function(n, v, expiration) {
          var e;
          e = '';
          if (expiration) {
            e = '; expires=' + this.formatCookieStorageDate(expiration);
          }
          return n + '=' + v + e + '; path=/';
        },
    
        /**
        Saves a cookie to `document.cookies`.
        @method set
        @static
        @param {String} n name of cookie
        @param {String} v value of cookie
        @param {Integer/Date} expiration optional number of days from today after
        which to expire cookie *or* a JavaScript `Date` of the absolute
        expiration date.
         */
        set: function(n, v, expiration) {
          var cookie;
          cookie = this.buildCookieStorageString(n, v, expiration);
          return this.saveToCookieStorage(cookie);
        },
    
        /**
        Returns a cookie with name `n` from underlaying cookie
        storage, `document.cookie`.
        @method get
        @static
        @param {String} n name of cookie
        @return {String} the cookie value, if any
         */
        get: function(n) {
          var c, ca, i, match;
          ca = this.getFromCookieStorage().split(';');
          match = n + '=';
          c = '';
          i = 0;
          while (i < ca.length) {
            c = ca[i].replace(/^\s*/, '');
            if (c.indexOf(match) === 0) {
              return c.substring(match.length, c.length);
            }
            i++;
          }
          return null;
        },
    
        /**
        Deletes a cookie with name `n` from underlaying cookie storage.
        @method del
        @static
        @param {String} n name of cookie
         */
        del: function(n) {
          return this.set(n, '', -1);
        } 
    }
    
  });
  
  return cookie;
  
})(AP.utility.createClass);
