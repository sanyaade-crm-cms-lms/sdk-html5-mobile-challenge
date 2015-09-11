/**
CapitalMarketsTrading adapter for application `CitiMobileChallengeSdk`.

@module CitiMobileChallengeSdk
@submodule adapters
@class CapitalMarketsTrading
@extends AP.adapter.HttpAdapter
 */
CitiMobileChallengeSdk.adapters.CapitalMarketsTrading = (function($class, _HttpAdapter) {

  var CapitalMarketsTrading = $class({
    extends: _HttpAdapter,

    _constructor: function CapitalMarketsTrading() {
      CitiMobileChallengeSdk.adapters.CapitalMarketsTrading._super.constructor.apply(this, arguments);
    },

    /**
    * Id of the storage_interface
    * @property id
    * @type String
    */
    id: "16971",

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
    name: "CapitalMarketsTrading",

    /**
    * URL of the external API.
    * @property base_uri
    * @type String
    */
    base_uri: "https://citimobilechallenge.anypresenceapp.com/capitalmarkets/v1",

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
          value: "Bearer {{session.capital_markets_trading_token}}"
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

  return CapitalMarketsTrading;

})(AP.utility.createClass, AP.adapter.HttpAdapter);
