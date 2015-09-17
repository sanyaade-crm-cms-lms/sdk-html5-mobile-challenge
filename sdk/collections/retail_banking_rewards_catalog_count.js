/**
RetailBankingRewardsCatalogCountis an aggregate collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.AggregateCollection` to learn about about aggregates.
@module CitiMobileChallengeSdk
@submodule collections
@class RetailBankingRewardsCatalogCount
@extends AP.collection.AggregateCollection
 */
CitiMobileChallengeSdk.collections.RetailBankingRewardsCatalogCount = (function($class, _AggregateCollection) {

	var RetailBankingRewardsCatalogCount = $class({
		extends: _AggregateCollection,

		_constructor: function RetailBankingRewardsCatalogCount() {
			CitiMobileChallengeSdk.collections.RetailBankingRewardsCatalogCount._super.constructor.apply(this, arguments);
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
		model: CitiMobileChallengeSdk.models.RetailBankingRewardsCatalog,

		/**
		Server requests for this collection use this URL.
	  	@property apiEndpoint
	  	@type String
		 */
		apiEndpoint: "/api/v5/retail_banking_rewards_catalogs.json",

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
		storage_interface: "RetailBanking",

		
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
			action : "count",
			limit : "limit",
			offset : "limit",
			incremental_headers: [
				
			],
			incremental_url_parameters: [
				
			]
		}
		

	});

	return RetailBankingRewardsCatalogCount;

})(AP.utility.createClass, AP.collection.AggregateCollection);
