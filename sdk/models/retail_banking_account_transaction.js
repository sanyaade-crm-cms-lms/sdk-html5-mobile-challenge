/**
RetailBankingAccountTransaction model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class RetailBankingAccountTransaction
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.RetailBankingAccountTransaction = (function($class, _Model, Backbone) {

  var RetailBankingAccountTransaction = $class({

    extends: _Model,

    _constructor: function RetailBankingAccountTransaction() {
      CitiMobileChallengeSdk.models.RetailBankingAccountTransaction._super.constructor.apply(this, arguments);
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
      name: "RetailBankingAccountTransaction"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "RetailBankingAccountTransaction",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v5/retail_banking_account_transactions",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "account_id": null,
      
      "activity": null,
      
      "check_image_eligible": null,
      
      "date_posted": null,
      
      "formatted_amount": null,
      
      "pending_date": null,
      
      "transaction_amount": null,
      
      "transaction_description": null,
      
      "transaction_identifier": null,
      
      "transaction_index": null,
      
      "transaction_type": null,
      
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
      name: "account_id",
      label: "account_id",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "activity",
      label: "activity",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "check_image_eligible",
      label: "check_image_eligible",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "date_posted",
      label: "date_posted",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "formatted_amount",
      label: "formatted_amount",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "pending_date",
      label: "pending_date",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "transaction_amount",
      label: "transaction_amount",
      
      
      type: "float",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "transaction_description",
      label: "transaction_description",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "transaction_identifier",
      label: "transaction_identifier",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "transaction_index",
      label: "transaction_index",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "transaction_type",
      label: "transaction_type",
      
      
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
              remote_field_name: "transaction_type",
              field_definition: {
                name: "transaction_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_index",
              field_definition: {
                name: "transaction_index"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_identifier",
              field_definition: {
                name: "transaction_identifier"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_amount",
              field_definition: {
                name: "transaction_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pending_date",
              field_definition: {
                name: "pending_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formatted_amount",
              field_definition: {
                name: "formatted_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "description",
              field_definition: {
                name: "transaction_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date_posted",
              field_definition: {
                name: "date_posted"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "check_image_eligible",
              field_definition: {
                name: "check_image_eligible"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "activity",
              field_definition: {
                name: "activity"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "account_id",
              field_definition: {
                name: "account_id"
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
              remote_field_name: "transaction_type",
              field_definition: {
                name: "transaction_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_index",
              field_definition: {
                name: "transaction_index"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_identifier",
              field_definition: {
                name: "transaction_identifier"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_amount",
              field_definition: {
                name: "transaction_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pending_date",
              field_definition: {
                name: "pending_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formatted_amount",
              field_definition: {
                name: "formatted_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "description",
              field_definition: {
                name: "transaction_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date_posted",
              field_definition: {
                name: "date_posted"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "check_image_eligible",
              field_definition: {
                name: "check_image_eligible"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "activity",
              field_definition: {
                name: "activity"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_id",
              field_definition: {
                name: "account_id"
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
              remote_field_name: "transaction_type",
              field_definition: {
                name: "transaction_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_index",
              field_definition: {
                name: "transaction_index"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_identifier",
              field_definition: {
                name: "transaction_identifier"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_amount",
              field_definition: {
                name: "transaction_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pending_date",
              field_definition: {
                name: "pending_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formatted_amount",
              field_definition: {
                name: "formatted_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "description",
              field_definition: {
                name: "transaction_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date_posted",
              field_definition: {
                name: "date_posted"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "check_image_eligible",
              field_definition: {
                name: "check_image_eligible"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "activity",
              field_definition: {
                name: "activity"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "account_id",
              field_definition: {
                name: "account_id"
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
              remote_field_name: "transaction_type",
              field_definition: {
                name: "transaction_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_index",
              field_definition: {
                name: "transaction_index"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_identifier",
              field_definition: {
                name: "transaction_identifier"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_amount",
              field_definition: {
                name: "transaction_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pending_date",
              field_definition: {
                name: "pending_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formatted_amount",
              field_definition: {
                name: "formatted_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "description",
              field_definition: {
                name: "transaction_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date_posted",
              field_definition: {
                name: "date_posted"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "check_image_eligible",
              field_definition: {
                name: "check_image_eligible"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "activity",
              field_definition: {
                name: "activity"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_id",
              field_definition: {
                name: "account_id"
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
              remote_field_name: "transaction_type",
              field_definition: {
                name: "transaction_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_index",
              field_definition: {
                name: "transaction_index"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_identifier",
              field_definition: {
                name: "transaction_identifier"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_amount",
              field_definition: {
                name: "transaction_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pending_date",
              field_definition: {
                name: "pending_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formatted_amount",
              field_definition: {
                name: "formatted_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "description",
              field_definition: {
                name: "transaction_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date_posted",
              field_definition: {
                name: "date_posted"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "check_image_eligible",
              field_definition: {
                name: "check_image_eligible"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "activity",
              field_definition: {
                name: "activity"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "account_id",
              field_definition: {
                name: "account_id"
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
              remote_field_name: "transaction_type",
              field_definition: {
                name: "transaction_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_index",
              field_definition: {
                name: "transaction_index"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_identifier",
              field_definition: {
                name: "transaction_identifier"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_amount",
              field_definition: {
                name: "transaction_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pending_date",
              field_definition: {
                name: "pending_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formatted_amount",
              field_definition: {
                name: "formatted_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "description",
              field_definition: {
                name: "transaction_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date_posted",
              field_definition: {
                name: "date_posted"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "check_image_eligible",
              field_definition: {
                name: "check_image_eligible"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "activity",
              field_definition: {
                name: "activity"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_id",
              field_definition: {
                name: "account_id"
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
              remote_field_name: "transaction_type",
              field_definition: {
                name: "transaction_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_index",
              field_definition: {
                name: "transaction_index"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_identifier",
              field_definition: {
                name: "transaction_identifier"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "transaction_amount",
              field_definition: {
                name: "transaction_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pending_date",
              field_definition: {
                name: "pending_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formatted_amount",
              field_definition: {
                name: "formatted_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "description",
              field_definition: {
                name: "transaction_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date_posted",
              field_definition: {
                name: "date_posted"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "check_image_eligible",
              field_definition: {
                name: "check_image_eligible"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "activity",
              field_definition: {
                name: "activity"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "account_id",
              field_definition: {
                name: "account_id"
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
              remote_field_name: "transaction_type",
              field_definition: {
                name: "transaction_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_index",
              field_definition: {
                name: "transaction_index"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_identifier",
              field_definition: {
                name: "transaction_identifier"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transaction_amount",
              field_definition: {
                name: "transaction_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pending_date",
              field_definition: {
                name: "pending_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formatted_amount",
              field_definition: {
                name: "formatted_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "description",
              field_definition: {
                name: "transaction_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date_posted",
              field_definition: {
                name: "date_posted"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "check_image_eligible",
              field_definition: {
                name: "check_image_eligible"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "activity",
              field_definition: {
                name: "activity"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_id",
              field_definition: {
                name: "account_id"
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
  _.extend(RetailBankingAccountTransaction, Backbone.Events);

  return RetailBankingAccountTransaction;

})(AP.utility.createClass, AP.model.Model, Backbone);
