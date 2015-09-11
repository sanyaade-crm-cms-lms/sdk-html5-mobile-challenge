/**
RetailBankingPayee model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class RetailBankingPayee
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.RetailBankingPayee = (function($class, _Model, Backbone) {

  var RetailBankingPayee = $class({

    extends: _Model,

    _constructor: function RetailBankingPayee() {
      CitiMobileChallengeSdk.models.RetailBankingPayee._super.constructor.apply(this, arguments);
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
      name: "RetailBankingPayee"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "RetailBankingPayee",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v2/retail_banking_payees",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "add_payee_details": null,
      
      "bank_name_ext": null,
      
      "detail_prefix": null,
      
      "last_payment_amt": null,
      
      "payee_account": null,
      
      "payee_description": null,
      
      "payee_list_id_two": null,
      
      "payee_list_id_type": null,
      
      "payee_type": null,
      
      "payment_method": null,
      
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
      name: "add_payee_details",
      label: "add_payee_details",
      
      
      type: "array",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "bank_name_ext",
      label: "bank_name_ext",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "detail_prefix",
      label: "detail_prefix",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "last_payment_amt",
      label: "last_payment_amt",
      
      
      type: "float",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payee_account",
      label: "payee_account",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payee_description",
      label: "payee_description",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payee_list_id_two",
      label: "payee_list_id_two",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payee_list_id_type",
      label: "payee_list_id_type",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payee_type",
      label: "payee_type",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payment_method",
      label: "payment_method",
      
      
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
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
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
              remote_field_name: "payee_list_id_type",
              field_definition: {
                name: "payee_list_id_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_list_id_2",
              field_definition: {
                name: "payee_list_id_two"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_description",
              field_definition: {
                name: "payee_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_account",
              field_definition: {
                name: "payee_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "last_payment_amt",
              field_definition: {
                name: "last_payment_amt"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "detail_prefix",
              field_definition: {
                name: "detail_prefix"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "bank_name_ext",
              field_definition: {
                name: "bank_name_ext"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "add_payee_details",
              field_definition: {
                name: "add_payee_details"
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
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
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
              remote_field_name: "payee_list_id_type",
              field_definition: {
                name: "payee_list_id_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_list_id_2",
              field_definition: {
                name: "payee_list_id_two"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_description",
              field_definition: {
                name: "payee_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_account",
              field_definition: {
                name: "payee_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "last_payment_amt",
              field_definition: {
                name: "last_payment_amt"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "detail_prefix",
              field_definition: {
                name: "detail_prefix"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_name_ext",
              field_definition: {
                name: "bank_name_ext"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "add_payee_details",
              field_definition: {
                name: "add_payee_details"
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
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
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
              remote_field_name: "payee_list_id_type",
              field_definition: {
                name: "payee_list_id_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_list_id_2",
              field_definition: {
                name: "payee_list_id_two"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_description",
              field_definition: {
                name: "payee_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_account",
              field_definition: {
                name: "payee_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "last_payment_amt",
              field_definition: {
                name: "last_payment_amt"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "detail_prefix",
              field_definition: {
                name: "detail_prefix"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "bank_name_ext",
              field_definition: {
                name: "bank_name_ext"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "add_payee_details",
              field_definition: {
                name: "add_payee_details"
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
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
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
              remote_field_name: "payee_list_id_type",
              field_definition: {
                name: "payee_list_id_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_list_id_2",
              field_definition: {
                name: "payee_list_id_two"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_description",
              field_definition: {
                name: "payee_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_account",
              field_definition: {
                name: "payee_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "last_payment_amt",
              field_definition: {
                name: "last_payment_amt"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "detail_prefix",
              field_definition: {
                name: "detail_prefix"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_name_ext",
              field_definition: {
                name: "bank_name_ext"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "add_payee_details",
              field_definition: {
                name: "add_payee_details"
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
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
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
              remote_field_name: "payee_list_id_type",
              field_definition: {
                name: "payee_list_id_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_list_id_2",
              field_definition: {
                name: "payee_list_id_two"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_description",
              field_definition: {
                name: "payee_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_account",
              field_definition: {
                name: "payee_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "last_payment_amt",
              field_definition: {
                name: "last_payment_amt"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "detail_prefix",
              field_definition: {
                name: "detail_prefix"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "bank_name_ext",
              field_definition: {
                name: "bank_name_ext"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "add_payee_details",
              field_definition: {
                name: "add_payee_details"
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
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
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
              remote_field_name: "payee_list_id_type",
              field_definition: {
                name: "payee_list_id_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_list_id_2",
              field_definition: {
                name: "payee_list_id_two"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_description",
              field_definition: {
                name: "payee_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_account",
              field_definition: {
                name: "payee_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "last_payment_amt",
              field_definition: {
                name: "last_payment_amt"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "detail_prefix",
              field_definition: {
                name: "detail_prefix"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_name_ext",
              field_definition: {
                name: "bank_name_ext"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "add_payee_details",
              field_definition: {
                name: "add_payee_details"
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
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
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
              remote_field_name: "payee_list_id_type",
              field_definition: {
                name: "payee_list_id_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_list_id_2",
              field_definition: {
                name: "payee_list_id_two"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_description",
              field_definition: {
                name: "payee_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payee_account",
              field_definition: {
                name: "payee_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "last_payment_amt",
              field_definition: {
                name: "last_payment_amt"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "detail_prefix",
              field_definition: {
                name: "detail_prefix"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "bank_name_ext",
              field_definition: {
                name: "bank_name_ext"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "add_payee_details",
              field_definition: {
                name: "add_payee_details"
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
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
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
              remote_field_name: "payee_list_id_type",
              field_definition: {
                name: "payee_list_id_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_list_id_2",
              field_definition: {
                name: "payee_list_id_two"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_description",
              field_definition: {
                name: "payee_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payee_account",
              field_definition: {
                name: "payee_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "last_payment_amt",
              field_definition: {
                name: "last_payment_amt"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "detail_prefix",
              field_definition: {
                name: "detail_prefix"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_name_ext",
              field_definition: {
                name: "bank_name_ext"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "add_payee_details",
              field_definition: {
                name: "add_payee_details"
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
  _.extend(RetailBankingPayee, Backbone.Events);

  return RetailBankingPayee;

})(AP.utility.createClass, AP.model.Model, Backbone);
