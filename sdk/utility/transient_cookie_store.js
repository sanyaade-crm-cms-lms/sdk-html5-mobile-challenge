AP.utility.TransientCookieStore = (function($class, _TransientStore) {
  
  var transientCookieStore = $class({
    
    extends: _TransientStore,
    
    static: {
      supported: (function() {
        var actualValue, key, supported, value;
        supported = window.document.cookie != null;
        if (supported) {
          key = _.uniqueId('ap-cookie-support-test');
          value = 'success';
          AP.utility.Cookie.set(key, value);
          actualValue = AP.utility.Cookie.get(key);
          if (value !== actualValue) {
            supported = false;
          }
        }
        return supported;
      })()
    },
    
    _constructor: function TransientCookieStore() {
      AP.utility.TransientCookieStore._super.constructor.apply(this, arguments);
    },
    
    getFromUnderlayingStorage: function(qualifiedKey) {
      var value;
      value = AP.utility.TransientCookieStore._super.getFromUnderlayingStorage.apply(this, arguments);
      if (AP.utility.TransientCookieStore.supported) {
        value = AP.utility.Cookie.get(qualifiedKey);
      }
      return value;
    },

    setToUnderlayingStorage: function(qualifiedKey, value, expirationDate) {
      AP.utility.TransientCookieStore._super.setToUnderlayingStorage.apply(this, arguments);
      if (AP.utility.TransientCookieStore.supported) {
        return AP.utility.Cookie.set(qualifiedKey, value, expirationDate);
      }
    },

    removeFromUnderlayingStorage: function(qualifiedKey) {
      AP.utility.TransientCookieStore._super.removeFromUnderlayingStorage.apply(this, arguments);
      if (AP.utility.TransientCookieStore.supported) {
        return AP.utility.Cookie.del(qualifiedKey);
      }
    },
    
  });
  
  return transientCookieStore;
  
})(AP.utility.createClass, AP.utility.TransientStore);
