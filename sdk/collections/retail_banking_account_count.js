/**
RetailBankingAccountCountis an aggregate collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.AggregateCollection` to learn about about aggregates.
@module CitiMobileChallengeSdk
@submodule collections
@class RetailBankingAccountCount
@extends AP.collection.AggregateCollection
 */
CitiMobileChallengeSdk.collections.RetailBankingAccountCount = (function($class, _AggregateCollection) {

	var RetailBankingAccountCount = $class({
		extends: _AggregateCollection,

		_constructor: function RetailBankingAccountCount() {
			CitiMobileChallengeSdk.collections.RetailBankingAccountCount._super.constructor.apply(this, arguments);
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
		model: CitiMobileChallengeSdk.models.RetailBankingAccount,

		/**
		Server requests for this collection use this URL.
	  	@property apiEndpoint
	  	@type String
		 */
		apiEndpoint: "/api/v5/retail_banking_accounts.json",

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
						remote_field_name: "txn_exist",
						field_definition: {
							name: "txn_exist"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "msgs",
						field_definition: {
							name: "msgs"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "account_status",
						field_definition: {
							name: "account_status"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "balances",
						field_definition: {
							name: "balances"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "offers_indicator",
						field_definition: {
							name: "offers_indicator"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "display_acct_no",
						field_definition: {
							name: "display_acct_no"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "details_exist",
						field_definition: {
							name: "details_exist"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "category_code",
						field_definition: {
							name: "category_code"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "is_destination_account",
						field_definition: {
							name: "is_destination_account"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "is_source_account",
						field_definition: {
							name: "is_source_account"
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
						remote_field_name: "product_currency",
						field_definition: {
							name: "product_currency"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "cops_indicator",
						field_definition: {
							name: "cops_indicator"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "product_description",
						field_definition: {
							name: "product_description"
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
						remote_field_name: "txn_exist",
						field_definition: {
							name: "txn_exist"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "msgs",
						field_definition: {
							name: "msgs"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "account_status",
						field_definition: {
							name: "account_status"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "balances",
						field_definition: {
							name: "balances"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "offers_indicator",
						field_definition: {
							name: "offers_indicator"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "display_acct_no",
						field_definition: {
							name: "display_acct_no"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "details_exist",
						field_definition: {
							name: "details_exist"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "category_code",
						field_definition: {
							name: "category_code"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "is_destination_account",
						field_definition: {
							name: "is_destination_account"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "is_source_account",
						field_definition: {
							name: "is_source_account"
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
						remote_field_name: "product_currency",
						field_definition: {
							name: "product_currency"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "cops_indicator",
						field_definition: {
							name: "cops_indicator"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "product_description",
						field_definition: {
							name: "product_description"
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

	return RetailBankingAccountCount;

})(AP.utility.createClass, AP.collection.AggregateCollection);
