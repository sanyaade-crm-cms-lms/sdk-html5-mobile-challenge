/**
CorporatePaymentsCrossBorderFxQuote model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class CorporatePaymentsCrossBorderFxQuote
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxQuote = (function($class, _Model, Backbone) {

  var CorporatePaymentsCrossBorderFxQuote = $class({

    extends: _Model,

    _constructor: function CorporatePaymentsCrossBorderFxQuote() {
      CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxQuote._super.constructor.apply(this, arguments);
    },

    static: {
      /**
      The model ID may be used to look-up a model from an application class.
      @property modelId
      @type String
      @static
       */
      modelId: "",

      /**
      The model name may be used to look-up a model from an application class.
      @property name
      @type String
       */
      name: "CorporatePaymentsCrossBorderFxQuote"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "CorporatePaymentsCrossBorderFxQuote",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v5/corporate_payments_cross_border_fx_quotes",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "requested_on": null,
      
      "from_amount": null,
      
      "from_currency": null,
      
      "rate_expiry": null,
      
      "rate_reference": null,
      
      "requested_by": null,
      
      "to_amount": null,
      
      "to_currency": null,
      
      "value_date": null,
      
    },

    /**
    Array of field definition configurations.  Field definitions describe fields
    available on this model.
    @property fieldDefinitions
    @type Array
     */
    fieldDefinitions: [
    
      {
      // TODO where is the field ID?
      //id: 
      name: "requested_on",
      label: "requested_on",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "from_amount",
      label: "from_amount",
      
      
      type: "float",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "from_currency",
      label: "from_currency",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "rate_expiry",
      label: "rate_expiry",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "rate_reference",
      label: "rate_reference",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "requested_by",
      label: "requested_by",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "to_amount",
      label: "to_amount",
      
      
      type: "float",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "to_currency",
      label: "to_currency",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "value_date",
      label: "value_date",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
    ],

    /**
    Array of field names.  Auto keys, generally such as `id`, have their values
    filled automatically by the server.  Non-auto keys are all other fields.
    @property nonAutoKeyFields
    @type Array
     */
    nonAutoKeyFields: [
      
    ],

    /**
    Array of relationship definitions.
    @property relationshipDefinitions
    @type Array
     */
    relationshipDefinitions: [
      
      
      
    ],

    /**
    Array of validation configurations.  See `AP.model.Model` for more information
    about validations.
    @property validations
    @type Array
     */
    validations: [
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    ],

    /**
    Name of the interface to use. Can be an HttpAdapter or the default connection
    to an Anypresence API.
    @property storage_interface
    @type String
    */
    storage_interface: "CorporatePayments",

    /**
    Adapter configurations for create, update, read and delete actions on a model.
    Only required for models whose adapter interface is an HttpAdapter.
    @property adapter_configuration
    @type Object
    */
    adapter_configuration: {

      
      create: {
        request_field_level_mappings: [
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "from_currency",
              field_definition: {
                name: "from_currency"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "requested_by",
              field_definition: {
                name: "requested_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "value_date",
              field_definition: {
                name: "value_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate_expiry",
              field_definition: {
                name: "rate_expiry"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "to_amount",
              field_definition: {
                name: "to_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "requested_on",
              field_definition: {
                name: "requested_on"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
        ],
        http_verb: "POST",
        path_selector : "$",
        incremental_path : "/crossborder/fx_quotes",
        body_format : "json",
        object_name_mapping : "",
        body_payload_template : "",
        action : "create",
        incremental_headers: [
          
        ],
        incremental_url_parameters: [
          
        ]
      },
      

      
      update: {
        request_field_level_mappings: [
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "from_currency",
              field_definition: {
                name: "from_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "requested_by",
              field_definition: {
                name: "requested_by"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "value_date",
              field_definition: {
                name: "value_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "rate_expiry",
              field_definition: {
                name: "rate_expiry"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "to_amount",
              field_definition: {
                name: "to_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "requested_on",
              field_definition: {
                name: "requested_on"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "from_currency",
              field_definition: {
                name: "from_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "requested_by",
              field_definition: {
                name: "requested_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "value_date",
              field_definition: {
                name: "value_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate_expiry",
              field_definition: {
                name: "rate_expiry"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "to_amount",
              field_definition: {
                name: "to_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "requested_on",
              field_definition: {
                name: "requested_on"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
        ],
        http_verb: "PUT",
        path_selector : "$",
        incremental_path : "",
        body_format : "json",
        object_name_mapping : "",
        body_payload_template : "",
        action : "update",
        incremental_headers: [
          
        ],
        incremental_url_parameters: [
          
        ]
      },
      

      
      read: {
        request_field_level_mappings: [
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "from_currency",
              field_definition: {
                name: "from_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "requested_by",
              field_definition: {
                name: "requested_by"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "value_date",
              field_definition: {
                name: "value_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "rate_expiry",
              field_definition: {
                name: "rate_expiry"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "to_amount",
              field_definition: {
                name: "to_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "requested_on",
              field_definition: {
                name: "requested_on"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "from_currency",
              field_definition: {
                name: "from_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "requested_by",
              field_definition: {
                name: "requested_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "value_date",
              field_definition: {
                name: "value_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate_expiry",
              field_definition: {
                name: "rate_expiry"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "to_amount",
              field_definition: {
                name: "to_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "requested_on",
              field_definition: {
                name: "requested_on"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
        ],
        http_verb: "GET",
        path_selector : "$",
        incremental_path : "",
        body_format : "json",
        object_name_mapping : "",
        body_payload_template : "",
        action : "read",
        incremental_headers: [
          
        ],
        incremental_url_parameters: [
          
        ]
      },
      

      
      delete: {
        request_field_level_mappings: [
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "from_currency",
              field_definition: {
                name: "from_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "requested_by",
              field_definition: {
                name: "requested_by"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "value_date",
              field_definition: {
                name: "value_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "rate_expiry",
              field_definition: {
                name: "rate_expiry"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "to_amount",
              field_definition: {
                name: "to_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "requested_on",
              field_definition: {
                name: "requested_on"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "from_currency",
              field_definition: {
                name: "from_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "requested_by",
              field_definition: {
                name: "requested_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "value_date",
              field_definition: {
                name: "value_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate_expiry",
              field_definition: {
                name: "rate_expiry"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "to_amount",
              field_definition: {
                name: "to_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "requested_on",
              field_definition: {
                name: "requested_on"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
        ],
        http_verb: "DELETE",
        path_selector : "",
        incremental_path : "",
        body_format : "json",
        object_name_mapping : "",
        body_payload_template : "",
        action : "delete",
        incremental_headers: [
          
        ],
        incremental_url_parameters: [
          
        ]
      },
      
    }

  });

  // mixin Backbone events on the model class
  _.extend(CorporatePaymentsCrossBorderFxQuote, Backbone.Events);

  return CorporatePaymentsCrossBorderFxQuote;

})(AP.utility.createClass, AP.model.Model, Backbone);
