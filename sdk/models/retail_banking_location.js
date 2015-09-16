/**
RetailBankingLocation model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class RetailBankingLocation
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.RetailBankingLocation = (function($class, _Model, Backbone) {

  var RetailBankingLocation = $class({

    extends: _Model,

    _constructor: function RetailBankingLocation() {
      CitiMobileChallengeSdk.models.RetailBankingLocation._super.constructor.apply(this, arguments);
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
      name: "RetailBankingLocation"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "RetailBankingLocation",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v5/retail_banking_locations",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "address_line_one": null,
      
      "address_line_two": null,
      
      "city": null,
      
      "comments": null,
      
      "country": null,
      
      "external_link": null,
      
      "latitude": null,
      
      "location_type": null,
      
      "longitude": null,
      
      "name": null,
      
      "phone": null,
      
      "postal_code": null,
      
      "state": null,
      
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
      name: "address_line_one",
      label: "address_line_one",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "address_line_two",
      label: "address_line_two",
      
      
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
      name: "comments",
      label: "comments",
      
      
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
      name: "external_link",
      label: "external_link",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "latitude",
      label: "latitude",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "location_type",
      label: "location_type",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "longitude",
      label: "longitude",
      
      
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
      name: "postal_code",
      label: "postal_code",
      
      
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
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "postal_code",
              field_definition: {
                name: "postal_code"
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
              remote_field_name: "longitude",
              field_definition: {
                name: "longitude"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "location_type",
              field_definition: {
                name: "location_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "latitude",
              field_definition: {
                name: "latitude"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "external_link",
              field_definition: {
                name: "external_link"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
              remote_field_name: "address_2",
              field_definition: {
                name: "address_line_two"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "address_1",
              field_definition: {
                name: "address_line_one"
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
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "postal_code",
              field_definition: {
                name: "postal_code"
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
              remote_field_name: "longitude",
              field_definition: {
                name: "longitude"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "location_type",
              field_definition: {
                name: "location_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "latitude",
              field_definition: {
                name: "latitude"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "external_link",
              field_definition: {
                name: "external_link"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
              remote_field_name: "address_2",
              field_definition: {
                name: "address_line_two"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "address_1",
              field_definition: {
                name: "address_line_one"
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
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "postal_code",
              field_definition: {
                name: "postal_code"
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
              remote_field_name: "longitude",
              field_definition: {
                name: "longitude"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "location_type",
              field_definition: {
                name: "location_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "latitude",
              field_definition: {
                name: "latitude"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "external_link",
              field_definition: {
                name: "external_link"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
              remote_field_name: "address_2",
              field_definition: {
                name: "address_line_two"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "address_1",
              field_definition: {
                name: "address_line_one"
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
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "postal_code",
              field_definition: {
                name: "postal_code"
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
              remote_field_name: "longitude",
              field_definition: {
                name: "longitude"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "location_type",
              field_definition: {
                name: "location_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "latitude",
              field_definition: {
                name: "latitude"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "external_link",
              field_definition: {
                name: "external_link"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
              remote_field_name: "address_2",
              field_definition: {
                name: "address_line_two"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "address_1",
              field_definition: {
                name: "address_line_one"
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
              remote_field_name: "phone",
              field_definition: {
                name: "phone"
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
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "postal_code",
              field_definition: {
                name: "postal_code"
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
              remote_field_name: "longitude",
              field_definition: {
                name: "longitude"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "location_type",
              field_definition: {
                name: "location_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "latitude",
              field_definition: {
                name: "latitude"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "external_link",
              field_definition: {
                name: "external_link"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
              remote_field_name: "address_2",
              field_definition: {
                name: "address_line_two"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "address_1",
              field_definition: {
                name: "address_line_one"
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
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "postal_code",
              field_definition: {
                name: "postal_code"
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
              remote_field_name: "longitude",
              field_definition: {
                name: "longitude"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "location_type",
              field_definition: {
                name: "location_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "latitude",
              field_definition: {
                name: "latitude"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "external_link",
              field_definition: {
                name: "external_link"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
              remote_field_name: "address_2",
              field_definition: {
                name: "address_line_two"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "address_1",
              field_definition: {
                name: "address_line_one"
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
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "postal_code",
              field_definition: {
                name: "postal_code"
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
              remote_field_name: "longitude",
              field_definition: {
                name: "longitude"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "location_type",
              field_definition: {
                name: "location_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "latitude",
              field_definition: {
                name: "latitude"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "external_link",
              field_definition: {
                name: "external_link"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
              remote_field_name: "address_2",
              field_definition: {
                name: "address_line_two"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "address_1",
              field_definition: {
                name: "address_line_one"
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
              remote_field_name: "state",
              field_definition: {
                name: "state"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "postal_code",
              field_definition: {
                name: "postal_code"
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
              remote_field_name: "longitude",
              field_definition: {
                name: "longitude"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "location_type",
              field_definition: {
                name: "location_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "latitude",
              field_definition: {
                name: "latitude"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "external_link",
              field_definition: {
                name: "external_link"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
              remote_field_name: "address_2",
              field_definition: {
                name: "address_line_two"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "address_1",
              field_definition: {
                name: "address_line_one"
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
  _.extend(RetailBankingLocation, Backbone.Events);

  return RetailBankingLocation;

})(AP.utility.createClass, AP.model.Model, Backbone);
