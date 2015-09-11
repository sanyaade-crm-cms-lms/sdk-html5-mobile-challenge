/**
RetailBanking adapter for application `CitiMobileChallengeSdk`.

@module CitiMobileChallengeSdk
@submodule adapters
@class RetailBanking
@extends AP.adapter.HttpAdapter
 */
CitiMobileChallengeSdk.adapters.RetailBanking = (function($class, _HttpAdapter) {

  var RetailBanking = $class({
    extends: _HttpAdapter,

    _constructor: function RetailBanking() {
      CitiMobileChallengeSdk.adapters.RetailBanking._super.constructor.apply(this, arguments);
    },

    /**
    * Id of the storage_interface
    * @property id
    * @type String
    */
    id: "16968",

    /**
    * Type of interface, for example HttpAdapter or Anypresence Local Storage.
    * @property type
    * @type String
    */
    type: "StorageInterface::Http",

    /**
    * Storage interface name. Used by AP.adapter.Dispatcher to find the appropiate adapter for a model during a sync.
    * @property name
    * @type String
    */
    name: "RetailBanking",

    /**
    * URL of the external API.
    * @property base_uri
    * @type String
    */
    base_uri: "https://citimobilechallenge.anypresenceapp.com/retailbanking/v1",

    /**
    * Format for Payloads, can be "json", "xml" or "form-encoded"
    * @property format
    * @type String
    */
    format: "json",

    /**
    * Logging level for the adapter's operations (i.e. "error", "debug", etc.)
    * @property logging_level
    * @type String
    */
    logging_level: "error",

    /**
    * Headers to be added with every request made to the API server.
    * Can be overrided by action or scope level headers.
    * @property headers
    * @type Array
    */
    headers: [
      
        {
          name: "Authorization",
          value: "Bearer {{session.retail_banking_token}}"
        },
      
    ],

    /**
    * Url parameters to send with every request made to the API server.
    * Can be overrided by action or scope level url parameters.
    * @property url_parameters
    * @type Array
    */
    url_parameters: [
      
        {
          name: "client_id",
          value: "{{session.client_id}}"
        },
      
    ]
  });

  return RetailBanking;

})(AP.utility.createClass, AP.adapter.HttpAdapter);
