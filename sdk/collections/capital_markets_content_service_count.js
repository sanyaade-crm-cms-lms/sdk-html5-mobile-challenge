/**
CapitalMarketsContentServiceCountis an aggregate collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.AggregateCollection` to learn about about aggregates.
@module CitiMobileChallengeSdk
@submodule collections
@class CapitalMarketsContentServiceCount
@extends AP.collection.AggregateCollection
 */
CitiMobileChallengeSdk.collections.CapitalMarketsContentServiceCount = (function($class, _AggregateCollection) {

	var CapitalMarketsContentServiceCount = $class({
		extends: _AggregateCollection,

		_constructor: function CapitalMarketsContentServiceCount() {
			CitiMobileChallengeSdk.collections.CapitalMarketsContentServiceCount._super.constructor.apply(this, arguments);
		},

		static: {
			/**
			The collection ID may be used to look-up a collection from an
		  	application class.
		  	@property collectionId
		  	@type String
		  	@static
			 */
			collectionId: ""
		},

		/**
		The model associated with this collection.  Results returned by server
  		requests for this collection are converted into instances of this model.
  		@property model
  		@type AP.model.Model
		 */
		model: CitiMobileChallengeSdk.models.CapitalMarketsContentService,

		/**
		Server requests for this collection use this URL.
	  	@property apiEndpoint
	  	@type String
		 */
		apiEndpoint: "/api/v5/capital_markets_content_services.json",

		/**
		Name/value pairs included with every server request.  Extra parameters are
	  	converted to URL parameters at request-time.
	  	@property extraParams
	  	@type Object
		 */
		extraParams: {
			scope: "count"
		},

		/**
		Array of query field configurations.  Query fields map model field names onto
	  	URL parameter names.  See `AP.collection.ScopeCollection` to learn more
	  	about query fields.
	  	@property queryFields
	  	@type Array
		 */
		queryFields: [
			
		],

		/**
		Name of the interface to use. Can be an HttpAdapter or the default connection
		to an Anypresence API.
		@property storage_interface
		@type String
		*/
		storage_interface: "CapitalMarketsTrading",

		
		/**
		Adapter configurations for this query scope.
		Only required for query scopes whose adapter interface is an HttpAdapter.
		@property adapter_configuration
		@type Object
		*/
		adapter_configuration: {
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
						remote_field_name: "sectors",
						field_definition: {
							name: "sectors"
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
						remote_field_name: "sectors",
						field_definition: {
							name: "sectors"
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
			action : "count",
			limit : "limit",
			offset : "limit",
			incremental_headers: [
				
			],
			incremental_url_parameters: [
				
			]
		}
		

	});

	return CapitalMarketsContentServiceCount;

})(AP.utility.createClass, AP.collection.AggregateCollection);
