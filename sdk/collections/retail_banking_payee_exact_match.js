/**
RetailBankingPayeeExactMatchis a scope collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.ScopeCollection` for more information about scopes.

@module CitiMobileChallengeSdk
@submodule collections
@class RetailBankingPayeeExactMatch
@extends AP.collection.ScopeCollection
 */
CitiMobileChallengeSdk.collections.RetailBankingPayeeExactMatch = (function($class, _ScopeCollection) {

	var RetailBankingPayeeExactMatch = $class({

		extends: _ScopeCollection,

        _constructor: function RetailBankingPayeeExactMatch() {
            CitiMobileChallengeSdk.collections.RetailBankingPayeeExactMatch._super.constructor.apply(this, arguments);
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
        model: CitiMobileChallengeSdk.models.RetailBankingPayee,

        /**
        Server requests for this collection use this URL.
        @property apiEndpoint
        @type String
         */
        apiEndpoint: "/api/v2/retail_banking_payees.json",

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
	              remote_field_name: "payment_method",
	              field_definition: {
	                name: "payment_method"
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
	              remote_field_name: "payee_list_id_type",
	              field_definition: {
	                name: "payee_list_id_type"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "payee_list_id_2",
	              field_definition: {
	                name: "payee_list_id_two"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "payee_description",
	              field_definition: {
	                name: "payee_description"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "payee_account",
	              field_definition: {
	                name: "payee_account"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "last_payment_amt",
	              field_definition: {
	                name: "last_payment_amt"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "detail_prefix",
	              field_definition: {
	                name: "detail_prefix"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "bank_name_ext",
	              field_definition: {
	                name: "bank_name_ext"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "add_payee_details",
	              field_definition: {
	                name: "add_payee_details"
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
	              remote_field_name: "payment_method",
	              field_definition: {
	                name: "payment_method"
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
	              remote_field_name: "payee_list_id_type",
	              field_definition: {
	                name: "payee_list_id_type"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "payee_list_id_2",
	              field_definition: {
	                name: "payee_list_id_two"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "payee_description",
	              field_definition: {
	                name: "payee_description"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "payee_account",
	              field_definition: {
	                name: "payee_account"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "last_payment_amt",
	              field_definition: {
	                name: "last_payment_amt"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "detail_prefix",
	              field_definition: {
	                name: "detail_prefix"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "bank_name_ext",
	              field_definition: {
	                name: "bank_name_ext"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "add_payee_details",
	              field_definition: {
	                name: "add_payee_details"
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

	return RetailBankingPayeeExactMatch;

})(AP.utility.createClass, AP.collection.ScopeCollection);
