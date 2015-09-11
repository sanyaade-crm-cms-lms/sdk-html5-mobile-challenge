/**
CapitalMarketsActivity model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class CapitalMarketsActivity
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.CapitalMarketsActivity = (function($class, _Model, Backbone) {

  var CapitalMarketsActivity = $class({

    extends: _Model,

    _constructor: function CapitalMarketsActivity() {
      CitiMobileChallengeSdk.models.CapitalMarketsActivity._super.constructor.apply(this, arguments);
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
      name: "CapitalMarketsActivity"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "CapitalMarketsActivity",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v2/capital_markets_activities",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "activity_type": null,
      
      "citi_attendees": null,
      
      "client_contacts": null,
      
      "client_id": null,
      
      "client_name": null,
      
      "date": null,
      
      "region": null,
      
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
      name: "activity_type",
      label: "activity_type",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "citi_attendees",
      label: "citi_attendees",
      
      
      type: "array",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "client_contacts",
      label: "client_contacts",
      
      
      type: "array",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "client_id",
      label: "client_id",
      
      
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
      name: "date",
      label: "date",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "region",
      label: "region",
      
      
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
              remote_field_name: "region",
              field_definition: {
                name: "region"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date",
              field_definition: {
                name: "date"
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
              remote_field_name: "client_id",
              field_definition: {
                name: "client_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_contacts",
              field_definition: {
                name: "client_contacts"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "citi_attendees",
              field_definition: {
                name: "citi_attendees"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "activity_type",
              field_definition: {
                name: "activity_type"
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
              remote_field_name: "region",
              field_definition: {
                name: "region"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date",
              field_definition: {
                name: "date"
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
              remote_field_name: "client_id",
              field_definition: {
                name: "client_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_contacts",
              field_definition: {
                name: "client_contacts"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "citi_attendees",
              field_definition: {
                name: "citi_attendees"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "activity_type",
              field_definition: {
                name: "activity_type"
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
              remote_field_name: "region",
              field_definition: {
                name: "region"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date",
              field_definition: {
                name: "date"
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
              remote_field_name: "client_id",
              field_definition: {
                name: "client_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_contacts",
              field_definition: {
                name: "client_contacts"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "citi_attendees",
              field_definition: {
                name: "citi_attendees"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "activity_type",
              field_definition: {
                name: "activity_type"
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
              remote_field_name: "region",
              field_definition: {
                name: "region"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date",
              field_definition: {
                name: "date"
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
              remote_field_name: "client_id",
              field_definition: {
                name: "client_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_contacts",
              field_definition: {
                name: "client_contacts"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "citi_attendees",
              field_definition: {
                name: "citi_attendees"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "activity_type",
              field_definition: {
                name: "activity_type"
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
              remote_field_name: "region",
              field_definition: {
                name: "region"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date",
              field_definition: {
                name: "date"
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
              remote_field_name: "client_id",
              field_definition: {
                name: "client_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_contacts",
              field_definition: {
                name: "client_contacts"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "citi_attendees",
              field_definition: {
                name: "citi_attendees"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "activity_type",
              field_definition: {
                name: "activity_type"
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
              remote_field_name: "region",
              field_definition: {
                name: "region"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date",
              field_definition: {
                name: "date"
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
              remote_field_name: "client_id",
              field_definition: {
                name: "client_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_contacts",
              field_definition: {
                name: "client_contacts"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "citi_attendees",
              field_definition: {
                name: "citi_attendees"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "activity_type",
              field_definition: {
                name: "activity_type"
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
              remote_field_name: "region",
              field_definition: {
                name: "region"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date",
              field_definition: {
                name: "date"
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
              remote_field_name: "client_id",
              field_definition: {
                name: "client_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_contacts",
              field_definition: {
                name: "client_contacts"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "citi_attendees",
              field_definition: {
                name: "citi_attendees"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "activity_type",
              field_definition: {
                name: "activity_type"
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
              remote_field_name: "region",
              field_definition: {
                name: "region"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date",
              field_definition: {
                name: "date"
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
              remote_field_name: "client_id",
              field_definition: {
                name: "client_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_contacts",
              field_definition: {
                name: "client_contacts"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "citi_attendees",
              field_definition: {
                name: "citi_attendees"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "activity_type",
              field_definition: {
                name: "activity_type"
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
  _.extend(CapitalMarketsActivity, Backbone.Events);

  return CapitalMarketsActivity;

})(AP.utility.createClass, AP.model.Model, Backbone);
