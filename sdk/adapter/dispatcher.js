/**
* Dispatches requests for synchronization with the server to the appropiate Adapter. There should be only one dispatcher per Application.
* It contains a singleton instance of every http adapter as well as one default adapter to connect to the default AP backend.
* @module AP
* @submodule adapter
* @class Dispatcher
*/
AP.adapter.Dispatcher = (function($class) {

    var _Dispatcher = $class({

        static: {
          /**
          * Static identifiers of storage interface types
          * @property STORAGE
          * @type Object
          * @static
          */
          STORAGE: {
              HTTP: "StorageInterface::Http"
          }
        },

        _constructor: function Dispatcher(adapters) {
          var adapterClass, adapter, name, i;

          this.http = {};
          if(adapters) {
            for(name in adapters) {
              if(adapters.hasOwnProperty(name)) {
                adapterClass = adapters[name];
                adapter = new adapterClass();
                name = adapter.name;
                if(adapter.type === AP.adapter.Dispatcher.STORAGE.HTTP) {
                  this.http[name] = adapter;
                }
              }
            }
          }

          this.default = new AP.adapter.DefaultAdapter();
        },

        /**
        * The send method of the Dispatcher serves as a bottleneck for all Model and Collection sync calls.
        * From here it will channel the sync to the appropiate adapter based on the model's storage_interface attribute
        * @method send
        * @param {String} the action being performed (i.e. "create", "read", etc.)
        * @param {AP.model.Model}/{AP.collection.Collection} model or collection being sync'd with the server
        * @param {Object} additional options object, not required
        */
        send: function(actionName, model, options) {
          var storageInterface = undefined;
          if(model.storage_interface) {
            storageInterface = this.http[model.storage_interface];
            if(storageInterface === undefined) {
              return this.default.send(actionName, model, options);
            }
            return storageInterface.send(actionName, model, options);
          }
          return this.default.send(actionName, model, options);
        }
    });

    return _Dispatcher;

})(AP.utility.createClass);
