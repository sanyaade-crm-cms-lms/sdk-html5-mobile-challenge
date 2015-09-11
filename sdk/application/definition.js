
/*
Simple namespace class for this application.

Example application look-up:
@example
    var app = AP.getApp('CitiMobileChallengeSdk');

Example model and collection look-ups:
@example
    var modelClass = app.getModel('modelName');
    var collectionClass = app.getCollection('collectionName');

@class CitiMobileChallengeSdk
@extends AP.Application
@static
*/
window.CitiMobileChallengeSdk = (function($class, _Application) {

  var sdk = function CitiMobileChallengeSdk() {};
  _Application.setup.call(sdk);

  sdk = $class({
    _constructor: sdk,

    extends: _Application,

    static: {
      /**
      Application name.
      @static
      @property name
      @type String
       */
      name: "CitiMobileChallengeSdk",

      /**
      Application description.
      @static
      @property description
      @type String
       */
      description: "",

      init: function() {
        window.AP.activeAppName = "CitiMobileChallenge";
        _Application.init.call(this, window.CitiMobileChallengeSdk.adapters);
      }
    }
  });

  return sdk;

})(AP.utility.createClass, AP.Application);
