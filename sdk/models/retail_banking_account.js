/**
RetailBankingAccount model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class RetailBankingAccount
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.RetailBankingAccount = (function($class, _Model, Backbone) {

  var RetailBankingAccount = $class({

    extends: _Model,

    _constructor: function RetailBankingAccount() {
      CitiMobileChallengeSdk.models.RetailBankingAccount._super.constructor.apply(this, arguments);
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
      name: "RetailBankingAccount"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "RetailBankingAccount",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v5/retail_banking_accounts",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "account_status": null,
      
      "balances": null,
      
      "category_code": null,
      
      "cops_indicator": null,
      
      "details_exist": null,
      
      "display_acct_no": null,
      
      "is_destination_account": null,
      
      "is_source_account": null,
      
      "msgs": null,
      
      "offers_indicator": null,
      
      "product_currency": null,
      
      "product_description": null,
      
      "product_type": null,
      
      "txn_exist": null,
      
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
      name: "account_status",
      label: "account_status",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "balances",
      label: "balances",
      
      
      type: "hash",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "category_code",
      label: "category_code",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "cops_indicator",
      label: "cops_indicator",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "details_exist",
      label: "details_exist",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "display_acct_no",
      label: "display_acct_no",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "is_destination_account",
      label: "is_destination_account",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "is_source_account",
      label: "is_source_account",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "msgs",
      label: "msgs",
      
      
      type: "hash",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "offers_indicator",
      label: "offers_indicator",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "product_currency",
      label: "product_currency",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "product_description",
      label: "product_description",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "product_type",
      label: "product_type",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "txn_exist",
      label: "txn_exist",
      
      
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
              remote_field_name: "txn_exist",
              field_definition: {
                name: "txn_exist"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "msgs",
              field_definition: {
                name: "msgs"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "balances",
              field_definition: {
                name: "balances"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "offers_indicator",
              field_definition: {
                name: "offers_indicator"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "display_acct_no",
              field_definition: {
                name: "display_acct_no"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "details_exist",
              field_definition: {
                name: "details_exist"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "category_code",
              field_definition: {
                name: "category_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_destination_account",
              field_definition: {
                name: "is_destination_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_source_account",
              field_definition: {
                name: "is_source_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_currency",
              field_definition: {
                name: "product_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "cops_indicator",
              field_definition: {
                name: "cops_indicator"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_description",
              field_definition: {
                name: "product_description"
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
              remote_field_name: "txn_exist",
              field_definition: {
                name: "txn_exist"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "msgs",
              field_definition: {
                name: "msgs"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "balances",
              field_definition: {
                name: "balances"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "offers_indicator",
              field_definition: {
                name: "offers_indicator"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "display_acct_no",
              field_definition: {
                name: "display_acct_no"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "details_exist",
              field_definition: {
                name: "details_exist"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "category_code",
              field_definition: {
                name: "category_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_destination_account",
              field_definition: {
                name: "is_destination_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_source_account",
              field_definition: {
                name: "is_source_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_currency",
              field_definition: {
                name: "product_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "cops_indicator",
              field_definition: {
                name: "cops_indicator"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_description",
              field_definition: {
                name: "product_description"
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
              remote_field_name: "txn_exist",
              field_definition: {
                name: "txn_exist"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "msgs",
              field_definition: {
                name: "msgs"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "balances",
              field_definition: {
                name: "balances"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "offers_indicator",
              field_definition: {
                name: "offers_indicator"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "display_acct_no",
              field_definition: {
                name: "display_acct_no"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "details_exist",
              field_definition: {
                name: "details_exist"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "category_code",
              field_definition: {
                name: "category_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_destination_account",
              field_definition: {
                name: "is_destination_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_source_account",
              field_definition: {
                name: "is_source_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_currency",
              field_definition: {
                name: "product_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "cops_indicator",
              field_definition: {
                name: "cops_indicator"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_description",
              field_definition: {
                name: "product_description"
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
              remote_field_name: "txn_exist",
              field_definition: {
                name: "txn_exist"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "msgs",
              field_definition: {
                name: "msgs"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "balances",
              field_definition: {
                name: "balances"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "offers_indicator",
              field_definition: {
                name: "offers_indicator"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "display_acct_no",
              field_definition: {
                name: "display_acct_no"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "details_exist",
              field_definition: {
                name: "details_exist"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "category_code",
              field_definition: {
                name: "category_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_destination_account",
              field_definition: {
                name: "is_destination_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_source_account",
              field_definition: {
                name: "is_source_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_currency",
              field_definition: {
                name: "product_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "cops_indicator",
              field_definition: {
                name: "cops_indicator"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_description",
              field_definition: {
                name: "product_description"
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
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "txn_exist",
              field_definition: {
                name: "txn_exist"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "msgs",
              field_definition: {
                name: "msgs"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "balances",
              field_definition: {
                name: "balances"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "offers_indicator",
              field_definition: {
                name: "offers_indicator"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "display_acct_no",
              field_definition: {
                name: "display_acct_no"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "details_exist",
              field_definition: {
                name: "details_exist"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "category_code",
              field_definition: {
                name: "category_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_destination_account",
              field_definition: {
                name: "is_destination_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_source_account",
              field_definition: {
                name: "is_source_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_currency",
              field_definition: {
                name: "product_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "cops_indicator",
              field_definition: {
                name: "cops_indicator"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_description",
              field_definition: {
                name: "product_description"
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
              remote_field_name: "txn_exist",
              field_definition: {
                name: "txn_exist"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "msgs",
              field_definition: {
                name: "msgs"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "balances",
              field_definition: {
                name: "balances"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "offers_indicator",
              field_definition: {
                name: "offers_indicator"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "display_acct_no",
              field_definition: {
                name: "display_acct_no"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "details_exist",
              field_definition: {
                name: "details_exist"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "category_code",
              field_definition: {
                name: "category_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_destination_account",
              field_definition: {
                name: "is_destination_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_source_account",
              field_definition: {
                name: "is_source_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_currency",
              field_definition: {
                name: "product_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "cops_indicator",
              field_definition: {
                name: "cops_indicator"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_description",
              field_definition: {
                name: "product_description"
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
              remote_field_name: "txn_exist",
              field_definition: {
                name: "txn_exist"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "msgs",
              field_definition: {
                name: "msgs"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "balances",
              field_definition: {
                name: "balances"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "offers_indicator",
              field_definition: {
                name: "offers_indicator"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "display_acct_no",
              field_definition: {
                name: "display_acct_no"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "details_exist",
              field_definition: {
                name: "details_exist"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "category_code",
              field_definition: {
                name: "category_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_destination_account",
              field_definition: {
                name: "is_destination_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_source_account",
              field_definition: {
                name: "is_source_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_currency",
              field_definition: {
                name: "product_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "cops_indicator",
              field_definition: {
                name: "cops_indicator"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_description",
              field_definition: {
                name: "product_description"
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
  _.extend(RetailBankingAccount, Backbone.Events);

  return RetailBankingAccount;

})(AP.utility.createClass, AP.model.Model, Backbone);
