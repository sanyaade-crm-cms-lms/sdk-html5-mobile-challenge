/**
CorporatePaymentsCrossBorderFxBooking model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class CorporatePaymentsCrossBorderFxBooking
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxBooking = (function($class, _Model, Backbone) {

  var CorporatePaymentsCrossBorderFxBooking = $class({

    extends: _Model,

    _constructor: function CorporatePaymentsCrossBorderFxBooking() {
      CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxBooking._super.constructor.apply(this, arguments);
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
      name: "CorporatePaymentsCrossBorderFxBooking"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "CorporatePaymentsCrossBorderFxBooking",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v2/corporate_payments_cross_border_fx_bookings",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "accepted_on": null,
      
      "accepted_by": null,
      
      "rate_reference": null,
      
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
      name: "accepted_on",
      label: "accepted_on",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "accepted_by",
      label: "accepted_by",
      
      
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
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "accepted_by",
              field_definition: {
                name: "accepted_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "accepted_on",
              field_definition: {
                name: "accepted_on"
              }
            },
          
        ],
        http_verb: "POST",
        path_selector : "$",
        incremental_path : "/crossborder/fx_bookings",
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
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "accepted_by",
              field_definition: {
                name: "accepted_by"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "accepted_on",
              field_definition: {
                name: "accepted_on"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "accepted_by",
              field_definition: {
                name: "accepted_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "accepted_on",
              field_definition: {
                name: "accepted_on"
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
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "accepted_by",
              field_definition: {
                name: "accepted_by"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "accepted_on",
              field_definition: {
                name: "accepted_on"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "accepted_by",
              field_definition: {
                name: "accepted_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "accepted_on",
              field_definition: {
                name: "accepted_on"
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
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "accepted_by",
              field_definition: {
                name: "accepted_by"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "accepted_on",
              field_definition: {
                name: "accepted_on"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rate_reference",
              field_definition: {
                name: "rate_reference"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "accepted_by",
              field_definition: {
                name: "accepted_by"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "accepted_on",
              field_definition: {
                name: "accepted_on"
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
  _.extend(CorporatePaymentsCrossBorderFxBooking, Backbone.Events);

  return CorporatePaymentsCrossBorderFxBooking;

})(AP.utility.createClass, AP.model.Model, Backbone);
