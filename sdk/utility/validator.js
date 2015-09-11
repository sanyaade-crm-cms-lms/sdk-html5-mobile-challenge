/**
Provides an extensible facility for validating arbitrary data.  While validator
is used primarily by {@link AP.model.Model}, it may be used to
validate any data object.

Subclass validator to implement additional validation types.  Built-in
validation types include:

- `required`:  field must have a non-null value
- `type`:  field type is consistent with the type specified in `is`

Example usage:
@example
    validator = new AP.utility.Validator();
    validator.data = {
      name: 'John Doe',
      age: 46
    };
    validator.validations = [{
      field: 'name',
      validate: 'required'
    }, {
      field: 'age',
      validate: 'type',
      is: 'integer'
    }];

    validator.validate();
    // true
    validator.data.age = null;
    validator.validate();
    // true
    // age is not required:  although "null" is not an integer, it is valid
    // because the type validator ignores null values.
    
    validator.data.name = '';
    validator.validate();
    // false

@module AP
@submodule utility
@class Validator
 */
AP.utility.Validator = (function($class) {
  
  var validator = $class({
    
    _constructor: function Validator(data, validations) {
      this.data = data;
      this.validations = validations;
      this._errors = [];
      this.data = _.clone(this.data);
      this.validations = _.clone(this.validations);
    },
    
    /**
    Internal errors array.  If the errors array contains any errors then the
    validator is considered to be in an invalid state.
    @private
    @property _errors
    @type Object[]
     */
    _errors: [],

    /**
    Internal hash of error messages.  Each key is an error type where its value
    is an error message string.
    @private
    @property _errorMessages
    @type Object
     */
    _errorMessages: {
      required: 'this field is required',
      numericality: 'this field must resemble a number',
      booleanType: 'this field must be a boolean',
      stringType: 'this field must be a string',
      numberType: 'this field must be a number',
      integer: 'this field must be an integer',
      float: 'this field must be a float',
      missingType: 'this field cannot be validated as type {0}'
    },

    /**
    The data object to validate.
    @property data
    @type Object
     */
    data: {},

    /**
    A list of validations to apply.  Validations is an array of validation
    configuration objects.  Validation configuration objects must contain at least
    the following members:
    
    - `field`:  a key in the {@link #data} object
    - `validate`:  a string reprenting the validation type
    
    Certain validations may require additional information.  For example, the
    `type` validation requires an `is` member, the data type.
    
    For example:
    @example
        [
          field: 'name'
          validate: 'required'
        ,
          field: 'amount'
          validate: 'numericality'
        ,
          field: 'age'
          validate: 'type'
          is: 'integer'
        ]
    
    @property validations
    @type Object[]
     */
    validations: [],

    /**
    Returns true if the validator has no errors.  **Note**:  {@link #validate}
    should be executed before calling `isValid`.  Always returns `true` if
    executed before `validate`.
    @method isValid
    @return {Boolean} `true` if there
     */
    isValid: function() {
      return !this.errors().length;
    },

    /**
    Applies the validations specified in {@link #validations} to {@link #data},
    clearing any existing errors first.
    @method validate
    @return {Boolean} the return value of {@link #isValid}.
     */
    validate: function() {
      var j, len, ref, validation;
      this._errors = [];
      ref = this.validations;
      for (j = 0, len = ref.length; j < len; j++) {
        validation = ref[j];
        if (this[validation.validate]) {
          this[validation.validate](this.data[validation.field], validation);
        }
      }
      return this.isValid();
    },

    /**
    Adds an error of `type` for field `fieldName` to the validator where `type` is
    a key in the internal {@link #_errorMessages error messages hash}.  Additional
    data may be passed as an array via `extra` which is interpolated into the
    error message.
    @method addError
    @param {String} fieldName the field to which the error applies
    @param {String} type the error type, corresponding to a key in the internal
    error messages hash.
    @param {String[]} [extra] optional array of strings to be interpolated into
    the error message
     */
    addError: function(fieldName, type, extra) {
      var i, j, len, message, value;
      message = this._errorMessages[type] || 'is invalid';
      if (extra) {
        for (i = j = 0, len = extra.length; j < len; i = ++j) {
          value = extra[i];
          message = message.replace("{" + i + "}", value);
        }
      }
      return this._errors.push({
        field: fieldName,
        message: message
      });
    },

    /**
    Returns the internal errors array.
    @method errors
    @return {String[]} the internal errors array.
     */
    errors: function() {
      return this._errors;
    },

    /**
    Validates that the value is non-null.  If null or undefined, adds an error.
    @method required
    @param value the value to validate
    @param {Object} options a validation configuration object, for example:
        {field: 'title', validate: 'required'}
     */
    required: function(value, options) {
      if (value === null || value === void 0) {
        return this.addError(options.field, 'required');
      }
    },

    /**
    Validates that the value looks like a number.  The value is allowed to be
    either a strict string or number type, as long as it looks like a number.
    @method numericality
    @param value the value to valiate as numerical
    @param {Object} options a validation configuration object, for example:
        {field: 'amount', validate: 'numericality'}
     */
    numericality: function(value, options) {
      if ((value != null) && !value.toString().match(/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/)) {
        return this.addError(options.field, 'numericality');
      }
    },

    /**
    Validates that the value is of a specified type.  Adds an error if the value
    is not of the specified type.
    @method type
    @param value the value to validate
    @param {Object} options a validation configuration object with an extra `is`
    member to specify type, for example:
        {field: 'title', validate: 'type', is: 'string'}
     */
    type: function(value, options) {
      var type;
      type = options.is.toLowerCase();
      if (this[type + "Type"]) {
        return this[type + "Type"](value, options);
      } else {
        return this.addError(options.field, 'missingType', [type]);
      }
    },

    /**
    Validates that `value` is a boolean.  Adds an error if `value` is present but
    not of type boolean.
    @method booleanType
    @param value the value to validate
    @param {Object} options a validation configuration object with an extra `is`
    member to specify type, for example:
        {field: 'title', validate: 'type', is: 'boolean'}
     */
    booleanType: function(value, options) {
      if (((typeof value) !== 'boolean') && (value !== null && value !== void 0)) {
        return this.addError(options.field, 'booleanType');
      }
    },

    /**
    Validates that `value` is a string.  Adds an error if `value` is present but
    not of type string.
    @method stringType
    @param value the value to validate
    @param {Object} options a validation configuration object with an extra `is`
    member to specify type, for example:
        {field: 'title', validate: 'type', is: 'string'}
     */
    stringType: function(value, options) {
      if (((typeof value) !== 'string') && (value !== null && value !== void 0)) {
        return this.addError(options.field, 'stringType');
      }
    },

    /**
    Validates that `value` is a number.  Adds an error if `value` is present but
    not of type number.
    @method numberType
    @param value the value to validate
    @param {Object} options a validation configuration object with an extra `is`
    member to specify type, for example:
        {field: 'title', validate: 'type', is: 'number'}
     */
    numberType: function(value, options) {
      if (((typeof value) !== 'number') && (value !== null && value !== void 0)) {
        return this.addError(options.field, 'numberType');
      }
    },

    /**
    Validates that `value` is a number.  Adds an error if `value` is present but
    not of type number.
    @method floatType
    @param value the value to validate
    @param {Object} options a validation configuration object with an extra `is`
    member to specify type, for example:
        {field: 'title', validate: 'type', is: 'float'}
     */
    floatType: function(value, options) {
      if (((typeof value) !== 'number') && (value !== null && value !== void 0)) {
        return this.addError(options.field, 'floatType');
      }
    },

    /**
    Validates that `value` is a whole number.  Adds an error if `value` is present
    but not of a whole number.
    @method integerType
    @param value the value to validate
    @param {Object} options a validation configuration object with an extra `is`
    member to specify type, for example:
        {field: 'title', validate: 'type', is: 'integer'}
     */
    integerType: function(value, options) {
      if (value !== null && value !== void 0) {
        if (!(((typeof value) === 'number') && (value.toString().indexOf('.') === -1))) {
          return this.addError(options.field, 'integerType');
        }
      }
    },

    /**
    **UNIMPLEMENTED***
    Validates that `value` is a data.
    @method dateType
    @beta
    @param value the value to validate
    @param {Object} options a validation configuration object with an extra `is`
    member to specify type, for example:
        {field: 'title', validate: 'type', is: 'date'}
     */
    dateType: function(value, options) {},

    /**
    **UNIMPLEMENTED***
    Validates that `value` is a time.
    @method timeType
    @beta
    @param value the value to validate
    @param {Object} options a validation configuration object with an extra `is`
    member to specify type, for example:
        {field: 'title', validate: 'type', is: 'time'}
     */
    timeType: function(value, options) {}
    
  });
  
  return validator;
  
})(AP.utility.createClass);
