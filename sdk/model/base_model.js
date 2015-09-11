/**
Base model class.  In addition to the standard methods provided by the
[BackboneJS model class](http://backbonejs.org/#Model), this base model
implements full validations support.

This model should be subclassed, not used directly.  For example:
@example
    var Person = AP.utility.createClass({
        extends: AP.model.Model,
        static: {
            modelId: "person"
        },
        _constructor: function Person() {
            Person._super.constructor.apply(this, arguments);
        },
        name: 'Person',
        urlRoot: "/person/",
        fieldDefinitions: [
            {name: "name", type: "string"},
            {name: "age", type: "integer"}
        ],
        validations: [
            {field: "name", validate: "type", is: "string"},
            {field: "name", validate: "required"},
            {field: "age", validate: "type", is: "integer"}
        ]
    });

For full model usage documentation,
refer to [Backbone JS](http://backbonejs.org/#Model).

@module AP
@submodule model
@class Model 
@extends Backbone.Model
 */
 AP.model.Model = (function($class, Backbone) {
   
   var model = $class({
     extends: Backbone.Model,
     
     _constructor: function Model() {
       AP.model.Model._super.constructor.apply(this, arguments);
     },
     
     /**
    An internal reference to initialized relationship instances for this
    model instance.
    @property _relationships
    @type AP.relationship.Relationship[]
    @private
     */
    _relationships: null,

    /**
    An internal reference to the validator instance used by the model instance.
    @property _validator
    @type AP.utility.Validator
    @private
     */
    _validator: null,

    /**
    An array of validation configurations.  For more information about
    validations, refer to
    the {@link AP.utility.Validator Validator documentation}.
    @property validations
    @type Object[]
     */
    validations: [],
    
    initialize: function() {
      this.initializeRelationships();
      this.initializeValidations();
      return this.on('sync', (function(_this) {
        return function() {
          var ref;
          return (ref = _this.constructor.trigger) != null ? ref.apply(_this.constructor, ['sync'].concat(_.toArray(arguments))) : void 0;
        };
      })(this));
    },
    
    initializeRelationships: function() {
      this._relationships = [];
      return _.each(this.relationshipDefinitions, (function(_this) {
        return function(definition) {
          var relationship;
          relationship = new AP.relationship[definition.type](_this, definition);
          return _this._relationships.push(relationship);
        };
      })(this));
    },

    initializeValidations: function() {
      this.validations = _.clone(this.validations);
      return this._validator = new AP.utility.Validator;
    },
    
    /**
    Retrieves the initialized relationship instance of the given name.
    @method getRelationship
    @param {String} name the name of the relationship
    @return {AP.relationship.Relationship} matching relationship instance
     */
    getRelationship: function(name) {
      return _.where(this._relationships, {
        name: name
      })[0];
    },

    /**
    Performs a `fetch` on the specified relationship.
    @method fetchRelated
    @param {String} name the name of the relationship
    @param {Function} callback called when fetching completes
     */
    fetchRelated: function(name, callback) {
      var ref;
      return (ref = this.getRelationship(name)) != null ? ref.fetch(callback) : void 0;
    },

    /**
    Appends `.json` to the end of the default URL.
    @method url
    @return {String} the URL for this model instance
     */
    url: function() {
      return (AP.model.Model._super.url.apply(this, arguments)) + ".json";
    },

    /**
    Simple proxy to the model's underlaying `fetch` method inherited
    from Backbone JS `Model`.
    @method reload
     */
    reload: function() {
      return this.fetch.apply(this, arguments);
    },

    /**
    Simple override of the built-in Backbone.js `destroy` method to enable
    `before_delete` event handlers.
    @method destroy
     */
    destroy: function() {
      /**
      @event 'before_delete'
      Triggered on a model instance immediately before being destroyed.
       */
      this.trigger('before_delete');
      return AP.model.Model._super.destroy.apply(this, arguments);
    },

    /**
    Simple proxy to the model's underlaying `destroy` method inherited
    from Backbone JS `Model`.
    @method delete
     */
    delete: function() {
      return this.destroy.apply(this, arguments);
    },

    /**
    Simple override of the built-in Backbone.js `set` method to enable
    `before_change` event handlers.
    @method set
     */
    set: function(key, val, options) {
      var attrs;
      if (options == null) {
        options = {};
      }
      if (_.isObject(key)) {
        attrs = key;
        options = val || {};
      } else {
        attrs = {};
        attrs[key] = val;
      }
      if (attrs) {

        /**
        @event 'before_change'
        Triggered on a model instance immediately before being changed.
         */
        this.trigger('before_change', this, attrs);
      }
      return AP.model.Model._super.set.apply(this, arguments);
    },

    /**
    Simple override of the built-in Backbone.js `save` method to enable
    `before_save` event handlers.
    @method save
     */
    save: function() {
      /**
      @event 'before_save'
      Triggered on a model instance immediately before being saved.
       */
      this.trigger('before_save');
      return AP.model.Model._super.save.apply(this, arguments);
    },

    /**
    Validates the model instance and returns any errors reported by the instance's
    validator instance.
    @method errors
    @return {String[]} the errors array reported by the validator
    instance's {@link AP.utility.Validator#errors errors method}.
     */
    errors: function() {
      this.validate();
      return this._validator.errors();
    },

    /**
    Validates the model instance and returns `true` if the instance is valid,
    otherwise `false`.
    @method isValid
    @return {Boolean} the value reported by the validator
    instance's {@link AP.utility.Validator#isValid isValid method}.
     */
    isValid: function() {
      this.validate();
      return this._validator.isValid();
    },


    /**
    Copies the instance data (or optional `values` argument) and the instance
    validations into the {@link #_validator validator instance}.  Returns
    `undefined` if values are valid, otherwise returns
    an {@link #errors errors array}.
    @method validate
    @param {Object} values optional hash of field name/value pairs to validate 
    against this instance's validations.  Pass `values` to validate arbitrary
    data instead of instance data.
    @return {String[]/undefined} if valid, returns `undefined` as expected by
    the underlaying [Backbone JS model class](http://backbonejs.org/#Model).
    If invalid, returns the {@link #errors errors array}.
     */
    validate: function(values) {
      this._validator.data = _.extend({}, values || this.attributes);
      this._validator.validations = this.validations.slice();
      if (this._validator.validate()) {
        return void 0;
      } else {
        return this._validator.errors();
      }
    },

    /**
    Recurses into nested models and calls toJSON.
    @method toJSON
    @return {Object} JSON representation of this model instance
     */
    toJSON: function() {
      var json, key, value;
      json = AP.model.Model._super.toJSON.apply(this, arguments);
      for (key in json) {
        value = json[key];
        if (_.isFunction(value != null ? value.toJSON : void 0)) {
          json[key] = value.toJSON();
        }
      }
      return json;
    }
    
   });
   
   return model;
   
 })(AP.utility.createClass, Backbone);
 