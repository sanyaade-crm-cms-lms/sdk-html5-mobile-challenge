/**
A has-many relationship is one where the owner model instance is related to
any number of related instances.  In this scheme, the relationship
information is stored in a foreign key on the related instance(s).  The related
instances are stored in the {@link #collection} on a generated field
{@link #name} once fetched.

Relationships should not be instantiated directly.  Please see
{@link AP.model.Model#relationshipDefinitions} for more information on
declaring relationships.

@module AP
@submodule relationship
@class HasMany
@extends AP.relationship.Relationship
 */
AP.relationship.HasMany = (function($class, _Relationship) {
  
  var hasMany = $class({
    extends: _Relationship,
    
    _constructor: function HasMany() {
      AP.relationship.HasMany._super.constructor.apply(this, arguments);
    },
    
    initialize: function() {
      AP.relationship.HasMany._super.initialize.apply(this, arguments);
      this.listenTo(this.collection, "reset", this.onCollectionReset);
      return this.listenTo(this.collection, "change:" + this.foreignKey, this.onRelatedInstanceForeignKeyChange);
    },

    /**
    Sets the {@link #foreignKey} of the related instance to the ID of the owner
    instance when added to the collection.  Triggers a change event on the
    generated relationship field {@link #name}.
    @method onCollectionAdd
    @param {Object} record the added model instance
     */
    onCollectionAdd: function(record) {
      record.set(this.foreignKey, this.owner.get(this.owner.idAttribute));
      return this.owner.trigger("change:" + this.name);
    },

    /**
    Unset the {@link #foreignKey} of the related instance when removed from
    the collection.  Triggers a change event on the generated relationship
    field {@link #name}.
    @method onCollectionRemove
    @param {Object} record the removed model instance
     */
    onCollectionRemove: function(record) {
      if (record.get(this.foreignKey) === this.owner.get(this.owner.idAttribute)) {
        record.set(this.foreignKey, null);
      }
      return this.owner.trigger("change:" + this.name);
    },

    /**
    Triggers a change event on the generated relationship field {@link #name} when
    the collection is reset.  See {@link #filterCollection}.
    @method onCollectionReset
     */
    onCollectionReset: function() {
      return this.owner.trigger("change:" + this.name);
    },

    /**
    Calls {@link #filterCollection} whenever the foreign key field of a related
    instance is changed.
    @method onRelatedInstanceForeignKeyChange
     */
    onRelatedInstanceForeignKeyChange: function() {
      return this.filterCollection();
    },

    /**
    Removes any stale related instances from the collection.  Stale instances are
    instances with foreign keys that no longer refer to the owner instance.
    See {@link #onCollectionReset}.
    @method filterCollection
     */
    filterCollection: function() {
      var filtered, whereClause;
      whereClause = {};
      whereClause[this.foreignKey] = this.owner.get(this.owner.idAttribute);
      filtered = this.collection.where(whereClause);
      return this.collection.reset(filtered, {
        reset: true
      });
    },

    /**
    Returns the default value of the generated field {@link #name}.  For many-to-
    many relationships, the value is always the {@link #collection} instance.
    @method getDefault
    @return {AP.collection.Collection} the collection instance declared
    by {@link #collection}.
     */
    getDefault: function() {
      return this.collection;
    },

    /**
    Returns a query used to obtain the related instances from the server.
    @method getQuery
    @return {Object} parameters used to query server for the related instances
     */
    getQuery: function() {
      var query;
      query = AP.relationship.HasMany._super.getQuery.apply(this, arguments);
      query[this.foreignKey] = this.owner.get(this.owner.idAttribute);
      return query;
    },

    /**
    Querys the server for related instances.
    @method fetch
    @param {Function} callback function executed upon query success; called with
    one argument:  the collection of related instances
     */
    fetch: function(callback) {
      return this.collection.query(this.getQuery(), {
        reset: true,
        success: (function(_this) {
          return function() {
            if (_.isFunction(callback)) {
              return callback(_this.owner, _this.collection);
            }
          };
        })(this)
      });
    },
    
  });
  
  return hasMany;
  
})(AP.utility.createClass, AP.relationship.Relationship);
