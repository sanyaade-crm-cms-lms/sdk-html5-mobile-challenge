AP.utility.TransientStore = (function($class) {
  
  var transientStore = $class({
    
    _constructor: function TransientStore(options) {
      if (options == null) {
        options = {};
      }
      this.namespace = (options != null ? options.namespace : void 0) || this.namespace;
      this.expiresAfter = (options != null ? options.expiresAfter : void 0) || this.expiresAfter;
      this._data = {};
    },
    
    namespace: 'ap',

    expiresAfter: 7,

    _data: null,
    
    getFromUnderlayingStorage: function(qualifiedKey) {
      return this._data[qualifiedKey];
    },

    setToUnderlayingStorage: function(qualifiedKey, value, expirationDate) {
      return this._data[qualifiedKey] = value;
    },

    removeFromUnderlayingStorage: function(qualifiedKey) {
      return delete this._data[qualifiedKey];
    },

    encodeValue: function(value) {
      var encoded;
      encoded = JSON.stringify([value]);
      return AP.utility.Base64.encode(encoded);
    },

    decodeValue: function(value) {
      var decoded, error;
      if (value) {
        decoded = AP.utility.Base64.decode(value);
      }
      try {
        decoded = JSON.parse(decoded);
      } catch (_error) {
        error = _error;
      }
      return decoded != null ? decoded[0] : void 0;
    },

    getKeyString: function(key) {
      var strKey;
      strKey = this.encodeValue(key);
      return strKey;
    },

    getQualifiedKey: function(key) {
      var strKey;
      strKey = this.getKeyString(key);
      return this.namespace + "-" + strKey;
    },

    getQualifiedExpireKey: function(key) {
      var strKey;
      strKey = this.getKeyString(key);
      return this.namespace + "-expire-" + strKey;
    },

    getExpirationDate: function(days) {
      var d;
      d = new Date();
      d.setTime(d.getTime() + (days * 86400000));
      return d;
    },

    get: function(key) {
      var expire, expireKey, qKey, record;
      qKey = this.getQualifiedKey(key);
      expireKey = this.getQualifiedExpireKey(key);
      record = this.getFromUnderlayingStorage(qKey);
      if (this.getFromUnderlayingStorage(expireKey)) {
        expire = parseInt(this.decodeValue(this.getFromUnderlayingStorage(expireKey)), 10);
      }
      if (_.isNumber(expire) && (expire <= Date.now())) {
        this.remove(key);
        record = this.getFromUnderlayingStorage(qKey);
      }
      return this.decodeValue(record);
    },

    set: function(key, value, expiresAfter) {
      var expirationDate, expireKey, qKey;
      qKey = this.getQualifiedKey(key);
      expireKey = this.getQualifiedExpireKey(key);
      expirationDate = this.getExpirationDate(expiresAfter || this.expiresAfter);
      this.setToUnderlayingStorage(qKey, this.encodeValue(value), expirationDate);
      return this.setToUnderlayingStorage(expireKey, this.encodeValue(expirationDate.getTime()), expirationDate);
    },

    remove: function(key) {
      var expireKey, qKey;
      qKey = this.getQualifiedKey(key);
      expireKey = this.getQualifiedExpireKey(key);
      this.removeFromUnderlayingStorage(qKey);
      return this.removeFromUnderlayingStorage(expireKey);
    }
    
  });
  
  return transientStore;
  
})(AP.utility.createClass);
