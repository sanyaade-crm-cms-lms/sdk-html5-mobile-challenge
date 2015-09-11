/**
RetailBankingPayeeTypeAllis a scope collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.ScopeCollection` for more information about scopes.

@module CitiMobileChallengeSdk
@submodule collections
@class RetailBankingPayeeTypeAll
@extends AP.collection.ScopeCollection
 */
CitiMobileChallengeSdk.collections.RetailBankingPayeeTypeAll = (function($class, _ScopeCollection) {

	var RetailBankingPayeeTypeAll = $class({

		extends: _ScopeCollection,

        _constructor: function RetailBankingPayeeTypeAll() {
            CitiMobileChallengeSdk.collections.RetailBankingPayeeTypeAll._super.constructor.apply(this, arguments);
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
        model: CitiMobileChallengeSdk.models.RetailBankingPayeeType,

        /**
        Server requests for this collection use this URL.
        @property apiEndpoint
        @type String
         */
        apiEndpoint: "/api/v2/retail_banking_payee_types.json",

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
		    storage_interface: "RetailBanking",

				
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
	              remote_field_name: "value",
	              field_definition: {
	                name: "value"
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
	        incremental_path : "/payee_types",
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

	return RetailBankingPayeeTypeAll;

})(AP.utility.createClass, AP.collection.ScopeCollection);
