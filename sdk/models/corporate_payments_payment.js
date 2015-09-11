/**
CorporatePaymentsPayment model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class CorporatePaymentsPayment
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.CorporatePaymentsPayment = (function($class, _Model, Backbone) {

  var CorporatePaymentsPayment = $class({

    extends: _Model,

    _constructor: function CorporatePaymentsPayment() {
      CitiMobileChallengeSdk.models.CorporatePaymentsPayment._super.constructor.apply(this, arguments);
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
      name: "CorporatePaymentsPayment"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "CorporatePaymentsPayment",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v2/corporate_payments_payments",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "beneficiary_id": null,
      
      "branch_name": null,
      
      "created_by": null,
      
      "created_on": null,
      
      "customer_reference_number": null,
      
      "debit_account_name": null,
      
      "debit_account_number": null,
      
      "email": null,
      
      "payment_amount": null,
      
      "payment_currency": null,
      
      "payment_details": null,
      
      "payment_method": null,
      
      "payment_type": null,
      
      "status": null,
      
      "transaction_reference_number": null,
      
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
      name: "beneficiary_id",
      label: "beneficiary_id",
      
      
      type: "string",
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
      name: "customer_reference_number",
      label: "customer_reference_number",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "debit_account_name",
      label: "debit_account_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "debit_account_number",
      label: "debit_account_number",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "email",
      label: "email",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payment_amount",
      label: "payment_amount",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "payment_currency",
      label: "payment_currency",
      
      
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
      name: "payment_method",
      label: "payment_method",
      
      
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
      name: "transaction_reference_number",
      label: "transaction_reference_number",
      
      
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
              remote_field_name: "payment_details",
              field_definition: {
                name: "payment_details"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "customer_reference_number",
              field_definition: {
                name: "customer_reference_number"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
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
              remote_field_name: "debit_account_number",
              field_definition: {
                name: "debit_account_number"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debit_account_name",
              field_definition: {
                name: "debit_account_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_id",
              field_definition: {
                name: "beneficiary_id"
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
              remote_field_name: "payment_amount",
              field_definition: {
                name: "payment_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_currency",
              field_definition: {
                name: "payment_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "email",
              field_definition: {
                name: "email"
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
              remote_field_name: "transaction_reference_number",
              field_definition: {
                name: "transaction_reference_number"
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
              remote_field_name: "status",
              field_definition: {
                name: "status"
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
              remote_field_name: "customer_reference_number",
              field_definition: {
                name: "customer_reference_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
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
              remote_field_name: "debit_account_number",
              field_definition: {
                name: "debit_account_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debit_account_name",
              field_definition: {
                name: "debit_account_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_id",
              field_definition: {
                name: "beneficiary_id"
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
              remote_field_name: "payment_amount",
              field_definition: {
                name: "payment_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_currency",
              field_definition: {
                name: "payment_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "email",
              field_definition: {
                name: "email"
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
              remote_field_name: "transaction_reference_number",
              field_definition: {
                name: "transaction_reference_number"
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
        path_selector : "$",
        incremental_path : "/payments",
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
              remote_field_name: "status",
              field_definition: {
                name: "status"
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
              remote_field_name: "customer_reference_number",
              field_definition: {
                name: "customer_reference_number"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
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
              remote_field_name: "debit_account_number",
              field_definition: {
                name: "debit_account_number"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debit_account_name",
              field_definition: {
                name: "debit_account_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_id",
              field_definition: {
                name: "beneficiary_id"
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
              remote_field_name: "payment_amount",
              field_definition: {
                name: "payment_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_currency",
              field_definition: {
                name: "payment_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "email",
              field_definition: {
                name: "email"
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
              remote_field_name: "transaction_reference_number",
              field_definition: {
                name: "transaction_reference_number"
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
              remote_field_name: "status",
              field_definition: {
                name: "status"
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
              remote_field_name: "customer_reference_number",
              field_definition: {
                name: "customer_reference_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
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
              remote_field_name: "debit_account_number",
              field_definition: {
                name: "debit_account_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debit_account_name",
              field_definition: {
                name: "debit_account_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_id",
              field_definition: {
                name: "beneficiary_id"
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
              remote_field_name: "payment_amount",
              field_definition: {
                name: "payment_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_currency",
              field_definition: {
                name: "payment_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "email",
              field_definition: {
                name: "email"
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
              remote_field_name: "transaction_reference_number",
              field_definition: {
                name: "transaction_reference_number"
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
              remote_field_name: "status",
              field_definition: {
                name: "status"
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
              remote_field_name: "customer_reference_number",
              field_definition: {
                name: "customer_reference_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
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
              remote_field_name: "debit_account_number",
              field_definition: {
                name: "debit_account_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debit_account_name",
              field_definition: {
                name: "debit_account_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_id",
              field_definition: {
                name: "beneficiary_id"
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
              remote_field_name: "payment_amount",
              field_definition: {
                name: "payment_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_currency",
              field_definition: {
                name: "payment_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "email",
              field_definition: {
                name: "email"
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
              remote_field_name: "transaction_reference_number",
              field_definition: {
                name: "transaction_reference_number"
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
        path_selector : "$",
        incremental_path : "/payments/{{params.id}}",
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
              remote_field_name: "status",
              field_definition: {
                name: "status"
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
              remote_field_name: "customer_reference_number",
              field_definition: {
                name: "customer_reference_number"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
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
              remote_field_name: "debit_account_number",
              field_definition: {
                name: "debit_account_number"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "debit_account_name",
              field_definition: {
                name: "debit_account_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "beneficiary_id",
              field_definition: {
                name: "beneficiary_id"
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
              remote_field_name: "payment_amount",
              field_definition: {
                name: "payment_amount"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_currency",
              field_definition: {
                name: "payment_currency"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "email",
              field_definition: {
                name: "email"
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
              remote_field_name: "transaction_reference_number",
              field_definition: {
                name: "transaction_reference_number"
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
              remote_field_name: "status",
              field_definition: {
                name: "status"
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
              remote_field_name: "customer_reference_number",
              field_definition: {
                name: "customer_reference_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "created_on",
              field_definition: {
                name: "created_on"
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
              remote_field_name: "debit_account_number",
              field_definition: {
                name: "debit_account_number"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "debit_account_name",
              field_definition: {
                name: "debit_account_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "beneficiary_id",
              field_definition: {
                name: "beneficiary_id"
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
              remote_field_name: "payment_amount",
              field_definition: {
                name: "payment_amount"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_currency",
              field_definition: {
                name: "payment_currency"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "payment_method",
              field_definition: {
                name: "payment_method"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "email",
              field_definition: {
                name: "email"
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
              remote_field_name: "transaction_reference_number",
              field_definition: {
                name: "transaction_reference_number"
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
  _.extend(CorporatePaymentsPayment, Backbone.Events);

  return CorporatePaymentsPayment;

})(AP.utility.createClass, AP.model.Model, Backbone);
