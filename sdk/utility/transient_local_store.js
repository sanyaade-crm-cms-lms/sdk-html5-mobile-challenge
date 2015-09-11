AP.utility.TransientLocalStore = (function($class, _TransientStore) {
  
  var transientLocalStore = $class({
    
    extends: _TransientStore,
    
    static: {
      supported: window.localStorage != null
    },
    
    _constructor: function TransientLocalStore() {
      AP.utility.TransientLocalStore._super.constructor.apply(this, arguments);
    },
    
    storage: window.localStorage,

    getFromUnderlayingStorage: function(qualifiedKey) {
      var value;
      value = AP.utility.TransientLocalStore._super.getFromUnderlayingStorage.apply(this, arguments);
      if (AP.utility.TransientLocalStore.supported) {
        value = this.storage.getItem(qualifiedKey);
      }
      return value;
    },

    setToUnderlayingStorage: function(qualifiedKey, value, expirationDate) {
      AP.utility.TransientLocalStore._super.setToUnderlayingStorage.apply(this, arguments);
      if (AP.utility.TransientLocalStore.supported) {
        return this.storage.setItem(qualifiedKey, value);
      }
    },

    removeFromUnderlayingStorage: function(qualifiedKey) {
      AP.utility.TransientLocalStore._super.removeFromUnderlayingStorage.apply(this, arguments);
      if (AP.utility.TransientLocalStore.supported) {
        return this.storage.removeItem(qualifiedKey);
      }
    }
    
  });
  
  return transientLocalStore;
    
})(AP.utility.createClass, AP.utility.TransientStore);
