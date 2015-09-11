/**
CapitalMarketsRevenue model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class CapitalMarketsRevenue
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.CapitalMarketsRevenue = (function($class, _Model, Backbone) {

  var CapitalMarketsRevenue = $class({

    extends: _Model,

    _constructor: function CapitalMarketsRevenue() {
      CitiMobileChallengeSdk.models.CapitalMarketsRevenue._super.constructor.apply(this, arguments);
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
      name: "CapitalMarketsRevenue"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "CapitalMarketsRevenue",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v2/capital_markets_revenues",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "client_id": null,
      
      "client_name": null,
      
      "client_tier": null,
      
      "gross_comm": null,
      
      "month": null,
      
      "product_id": null,
      
      "product_name": null,
      
      "profit_loss": null,
      
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
      name: "client_tier",
      label: "client_tier",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "gross_comm",
      label: "gross_comm",
      
      
      type: "float",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "month",
      label: "month",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "product_id",
      label: "product_id",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "product_name",
      label: "product_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "profit_loss",
      label: "profit_loss",
      
      
      type: "float",
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
              remote_field_name: "profit_loss",
              field_definition: {
                name: "profit_loss"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_name",
              field_definition: {
                name: "product_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_id",
              field_definition: {
                name: "product_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "month",
              field_definition: {
                name: "month"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "gross_comm",
              field_definition: {
                name: "gross_comm"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_tier",
              field_definition: {
                name: "client_tier"
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
              remote_field_name: "profit_loss",
              field_definition: {
                name: "profit_loss"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_name",
              field_definition: {
                name: "product_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_id",
              field_definition: {
                name: "product_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "month",
              field_definition: {
                name: "month"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "gross_comm",
              field_definition: {
                name: "gross_comm"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_tier",
              field_definition: {
                name: "client_tier"
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
              remote_field_name: "profit_loss",
              field_definition: {
                name: "profit_loss"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_name",
              field_definition: {
                name: "product_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_id",
              field_definition: {
                name: "product_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "month",
              field_definition: {
                name: "month"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "gross_comm",
              field_definition: {
                name: "gross_comm"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_tier",
              field_definition: {
                name: "client_tier"
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
              remote_field_name: "id",
              field_definition: {
                name: "id"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "region",
              field_definition: {
                name: "region"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "profit_loss",
              field_definition: {
                name: "profit_loss"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_name",
              field_definition: {
                name: "product_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_id",
              field_definition: {
                name: "product_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "month",
              field_definition: {
                name: "month"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "gross_comm",
              field_definition: {
                name: "gross_comm"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_tier",
              field_definition: {
                name: "client_tier"
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
              remote_field_name: "year",
              field_definition: {
                name: "year"
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
              remote_field_name: "profit_loss",
              field_definition: {
                name: "profit_loss"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_name",
              field_definition: {
                name: "product_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_id",
              field_definition: {
                name: "product_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "month",
              field_definition: {
                name: "month"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "gross_comm",
              field_definition: {
                name: "gross_comm"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_tier",
              field_definition: {
                name: "client_tier"
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
              remote_field_name: "profit_loss",
              field_definition: {
                name: "profit_loss"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_name",
              field_definition: {
                name: "product_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_id",
              field_definition: {
                name: "product_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "month",
              field_definition: {
                name: "month"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "gross_comm",
              field_definition: {
                name: "gross_comm"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_tier",
              field_definition: {
                name: "client_tier"
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
              remote_field_name: "profit_loss",
              field_definition: {
                name: "profit_loss"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_name",
              field_definition: {
                name: "product_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_id",
              field_definition: {
                name: "product_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "month",
              field_definition: {
                name: "month"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "gross_comm",
              field_definition: {
                name: "gross_comm"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "client_tier",
              field_definition: {
                name: "client_tier"
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
              remote_field_name: "profit_loss",
              field_definition: {
                name: "profit_loss"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_name",
              field_definition: {
                name: "product_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_id",
              field_definition: {
                name: "product_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "month",
              field_definition: {
                name: "month"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "gross_comm",
              field_definition: {
                name: "gross_comm"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "client_tier",
              field_definition: {
                name: "client_tier"
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
  _.extend(CapitalMarketsRevenue, Backbone.Events);

  return CapitalMarketsRevenue;

})(AP.utility.createClass, AP.model.Model, Backbone);
