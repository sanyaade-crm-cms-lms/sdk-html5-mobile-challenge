/**
CapitalMarketsLoginCountis an aggregate collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.AggregateCollection` to learn about about aggregates.
@module CitiMobileChallengeSdk
@submodule collections
@class CapitalMarketsLoginCount
@extends AP.collection.AggregateCollection
 */
CitiMobileChallengeSdk.collections.CapitalMarketsLoginCount = (function($class, _AggregateCollection) {

	var CapitalMarketsLoginCount = $class({
		extends: _AggregateCollection,

		_constructor: function CapitalMarketsLoginCount() {
			CitiMobileChallengeSdk.collections.CapitalMarketsLoginCount._super.constructor.apply(this, arguments);
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
		model: CitiMobileChallengeSdk.models.CapitalMarketsLogin,

		/**
		Server requests for this collection use this URL.
	  	@property apiEndpoint
	  	@type String
		 */
		apiEndpoint: "/api/v5/capital_markets_logins.json",

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
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "token",
						field_definition: {
							name: "token"
						}
					},
				
			],
			response_field_level_mappings: [
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "password",
						field_definition: {
							name: "password"
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

	return CapitalMarketsLoginCount;

})(AP.utility.createClass, AP.collection.AggregateCollection);
