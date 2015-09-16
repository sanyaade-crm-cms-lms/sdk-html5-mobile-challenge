/**
RetailBankingRewardsCatalog model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class RetailBankingRewardsCatalog
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.RetailBankingRewardsCatalog = (function($class, _Model, Backbone) {

  var RetailBankingRewardsCatalog = $class({

    extends: _Model,

    _constructor: function RetailBankingRewardsCatalog() {
      CitiMobileChallengeSdk.models.RetailBankingRewardsCatalog._super.constructor.apply(this, arguments);
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
      name: "RetailBankingRewardsCatalog"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "RetailBankingRewardsCatalog",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v5/retail_banking_rewards_catalogs",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "item_category": null,
      
      "item_code": null,
      
      "item_description": null,
      
      "item_name": null,
      
      "point_required": null,
      
      "points_available": null,
      
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
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "item_category",
      label: "item_category",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "item_code",
      label: "item_code",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "item_description",
      label: "item_description",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "item_name",
      label: "item_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "point_required",
      label: "point_required",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "points_available",
      label: "points_available",
      
      
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
              remote_field_name: "points_available",
              field_definition: {
                name: "points_available"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "point_required",
              field_definition: {
                name: "point_required"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_name",
              field_definition: {
                name: "item_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_description",
              field_definition: {
                name: "item_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_code",
              field_definition: {
                name: "item_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_category",
              field_definition: {
                name: "item_category"
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
              remote_field_name: "points_available",
              field_definition: {
                name: "points_available"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "point_required",
              field_definition: {
                name: "point_required"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_name",
              field_definition: {
                name: "item_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_description",
              field_definition: {
                name: "item_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_code",
              field_definition: {
                name: "item_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_category",
              field_definition: {
                name: "item_category"
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
              remote_field_name: "points_available",
              field_definition: {
                name: "points_available"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "point_required",
              field_definition: {
                name: "point_required"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_name",
              field_definition: {
                name: "item_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_description",
              field_definition: {
                name: "item_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_code",
              field_definition: {
                name: "item_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_category",
              field_definition: {
                name: "item_category"
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
              remote_field_name: "points_available",
              field_definition: {
                name: "points_available"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "point_required",
              field_definition: {
                name: "point_required"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_name",
              field_definition: {
                name: "item_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_description",
              field_definition: {
                name: "item_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_code",
              field_definition: {
                name: "item_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_category",
              field_definition: {
                name: "item_category"
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
              remote_field_name: "points_available",
              field_definition: {
                name: "points_available"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "point_required",
              field_definition: {
                name: "point_required"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_name",
              field_definition: {
                name: "item_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_description",
              field_definition: {
                name: "item_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_code",
              field_definition: {
                name: "item_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_category",
              field_definition: {
                name: "item_category"
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
              remote_field_name: "points_available",
              field_definition: {
                name: "points_available"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "point_required",
              field_definition: {
                name: "point_required"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_name",
              field_definition: {
                name: "item_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_description",
              field_definition: {
                name: "item_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_code",
              field_definition: {
                name: "item_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_category",
              field_definition: {
                name: "item_category"
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
              remote_field_name: "points_available",
              field_definition: {
                name: "points_available"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "point_required",
              field_definition: {
                name: "point_required"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_name",
              field_definition: {
                name: "item_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_description",
              field_definition: {
                name: "item_description"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_code",
              field_definition: {
                name: "item_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "item_category",
              field_definition: {
                name: "item_category"
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
              remote_field_name: "points_available",
              field_definition: {
                name: "points_available"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "point_required",
              field_definition: {
                name: "point_required"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_name",
              field_definition: {
                name: "item_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_description",
              field_definition: {
                name: "item_description"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_code",
              field_definition: {
                name: "item_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "item_category",
              field_definition: {
                name: "item_category"
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
  _.extend(RetailBankingRewardsCatalog, Backbone.Events);

  return RetailBankingRewardsCatalog;

})(AP.utility.createClass, AP.model.Model, Backbone);
