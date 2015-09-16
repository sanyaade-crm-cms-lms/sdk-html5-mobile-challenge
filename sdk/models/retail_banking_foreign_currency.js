/**
RetailBankingForeignCurrency model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class RetailBankingForeignCurrency
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.RetailBankingForeignCurrency = (function($class, _Model, Backbone) {

  var RetailBankingForeignCurrency = $class({

    extends: _Model,

    _constructor: function RetailBankingForeignCurrency() {
      CitiMobileChallengeSdk.models.RetailBankingForeignCurrency._super.constructor.apply(this, arguments);
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
      name: "RetailBankingForeignCurrency"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "RetailBankingForeignCurrency",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v5/retail_banking_foreign_currencies",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "from_currency": null,
      
      "rate": null,
      
      "to_currency": null,
      
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
      name: "id",
      label: "id",
      
      
      type: "string",
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
      name: "rate",
      label: "rate",
      
      
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
    storage_interface: "RetailBanking",

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
              remote_field_name: "rate",
              field_definition: {
                name: "rate"
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
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate",
              field_definition: {
                name: "rate"
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
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
        ],
        http_verb: "POST",
        path_selector : "$",
        incremental_path : "",
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
              remote_field_name: "rate",
              field_definition: {
                name: "rate"
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
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate",
              field_definition: {
                name: "rate"
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
              remote_field_name: "id",
              field_definition: {
                name: "id"
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
              remote_field_name: "rate",
              field_definition: {
                name: "rate"
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
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate",
              field_definition: {
                name: "rate"
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
              remote_field_name: "id",
              field_definition: {
                name: "id"
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
              remote_field_name: "rate",
              field_definition: {
                name: "rate"
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
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate",
              field_definition: {
                name: "rate"
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
              remote_field_name: "id",
              field_definition: {
                name: "id"
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
  _.extend(RetailBankingForeignCurrency, Backbone.Events);

  return RetailBankingForeignCurrency;

})(AP.utility.createClass, AP.model.Model, Backbone);
