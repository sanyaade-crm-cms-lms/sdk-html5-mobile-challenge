/**
CorporatePaymentsAccount model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class CorporatePaymentsAccount
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.CorporatePaymentsAccount = (function($class, _Model, Backbone) {

  var CorporatePaymentsAccount = $class({

    extends: _Model,

    _constructor: function CorporatePaymentsAccount() {
      CitiMobileChallengeSdk.models.CorporatePaymentsAccount._super.constructor.apply(this, arguments);
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
      name: "CorporatePaymentsAccount"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "CorporatePaymentsAccount",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v5/corporate_payments_accounts",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "account_name": null,
      
      "base_currency_balances": null,
      
      "branch_name": null,
      
      "country_iso_code": null,
      
      "local_currency_iso_code": null,
      
      "name": null,
      
      "status": null,
      
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
      name: "account_name",
      label: "account_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "base_currency_balances",
      label: "base_currency_balances",
      
      
      type: "hash",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "branch_name",
      label: "branch_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "country_iso_code",
      label: "country_iso_code",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "local_currency_iso_code",
      label: "local_currency_iso_code",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "name",
      label: "name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "status",
      label: "status",
      
      
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
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "base_currency_balances",
              field_definition: {
                name: "base_currency_balances"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "local_currency_iso_code",
              field_definition: {
                name: "local_currency_iso_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "country_iso_code",
              field_definition: {
                name: "country_iso_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "account_name",
              field_definition: {
                name: "account_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "branch_name",
              field_definition: {
                name: "branch_name"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_name",
              field_definition: {
                name: "account_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "base_currency_balances",
              field_definition: {
                name: "base_currency_balances"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "local_currency_iso_code",
              field_definition: {
                name: "local_currency_iso_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "country_iso_code",
              field_definition: {
                name: "country_iso_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "branch_name",
              field_definition: {
                name: "branch_name"
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
        path_selector : "$.*",
        incremental_path : "/accounts",
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
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "base_currency_balances",
              field_definition: {
                name: "base_currency_balances"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "local_currency_iso_code",
              field_definition: {
                name: "local_currency_iso_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "country_iso_code",
              field_definition: {
                name: "country_iso_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "account_name",
              field_definition: {
                name: "account_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "branch_name",
              field_definition: {
                name: "branch_name"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_name",
              field_definition: {
                name: "account_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "base_currency_balances",
              field_definition: {
                name: "base_currency_balances"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "local_currency_iso_code",
              field_definition: {
                name: "local_currency_iso_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "country_iso_code",
              field_definition: {
                name: "country_iso_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "branch_name",
              field_definition: {
                name: "branch_name"
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
        path_selector : "$.*",
        incremental_path : "/accounts/{{params.id}}",
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
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_name",
              field_definition: {
                name: "account_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "base_currency_balances",
              field_definition: {
                name: "base_currency_balances"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "local_currency_iso_code",
              field_definition: {
                name: "local_currency_iso_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "country_iso_code",
              field_definition: {
                name: "country_iso_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "branch_name",
              field_definition: {
                name: "branch_name"
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
        path_selector : "$.*",
        incremental_path : "/accounts/{{params.id}}",
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
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "base_currency_balances",
              field_definition: {
                name: "base_currency_balances"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "local_currency_iso_code",
              field_definition: {
                name: "local_currency_iso_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "country_iso_code",
              field_definition: {
                name: "country_iso_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "account_name",
              field_definition: {
                name: "account_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "branch_name",
              field_definition: {
                name: "branch_name"
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
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_name",
              field_definition: {
                name: "account_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "base_currency_balances",
              field_definition: {
                name: "base_currency_balances"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "local_currency_iso_code",
              field_definition: {
                name: "local_currency_iso_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "country_iso_code",
              field_definition: {
                name: "country_iso_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "branch_name",
              field_definition: {
                name: "branch_name"
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
  _.extend(CorporatePaymentsAccount, Backbone.Events);

  return CorporatePaymentsAccount;

})(AP.utility.createClass, AP.model.Model, Backbone);
