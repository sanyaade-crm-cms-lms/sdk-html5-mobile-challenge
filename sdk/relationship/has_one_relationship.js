/**
A has-one relationship is simlar to a {@link AP.relationship.BelongsTo}
relationship except that the relationship information is stored in foreign key
fields on the related instances instead of on owner instances.

In implementation, a has-one relationship functions like has-many, except that
the value of the generated {@link #name} field is a related
{@link #model model instance} instead of a collection.

Relationships should not be instantiated directly.  Please see
{@link AP.model.Model#relationshipDefinitions} for more information on
declaring relationships.

@module AP
@submodule relationship
@class HasOne
@extends AP.relationship.HasMany
 */
AP.relationship.HasOne = (function($class, _HasMany) {
  
  var hasOne = $class({
    extends: _HasMany,
    
    _constructor: function HasOne() {
      AP.relationship.HasOne._super.constructor.apply(this, arguments);
    },
    
    initializeEvents: function() {
      this.listenTo(this.collection, "change:" + this.foreignKey, this.onForeignKeyChange);
      this.listenTo(this.owner, "change:" + this.name, this.onFieldForRelatedInstanceChange);
      return AP.relationship.HasOne._super.initializeEvents.apply(this, arguments);
    },

    /**
    Sets the {@link #name} generated field on the owner model to the first model
    instance in the collection after syncing.
    @method onCollectionSync
     */
    onCollectionSync: function() {
      return this.owner.set(this.name, this.collection.first());
    },

    /**
    Called whenever the related instance's {@link #foreignKey} field is changed.
    If the foreign key of the related instance referes to a different owner, then
    the {@link #name} field is set to null.  To obtain the related instance after
    the field is nulled, the relationship must be fetched again.
    @method onForeignKeyChange
     */
    onForeignKeyChange: function() {
      var related;
      related = this.owner.get(this.name);
      if (related && (related.get(this.foreignKey) !== this.owner.get(this.owner.idAttribute))) {
        return this.owner.set(this.name, null);
      }
    },

    /**
    Called whenever the owner instance's {@link #name} field is changed.  If the
    foreign key of the new related instance is different than the ID of the owner,
    the foreign key field of the related instance is set to the ID of the owner.
    @method onFieldForRelatedInstanceChange
     */
    onFieldForRelatedInstanceChange: function() {
      var ownerId, related;
      related = this.owner.get(this.name);
      ownerId = this.owner.get(this.owner.idAttribute);
      if (related && (related.get(this.foreignKey) !== ownerId)) {
        return related.set(this.foreignKey, ownerId);
      }
    },

    /**
    The default value for a has-one relationship is null like belongs-to.
    @method getDefault
    @return {Object} null
     */
    getDefault: function() {
      return null;
    },

    /**
    Querys the server for related instances.
    @method fetch
    @param {Function} callback function executed upon query success; called with
    one argument:  the related instance (if any)
     */
    fetch: function(callback) {
      return this.collection.query(this.getQuery(), {
        reset: true,
        success: (function(_this) {
          return function() {
            if (_.isFunction(callback)) {
              return callback(_this.owner, _this.collection.first());
            }
          };
        })(this)
      });
    }
    
    
  });
  
  return hasOne;
  
})(AP.utility.createClass, AP.relationship.HasMany);
