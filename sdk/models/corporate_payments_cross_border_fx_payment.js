/**
CorporatePaymentsCrossBorderFxPayment model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class CorporatePaymentsCrossBorderFxPayment
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxPayment = (function($class, _Model, Backbone) {

  var CorporatePaymentsCrossBorderFxPayment = $class({

    extends: _Model,

    _constructor: function CorporatePaymentsCrossBorderFxPayment() {
      CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxPayment._super.constructor.apply(this, arguments);
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
      name: "CorporatePaymentsCrossBorderFxPayment"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "CorporatePaymentsCrossBorderFxPayment",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v5/corporate_payments_cross_border_fx_payments",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "beneficiary_account": null,
      
      "beneficiary_address": null,
      
      "beneficiary_bank": null,
      
      "beneficiary_name": null,
      
      "citi_ref": null,
      
      "created_by": null,
      
      "created_on": null,
      
      "customer_txn_ref": null,
      
      "debtor_account": null,
      
      "debtor_address": null,
      
      "debtor_name": null,
      
      "from_amount": null,
      
      "from_currency": null,
      
      "payment_details": null,
      
      "rate_reference": null,
      
      "status": null,
      
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
      name: "beneficiary_account",
      label: "beneficiary_account",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "beneficiary_address",
      label: "beneficiary_address",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "beneficiary_bank",
      label: "beneficiary_bank",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "beneficiary_name",
      label: "beneficiary_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "citi_ref",
      label: "citi_ref",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "created_by",
      label: "created_by",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "created_on",
      label: "created_on",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "customer_txn_ref",
      label: "customer_txn_ref",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "debtor_account",
      label: "debtor_account",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "debtor_address",
      label: "debtor_address",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "debtor_name",
      label: "debtor_name",
      
      
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
      name: "payment_details",
      label: "payment_details",
      
      
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
      name: "status",
      label: "status",
      
      
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
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_details",
              field_definition: {
                name: "payment_details"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_address",
              field_definition: {
                name: "beneficiary_address"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_name",
              field_definition: {
                name: "beneficiary_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_account",
              field_definition: {
                name: "beneficiary_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_bank",
              field_definition: {
                name: "beneficiary_bank"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debtor_address",
              field_definition: {
                name: "debtor_address"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debtor_account",
              field_definition: {
                name: "debtor_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debtor_name",
              field_definition: {
                name: "debtor_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "customer_txn_ref",
              field_definition: {
                name: "customer_txn_ref"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_by",
              field_definition: {
                name: "created_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_details",
              field_definition: {
                name: "payment_details"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_address",
              field_definition: {
                name: "beneficiary_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_name",
              field_definition: {
                name: "beneficiary_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_account",
              field_definition: {
                name: "beneficiary_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_bank",
              field_definition: {
                name: "beneficiary_bank"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_address",
              field_definition: {
                name: "debtor_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_account",
              field_definition: {
                name: "debtor_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_name",
              field_definition: {
                name: "debtor_name"
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
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
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
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
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
              remote_field_name: "citi_ref",
              field_definition: {
                name: "citi_ref"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "customer_txn_ref",
              field_definition: {
                name: "customer_txn_ref"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
        ],
        http_verb: "POST",
        path_selector : "$",
        incremental_path : "/crossborder/fx_payments",
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
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "created_by",
              field_definition: {
                name: "created_by"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_details",
              field_definition: {
                name: "payment_details"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_address",
              field_definition: {
                name: "beneficiary_address"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_name",
              field_definition: {
                name: "beneficiary_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_account",
              field_definition: {
                name: "beneficiary_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_bank",
              field_definition: {
                name: "beneficiary_bank"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debtor_address",
              field_definition: {
                name: "debtor_address"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debtor_account",
              field_definition: {
                name: "debtor_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debtor_name",
              field_definition: {
                name: "debtor_name"
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
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
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
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
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
              remote_field_name: "citi_ref",
              field_definition: {
                name: "citi_ref"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "customer_txn_ref",
              field_definition: {
                name: "customer_txn_ref"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_by",
              field_definition: {
                name: "created_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_details",
              field_definition: {
                name: "payment_details"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_address",
              field_definition: {
                name: "beneficiary_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_name",
              field_definition: {
                name: "beneficiary_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_account",
              field_definition: {
                name: "beneficiary_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_bank",
              field_definition: {
                name: "beneficiary_bank"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_address",
              field_definition: {
                name: "debtor_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_account",
              field_definition: {
                name: "debtor_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_name",
              field_definition: {
                name: "debtor_name"
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
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
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
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
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
              remote_field_name: "citi_ref",
              field_definition: {
                name: "citi_ref"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "customer_txn_ref",
              field_definition: {
                name: "customer_txn_ref"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
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
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_by",
              field_definition: {
                name: "created_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_details",
              field_definition: {
                name: "payment_details"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_address",
              field_definition: {
                name: "beneficiary_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_name",
              field_definition: {
                name: "beneficiary_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_account",
              field_definition: {
                name: "beneficiary_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_bank",
              field_definition: {
                name: "beneficiary_bank"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_address",
              field_definition: {
                name: "debtor_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_account",
              field_definition: {
                name: "debtor_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_name",
              field_definition: {
                name: "debtor_name"
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
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
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
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
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
              remote_field_name: "citi_ref",
              field_definition: {
                name: "citi_ref"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "customer_txn_ref",
              field_definition: {
                name: "customer_txn_ref"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
        ],
        http_verb: "GET",
        path_selector : "$",
        incremental_path : "/crossborder/fx_payments/{{params.id}}",
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
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "created_by",
              field_definition: {
                name: "created_by"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_details",
              field_definition: {
                name: "payment_details"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_address",
              field_definition: {
                name: "beneficiary_address"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_name",
              field_definition: {
                name: "beneficiary_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_account",
              field_definition: {
                name: "beneficiary_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_bank",
              field_definition: {
                name: "beneficiary_bank"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debtor_address",
              field_definition: {
                name: "debtor_address"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debtor_account",
              field_definition: {
                name: "debtor_account"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debtor_name",
              field_definition: {
                name: "debtor_name"
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
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
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
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
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
              remote_field_name: "citi_ref",
              field_definition: {
                name: "citi_ref"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "customer_txn_ref",
              field_definition: {
                name: "customer_txn_ref"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_by",
              field_definition: {
                name: "created_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_details",
              field_definition: {
                name: "payment_details"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_address",
              field_definition: {
                name: "beneficiary_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_name",
              field_definition: {
                name: "beneficiary_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_account",
              field_definition: {
                name: "beneficiary_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_bank",
              field_definition: {
                name: "beneficiary_bank"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_address",
              field_definition: {
                name: "debtor_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_account",
              field_definition: {
                name: "debtor_account"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debtor_name",
              field_definition: {
                name: "debtor_name"
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
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
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
              remote_field_name: "to_currency",
              field_definition: {
                name: "to_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "from_amount",
              field_definition: {
                name: "from_amount"
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
              remote_field_name: "citi_ref",
              field_definition: {
                name: "citi_ref"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "customer_txn_ref",
              field_definition: {
                name: "customer_txn_ref"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
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
  _.extend(CorporatePaymentsCrossBorderFxPayment, Backbone.Events);

  return CorporatePaymentsCrossBorderFxPayment;

})(AP.utility.createClass, AP.model.Model, Backbone);
