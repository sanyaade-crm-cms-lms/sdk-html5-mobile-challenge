/**
RetailBankingRewardsRedemptionAllis a scope collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.ScopeCollection` for more information about scopes.

@module CitiMobileChallengeSdk
@submodule collections
@class RetailBankingRewardsRedemptionAll
@extends AP.collection.ScopeCollection
 */
CitiMobileChallengeSdk.collections.RetailBankingRewardsRedemptionAll = (function($class, _ScopeCollection) {

	var RetailBankingRewardsRedemptionAll = $class({

		extends: _ScopeCollection,

        _constructor: function RetailBankingRewardsRedemptionAll() {
            CitiMobileChallengeSdk.collections.RetailBankingRewardsRedemptionAll._super.constructor.apply(this, arguments);
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
        model: CitiMobileChallengeSdk.models.RetailBankingRewardsRedemption,

        /**
        Server requests for this collection use this URL.
        @property apiEndpoint
        @type String
         */
        apiEndpoint: "/api/v5/retail_banking_rewards_redemptions.json",

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
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "redemption_details",
	              field_definition: {
	                name: "redemption_details"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "points_available",
	              field_definition: {
	                name: "points_available"
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
	              remote_field_name: "redemption_details",
	              field_definition: {
	                name: "redemption_details"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "points_available",
	              field_definition: {
	                name: "points_available"
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
	        action : "all",
					limit : "limit",
          offset : "limit",
	        incremental_headers: [
	          
	        ],
	        incremental_url_parameters: [
	          
	        ]
				}
				

	});

	return RetailBankingRewardsRedemptionAll;

})(AP.utility.createClass, AP.collection.ScopeCollection);