/**
RetailBankingAccountFundTransfer model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class RetailBankingAccountFundTransfer
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.RetailBankingAccountFundTransfer = (function($class, _Model, Backbone) {

  var RetailBankingAccountFundTransfer = $class({

    extends: _Model,

    _constructor: function RetailBankingAccountFundTransfer() {
      CitiMobileChallengeSdk.models.RetailBankingAccountFundTransfer._super.constructor.apply(this, arguments);
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
      name: "RetailBankingAccountFundTransfer"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "RetailBankingAccountFundTransfer",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v2/retail_banking_account_fund_transfers",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "amount": null,
      
      "currency": null,
      
      "destination_account_id": null,
      
      "destination_id": null,
      
      "memo": null,
      
      "payee_desc": null,
      
      "payee_id": null,
      
      "payee_type": null,
      
      "payment_type": null,
      
      "reference_number": null,
      
      "transaction_date": null,
      
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
      name: "amount",
      label: "amount",
      
      
      type: "float",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "currency",
      label: "currency",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "destination_account_id",
      label: "destination_account_id",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "destination_id",
      label: "destination_id",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "memo",
      label: "memo",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payee_desc",
      label: "payee_desc",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payee_id",
      label: "payee_id",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payee_type",
      label: "payee_type",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payment_type",
      label: "payment_type",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "reference_number",
      label: "reference_number",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "transaction_date",
      label: "transaction_date",
      
      
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
              remote_field_name: "transaction_date",
              field_definition: {
                name: "transaction_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_type",
              field_definition: {
                name: "payment_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_type",
              field_definition: {
                name: "payee_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_id",
              field_definition: {
                name: "payee_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_desc",
              field_definition: {
                name: "payee_desc"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "memo",
              field_definition: {
                name: "memo"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "destination_id",
              field_definition: {
                name: "destination_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "destination_account_id",
              field_definition: {
                name: "destination_account_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "currency",
              field_definition: {
                name: "currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "amount",
              field_definition: {
                name: "amount"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "reference_number",
              field_definition: {
                name: "reference_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_date",
              field_definition: {
                name: "transaction_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_type",
              field_definition: {
                name: "payment_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_type",
              field_definition: {
                name: "payee_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_id",
              field_definition: {
                name: "payee_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_desc",
              field_definition: {
                name: "payee_desc"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "memo",
              field_definition: {
                name: "memo"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "destination_id",
              field_definition: {
                name: "destination_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "destination_account_id",
              field_definition: {
                name: "destination_account_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "currency",
              field_definition: {
                name: "currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "amount",
              field_definition: {
                name: "amount"
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
        incremental_path : "/accounts/{{params.id}}/fund_transfers",
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
              remote_field_name: "reference_number",
              field_definition: {
                name: "reference_number"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_date",
              field_definition: {
                name: "transaction_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_type",
              field_definition: {
                name: "payment_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_type",
              field_definition: {
                name: "payee_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_id",
              field_definition: {
                name: "payee_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_desc",
              field_definition: {
                name: "payee_desc"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "memo",
              field_definition: {
                name: "memo"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "destination_id",
              field_definition: {
                name: "destination_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "destination_account_id",
              field_definition: {
                name: "destination_account_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "currency",
              field_definition: {
                name: "currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "amount",
              field_definition: {
                name: "amount"
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
              remote_field_name: "reference_number",
              field_definition: {
                name: "reference_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_date",
              field_definition: {
                name: "transaction_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_type",
              field_definition: {
                name: "payment_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_type",
              field_definition: {
                name: "payee_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_id",
              field_definition: {
                name: "payee_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_desc",
              field_definition: {
                name: "payee_desc"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "memo",
              field_definition: {
                name: "memo"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "destination_id",
              field_definition: {
                name: "destination_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "destination_account_id",
              field_definition: {
                name: "destination_account_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "currency",
              field_definition: {
                name: "currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "amount",
              field_definition: {
                name: "amount"
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
              remote_field_name: "reference_number",
              field_definition: {
                name: "reference_number"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_date",
              field_definition: {
                name: "transaction_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_type",
              field_definition: {
                name: "payment_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_type",
              field_definition: {
                name: "payee_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_id",
              field_definition: {
                name: "payee_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_desc",
              field_definition: {
                name: "payee_desc"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "memo",
              field_definition: {
                name: "memo"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "destination_id",
              field_definition: {
                name: "destination_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "destination_account_id",
              field_definition: {
                name: "destination_account_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "currency",
              field_definition: {
                name: "currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "amount",
              field_definition: {
                name: "amount"
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
              remote_field_name: "reference_number",
              field_definition: {
                name: "reference_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_date",
              field_definition: {
                name: "transaction_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_type",
              field_definition: {
                name: "payment_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_type",
              field_definition: {
                name: "payee_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_id",
              field_definition: {
                name: "payee_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_desc",
              field_definition: {
                name: "payee_desc"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "memo",
              field_definition: {
                name: "memo"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "destination_id",
              field_definition: {
                name: "destination_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "destination_account_id",
              field_definition: {
                name: "destination_account_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "currency",
              field_definition: {
                name: "currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "amount",
              field_definition: {
                name: "amount"
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
              remote_field_name: "reference_number",
              field_definition: {
                name: "reference_number"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_date",
              field_definition: {
                name: "transaction_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_type",
              field_definition: {
                name: "payment_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_type",
              field_definition: {
                name: "payee_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_id",
              field_definition: {
                name: "payee_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_desc",
              field_definition: {
                name: "payee_desc"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "memo",
              field_definition: {
                name: "memo"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "destination_id",
              field_definition: {
                name: "destination_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "destination_account_id",
              field_definition: {
                name: "destination_account_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "currency",
              field_definition: {
                name: "currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "amount",
              field_definition: {
                name: "amount"
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
              remote_field_name: "reference_number",
              field_definition: {
                name: "reference_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_date",
              field_definition: {
                name: "transaction_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_type",
              field_definition: {
                name: "payment_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_type",
              field_definition: {
                name: "payee_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_id",
              field_definition: {
                name: "payee_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_desc",
              field_definition: {
                name: "payee_desc"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "memo",
              field_definition: {
                name: "memo"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "destination_id",
              field_definition: {
                name: "destination_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "destination_account_id",
              field_definition: {
                name: "destination_account_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "currency",
              field_definition: {
                name: "currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "amount",
              field_definition: {
                name: "amount"
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
  _.extend(RetailBankingAccountFundTransfer, Backbone.Events);

  return RetailBankingAccountFundTransfer;

})(AP.utility.createClass, AP.model.Model, Backbone);
