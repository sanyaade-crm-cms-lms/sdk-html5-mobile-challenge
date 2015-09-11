/**
CorporatePaymentsCrossBorderFxPaymentCountExactMatchis an aggregate collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.AggregateCollection` to learn about about aggregates.
@module CitiMobileChallengeSdk
@submodule collections
@class CorporatePaymentsCrossBorderFxPaymentCountExactMatch
@extends AP.collection.AggregateCollection
 */
CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxPaymentCountExactMatch = (function($class, _AggregateCollection) {

	var CorporatePaymentsCrossBorderFxPaymentCountExactMatch = $class({
		extends: _AggregateCollection,

		_constructor: function CorporatePaymentsCrossBorderFxPaymentCountExactMatch() {
			CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxPaymentCountExactMatch._super.constructor.apply(this, arguments);
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
		model: CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxPayment,

		/**
		Server requests for this collection use this URL.
	  	@property apiEndpoint
	  	@type String
		 */
		apiEndpoint: "/api/v2/corporate_payments_cross_border_fx_payments.json",

		/**
		Name/value pairs included with every server request.  Extra parameters are
	  	converted to URL parameters at request-time.
	  	@property extraParams
	  	@type Object
		 */
		extraParams: {
			scope: "count_exact_match"
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
						remote_field_name: "created_on",
						field_definition: {
							name: "created_on"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "created_by",
						field_definition: {
							name: "created_by"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "payment_details",
						field_definition: {
							name: "payment_details"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "beneficiary_address",
						field_definition: {
							name: "beneficiary_address"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "beneficiary_name",
						field_definition: {
							name: "beneficiary_name"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "beneficiary_account",
						field_definition: {
							name: "beneficiary_account"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "beneficiary_bank",
						field_definition: {
							name: "beneficiary_bank"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "debtor_address",
						field_definition: {
							name: "debtor_address"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "debtor_account",
						field_definition: {
							name: "debtor_account"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "debtor_name",
						field_definition: {
							name: "debtor_name"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "value_date",
						field_definition: {
							name: "value_date"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "rate_reference",
						field_definition: {
							name: "rate_reference"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "to_amount",
						field_definition: {
							name: "to_amount"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "to_currency",
						field_definition: {
							name: "to_currency"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "from_amount",
						field_definition: {
							name: "from_amount"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "from_currency",
						field_definition: {
							name: "from_currency"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "citi_ref",
						field_definition: {
							name: "citi_ref"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "customer_txn_ref",
						field_definition: {
							name: "customer_txn_ref"
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
						remote_field_name: "id",
						field_definition: {
							name: "id"
						}
					},
				
			],
			response_field_level_mappings: [
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "created_on",
						field_definition: {
							name: "created_on"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "id",
						field_definition: {
							name: "id"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "created_by",
						field_definition: {
							name: "created_by"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "payment_details",
						field_definition: {
							name: "payment_details"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "beneficiary_address",
						field_definition: {
							name: "beneficiary_address"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "beneficiary_name",
						field_definition: {
							name: "beneficiary_name"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "beneficiary_account",
						field_definition: {
							name: "beneficiary_account"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "beneficiary_bank",
						field_definition: {
							name: "beneficiary_bank"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "debtor_address",
						field_definition: {
							name: "debtor_address"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "debtor_account",
						field_definition: {
							name: "debtor_account"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "debtor_name",
						field_definition: {
							name: "debtor_name"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "value_date",
						field_definition: {
							name: "value_date"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "rate_reference",
						field_definition: {
							name: "rate_reference"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "to_amount",
						field_definition: {
							name: "to_amount"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "to_currency",
						field_definition: {
							name: "to_currency"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "from_amount",
						field_definition: {
							name: "from_amount"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "from_currency",
						field_definition: {
							name: "from_currency"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "citi_ref",
						field_definition: {
							name: "citi_ref"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "customer_txn_ref",
						field_definition: {
							name: "customer_txn_ref"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "status",
						field_definition: {
							name: "status"
						}
					},
				
			],
			http_verb: "GET",
			path_selector : "$",
			incremental_path : "",
			body_format : "json",
			object_name_mapping : "",
			body_payload_template : "",
			action : "count_exact_match",
			limit : "limit",
			offset : "limit",
			incremental_headers: [
				
			],
			incremental_url_parameters: [
				
			]
		}
		

	});

	return CorporatePaymentsCrossBorderFxPaymentCountExactMatch;

})(AP.utility.createClass, AP.collection.AggregateCollection);
