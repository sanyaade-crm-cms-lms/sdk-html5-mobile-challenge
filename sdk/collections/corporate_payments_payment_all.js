/**
CorporatePaymentsPaymentAllis a scope collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.ScopeCollection` for more information about scopes.

@module CitiMobileChallengeSdk
@submodule collections
@class CorporatePaymentsPaymentAll
@extends AP.collection.ScopeCollection
 */
CitiMobileChallengeSdk.collections.CorporatePaymentsPaymentAll = (function($class, _ScopeCollection) {

	var CorporatePaymentsPaymentAll = $class({

		extends: _ScopeCollection,

        _constructor: function CorporatePaymentsPaymentAll() {
            CitiMobileChallengeSdk.collections.CorporatePaymentsPaymentAll._super.constructor.apply(this, arguments);
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
        model: CitiMobileChallengeSdk.models.CorporatePaymentsPayment,

        /**
        Server requests for this collection use this URL.
        @property apiEndpoint
        @type String
         */
        apiEndpoint: "/api/v2/corporate_payments_payments.json",

        /**
        Name/value pairs included with every server request.  Extra parameters are
        converted to URL parameters at request-time.
        @property extraParams
        @type Object
         */
        extraParams: {
          scope: "all"
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
	          
	        ],
	        response_field_level_mappings: [
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "status",
	              field_definition: {
	                name: "status"
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
	              remote_field_name: "customer_reference_number",
	              field_definition: {
	                name: "customer_reference_number"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "created_on",
	              field_definition: {
	                name: "created_on"
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
	              remote_field_name: "debit_account_number",
	              field_definition: {
	                name: "debit_account_number"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "debit_account_name",
	              field_definition: {
	                name: "debit_account_name"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "beneficiary_id",
	              field_definition: {
	                name: "beneficiary_id"
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
	              remote_field_name: "payment_amount",
	              field_definition: {
	                name: "payment_amount"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "payment_currency",
	              field_definition: {
	                name: "payment_currency"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "payment_method",
	              field_definition: {
	                name: "payment_method"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "email",
	              field_definition: {
	                name: "email"
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
	              remote_field_name: "transaction_reference_number",
	              field_definition: {
	                name: "transaction_reference_number"
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
	        path_selector : "$.*",
	        incremental_path : "/payments",
	        body_format : "json",
	        object_name_mapping : "",
	        body_payload_template : "",
	        action : "all",
					limit : "",
          offset : "",
	        incremental_headers: [
	          
	        ],
	        incremental_url_parameters: [
	          
	        ]
				}
				

	});

	return CorporatePaymentsPaymentAll;

})(AP.utility.createClass, AP.collection.ScopeCollection);
