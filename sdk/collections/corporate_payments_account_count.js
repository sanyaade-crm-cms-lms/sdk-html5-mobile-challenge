/**
CorporatePaymentsAccountCountis an aggregate collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.AggregateCollection` to learn about about aggregates.
@module CitiMobileChallengeSdk
@submodule collections
@class CorporatePaymentsAccountCount
@extends AP.collection.AggregateCollection
 */
CitiMobileChallengeSdk.collections.CorporatePaymentsAccountCount = (function($class, _AggregateCollection) {

	var CorporatePaymentsAccountCount = $class({
		extends: _AggregateCollection,

		_constructor: function CorporatePaymentsAccountCount() {
			CitiMobileChallengeSdk.collections.CorporatePaymentsAccountCount._super.constructor.apply(this, arguments);
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
		model: CitiMobileChallengeSdk.models.CorporatePaymentsAccount,

		/**
		Server requests for this collection use this URL.
	  	@property apiEndpoint
	  	@type String
		 */
		apiEndpoint: "/api/v5/corporate_payments_accounts.json",

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
		storage_interface: "CorporatePayments",

		
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
						remote_field_name: "name",
						field_definition: {
							name: "name"
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
						remote_field_name: "base_currency_balances",
						field_definition: {
							name: "base_currency_balances"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "local_currency_iso_code",
						field_definition: {
							name: "local_currency_iso_code"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "country_iso_code",
						field_definition: {
							name: "country_iso_code"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "account_name",
						field_definition: {
							name: "account_name"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "branch_name",
						field_definition: {
							name: "branch_name"
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
						remote_field_name: "name",
						field_definition: {
							name: "name"
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
						remote_field_name: "base_currency_balances",
						field_definition: {
							name: "base_currency_balances"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "local_currency_iso_code",
						field_definition: {
							name: "local_currency_iso_code"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "country_iso_code",
						field_definition: {
							name: "country_iso_code"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "account_name",
						field_definition: {
							name: "account_name"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "branch_name",
						field_definition: {
							name: "branch_name"
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

	return CorporatePaymentsAccountCount;

})(AP.utility.createClass, AP.collection.AggregateCollection);
