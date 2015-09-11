/**
RetailBankingAccountFundTransferCountis an aggregate collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.AggregateCollection` to learn about about aggregates.
@module CitiMobileChallengeSdk
@submodule collections
@class RetailBankingAccountFundTransferCount
@extends AP.collection.AggregateCollection
 */
CitiMobileChallengeSdk.collections.RetailBankingAccountFundTransferCount = (function($class, _AggregateCollection) {

	var RetailBankingAccountFundTransferCount = $class({
		extends: _AggregateCollection,

		_constructor: function RetailBankingAccountFundTransferCount() {
			CitiMobileChallengeSdk.collections.RetailBankingAccountFundTransferCount._super.constructor.apply(this, arguments);
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
		model: CitiMobileChallengeSdk.models.RetailBankingAccountFundTransfer,

		/**
		Server requests for this collection use this URL.
	  	@property apiEndpoint
	  	@type String
		 */
		apiEndpoint: "/api/v2/retail_banking_account_fund_transfers.json",

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
						remote_field_name: "reference_number",
						field_definition: {
							name: "reference_number"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "transaction_date",
						field_definition: {
							name: "transaction_date"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "payment_type",
						field_definition: {
							name: "payment_type"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "payee_type",
						field_definition: {
							name: "payee_type"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "payee_id",
						field_definition: {
							name: "payee_id"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "payee_desc",
						field_definition: {
							name: "payee_desc"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "memo",
						field_definition: {
							name: "memo"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "destination_id",
						field_definition: {
							name: "destination_id"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "destination_account_id",
						field_definition: {
							name: "destination_account_id"
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
						remote_field_name: "amount",
						field_definition: {
							name: "amount"
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
						remote_field_name: "reference_number",
						field_definition: {
							name: "reference_number"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "transaction_date",
						field_definition: {
							name: "transaction_date"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "payment_type",
						field_definition: {
							name: "payment_type"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "payee_type",
						field_definition: {
							name: "payee_type"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "payee_id",
						field_definition: {
							name: "payee_id"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "payee_desc",
						field_definition: {
							name: "payee_desc"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "memo",
						field_definition: {
							name: "memo"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "destination_id",
						field_definition: {
							name: "destination_id"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "destination_account_id",
						field_definition: {
							name: "destination_account_id"
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
						remote_field_name: "amount",
						field_definition: {
							name: "amount"
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

	return RetailBankingAccountFundTransferCount;

})(AP.utility.createClass, AP.collection.AggregateCollection);
