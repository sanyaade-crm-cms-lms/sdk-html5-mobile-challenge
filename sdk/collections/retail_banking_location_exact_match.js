/**
RetailBankingLocationExactMatchis a scope collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.ScopeCollection` for more information about scopes.

@module CitiMobileChallengeSdk
@submodule collections
@class RetailBankingLocationExactMatch
@extends AP.collection.ScopeCollection
 */
CitiMobileChallengeSdk.collections.RetailBankingLocationExactMatch = (function($class, _ScopeCollection) {

	var RetailBankingLocationExactMatch = $class({

		extends: _ScopeCollection,

        _constructor: function RetailBankingLocationExactMatch() {
            CitiMobileChallengeSdk.collections.RetailBankingLocationExactMatch._super.constructor.apply(this, arguments);
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
        model: CitiMobileChallengeSdk.models.RetailBankingLocation,

        /**
        Server requests for this collection use this URL.
        @property apiEndpoint
        @type String
         */
        apiEndpoint: "/api/v2/retail_banking_locations.json",

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
	              remote_field_name: "state",
	              field_definition: {
	                name: "state"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "postal_code",
	              field_definition: {
	                name: "postal_code"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "phone",
	              field_definition: {
	                name: "phone"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "name",
	              field_definition: {
	                name: "name"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "longitude",
	              field_definition: {
	                name: "longitude"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "location_type",
	              field_definition: {
	                name: "location_type"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "latitude",
	              field_definition: {
	                name: "latitude"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "external_link",
	              field_definition: {
	                name: "external_link"
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
	              remote_field_name: "comments",
	              field_definition: {
	                name: "comments"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "city",
	              field_definition: {
	                name: "city"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "address_2",
	              field_definition: {
	                name: "address_line_two"
	              }
	            },
	          
	            {
	              type: "RequestFieldLevelMapping",
	              remote_field_name: "address_1",
	              field_definition: {
	                name: "address_line_one"
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
	              remote_field_name: "state",
	              field_definition: {
	                name: "state"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "postal_code",
	              field_definition: {
	                name: "postal_code"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "phone",
	              field_definition: {
	                name: "phone"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "name",
	              field_definition: {
	                name: "name"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "longitude",
	              field_definition: {
	                name: "longitude"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "location_type",
	              field_definition: {
	                name: "location_type"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "latitude",
	              field_definition: {
	                name: "latitude"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "external_link",
	              field_definition: {
	                name: "external_link"
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
	              remote_field_name: "comments",
	              field_definition: {
	                name: "comments"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "city",
	              field_definition: {
	                name: "city"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "address_2",
	              field_definition: {
	                name: "address_line_two"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "address_1",
	              field_definition: {
	                name: "address_line_one"
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

	return RetailBankingLocationExactMatch;

})(AP.utility.createClass, AP.collection.ScopeCollection);
