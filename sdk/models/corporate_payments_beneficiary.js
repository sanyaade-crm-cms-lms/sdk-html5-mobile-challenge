/**
CorporatePaymentsBeneficiary model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class CorporatePaymentsBeneficiary
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.CorporatePaymentsBeneficiary = (function($class, _Model, Backbone) {

  var CorporatePaymentsBeneficiary = $class({

    extends: _Model,

    _constructor: function CorporatePaymentsBeneficiary() {
      CitiMobileChallengeSdk.models.CorporatePaymentsBeneficiary._super.constructor.apply(this, arguments);
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
      name: "CorporatePaymentsBeneficiary"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "CorporatePaymentsBeneficiary",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v2/corporate_payments_beneficiaries",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "account_status": null,
      
      "address": null,
      
      "bank_account_type": null,
      
      "bank_address": null,
      
      "bank_country": null,
      
      "bic": null,
      
      "company_name": null,
      
      "country": null,
      
      "currency": null,
      
      "entity_type": null,
      
      "iban": null,
      
      "routing_code": null,
      
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
      name: "address",
      label: "address",
      
      
      type: "hash",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "bank_account_type",
      label: "bank_account_type",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "bank_address",
      label: "bank_address",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "bank_country",
      label: "bank_country",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "bic",
      label: "bic",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "company_name",
      label: "company_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "country",
      label: "country",
      
      
      type: "string",
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
      name: "entity_type",
      label: "entity_type",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "iban",
      label: "iban",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "routing_code",
      label: "routing_code",
      
      
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
              remote_field_name: "bank_address",
              field_definition: {
                name: "bank_address"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "iban",
              field_definition: {
                name: "iban"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "bic",
              field_definition: {
                name: "bic"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "routing_code",
              field_definition: {
                name: "routing_code"
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
              remote_field_name: "bank_account_type",
              field_definition: {
                name: "bank_account_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "bank_country",
              field_definition: {
                name: "bank_country"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "company_name",
              field_definition: {
                name: "company_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "entity_type",
              field_definition: {
                name: "entity_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "address",
              field_definition: {
                name: "address"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_address",
              field_definition: {
                name: "bank_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "iban",
              field_definition: {
                name: "iban"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bic",
              field_definition: {
                name: "bic"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "routing_code",
              field_definition: {
                name: "routing_code"
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
              remote_field_name: "bank_account_type",
              field_definition: {
                name: "bank_account_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_country",
              field_definition: {
                name: "bank_country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "company_name",
              field_definition: {
                name: "company_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "entity_type",
              field_definition: {
                name: "entity_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "address",
              field_definition: {
                name: "address"
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
        incremental_path : "/beneficiaries",
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
              remote_field_name: "bank_address",
              field_definition: {
                name: "bank_address"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "iban",
              field_definition: {
                name: "iban"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "bic",
              field_definition: {
                name: "bic"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "routing_code",
              field_definition: {
                name: "routing_code"
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
              remote_field_name: "bank_account_type",
              field_definition: {
                name: "bank_account_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "bank_country",
              field_definition: {
                name: "bank_country"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "company_name",
              field_definition: {
                name: "company_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "entity_type",
              field_definition: {
                name: "entity_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "address",
              field_definition: {
                name: "address"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_address",
              field_definition: {
                name: "bank_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "iban",
              field_definition: {
                name: "iban"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bic",
              field_definition: {
                name: "bic"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "routing_code",
              field_definition: {
                name: "routing_code"
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
              remote_field_name: "bank_account_type",
              field_definition: {
                name: "bank_account_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_country",
              field_definition: {
                name: "bank_country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "company_name",
              field_definition: {
                name: "company_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "entity_type",
              field_definition: {
                name: "entity_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "address",
              field_definition: {
                name: "address"
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
        incremental_path : "/beneficiaries/{{params.id}}",
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
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_address",
              field_definition: {
                name: "bank_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "iban",
              field_definition: {
                name: "iban"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bic",
              field_definition: {
                name: "bic"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "routing_code",
              field_definition: {
                name: "routing_code"
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
              remote_field_name: "bank_account_type",
              field_definition: {
                name: "bank_account_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_country",
              field_definition: {
                name: "bank_country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "company_name",
              field_definition: {
                name: "company_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "entity_type",
              field_definition: {
                name: "entity_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "address",
              field_definition: {
                name: "address"
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
        incremental_path : "/beneficiaries/{{params.id}}",
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
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "bank_address",
              field_definition: {
                name: "bank_address"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "iban",
              field_definition: {
                name: "iban"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "bic",
              field_definition: {
                name: "bic"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "routing_code",
              field_definition: {
                name: "routing_code"
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
              remote_field_name: "bank_account_type",
              field_definition: {
                name: "bank_account_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "bank_country",
              field_definition: {
                name: "bank_country"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "company_name",
              field_definition: {
                name: "company_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "entity_type",
              field_definition: {
                name: "entity_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "address",
              field_definition: {
                name: "address"
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
              remote_field_name: "account_status",
              field_definition: {
                name: "account_status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_address",
              field_definition: {
                name: "bank_address"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "iban",
              field_definition: {
                name: "iban"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bic",
              field_definition: {
                name: "bic"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "routing_code",
              field_definition: {
                name: "routing_code"
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
              remote_field_name: "bank_account_type",
              field_definition: {
                name: "bank_account_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "bank_country",
              field_definition: {
                name: "bank_country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "company_name",
              field_definition: {
                name: "company_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "entity_type",
              field_definition: {
                name: "entity_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "address",
              field_definition: {
                name: "address"
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
  _.extend(CorporatePaymentsBeneficiary, Backbone.Events);

  return CorporatePaymentsBeneficiary;

})(AP.utility.createClass, AP.model.Model, Backbone);
