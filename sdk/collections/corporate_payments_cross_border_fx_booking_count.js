/**
CorporatePaymentsCrossBorderFxBookingCountis an aggregate collection for application `CitiMobileChallengeSdk`.  See
`AP.collection.AggregateCollection` to learn about about aggregates.
@module CitiMobileChallengeSdk
@submodule collections
@class CorporatePaymentsCrossBorderFxBookingCount
@extends AP.collection.AggregateCollection
 */
CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxBookingCount = (function($class, _AggregateCollection) {

	var CorporatePaymentsCrossBorderFxBookingCount = $class({
		extends: _AggregateCollection,

		_constructor: function CorporatePaymentsCrossBorderFxBookingCount() {
			CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxBookingCount._super.constructor.apply(this, arguments);
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
		model: CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxBooking,

		/**
		Server requests for this collection use this URL.
	  	@property apiEndpoint
	  	@type String
		 */
		apiEndpoint: "/api/v2/corporate_payments_cross_border_fx_bookings.json",

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
						remote_field_name: "rate_reference",
						field_definition: {
							name: "rate_reference"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "accepted_by",
						field_definition: {
							name: "accepted_by"
						}
					},
				
					{
						type: "RequestFieldLevelMapping",
						remote_field_name: "accepted_on",
						field_definition: {
							name: "accepted_on"
						}
					},
				
			],
			response_field_level_mappings: [
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "rate_reference",
						field_definition: {
							name: "rate_reference"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "accepted_by",
						field_definition: {
							name: "accepted_by"
						}
					},
				
					{
						type: "ResponseFieldLevelMapping",
						remote_field_name: "accepted_on",
						field_definition: {
							name: "accepted_on"
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

	return CorporatePaymentsCrossBorderFxBookingCount;

})(AP.utility.createClass, AP.collection.AggregateCollection);
