/**
CapitalMarketsContentService model for application `CitiMobileChallengeSdk`.  See
`AP.model.Model` for more information about models.

@module CitiMobileChallengeSdk
@submodule models
@class CapitalMarketsContentService
@extends AP.model.Model
 */
CitiMobileChallengeSdk.models.CapitalMarketsContentService = (function($class, _Model, Backbone) {

  var CapitalMarketsContentService = $class({

    extends: _Model,

    _constructor: function CapitalMarketsContentService() {
      CitiMobileChallengeSdk.models.CapitalMarketsContentService._super.constructor.apply(this, arguments);
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
      name: "CapitalMarketsContentService"
    },

    /**
    The model name may be used to look-up a model from an application class.
    @property name
    @type String
     */
    name: "CapitalMarketsContentService",

    /**
    Server requests for model instances use this URL.
    @property urlRoot
    @type String'
     */
    urlRoot: "/api/v5/capital_markets_content_services",

    /**
    Default values for this model.
    @property defaults
    @type Object
    */
    defaults: {
      
      "id": null,
      
      "alert_date": null,
      
      "all_attachments": null,
      
      "analyst_id": null,
      
      "analyst_type": null,
      
      "asset_class": null,
      
      "attachment_id": null,
      
      "author_details": null,
      
      "author_id": null,
      
      "author_name": null,
      
      "authors": null,
      
      "company": null,
      
      "content_services_type": null,
      
      "content_type": null,
      
      "content_url": null,
      
      "date_string": null,
      
      "document_url": null,
      
      "encrypted_id": null,
      
      "file_link": null,
      
      "file_name": null,
      
      "file_type": null,
      
      "formated_pub_date": null,
      
      "formatted_date_str": null,
      
      "headline": null,
      
      "hit_count": null,
      
      "html_escaped_title": null,
      
      "image": null,
      
      "image_group": null,
      
      "kv": null,
      
      "medial_url_ios": null,
      
      "media_url_android": null,
      
      "menu_code": null,
      
      "miliseconds": null,
      
      "obo_first_name": null,
      
      "obo_last_name": null,
      
      "obo_preferred_name": null,
      
      "page_count": null,
      
      "product_list": null,
      
      "product_type": null,
      
      "pub_date": null,
      
      "pub_id": null,
      
      "pub_key": null,
      
      "ref_article_title": null,
      
      "ref_article_url": null,
      
      "region": null,
      
      "resdata_url": null,
      
      "rnum": null,
      
      "scale": null,
      
      "sectors": null,
      
      "source": null,
      
      "summary": null,
      
      "synopsis": null,
      
      "template": null,
      
      "theme_id": null,
      
      "tickers": null,
      
      "title": null,
      
      "total_count": null,
      
      "video_type": null,
      
      "video_url": null,
      
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
      name: "alert_date",
      label: "alert_date",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "all_attachments",
      label: "all_attachments",
      
      
      type: "array",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "analyst_id",
      label: "analyst_id",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "analyst_type",
      label: "analyst_type",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "asset_class",
      label: "asset_class",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "attachment_id",
      label: "attachment_id",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "author_details",
      label: "author_details",
      
      
      type: "array",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "author_id",
      label: "author_id",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "author_name",
      label: "author_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "authors",
      label: "authors",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "company",
      label: "company",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "content_services_type",
      label: "content_services_type",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "content_type",
      label: "content_type",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "content_url",
      label: "content_url",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "date_string",
      label: "date_string",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "document_url",
      label: "document_url",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "encrypted_id",
      label: "encrypted_id",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "file_link",
      label: "file_link",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "file_name",
      label: "file_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "file_type",
      label: "file_type",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "formated_pub_date",
      label: "formated_pub_date",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "formatted_date_str",
      label: "formatted_date_str",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "headline",
      label: "headline",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "hit_count",
      label: "hit_count",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "html_escaped_title",
      label: "html_escaped_title",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "image",
      label: "image",
      
      
      type: "string",
      required: false,
      file_url: true,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "image_group",
      label: "image_group",
      
      
      type: "array",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "kv",
      label: "kv",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "medial_url_ios",
      label: "medial_url_ios",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "media_url_android",
      label: "media_url_android",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "menu_code",
      label: "menu_code",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "miliseconds",
      label: "miliseconds",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "obo_first_name",
      label: "obo_first_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "obo_last_name",
      label: "obo_last_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "obo_preferred_name",
      label: "obo_preferred_name",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "page_count",
      label: "page_count",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "product_list",
      label: "product_list",
      
      
      type: "array",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "product_type",
      label: "product_type",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "pub_date",
      label: "pub_date",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "pub_id",
      label: "pub_id",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "pub_key",
      label: "pub_key",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "ref_article_title",
      label: "ref_article_title",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "ref_article_url",
      label: "ref_article_url",
      
      
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
      name: "resdata_url",
      label: "resdata_url",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "rnum",
      label: "rnum",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "scale",
      label: "scale",
      
      
      type: "array",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "sectors",
      label: "sectors",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "source",
      label: "source",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "summary",
      label: "summary",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "synopsis",
      label: "synopsis",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "template",
      label: "template",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "theme_id",
      label: "theme_id",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "tickers",
      label: "tickers",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "title",
      label: "title",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "total_count",
      label: "total_count",
      
      
      type: "integer",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "video_type",
      label: "video_type",
      
      
      type: "string",
      required: false,
      file_url: false,
      file_type: "Image",
      },
    
      {
      // TODO where is the field ID?
      //id: 
      name: "video_url",
      label: "video_url",
      
      
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
              remote_field_name: "video_url",
              field_definition: {
                name: "video_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "video_type",
              field_definition: {
                name: "video_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "type",
              field_definition: {
                name: "content_services_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "total_count",
              field_definition: {
                name: "total_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "title",
              field_definition: {
                name: "title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "tickers",
              field_definition: {
                name: "tickers"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "theme_id",
              field_definition: {
                name: "theme_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "template",
              field_definition: {
                name: "template"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "synopsis",
              field_definition: {
                name: "synopsis"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "summary",
              field_definition: {
                name: "summary"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "source",
              field_definition: {
                name: "source"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "sectors",
              field_definition: {
                name: "sectors"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "scale",
              field_definition: {
                name: "scale"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "rnum",
              field_definition: {
                name: "rnum"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "resdata_url",
              field_definition: {
                name: "resdata_url"
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
              remote_field_name: "ref_article_url",
              field_definition: {
                name: "ref_article_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "ref_article_title",
              field_definition: {
                name: "ref_article_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_key",
              field_definition: {
                name: "pub_key"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_id",
              field_definition: {
                name: "pub_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_date",
              field_definition: {
                name: "pub_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_list",
              field_definition: {
                name: "product_list"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "page_count",
              field_definition: {
                name: "page_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_preferred_name",
              field_definition: {
                name: "obo_preferred_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_last_name",
              field_definition: {
                name: "obo_last_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_first_name",
              field_definition: {
                name: "obo_first_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "miliseconds",
              field_definition: {
                name: "miliseconds"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "menu_code",
              field_definition: {
                name: "menu_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "medial_url_ios",
              field_definition: {
                name: "medial_url_ios"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "media_url_android",
              field_definition: {
                name: "media_url_android"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "kv",
              field_definition: {
                name: "kv"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "image",
              field_definition: {
                name: "image"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "image_group",
              field_definition: {
                name: "image_group"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "html_escaped_title",
              field_definition: {
                name: "html_escaped_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "hit_count",
              field_definition: {
                name: "hit_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "headline",
              field_definition: {
                name: "headline"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formatted_date_str",
              field_definition: {
                name: "formatted_date_str"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formated_pub_date",
              field_definition: {
                name: "formated_pub_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_type",
              field_definition: {
                name: "file_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_name",
              field_definition: {
                name: "file_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_link",
              field_definition: {
                name: "file_link"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "encrypted_id",
              field_definition: {
                name: "encrypted_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "document_url",
              field_definition: {
                name: "document_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date_string",
              field_definition: {
                name: "date_string"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "content_url",
              field_definition: {
                name: "content_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "content_type",
              field_definition: {
                name: "content_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "company",
              field_definition: {
                name: "company"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "authors",
              field_definition: {
                name: "authors"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_name",
              field_definition: {
                name: "author_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_id",
              field_definition: {
                name: "author_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_details",
              field_definition: {
                name: "author_details"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "attachment_id",
              field_definition: {
                name: "attachment_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "asset_class",
              field_definition: {
                name: "asset_class"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "analyst_type",
              field_definition: {
                name: "analyst_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "analyst_id",
              field_definition: {
                name: "analyst_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "all_attachments",
              field_definition: {
                name: "all_attachments"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "alert_date",
              field_definition: {
                name: "alert_date"
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
              remote_field_name: "video_url",
              field_definition: {
                name: "video_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "video_type",
              field_definition: {
                name: "video_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "type",
              field_definition: {
                name: "content_services_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "total_count",
              field_definition: {
                name: "total_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "title",
              field_definition: {
                name: "title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "tickers",
              field_definition: {
                name: "tickers"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "theme_id",
              field_definition: {
                name: "theme_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "template",
              field_definition: {
                name: "template"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "synopsis",
              field_definition: {
                name: "synopsis"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "summary",
              field_definition: {
                name: "summary"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "source",
              field_definition: {
                name: "source"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "sectors",
              field_definition: {
                name: "sectors"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "scale",
              field_definition: {
                name: "scale"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rnum",
              field_definition: {
                name: "rnum"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "resdata_url",
              field_definition: {
                name: "resdata_url"
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
              remote_field_name: "ref_article_url",
              field_definition: {
                name: "ref_article_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "ref_article_title",
              field_definition: {
                name: "ref_article_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_key",
              field_definition: {
                name: "pub_key"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_id",
              field_definition: {
                name: "pub_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_date",
              field_definition: {
                name: "pub_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_list",
              field_definition: {
                name: "product_list"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "page_count",
              field_definition: {
                name: "page_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_preferred_name",
              field_definition: {
                name: "obo_preferred_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_last_name",
              field_definition: {
                name: "obo_last_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_first_name",
              field_definition: {
                name: "obo_first_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "miliseconds",
              field_definition: {
                name: "miliseconds"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "menu_code",
              field_definition: {
                name: "menu_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "medial_url_ios",
              field_definition: {
                name: "medial_url_ios"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "media_url_android",
              field_definition: {
                name: "media_url_android"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "kv",
              field_definition: {
                name: "kv"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "image",
              field_definition: {
                name: "image"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "image_group",
              field_definition: {
                name: "image_group"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "html_escaped_title",
              field_definition: {
                name: "html_escaped_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "hit_count",
              field_definition: {
                name: "hit_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "headline",
              field_definition: {
                name: "headline"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formatted_date_str",
              field_definition: {
                name: "formatted_date_str"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formated_pub_date",
              field_definition: {
                name: "formated_pub_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_type",
              field_definition: {
                name: "file_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_name",
              field_definition: {
                name: "file_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_link",
              field_definition: {
                name: "file_link"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "encrypted_id",
              field_definition: {
                name: "encrypted_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "document_url",
              field_definition: {
                name: "document_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date_string",
              field_definition: {
                name: "date_string"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "content_url",
              field_definition: {
                name: "content_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "content_type",
              field_definition: {
                name: "content_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "company",
              field_definition: {
                name: "company"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "authors",
              field_definition: {
                name: "authors"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_name",
              field_definition: {
                name: "author_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_id",
              field_definition: {
                name: "author_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_details",
              field_definition: {
                name: "author_details"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "attachment_id",
              field_definition: {
                name: "attachment_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "asset_class",
              field_definition: {
                name: "asset_class"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "analyst_type",
              field_definition: {
                name: "analyst_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "analyst_id",
              field_definition: {
                name: "analyst_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "all_attachments",
              field_definition: {
                name: "all_attachments"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "alert_date",
              field_definition: {
                name: "alert_date"
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
              remote_field_name: "video_url",
              field_definition: {
                name: "video_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "video_type",
              field_definition: {
                name: "video_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "type",
              field_definition: {
                name: "content_services_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "total_count",
              field_definition: {
                name: "total_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "title",
              field_definition: {
                name: "title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "tickers",
              field_definition: {
                name: "tickers"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "theme_id",
              field_definition: {
                name: "theme_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "template",
              field_definition: {
                name: "template"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "synopsis",
              field_definition: {
                name: "synopsis"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "summary",
              field_definition: {
                name: "summary"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "source",
              field_definition: {
                name: "source"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "sectors",
              field_definition: {
                name: "sectors"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "scale",
              field_definition: {
                name: "scale"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "rnum",
              field_definition: {
                name: "rnum"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "resdata_url",
              field_definition: {
                name: "resdata_url"
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
              remote_field_name: "ref_article_url",
              field_definition: {
                name: "ref_article_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "ref_article_title",
              field_definition: {
                name: "ref_article_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_key",
              field_definition: {
                name: "pub_key"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_id",
              field_definition: {
                name: "pub_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_date",
              field_definition: {
                name: "pub_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_list",
              field_definition: {
                name: "product_list"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "page_count",
              field_definition: {
                name: "page_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_preferred_name",
              field_definition: {
                name: "obo_preferred_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_last_name",
              field_definition: {
                name: "obo_last_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_first_name",
              field_definition: {
                name: "obo_first_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "miliseconds",
              field_definition: {
                name: "miliseconds"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "menu_code",
              field_definition: {
                name: "menu_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "medial_url_ios",
              field_definition: {
                name: "medial_url_ios"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "media_url_android",
              field_definition: {
                name: "media_url_android"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "kv",
              field_definition: {
                name: "kv"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "image",
              field_definition: {
                name: "image"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "image_group",
              field_definition: {
                name: "image_group"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "html_escaped_title",
              field_definition: {
                name: "html_escaped_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "hit_count",
              field_definition: {
                name: "hit_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "headline",
              field_definition: {
                name: "headline"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formatted_date_str",
              field_definition: {
                name: "formatted_date_str"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formated_pub_date",
              field_definition: {
                name: "formated_pub_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_type",
              field_definition: {
                name: "file_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_name",
              field_definition: {
                name: "file_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_link",
              field_definition: {
                name: "file_link"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "encrypted_id",
              field_definition: {
                name: "encrypted_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "document_url",
              field_definition: {
                name: "document_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date_string",
              field_definition: {
                name: "date_string"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "content_url",
              field_definition: {
                name: "content_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "content_type",
              field_definition: {
                name: "content_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "company",
              field_definition: {
                name: "company"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "authors",
              field_definition: {
                name: "authors"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_name",
              field_definition: {
                name: "author_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_id",
              field_definition: {
                name: "author_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_details",
              field_definition: {
                name: "author_details"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "attachment_id",
              field_definition: {
                name: "attachment_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "asset_class",
              field_definition: {
                name: "asset_class"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "analyst_type",
              field_definition: {
                name: "analyst_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "analyst_id",
              field_definition: {
                name: "analyst_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "all_attachments",
              field_definition: {
                name: "all_attachments"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "alert_date",
              field_definition: {
                name: "alert_date"
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
              remote_field_name: "video_url",
              field_definition: {
                name: "video_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "video_type",
              field_definition: {
                name: "video_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "type",
              field_definition: {
                name: "content_services_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "total_count",
              field_definition: {
                name: "total_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "title",
              field_definition: {
                name: "title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "tickers",
              field_definition: {
                name: "tickers"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "theme_id",
              field_definition: {
                name: "theme_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "template",
              field_definition: {
                name: "template"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "synopsis",
              field_definition: {
                name: "synopsis"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "summary",
              field_definition: {
                name: "summary"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "source",
              field_definition: {
                name: "source"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "sectors",
              field_definition: {
                name: "sectors"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "scale",
              field_definition: {
                name: "scale"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rnum",
              field_definition: {
                name: "rnum"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "resdata_url",
              field_definition: {
                name: "resdata_url"
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
              remote_field_name: "ref_article_url",
              field_definition: {
                name: "ref_article_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "ref_article_title",
              field_definition: {
                name: "ref_article_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_key",
              field_definition: {
                name: "pub_key"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_id",
              field_definition: {
                name: "pub_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_date",
              field_definition: {
                name: "pub_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_list",
              field_definition: {
                name: "product_list"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "page_count",
              field_definition: {
                name: "page_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_preferred_name",
              field_definition: {
                name: "obo_preferred_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_last_name",
              field_definition: {
                name: "obo_last_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_first_name",
              field_definition: {
                name: "obo_first_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "miliseconds",
              field_definition: {
                name: "miliseconds"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "menu_code",
              field_definition: {
                name: "menu_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "medial_url_ios",
              field_definition: {
                name: "medial_url_ios"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "media_url_android",
              field_definition: {
                name: "media_url_android"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "kv",
              field_definition: {
                name: "kv"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "image",
              field_definition: {
                name: "image"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "image_group",
              field_definition: {
                name: "image_group"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "html_escaped_title",
              field_definition: {
                name: "html_escaped_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "hit_count",
              field_definition: {
                name: "hit_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "headline",
              field_definition: {
                name: "headline"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formatted_date_str",
              field_definition: {
                name: "formatted_date_str"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formated_pub_date",
              field_definition: {
                name: "formated_pub_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_type",
              field_definition: {
                name: "file_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_name",
              field_definition: {
                name: "file_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_link",
              field_definition: {
                name: "file_link"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "encrypted_id",
              field_definition: {
                name: "encrypted_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "document_url",
              field_definition: {
                name: "document_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date_string",
              field_definition: {
                name: "date_string"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "content_url",
              field_definition: {
                name: "content_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "content_type",
              field_definition: {
                name: "content_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "company",
              field_definition: {
                name: "company"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "authors",
              field_definition: {
                name: "authors"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_name",
              field_definition: {
                name: "author_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_id",
              field_definition: {
                name: "author_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_details",
              field_definition: {
                name: "author_details"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "attachment_id",
              field_definition: {
                name: "attachment_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "asset_class",
              field_definition: {
                name: "asset_class"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "analyst_type",
              field_definition: {
                name: "analyst_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "analyst_id",
              field_definition: {
                name: "analyst_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "all_attachments",
              field_definition: {
                name: "all_attachments"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "alert_date",
              field_definition: {
                name: "alert_date"
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
              remote_field_name: "video_url",
              field_definition: {
                name: "video_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "video_type",
              field_definition: {
                name: "video_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "type",
              field_definition: {
                name: "content_services_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "total_count",
              field_definition: {
                name: "total_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "title",
              field_definition: {
                name: "title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "tickers",
              field_definition: {
                name: "tickers"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "theme_id",
              field_definition: {
                name: "theme_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "template",
              field_definition: {
                name: "template"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "synopsis",
              field_definition: {
                name: "synopsis"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "summary",
              field_definition: {
                name: "summary"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "source",
              field_definition: {
                name: "source"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "sectors",
              field_definition: {
                name: "sectors"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "scale",
              field_definition: {
                name: "scale"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "rnum",
              field_definition: {
                name: "rnum"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "resdata_url",
              field_definition: {
                name: "resdata_url"
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
              remote_field_name: "ref_article_url",
              field_definition: {
                name: "ref_article_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "ref_article_title",
              field_definition: {
                name: "ref_article_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_key",
              field_definition: {
                name: "pub_key"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_id",
              field_definition: {
                name: "pub_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_date",
              field_definition: {
                name: "pub_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_list",
              field_definition: {
                name: "product_list"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "page_count",
              field_definition: {
                name: "page_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_preferred_name",
              field_definition: {
                name: "obo_preferred_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_last_name",
              field_definition: {
                name: "obo_last_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_first_name",
              field_definition: {
                name: "obo_first_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "miliseconds",
              field_definition: {
                name: "miliseconds"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "menu_code",
              field_definition: {
                name: "menu_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "medial_url_ios",
              field_definition: {
                name: "medial_url_ios"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "media_url_android",
              field_definition: {
                name: "media_url_android"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "kv",
              field_definition: {
                name: "kv"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "image",
              field_definition: {
                name: "image"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "image_group",
              field_definition: {
                name: "image_group"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "html_escaped_title",
              field_definition: {
                name: "html_escaped_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "hit_count",
              field_definition: {
                name: "hit_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "headline",
              field_definition: {
                name: "headline"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formatted_date_str",
              field_definition: {
                name: "formatted_date_str"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formated_pub_date",
              field_definition: {
                name: "formated_pub_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_type",
              field_definition: {
                name: "file_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_name",
              field_definition: {
                name: "file_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_link",
              field_definition: {
                name: "file_link"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "encrypted_id",
              field_definition: {
                name: "encrypted_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "document_url",
              field_definition: {
                name: "document_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date_string",
              field_definition: {
                name: "date_string"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "content_url",
              field_definition: {
                name: "content_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "content_type",
              field_definition: {
                name: "content_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "company",
              field_definition: {
                name: "company"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "authors",
              field_definition: {
                name: "authors"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_name",
              field_definition: {
                name: "author_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_id",
              field_definition: {
                name: "author_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_details",
              field_definition: {
                name: "author_details"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "attachment_id",
              field_definition: {
                name: "attachment_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "asset_class",
              field_definition: {
                name: "asset_class"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "analyst_type",
              field_definition: {
                name: "analyst_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "analyst_id",
              field_definition: {
                name: "analyst_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "all_attachments",
              field_definition: {
                name: "all_attachments"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "alert_date",
              field_definition: {
                name: "alert_date"
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
              remote_field_name: "video_url",
              field_definition: {
                name: "video_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "video_type",
              field_definition: {
                name: "video_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "type",
              field_definition: {
                name: "content_services_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "total_count",
              field_definition: {
                name: "total_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "title",
              field_definition: {
                name: "title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "tickers",
              field_definition: {
                name: "tickers"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "theme_id",
              field_definition: {
                name: "theme_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "template",
              field_definition: {
                name: "template"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "synopsis",
              field_definition: {
                name: "synopsis"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "summary",
              field_definition: {
                name: "summary"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "source",
              field_definition: {
                name: "source"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "sectors",
              field_definition: {
                name: "sectors"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "scale",
              field_definition: {
                name: "scale"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rnum",
              field_definition: {
                name: "rnum"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "resdata_url",
              field_definition: {
                name: "resdata_url"
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
              remote_field_name: "ref_article_url",
              field_definition: {
                name: "ref_article_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "ref_article_title",
              field_definition: {
                name: "ref_article_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_key",
              field_definition: {
                name: "pub_key"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_id",
              field_definition: {
                name: "pub_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_date",
              field_definition: {
                name: "pub_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_list",
              field_definition: {
                name: "product_list"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "page_count",
              field_definition: {
                name: "page_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_preferred_name",
              field_definition: {
                name: "obo_preferred_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_last_name",
              field_definition: {
                name: "obo_last_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_first_name",
              field_definition: {
                name: "obo_first_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "miliseconds",
              field_definition: {
                name: "miliseconds"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "menu_code",
              field_definition: {
                name: "menu_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "medial_url_ios",
              field_definition: {
                name: "medial_url_ios"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "media_url_android",
              field_definition: {
                name: "media_url_android"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "kv",
              field_definition: {
                name: "kv"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "image",
              field_definition: {
                name: "image"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "image_group",
              field_definition: {
                name: "image_group"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "html_escaped_title",
              field_definition: {
                name: "html_escaped_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "hit_count",
              field_definition: {
                name: "hit_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "headline",
              field_definition: {
                name: "headline"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formatted_date_str",
              field_definition: {
                name: "formatted_date_str"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formated_pub_date",
              field_definition: {
                name: "formated_pub_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_type",
              field_definition: {
                name: "file_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_name",
              field_definition: {
                name: "file_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_link",
              field_definition: {
                name: "file_link"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "encrypted_id",
              field_definition: {
                name: "encrypted_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "document_url",
              field_definition: {
                name: "document_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date_string",
              field_definition: {
                name: "date_string"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "content_url",
              field_definition: {
                name: "content_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "content_type",
              field_definition: {
                name: "content_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "company",
              field_definition: {
                name: "company"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "authors",
              field_definition: {
                name: "authors"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_name",
              field_definition: {
                name: "author_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_id",
              field_definition: {
                name: "author_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_details",
              field_definition: {
                name: "author_details"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "attachment_id",
              field_definition: {
                name: "attachment_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "asset_class",
              field_definition: {
                name: "asset_class"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "analyst_type",
              field_definition: {
                name: "analyst_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "analyst_id",
              field_definition: {
                name: "analyst_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "all_attachments",
              field_definition: {
                name: "all_attachments"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "alert_date",
              field_definition: {
                name: "alert_date"
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
              remote_field_name: "video_url",
              field_definition: {
                name: "video_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "video_type",
              field_definition: {
                name: "video_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "type",
              field_definition: {
                name: "content_services_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "total_count",
              field_definition: {
                name: "total_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "title",
              field_definition: {
                name: "title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "tickers",
              field_definition: {
                name: "tickers"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "theme_id",
              field_definition: {
                name: "theme_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "template",
              field_definition: {
                name: "template"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "synopsis",
              field_definition: {
                name: "synopsis"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "summary",
              field_definition: {
                name: "summary"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "source",
              field_definition: {
                name: "source"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "sectors",
              field_definition: {
                name: "sectors"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "scale",
              field_definition: {
                name: "scale"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "rnum",
              field_definition: {
                name: "rnum"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "resdata_url",
              field_definition: {
                name: "resdata_url"
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
              remote_field_name: "ref_article_url",
              field_definition: {
                name: "ref_article_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "ref_article_title",
              field_definition: {
                name: "ref_article_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_key",
              field_definition: {
                name: "pub_key"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_id",
              field_definition: {
                name: "pub_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "pub_date",
              field_definition: {
                name: "pub_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "product_list",
              field_definition: {
                name: "product_list"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "page_count",
              field_definition: {
                name: "page_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_preferred_name",
              field_definition: {
                name: "obo_preferred_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_last_name",
              field_definition: {
                name: "obo_last_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "obo_first_name",
              field_definition: {
                name: "obo_first_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "miliseconds",
              field_definition: {
                name: "miliseconds"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "menu_code",
              field_definition: {
                name: "menu_code"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "medial_url_ios",
              field_definition: {
                name: "medial_url_ios"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "media_url_android",
              field_definition: {
                name: "media_url_android"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "kv",
              field_definition: {
                name: "kv"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "image",
              field_definition: {
                name: "image"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "image_group",
              field_definition: {
                name: "image_group"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "html_escaped_title",
              field_definition: {
                name: "html_escaped_title"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "hit_count",
              field_definition: {
                name: "hit_count"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "headline",
              field_definition: {
                name: "headline"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formatted_date_str",
              field_definition: {
                name: "formatted_date_str"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "formated_pub_date",
              field_definition: {
                name: "formated_pub_date"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_type",
              field_definition: {
                name: "file_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_name",
              field_definition: {
                name: "file_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "file_link",
              field_definition: {
                name: "file_link"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "encrypted_id",
              field_definition: {
                name: "encrypted_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "document_url",
              field_definition: {
                name: "document_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "date_string",
              field_definition: {
                name: "date_string"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "content_url",
              field_definition: {
                name: "content_url"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "content_type",
              field_definition: {
                name: "content_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "company",
              field_definition: {
                name: "company"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "authors",
              field_definition: {
                name: "authors"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_name",
              field_definition: {
                name: "author_name"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_id",
              field_definition: {
                name: "author_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "author_details",
              field_definition: {
                name: "author_details"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "attachment_id",
              field_definition: {
                name: "attachment_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "asset_class",
              field_definition: {
                name: "asset_class"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "analyst_type",
              field_definition: {
                name: "analyst_type"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "analyst_id",
              field_definition: {
                name: "analyst_id"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "all_attachments",
              field_definition: {
                name: "all_attachments"
              }
            },
          
            {
              type: "RequestFieldLevelMapping",
              remote_field_name: "alert_date",
              field_definition: {
                name: "alert_date"
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
              remote_field_name: "video_url",
              field_definition: {
                name: "video_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "video_type",
              field_definition: {
                name: "video_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "type",
              field_definition: {
                name: "content_services_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "total_count",
              field_definition: {
                name: "total_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "title",
              field_definition: {
                name: "title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "tickers",
              field_definition: {
                name: "tickers"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "theme_id",
              field_definition: {
                name: "theme_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "template",
              field_definition: {
                name: "template"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "synopsis",
              field_definition: {
                name: "synopsis"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "summary",
              field_definition: {
                name: "summary"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "source",
              field_definition: {
                name: "source"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "sectors",
              field_definition: {
                name: "sectors"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "scale",
              field_definition: {
                name: "scale"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "rnum",
              field_definition: {
                name: "rnum"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "resdata_url",
              field_definition: {
                name: "resdata_url"
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
              remote_field_name: "ref_article_url",
              field_definition: {
                name: "ref_article_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "ref_article_title",
              field_definition: {
                name: "ref_article_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_key",
              field_definition: {
                name: "pub_key"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_id",
              field_definition: {
                name: "pub_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "pub_date",
              field_definition: {
                name: "pub_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_type",
              field_definition: {
                name: "product_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "product_list",
              field_definition: {
                name: "product_list"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "page_count",
              field_definition: {
                name: "page_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_preferred_name",
              field_definition: {
                name: "obo_preferred_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_last_name",
              field_definition: {
                name: "obo_last_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "obo_first_name",
              field_definition: {
                name: "obo_first_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "miliseconds",
              field_definition: {
                name: "miliseconds"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "menu_code",
              field_definition: {
                name: "menu_code"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "medial_url_ios",
              field_definition: {
                name: "medial_url_ios"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "media_url_android",
              field_definition: {
                name: "media_url_android"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "kv",
              field_definition: {
                name: "kv"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "image",
              field_definition: {
                name: "image"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "image_group",
              field_definition: {
                name: "image_group"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "html_escaped_title",
              field_definition: {
                name: "html_escaped_title"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "hit_count",
              field_definition: {
                name: "hit_count"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "headline",
              field_definition: {
                name: "headline"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formatted_date_str",
              field_definition: {
                name: "formatted_date_str"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "formated_pub_date",
              field_definition: {
                name: "formated_pub_date"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_type",
              field_definition: {
                name: "file_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_name",
              field_definition: {
                name: "file_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "file_link",
              field_definition: {
                name: "file_link"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "encrypted_id",
              field_definition: {
                name: "encrypted_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "document_url",
              field_definition: {
                name: "document_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "date_string",
              field_definition: {
                name: "date_string"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "content_url",
              field_definition: {
                name: "content_url"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "content_type",
              field_definition: {
                name: "content_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "company",
              field_definition: {
                name: "company"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "authors",
              field_definition: {
                name: "authors"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_name",
              field_definition: {
                name: "author_name"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_id",
              field_definition: {
                name: "author_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "author_details",
              field_definition: {
                name: "author_details"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "attachment_id",
              field_definition: {
                name: "attachment_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "asset_class",
              field_definition: {
                name: "asset_class"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "analyst_type",
              field_definition: {
                name: "analyst_type"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "analyst_id",
              field_definition: {
                name: "analyst_id"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "all_attachments",
              field_definition: {
                name: "all_attachments"
              }
            },
          
            {
              type: "ResponseFieldLevelMapping",
              remote_field_name: "alert_date",
              field_definition: {
                name: "alert_date"
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
  _.extend(CapitalMarketsContentService, Backbone.Events);

  return CapitalMarketsContentService;

})(AP.utility.createClass, AP.model.Model, Backbone);
