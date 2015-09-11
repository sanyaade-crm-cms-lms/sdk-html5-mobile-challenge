/**
Similar to `AP.collection.Collection` except that query data are
optionally mapped to alternative parameter names.  Specify query fields when
request parameters have different names than model fields.

For example:
@example
    var PeopleScope = AP.utility.createClass({
        extends: AP.collection.ScopeCollection,
        static: {
          collectionId: "people_scope"
        },
        _constructor: function PeopleScope() {
          PeopleScope._super.constructor.apply(this, arguments);
        },
        model: Person,
        apiEndpoint: "/person/",
        extraParams: {
          scope: "scoped"
        },
        queryFields: [
          {fieldName: "name", paramName: "person_name"}
        ]
    });

@module AP
@submodule collection
@class ScopeCollection
@extends AP.collection.Collection
 */
AP.collection.ScopeCollection = (function($class, _Collection) {
  
  var scopeCollection = $class({
    extends: _Collection,
    
    _constructor: function ScopeCollection() {
        AP.collection.ScopeCollection._super.constructor.apply(this, arguments);
    },
    
    /**
    Copies `data` to new object and replaces keys which match any `queryFields`
    mapping configurations with the alternative parameter name.  For example,
    with `queryFields` `[{fieldName: 'name', paramName: 'person_name'}] and
    input object `{name: 'John', age: 35}`, output object
    is `{person_name: 'John', age: 35}`.
    @method mapQueryFieldKeys
    @param {Object} data name/value pairs to map
    @return {Object} a new object with mapped keys
     */
    mapQueryFieldKeys: function(data) {
      'Maps key names in data to equivalent param names in @queryFields if\nany match.  On match, original key names are not retained.  Returns a new\nobject leaving original intact.';
      var key, mapped, mappedKey, paramName, value;
      mapped = {};
      for (key in data) {
        value = data[key];
        paramName = (_.find(this.queryFields, function(field) {
          return field.fieldName === key;
        }) || {}).paramName;
        mappedKey = paramName || key;
        if (value) {
          mapped[mappedKey] = value;
        }
      }
      return mapped;
    },
    
    /**
    Fetches objects from the collection instance's URL.  All arguments are passed-
    through to {@link AP.collection.Collection#fetch}, except for `options.query`
    which is transformed first by {@link #mapQueryFieldKeys}.
    @method fetch
    @param {Object} options optional request data
    @param {Object} options.query optional query parameters are passed through
    request URL after being transformed by {@link #mapQuerParams}
    @param args... optional additional arguments passed-through
    to {@link AP.collection.Collection#fetch}
     */
    fetch: function() {
      var args, options, query;
      options = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (options == null) {
        options = {};
      }
      if (options != null ? options.query : void 0) {
        query = this.mapQueryFieldKeys(options.query);
      }
      if (query) {
        options.query = query;
      }
      return AP.collection.Collection.prototype.fetch.apply(this, [options].concat(args));
    }
    
  });
  
  return scopeCollection;
  
})(AP.utility.createClass, AP.collection.Collection);
