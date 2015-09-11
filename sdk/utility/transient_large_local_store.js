AP.utility.TransientLargeLocalStore = (function($class, _TransientStore) {
  
  var transientLargeLocalStore = $class({
    
    extends: _TransientStore,
    
    static: {
      supported: window.LargeLocalStorage != null
    },
    
    storage: null,

    storageCapacity: 64 * 1024 * 1024,

    storageName: 'large-local-storage',
    
    _constructor: function TransientLargeLocalStore() {
      AP.utility.TransientLargeLocalStore._super.constructor.apply(this, arguments);
      if (AP.utility.TransientLargeLocalStore.supported) {
        this.storage = new LargeLocalStorage({
          size: this.storageCapacity,
          name: this.namespace + "-" + this.storageName
        });
      }
    },
    
    getFromUnderlayingStorage: function(qualifiedKey) {
      if ((this.storage != null) && AP.utility.TransientLargeLocalStore.supported) {
        return this.storage.initialized.then((function(_this) {
          return function() {
            return _this.storage.getContents(qualifiedKey);
          };
        })(this));
      } else {
        return AP.utility.TransientLargeLocalStore._super.getFromUnderlayingStorage.apply(this, arguments);
      }
    },

    setToUnderlayingStorage: function(qualifiedKey, value, expirationDate) {
      if ((this.storage != null) && AP.utility.TransientLargeLocalStore.supported) {
        return this.storage.initialized.then((function(_this) {
          return function() {
            return _this.storage.setContents(qualifiedKey, value);
          };
        })(this));
      } else {
        return AP.utility.TransientLargeLocalStore._super.setToUnderlayingStorage.apply(this, arguments);
      }
    },

    removeFromUnderlayingStorage: function(qualifiedKey) {
      if ((this.storage != null) && AP.utility.TransientLargeLocalStore.supported) {
        return this.storage.initialized.then((function(_this) {
          return function() {
            return _this.storage.rm(qualifiedKey);
          };
        })(this));
      } else {
        return AP.utility.TransientLargeLocalStore._super.removeFromUnderlayingStorage.apply(this, arguments);
      }
    },

    get: function(key, options) {
      var callback, expireKey, qKey, ref;
      if (options == null) {
        options = {};
      }
      qKey = this.getQualifiedKey(key);
      expireKey = this.getQualifiedExpireKey(key);
      callback = function(value) {
        if (value != null) {
          if (_.isFunction(options.success)) {
            return options.success(value);
          }
        } else if (_.isFunction(options.error)) {
          return options.error();
        }
      };
      if ((this.storage != null) && (_.isFunction(options.success || _.isFunction(options.error)))) {
        return (ref = this.storage) != null ? ref.initialized.then((function(_this) {
          return function() {
            return _this.getFromUnderlayingStorage(qKey).then(function(record) {
              return _this.getFromUnderlayingStorage(expireKey).then(function(expireRecord) {
                var expire, value;
                if (expireRecord) {
                  expire = +_this.decodeValue(expireRecord);
                }
                if (_.isNumber(expire) && (expire <= Date.now())) {
                  _this.remove(key);
                  record = null;
                }
                value = _this.decodeValue(record);
                return callback(value);
              });
            });
          };
        })(this)) : void 0;
      } else {
        return callback(AP.utility.TransientLargeLocalStore._super.get.apply(this, arguments));
      }
    }
    
  });
  
  return transientLargeLocalStore;
  
})(AP.utility.createClass, AP.utility.TransientStore);
