/**
CapitalMarketsOrder model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class CapitalMarketsOrder
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.CapitalMarketsOrder = (function($class, _Model, Backbone) {

  var CapitalMarketsOrder = $class({

    extends: _Model,

    _constructor: function CapitalMarketsOrder() {
      CitiMobileChallengeSdk.models.CapitalMarketsOrder._super.constructor.apply(this, arguments);
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
      name: "CapitalMarketsOrder"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "CapitalMarketsOrder",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v2/capital_markets_orders",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "comments": null,
      
      "currency": null,
      
      "last_price": null,
      
      "last_qty": null,
      
      "price": null,
      
      "quantity": null,
      
      "side": null,
      
      "status": null,
      
      "symbol": null,
      
      "transact_time": null,
      
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
      name: "last_price",
      label: "last_price",
      
      
      type: "float",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "last_qty",
      label: "last_qty",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "price",
      label: "price",
      
      
      type: "float",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "quantity",
      label: "quantity",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "side",
      label: "side",
      
      
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
      name: "symbol",
      label: "symbol",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "transact_time",
      label: "transact_time",
      
      
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
              remote_field_name: "symbol",
              field_definition: {
                name: "symbol"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "side",
              field_definition: {
                name: "side"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "quantity",
              field_definition: {
                name: "quantity"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "price",
              field_definition: {
                name: "price"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "last_qty",
              field_definition: {
                name: "last_qty"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "last_price",
              field_definition: {
                name: "last_price"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "transact_time",
              field_definition: {
                name: "transact_time"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "symbol",
              field_definition: {
                name: "symbol"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "side",
              field_definition: {
                name: "side"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "quantity",
              field_definition: {
                name: "quantity"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "price",
              field_definition: {
                name: "price"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "last_qty",
              field_definition: {
                name: "last_qty"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "last_price",
              field_definition: {
                name: "last_price"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
        incremental_path : "/orders",
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
              remote_field_name: "transact_time",
              field_definition: {
                name: "transact_time"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "symbol",
              field_definition: {
                name: "symbol"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "side",
              field_definition: {
                name: "side"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "quantity",
              field_definition: {
                name: "quantity"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "price",
              field_definition: {
                name: "price"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "last_qty",
              field_definition: {
                name: "last_qty"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "last_price",
              field_definition: {
                name: "last_price"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
              remote_field_name: "transact_time",
              field_definition: {
                name: "transact_time"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "symbol",
              field_definition: {
                name: "symbol"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "side",
              field_definition: {
                name: "side"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "quantity",
              field_definition: {
                name: "quantity"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "price",
              field_definition: {
                name: "price"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "last_qty",
              field_definition: {
                name: "last_qty"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "last_price",
              field_definition: {
                name: "last_price"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
              remote_field_name: "transact_time",
              field_definition: {
                name: "transact_time"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "symbol",
              field_definition: {
                name: "symbol"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "status",
              field_definition: {
                name: "status"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "side",
              field_definition: {
                name: "side"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "quantity",
              field_definition: {
                name: "quantity"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "price",
              field_definition: {
                name: "price"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "last_qty",
              field_definition: {
                name: "last_qty"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "last_price",
              field_definition: {
                name: "last_price"
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
              remote_field_name: "comments",
              field_definition: {
                name: "comments"
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
        incremental_path : "/orders/{{params.id}}",
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
          
        ],
        response_field_level_mappings: [
          
        ],
        http_verb: "DELETE",
        path_selector : "",
        incremental_path : "/orders/{{params.id}}",
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
  _.extend(CapitalMarketsOrder, Backbone.Events);

  return CapitalMarketsOrder;

})(AP.utility.createClass, AP.model.Model, Backbone);
