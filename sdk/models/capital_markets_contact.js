/**
CapitalMarketsContact model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class CapitalMarketsContact
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.CapitalMarketsContact = (function($class, _Model, Backbone) {

  var CapitalMarketsContact = $class({

    extends: _Model,

    _constructor: function CapitalMarketsContact() {
      CitiMobileChallengeSdk.models.CapitalMarketsContact._super.constructor.apply(this, arguments);
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
      name: "CapitalMarketsContact"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "CapitalMarketsContact",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v2/capital_markets_contacts",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "address": null,
      
      "city": null,
      
      "client_name": null,
      
      "country": null,
      
      "email": null,
      
      "job_role": null,
      
      "job_title": null,
      
      "name": null,
      
      "phone": null,
      
      "state": null,
      
      "year": null,
      
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
      name: "address",
      label: "address",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "city",
      label: "city",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "client_name",
      label: "client_name",
      
      
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
      name: "job_role",
      label: "job_role",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "job_title",
      label: "job_title",
      
      
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
      name: "phone",
      label: "phone",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "state",
      label: "state",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "year",
      label: "year",
      
      
      type: "integer",
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
    storage_interface: "CapitalMarketsTrading",

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
              remote_field_name: "year",
              field_definition: {
                name: "year"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "phone",
              field_definition: {
                name: "phone"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "job_title",
              field_definition: {
                name: "job_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "job_role",
              field_definition: {
                name: "job_role"
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
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_name",
              field_definition: {
                name: "client_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "city",
              field_definition: {
                name: "city"
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
              remote_field_name: "year",
              field_definition: {
                name: "year"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "phone",
              field_definition: {
                name: "phone"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "job_title",
              field_definition: {
                name: "job_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "job_role",
              field_definition: {
                name: "job_role"
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
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_name",
              field_definition: {
                name: "client_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "city",
              field_definition: {
                name: "city"
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
              remote_field_name: "year",
              field_definition: {
                name: "year"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "phone",
              field_definition: {
                name: "phone"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "job_title",
              field_definition: {
                name: "job_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "job_role",
              field_definition: {
                name: "job_role"
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
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_name",
              field_definition: {
                name: "client_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "city",
              field_definition: {
                name: "city"
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
              remote_field_name: "year",
              field_definition: {
                name: "year"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "phone",
              field_definition: {
                name: "phone"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "job_title",
              field_definition: {
                name: "job_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "job_role",
              field_definition: {
                name: "job_role"
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
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_name",
              field_definition: {
                name: "client_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "city",
              field_definition: {
                name: "city"
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
              remote_field_name: "year",
              field_definition: {
                name: "year"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "phone",
              field_definition: {
                name: "phone"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "job_title",
              field_definition: {
                name: "job_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "job_role",
              field_definition: {
                name: "job_role"
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
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_name",
              field_definition: {
                name: "client_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "city",
              field_definition: {
                name: "city"
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
              remote_field_name: "year",
              field_definition: {
                name: "year"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "phone",
              field_definition: {
                name: "phone"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "job_title",
              field_definition: {
                name: "job_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "job_role",
              field_definition: {
                name: "job_role"
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
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_name",
              field_definition: {
                name: "client_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "city",
              field_definition: {
                name: "city"
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
              remote_field_name: "year",
              field_definition: {
                name: "year"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "phone",
              field_definition: {
                name: "phone"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "job_title",
              field_definition: {
                name: "job_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "job_role",
              field_definition: {
                name: "job_role"
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
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_name",
              field_definition: {
                name: "client_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "city",
              field_definition: {
                name: "city"
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
              remote_field_name: "year",
              field_definition: {
                name: "year"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "phone",
              field_definition: {
                name: "phone"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "name",
              field_definition: {
                name: "name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "job_title",
              field_definition: {
                name: "job_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "job_role",
              field_definition: {
                name: "job_role"
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
              remote_field_name: "country",
              field_definition: {
                name: "country"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_name",
              field_definition: {
                name: "client_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "city",
              field_definition: {
                name: "city"
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
  _.extend(CapitalMarketsContact, Backbone.Events);

  return CapitalMarketsContact;

})(AP.utility.createClass, AP.model.Model, Backbone);
