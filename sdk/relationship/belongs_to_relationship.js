/**
A belongs-to relationship is one where the owner model instance is related to
no more than one other model instance.  In this scheme, the relationship
information is stored in a foreign key on the owner model.  The related instance
is stored in a generated field {@link #name} once fetched.

For example, if the foreign key is `user_id` and the relationship name is `user`
then the related instance may be obtained by calling:
@example
    ownerInstance.get('user')
    // set related instance
    ownerInstance.set('user', userInstance)
    // or set foreign key
    ownerInstance.set('user_id', 4)
    // setting the foreign key directly will null the related instance:
    ownerInstance.get('user') == null // evaluates to true

A has-one relationship is similar, except the relationship information is stored
in a foreign key on the target model, not the owner.  See
{@link AP.relationship.HasOne} for more information about has-one relationships.

Relationships should not be instantiated directly.  Please see
{@link AP.model.Model#relationshipDefinitions} for more information on
declaring relationships.

@module AP
@submodule relationship
@class BelongsTo
@extends AP.relationship.Relationship
 */
AP.relationship.BelongsTo = (function($class, _Relationship) {
  
  var belongsTo = $class({
    extends: _Relationship,
    
    _constructor: function BelongsTo() {
      AP.relationship.BelongsTo._super.constructor.apply(this, arguments);
    },
    
    initialize: function() {
      AP.relationship.BelongsTo._super.initialize.apply(this, arguments);
      this.listenTo(this.owner, "change:" + this.foreignKey, this.onForeignKeyChange);
      return this.listenTo(this.owner, "change:" + this.name, this.onFieldForRelatedInstanceChange);
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
    Called whenever the owner instance's {@link #foreignKey} field is changed.
    If the foreign key is different than the related instance in the generated
    {@link #name} field, the {@link #name} field is set to null.  To obtain the
    related instance, the relationship must be fetched again.
    @method onForeignKeyChange
     */
    onForeignKeyChange: function() {
      var ref;
      if (this.owner.get(this.foreignKey) !== ((ref = this.owner.get(this.name)) != null ? ref.get(this.model.prototype.idAttribute) : void 0)) {
        return this.owner.set(this.name, null);
      }
    },

    /**
    Called whenever the owner instance's {@link #name} field is changed.  If the
    ID of the related instance is different than the value of {@link #foreignKey},
    the foreign key field is updated with the related instance's ID.
    @method onFieldForRelatedInstanceChange
     */
    onFieldForRelatedInstanceChange: function() {
      var ref, relatedId;
      relatedId = (ref = this.owner.get(this.name)) != null ? ref.get(this.model.prototype.idAttribute) : void 0;
      if (relatedId && (this.owner.get(this.foreignKey) !== relatedId)) {
        return this.owner.set(this.foreignKey, relatedId);
      }
    },

    /**
    Returns a query used to obtain the related instance from the server.
    @method getQuery
    @return {Object} parameters used to query server for the related instance
     */
    getQuery: function() {
      var query;
      query = AP.relationship.BelongsTo._super.getQuery.apply(this, arguments);
      query[this.model.prototype.idAttribute] = this.owner.get(this.foreignKey);
      return query;
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
    },
    
  });
  
  return belongsTo;
  
})(AP.utility.createClass, AP.relationship.Relationship);
