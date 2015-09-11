/**
* Data adapter for objects whose datasource is a standard AP API
*
* @module AP
* @submodule adapter
* @class DefaultAdapter
*/
AP.adapter.DefaultAdapter = (function($class) {

    var _DefaultAdapter = $class({
        _constructor: function DefaultAdapter() {},

        /**
        * Sends data to the server using the standard Backbone.sync implementation. Method signature must correspond to Backbone.sync signature.
        * @method send
        * @param {String} action being performed on the model (i.e. "create", "update", "delete", etc.)
        * @param {AP.model.Model}/{AP.collection.Collection} model to send to the server, can be a Model or a Collection
        * @param {Object} additional options
        */
        send: function(actionName, model, options) {
          return Backbone._sync_original.call(model, actionName, model, options);
        }
    });

    return _DefaultAdapter;

})(AP.utility.createClass);
