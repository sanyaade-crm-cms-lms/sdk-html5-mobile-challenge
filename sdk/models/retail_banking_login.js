/**
RetailBankingLogin model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class RetailBankingLogin
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.RetailBankingLogin = (function($class, _Model, Backbone) {

  var RetailBankingLogin = $class({

    extends: _Model,

    _constructor: function RetailBankingLogin() {
      CitiMobileChallengeSdk.models.RetailBankingLogin._super.constructor.apply(this, arguments);
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
      name: "RetailBankingLogin"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "RetailBankingLogin",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v2/retail_banking_logins",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "token": null,
      
      "is_eligible_for_offers": null,
      
      "is_person_to_person_required": null,
      
      "password": null,
      
      "username": null,
      
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
      name: "token",
      label: "token",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "is_eligible_for_offers",
      label: "is_eligible_for_offers",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "is_person_to_person_required",
      label: "is_person_to_person_required",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "password",
      label: "password",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "username",
      label: "username",
      
      
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
      
        "token",
      
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
              remote_field_name: "password",
              field_definition: {
                name: "password"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "username",
              field_definition: {
                name: "username"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_eligible_for_offers",
              field_definition: {
                name: "is_eligible_for_offers"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_person_to_person_required",
              field_definition: {
                name: "is_person_to_person_required"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "username",
              field_definition: {
                name: "username"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "token",
              field_definition: {
                name: "token"
              }
            },
          
        ],
        http_verb: "POST",
        path_selector : "$.*",
        incremental_path : "/login",
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
              remote_field_name: "token",
              field_definition: {
                name: "token"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "password",
              field_definition: {
                name: "password"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_eligible_for_offers",
              field_definition: {
                name: "is_eligible_for_offers"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_person_to_person_required",
              field_definition: {
                name: "is_person_to_person_required"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "username",
              field_definition: {
                name: "username"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "token",
              field_definition: {
                name: "token"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "password",
              field_definition: {
                name: "password"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_eligible_for_offers",
              field_definition: {
                name: "is_eligible_for_offers"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_person_to_person_required",
              field_definition: {
                name: "is_person_to_person_required"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "username",
              field_definition: {
                name: "username"
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
              remote_field_name: "token",
              field_definition: {
                name: "token"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "password",
              field_definition: {
                name: "password"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_eligible_for_offers",
              field_definition: {
                name: "is_eligible_for_offers"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_person_to_person_required",
              field_definition: {
                name: "is_person_to_person_required"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "username",
              field_definition: {
                name: "username"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "token",
              field_definition: {
                name: "token"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "password",
              field_definition: {
                name: "password"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_eligible_for_offers",
              field_definition: {
                name: "is_eligible_for_offers"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_person_to_person_required",
              field_definition: {
                name: "is_person_to_person_required"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "username",
              field_definition: {
                name: "username"
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
              remote_field_name: "token",
              field_definition: {
                name: "token"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "password",
              field_definition: {
                name: "password"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_eligible_for_offers",
              field_definition: {
                name: "is_eligible_for_offers"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "is_person_to_person_required",
              field_definition: {
                name: "is_person_to_person_required"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "username",
              field_definition: {
                name: "username"
              }
            },
          
        ],
        response_field_level_mappings: [
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "token",
              field_definition: {
                name: "token"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "password",
              field_definition: {
                name: "password"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_eligible_for_offers",
              field_definition: {
                name: "is_eligible_for_offers"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "is_person_to_person_required",
              field_definition: {
                name: "is_person_to_person_required"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "username",
              field_definition: {
                name: "username"
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
  _.extend(RetailBankingLogin, Backbone.Events);

  return RetailBankingLogin;

})(AP.utility.createClass, AP.model.Model, Backbone);
