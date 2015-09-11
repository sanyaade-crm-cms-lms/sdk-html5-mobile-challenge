/**
CapitalMarketsRevenueCountis an aggregate collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.AggregateCollection` to learn about about aggregates.
@module CitiMobileChallengeSdk
@submodule collections
@class CapitalMarketsRevenueCount
@extends AP.collection.AggregateCollection
 */
CitiMobileChallengeSdk.collections.CapitalMarketsRevenueCount = (function($class, _AggregateCollection) {

	var CapitalMarketsRevenueCount = $class({
		extends: _AggregateCollection,

		_constructor: function CapitalMarketsRevenueCount() {
			CitiMobileChallengeSdk.collections.CapitalMarketsRevenueCount._super.constructor.apply(this, arguments);
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
		model: CitiMobileChallengeSdk.models.CapitalMarketsRevenue,

		/**
		Server requests for this collection use this URL.
	  	@property apiEndpoint
	  	@type String
		 */
		apiEndpoint: "/api/v2/capital_markets_revenues.json",

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
			action : "count",
			limit : "limit",
			offset : "limit",
			incremental_headers: [
				
			],
			incremental_url_parameters: [
				
			]
		}
		

	});

	return CapitalMarketsRevenueCount;

})(AP.utility.createClass, AP.collection.AggregateCollection);
