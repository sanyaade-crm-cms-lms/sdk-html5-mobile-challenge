/**
CapitalMarketsActivityActivitiesis a scope collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.ScopeCollection` for more information about scopes.

@module CitiMobileChallengeSdk
@submodule collections
@class CapitalMarketsActivityActivities
@extends AP.collection.ScopeCollection
 */
CitiMobileChallengeSdk.collections.CapitalMarketsActivityActivities = (function($class, _ScopeCollection) {

	var CapitalMarketsActivityActivities = $class({

		extends: _ScopeCollection,

        _constructor: function CapitalMarketsActivityActivities() {
            CitiMobileChallengeSdk.collections.CapitalMarketsActivityActivities._super.constructor.apply(this, arguments);
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
        model: CitiMobileChallengeSdk.models.CapitalMarketsActivity,

        /**
        Server requests for this collection use this URL.
        @property apiEndpoint
        @type String
         */
        apiEndpoint: "/api/v2/capital_markets_activities.json",

        /**
        Name/value pairs included with every server request.  Extra parameters are
        converted to URL parameters at request-time.
        @property extraParams
        @type Object
         */
        extraParams: {
          scope: "activities"
        },

        /**
        Array of query field configurations.  Query fields map model field names onto
        URL parameter names.  See `AP.collection.ScopeCollection` to learn more
        about query fields.
        @property queryFields
        @type Array
         */
        queryFields: [
          
          {
            fieldName: "year",
            paramName: "year",
          },
          
        ],

				/**
		    Name of the interface to use. Can be an HttpAdapter or the default connection
		    to an Anypresence API.
		    @property storage_interface
		    @type String
		    */
		    storage_interface: "CapitalMarketsTrading",

				
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
	              remote_field_name: "year",
	              field_definition: {
	                name: "year"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "region",
	              field_definition: {
	                name: "region"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "date",
	              field_definition: {
	                name: "date"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "client_name",
	              field_definition: {
	                name: "client_name"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "client_id",
	              field_definition: {
	                name: "client_id"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "client_contacts",
	              field_definition: {
	                name: "client_contacts"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "citi_attendees",
	              field_definition: {
	                name: "citi_attendees"
	              }
	            },
	          
	            {
	              type: "ResponseFieldLevelMapping",
	              remote_field_name: "activity_type",
	              field_definition: {
	                name: "activity_type"
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
	        incremental_path : "/activities",
	        body_format : "json",
	        object_name_mapping : "",
	        body_payload_template : "",
	        action : "activities",
					limit : "",
          offset : "",
	        incremental_headers: [
	          
	        ],
	        incremental_url_parameters: [
	          
	            {
	              name: "year",
	              value: "{{query.query.year}}"
	            },
	          
	        ]
				}
				

	});

	return CapitalMarketsActivityActivities;

})(AP.utility.createClass, AP.collection.ScopeCollection);
