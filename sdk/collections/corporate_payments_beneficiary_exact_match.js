/**
CorporatePaymentsBeneficiaryExactMatchis a scope collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.ScopeCollection` for more information about scopes.

@module CitiMobileChallengeSdk
@submodule collections
@class CorporatePaymentsBeneficiaryExactMatch
@extends AP.collection.ScopeCollection
 */
CitiMobileChallengeSdk.collections.CorporatePaymentsBeneficiaryExactMatch = (function($class, _ScopeCollection) {

	var CorporatePaymentsBeneficiaryExactMatch = $class({

		extends: _ScopeCollection,

        _constructor: function CorporatePaymentsBeneficiaryExactMatch() {
            CitiMobileChallengeSdk.collections.CorporatePaymentsBeneficiaryExactMatch._super.constructor.apply(this, arguments);
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
        model: CitiMobileChallengeSdk.models.CorporatePaymentsBeneficiary,

        /**
        Server requests for this collection use this URL.
        @property apiEndpoint
        @type String
         */
        apiEndpoint: "/api/v5/corporate_payments_beneficiaries.json",

        /**
        Name/value pairs included with every server request.  Extra parameters are
        converted to URL parameters at request-time.
        @property extraParams
        @type Object
         */
        extraParams: {
          scope: "exact_match"
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
	              remote_field_name: "account_status",
	              field_definition: {
	                name: "account_status"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "bank_address",
	              field_definition: {
	                name: "bank_address"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "iban",
	              field_definition: {
	                name: "iban"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "bic",
	              field_definition: {
	                name: "bic"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "routing_code",
	              field_definition: {
	                name: "routing_code"
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
	              remote_field_name: "bank_account_type",
	              field_definition: {
	                name: "bank_account_type"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "bank_country",
	              field_definition: {
	                name: "bank_country"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "company_name",
	              field_definition: {
	                name: "company_name"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "entity_type",
	              field_definition: {
	                name: "entity_type"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "country",
	              field_definition: {
	                name: "country"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "address",
	              field_definition: {
	                name: "address"
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
	              remote_field_name: "account_status",
	              field_definition: {
	                name: "account_status"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "bank_address",
	              field_definition: {
	                name: "bank_address"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "iban",
	              field_definition: {
	                name: "iban"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "bic",
	              field_definition: {
	                name: "bic"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "routing_code",
	              field_definition: {
	                name: "routing_code"
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
	              remote_field_name: "bank_account_type",
	              field_definition: {
	                name: "bank_account_type"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "bank_country",
	              field_definition: {
	                name: "bank_country"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "company_name",
	              field_definition: {
	                name: "company_name"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "entity_type",
	              field_definition: {
	                name: "entity_type"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "country",
	              field_definition: {
	                name: "country"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "address",
	              field_definition: {
	                name: "address"
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
	        incremental_path : "",
	        body_format : "json",
	        object_name_mapping : "",
	        body_payload_template : "",
	        action : "exact_match",
					limit : "limit",
          offset : "limit",
	        incremental_headers: [
	          
	        ],
	        incremental_url_parameters: [
	          
	        ]
				}
				

	});

	return CorporatePaymentsBeneficiaryExactMatch;

})(AP.utility.createClass, AP.collection.ScopeCollection);
