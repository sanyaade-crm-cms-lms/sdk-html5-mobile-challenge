#CitiMobileChallengeSdk

## Description

This is the JQuery SDK library for CitiMobileChallenge. This SDK is based on **JQuery.js**, **Underscore.js** and **Backbone.js**.

## Table of Contents

<!-- TOC depth:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [CitiMobileChallengeSdk](#citimobilechallengesdk)
	- [Table of Contents](#table-of-contents)
	- [Project Structure](#project-structure)
	- [Adding the SDK to your Application](#adding-the-sdk-to-your-application)
		- [Dependencies](#dependencies)
	- [Setup](#setup)
	- [Using local caching](#using-local-caching)
	- [Models](#models)

		- [RetailBankingLogin](#retailbankinglogin)
			- [Create](#create-19)
			- [Value interpolation](#value-interpolation-19)

		- [RetailBankingAccount](#retailbankingaccount)
			- [Query Scopes](#query-scopes-13)
				- [RetailBankingAccountAll](#retailbankingaccountall)
			- [Read](#read-13)
			- [Value interpolation](#value-interpolation-13)

		- [RetailBankingAccountBalance](#retailbankingaccountbalance)
			- [Query Scopes](#query-scopes-14)
				- [RetailBankingAccountBalanceAll](#retailbankingaccountbalanceall)
			- [Value interpolation](#value-interpolation-14)

		- [RetailBankingAccountTransaction](#retailbankingaccounttransaction)
			- [Query Scopes](#query-scopes-16)
				- [RetailBankingAccountTransactionAll](#retailbankingaccounttransactionall)
			- [Value interpolation](#value-interpolation-16)

		- [RetailBankingPayeeType](#retailbankingpayeetype)
			- [Query Scopes](#query-scopes-21)
				- [RetailBankingPayeeTypeAll](#retailbankingpayeetypeall)
			- [Value interpolation](#value-interpolation-21)

		- [RetailBankingPayee](#retailbankingpayee)
			- [Query Scopes](#query-scopes-20)
				- [RetailBankingPayeeAll](#retailbankingpayeeall)
			- [Value interpolation](#value-interpolation-20)

		- [RetailBankingAccountFundTransfer](#retailbankingaccountfundtransfer)
			- [Create](#create-15)
			- [Value interpolation](#value-interpolation-15)

		- [RetailBankingForeignCurrency](#retailbankingforeigncurrency)
			- [Query Scopes](#query-scopes-17)
				- [RetailBankingForeignCurrencyForeignCurrency](#retailbankingforeigncurrencyforeigncurrency)
			- [Value interpolation](#value-interpolation-17)

		- [RetailBankingRewardsCatalog](#retailbankingrewardscatalog)
			- [Query Scopes](#query-scopes-22)
				- [RetailBankingRewardsCatalogRewardsCatalog](#retailbankingrewardscatalogrewardscatalog)
			- [Value interpolation](#value-interpolation-22)

		- [RetailBankingRewardsRedemption](#retailbankingrewardsredemption)
			- [Create](#create-23)
			- [Value interpolation](#value-interpolation-23)

		- [RetailBankingLocation](#retailbankinglocation)
			- [Query Scopes](#query-scopes-18)
				- [RetailBankingLocationLocations](#retailbankinglocationlocations)
			- [Value interpolation](#value-interpolation-18)

		- [CorporatePaymentsLogin](#corporatepaymentslogin)
			- [Create](#create-11)
			- [Value interpolation](#value-interpolation-11)

		- [CorporatePaymentsAccount](#corporatepaymentsaccount)
			- [Create](#create-6)
			- [Query Scopes](#query-scopes-6)
				- [CorporatePaymentsAccountAll](#corporatepaymentsaccountall)
			- [Update](#update-6)
			- [Read](#read-6)
			- [Value interpolation](#value-interpolation-6)

		- [CorporatePaymentsPayment](#corporatepaymentspayment)
			- [Create](#create-12)
			- [Query Scopes](#query-scopes-12)
				- [CorporatePaymentsPaymentAll](#corporatepaymentspaymentall)
			- [Read](#read-12)
			- [Value interpolation](#value-interpolation-12)

		- [CorporatePaymentsBeneficiary](#corporatepaymentsbeneficiary)
			- [Create](#create-7)
			- [Update](#update-7)
			- [Read](#read-7)
			- [Value interpolation](#value-interpolation-7)

		- [CorporatePaymentsCrossBorderFxQuote](#corporatepaymentscrossborderfxquote)
			- [Create](#create-10)
			- [Value interpolation](#value-interpolation-10)

		- [CorporatePaymentsCrossBorderFxBooking](#corporatepaymentscrossborderfxbooking)
			- [Create](#create-8)
			- [Value interpolation](#value-interpolation-8)

		- [CorporatePaymentsCrossBorderFxPayment](#corporatepaymentscrossborderfxpayment)
			- [Create](#create-9)
			- [Query Scopes](#query-scopes-9)
			-	[CorporatePaymentsCrossBorderFxPaymentFxPayments](#corporatepaymentscrossborderfxpaymentfxpayments)
			- [Read](#read-9)
			- [Value interpolation](#value-interpolation-9)

		- [CapitalMarketsLogin](#capitalmarketslogin)
			- [Create](#create-3)
			- [Value interpolation](#value-interpolation-3)

		- [CapitalMarketsOrder](#capitalmarketsorder)
 		 	- [Create](#create-4)
 		 	- [Read](#read-4)
 		 	- [Delete](#delete-4)
 		 	- [Value interpolation](#value-interpolation-4)

		- [CapitalMarketsRevenue](#capitalmarketsrevenue)
			- [Query Scopes](#query-scopes-5)
				- [CapitalMarketsRevenueRevenues](#capitalmarketsrevenuerevenues)
			- [Value interpolation](#value-interpolation-5)

		- [CapitalMarketsActivity](#capitalmarketsactivity)
			- [Query Scopes](#query-scopes)
				- [CapitalMarketsActivityActivities](#capitalmarketsactivityactivities)
			- [Value interpolation](#value-interpolation)

		- [CapitalMarketsContact](#capitalmarketscontact)
			- [Query Scopes](#query-scopes-1)
				- [CapitalMarketsContactContacts](#capitalmarketscontactcontacts)
			- [Value interpolation](#value-interpolation-1)

		- [CapitalMarketsContentService](#capitalmarketscontentservice)
			- [Query Scopes](#query-scopes-2)
				- [CapitalMarketsContentServiceContentServices](#capitalmarketscontentservicecontentservices)
			- [Value interpolation](#value-interpolation-2)

		- [Development](#development)
		 	- [Developing with Grunt](#developing-with-grunt)
		 		- [Prerequisites](#prerequisites)
		 		- [Install NodeJS Modules](#install-nodejs-modules)
		 		- [Build for Production](#build-for-production)
		 		- [Development](#development)
		 		- [Automatic Compilation & Testing](#automatic-compilation-testing)
		 		- [Running Tests](#running-tests)
<!-- /TOC -->

##Project Structure

General description of the files and folders you will find within this SDK project folder.

* ap_sdk.js - The main SDK file, this contains all the code for this SDK except for third-party dependencies
* **custom** - Convenience folder where you can keep any additional code to add to this SDK
* **docs** - This folder contains all the documentation generated, you will find a web-based guide you can open on your browser
* Gruntfile.js - Grunt configuration and tasks, if you want to add code to this SDK you can use Grunt for development
* LICENSE.txt - The SDK license
* **node_modules** - NPM dependencies for development and testing
* package.json - The library definition manifest containing description, version and dependencies of this SDK
* README.md - This file
* **sdk** - Here you will find all the SDK code
	* **adapter** - AP.adapter module
	* **adapters** - *Generated adapters*
	* **ap** - Anypresence namespace definition
	* **application** - Application class definition
	* **auth** - Authentication module
	* **collection** - Collection module
	* **collections** - *Generated Collections*
	* **lib** - Dependencies
	* **model** - Model module
	* **models** - *Generated Models*
	* **relationship** - Relationship module
	* **utility** - Utility module
* **test** - SDK unit tests for generic modules and classes as well as generated Models and Collections

##Adding the SDK to your Application

In order to include this SDK within your Application simply take the file `ap_sdk.js`, found in the SDK folder at the root level. This file contains the entire SDK code in one file **without** the dependencies like JQuery. Take that file and copy it anywhere you want within you Application folder structure and just include it in your `index.html` using a <scripṭ/\> tag.

###Dependencies

All the SDK dependencies can be found in the path *SDK_ROOT/sdk/lib/*, where SDK_ROOT is the folder where this SDK is. You must add this dependencies for the SDK to work properly, however, note that you can download this dependencies yourself if you wish, you don't **have** to use the ones in the lib folder specifically, they are included there as a convenience.

##Setup

To initialize the SDK you must first provide a base URL for your backend server. Then, all you need to do is call the init method on CitiMobileChallengeSdk.

```javascript
AP.baseUrl = "https://www.foo.com";
CitiMobileChallengeSdk.init();
```

If your application is *DirectToSource* then you can skip the base URL setup.

##Using local caching

Local caching can be toggled easily by setting the value of the Application variable `useOfflineCache` **before** initializing the SDK.

```javascript
CitiMobileChallengeSdk.useOfflineCache = true;
CitiMobileChallengeSdk.init();
```

If you would like to activate it **after** initialization, you can use the method `initOfflineCache` on the SDK.

```javascript
CitiMobileChallengeSdk.initOfflineCache();
```

Keep in mind that once local caching has been enabled it cannot be disabled in runtime.

##Models

Available Model objects:

* CapitalMarketsActivity
* CapitalMarketsContact
* CapitalMarketsContentService
* CapitalMarketsLogin
* CapitalMarketsOrder
* CapitalMarketsRevenue
* CorporatePaymentsAccount
* CorporatePaymentsBeneficiary
* CorporatePaymentsCrossBorderFxBooking
* CorporatePaymentsCrossBorderFxPayment
* CorporatePaymentsCrossBorderFxQuote
* CorporatePaymentsLogin
* CorporatePaymentsPayment
* RetailBankingAccount
* RetailBankingAccountBalance
* RetailBankingAccountFundTransfer
* RetailBankingAccountTransaction
* RetailBankingForeignCurrency
* RetailBankingLocation
* RetailBankingLogin
* RetailBankingPayee
* RetailBankingPayeeType
* RetailBankingRewardsCatalog
* RetailBankingRewardsRedemption

###CapitalMarketsActivity

####Query Scopes

The available query scopes for CapitalMarketsActivity objects are:

* CapitalMarketsActivityActivities

#####CapitalMarketsActivityActivities

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsActivityActivities = new CitiMobileChallengeSdk.collections.CapitalMarketsActivityActivities();

// using the query method
CapitalMarketsActivityActivities.query({

  "year": "foo",

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsActivityActivities.fetch({
  query: { // here the query is passed as an attribute on the single options hash

    "year": "foo",

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsActivityActivities.query({

  "year": "foo",

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CapitalMarketsActivityInstance = new CitiMobileChallengeSdk.models.CapitalMarketsActivity();
CapitalMarketsActivityInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CapitalMarketsActivity instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CapitalMarketsActivityInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CapitalMarketsActivity to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CapitalMarketsActivity.prototype.interpolationContext = [{foo: bar}, window];
```
###CapitalMarketsContact

####Query Scopes

The available query scopes for CapitalMarketsContact objects are:

* CapitalMarketsContactContacts

#####CapitalMarketsContactContacts

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsContactContacts = new CitiMobileChallengeSdk.collections.CapitalMarketsContactContacts();

// using the query method
CapitalMarketsContactContacts.query({

  "client_name": "foo",

  "year": "foo",

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsContactContacts.fetch({
  query: { // here the query is passed as an attribute on the single options hash

    "client_name": "foo",

    "year": "foo",

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsContactContacts.query({

  "client_name": "foo",

  "year": "foo",

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CapitalMarketsContactInstance = new CitiMobileChallengeSdk.models.CapitalMarketsContact();
CapitalMarketsContactInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CapitalMarketsContact instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CapitalMarketsContactInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CapitalMarketsContact to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CapitalMarketsContact.prototype.interpolationContext = [{foo: bar}, window];
```
###CapitalMarketsContentService

####Query Scopes

The available query scopes for CapitalMarketsContentService objects are:

* CapitalMarketsContentServiceContentServices

#####CapitalMarketsContentServiceContentServices

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsContentServiceContentServices = new CitiMobileChallengeSdk.collections.CapitalMarketsContentServiceContentServices();

// using the query method
CapitalMarketsContentServiceContentServices.query({

  "type": "foo",

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsContentServiceContentServices.fetch({
  query: { // here the query is passed as an attribute on the single options hash

    "type": "foo",

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsContentServiceContentServices.query({

  "type": "foo",

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CapitalMarketsContentServiceInstance = new CitiMobileChallengeSdk.models.CapitalMarketsContentService();
CapitalMarketsContentServiceInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CapitalMarketsContentService instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CapitalMarketsContentServiceInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CapitalMarketsContentService to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CapitalMarketsContentService.prototype.interpolationContext = [{foo: bar}, window];
```
###CapitalMarketsLogin

####Create

This is an example of how you would create a CapitalMarketsLogin Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CapitalMarketsLogin();

exampleModel.save({ "token": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `token` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "token": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CapitalMarketsLoginInstance = new CitiMobileChallengeSdk.models.CapitalMarketsLogin();
CapitalMarketsLoginInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CapitalMarketsLogin instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CapitalMarketsLoginInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CapitalMarketsLogin to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CapitalMarketsLogin.prototype.interpolationContext = [{foo: bar}, window];
```
###CapitalMarketsOrder

####Create

This is an example of how you would create a CapitalMarketsOrder Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CapitalMarketsOrder();

exampleModel.save({ "id": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `id` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "id": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Read

Read operations allow you to get a single CapitalMarketsOrder instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CapitalMarketsOrder({
  id: 1
});

singleInstance.fetch({
  success: function(model, response, options) {
    // after the model has been fetched from the server...
  },
  error: function(model, response, options) {
    // handle fetch error...
  }
});
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
singleInstance.fetch({
  async: false,
  success: function(model, response, options) {
    // after the model has been fetched from the server...
  },
  error: function(model, response, options) {
    // handle fetch error...
  }
});
```

Refer to [Backbone's Model fetch method](http://backbonejs.org/#Model-fetch) documentation for more information.

####Delete

In order to delete a single model from the server you can call either the `delete` or `destroy` methods on a Model. Both methods will have the same outcome.

```javascript
// using delete
exampleModel.delete({
  success: function(model, response, options) {...},
  error: function(model, response, options) {...}
});

// using destroy
exampleModel.destroy({
  success: function(model, response, options) {...},
  error: function(model, response, options) {...}
});
```

The `success` and `error` callback are optional as with other Backbone CRUD method calls.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
// using delete
exampleModel.delete({
  async: false,
  success: function(model, response, options) {...},
  error: function(model, response, options) {...}
});

// using destroy
exampleModel.destroy({
  async: false,
  success: function(model, response, options) {...},
  error: function(model, response, options) {...}
});
```

Refer to [Backbone's Model destroy method](http://backbonejs.org/#Model-destroy) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CapitalMarketsOrderInstance = new CitiMobileChallengeSdk.models.CapitalMarketsOrder();
CapitalMarketsOrderInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CapitalMarketsOrder instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CapitalMarketsOrderInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CapitalMarketsOrder to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CapitalMarketsOrder.prototype.interpolationContext = [{foo: bar}, window];
```
###CapitalMarketsRevenue

####Query Scopes

The available query scopes for CapitalMarketsRevenue objects are:

* CapitalMarketsRevenueRevenues

#####CapitalMarketsRevenueRevenues

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsRevenueRevenues = new CitiMobileChallengeSdk.collections.CapitalMarketsRevenueRevenues();

// using the query method
CapitalMarketsRevenueRevenues.query({

  "region": "foo",

  "year": "foo",

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsRevenueRevenues.fetch({
  query: { // here the query is passed as an attribute on the single options hash

    "region": "foo",

    "year": "foo",

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsRevenueRevenues.query({

  "region": "foo",

  "year": "foo",

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CapitalMarketsRevenueInstance = new CitiMobileChallengeSdk.models.CapitalMarketsRevenue();
CapitalMarketsRevenueInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CapitalMarketsRevenue instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CapitalMarketsRevenueInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CapitalMarketsRevenue to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CapitalMarketsRevenue.prototype.interpolationContext = [{foo: bar}, window];
```
###CorporatePaymentsAccount

####Create

This is an example of how you would create a CorporatePaymentsAccount Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CorporatePaymentsAccount();

exampleModel.save({ "id": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `id` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "id": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Update

Updating a CorporatePaymentsAccount Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

```javascript
exampleModel.save({ "id": "foo" });
```

Updating the Model this way will cause a `PUT` request to be triggered, if you would like to send a `PATCH` request instead, then you should call like so:

```javascript
exampleModel.save({ "id": "foo" }, {patch: true});
```

Just like in Model creation, even if you are not updating all Model attributes, a complete representation is sent to the server.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "id": "foo" }, {async: false});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Read

Read operations allow you to get a single CorporatePaymentsAccount instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsAccount({
  id: 1
});

singleInstance.fetch({
  success: function(model, response, options) {
    // after the model has been fetched from the server...
  },
  error: function(model, response, options) {
    // handle fetch error...
  }
});
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
singleInstance.fetch({
  async: false,
  success: function(model, response, options) {
    // after the model has been fetched from the server...
  },
  error: function(model, response, options) {
    // handle fetch error...
  }
});
```

Refer to [Backbone's Model fetch method](http://backbonejs.org/#Model-fetch) documentation for more information.

####Query Scopes

The available query scopes for CorporatePaymentsAccount objects are:

* CorporatePaymentsAccountAll

#####CorporatePaymentsAccountAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsAccountAll = new CitiMobileChallengeSdk.collections.CorporatePaymentsAccountAll();

// using the query method
CorporatePaymentsAccountAll.query({

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsAccountAll.fetch({
  query: { // here the query is passed as an attribute on the single options hash

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsAccountAll.query({

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CorporatePaymentsAccountInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsAccount();
CorporatePaymentsAccountInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CorporatePaymentsAccount instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CorporatePaymentsAccountInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CorporatePaymentsAccount to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CorporatePaymentsAccount.prototype.interpolationContext = [{foo: bar}, window];
```
###CorporatePaymentsBeneficiary

####Create

This is an example of how you would create a CorporatePaymentsBeneficiary Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CorporatePaymentsBeneficiary();

exampleModel.save({ "id": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `id` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "id": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Update

Updating a CorporatePaymentsBeneficiary Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

```javascript
exampleModel.save({ "id": "foo" });
```

Updating the Model this way will cause a `PUT` request to be triggered, if you would like to send a `PATCH` request instead, then you should call like so:

```javascript
exampleModel.save({ "id": "foo" }, {patch: true});
```

Just like in Model creation, even if you are not updating all Model attributes, a complete representation is sent to the server.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "id": "foo" }, {async: false});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Read

Read operations allow you to get a single CorporatePaymentsBeneficiary instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsBeneficiary({
  id: 1
});

singleInstance.fetch({
  success: function(model, response, options) {
    // after the model has been fetched from the server...
  },
  error: function(model, response, options) {
    // handle fetch error...
  }
});
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
singleInstance.fetch({
  async: false,
  success: function(model, response, options) {
    // after the model has been fetched from the server...
  },
  error: function(model, response, options) {
    // handle fetch error...
  }
});
```

Refer to [Backbone's Model fetch method](http://backbonejs.org/#Model-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CorporatePaymentsBeneficiaryInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsBeneficiary();
CorporatePaymentsBeneficiaryInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CorporatePaymentsBeneficiary instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CorporatePaymentsBeneficiaryInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CorporatePaymentsBeneficiary to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CorporatePaymentsBeneficiary.prototype.interpolationContext = [{foo: bar}, window];
```
###CorporatePaymentsCrossBorderFxBooking

####Create

This is an example of how you would create a CorporatePaymentsCrossBorderFxBooking Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxBooking();

exampleModel.save({ "accepted_on": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `accepted_on` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "accepted_on": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CorporatePaymentsCrossBorderFxBookingInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxBooking();
CorporatePaymentsCrossBorderFxBookingInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CorporatePaymentsCrossBorderFxBooking instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CorporatePaymentsCrossBorderFxBookingInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CorporatePaymentsCrossBorderFxBooking to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxBooking.prototype.interpolationContext = [{foo: bar}, window];
```
###CorporatePaymentsCrossBorderFxPayment

####Create

This is an example of how you would create a CorporatePaymentsCrossBorderFxPayment Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxPayment();

exampleModel.save({ "id": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `id` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "id": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CorporatePaymentsCrossBorderFxPaymentInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxPayment();
CorporatePaymentsCrossBorderFxPaymentInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CorporatePaymentsCrossBorderFxPayment instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CorporatePaymentsCrossBorderFxPaymentInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CorporatePaymentsCrossBorderFxPayment to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxPayment.prototype.interpolationContext = [{foo: bar}, window];
```
###CorporatePaymentsCrossBorderFxQuote

####Create

This is an example of how you would create a CorporatePaymentsCrossBorderFxQuote Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxQuote();

exampleModel.save({ "requested_on": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `requested_on` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "requested_on": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CorporatePaymentsCrossBorderFxQuoteInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxQuote();
CorporatePaymentsCrossBorderFxQuoteInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CorporatePaymentsCrossBorderFxQuote instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CorporatePaymentsCrossBorderFxQuoteInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CorporatePaymentsCrossBorderFxQuote to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxQuote.prototype.interpolationContext = [{foo: bar}, window];
```
###CorporatePaymentsLogin

####Create

This is an example of how you would create a CorporatePaymentsLogin Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CorporatePaymentsLogin();

exampleModel.save({ "token": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `token` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "token": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CorporatePaymentsLoginInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsLogin();
CorporatePaymentsLoginInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CorporatePaymentsLogin instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CorporatePaymentsLoginInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CorporatePaymentsLogin to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CorporatePaymentsLogin.prototype.interpolationContext = [{foo: bar}, window];
```
###CorporatePaymentsPayment

####Create

This is an example of how you would create a CorporatePaymentsPayment Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CorporatePaymentsPayment();

exampleModel.save({ "id": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `id` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "id": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Read

Read operations allow you to get a single CorporatePaymentsPayment instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsPayment({
  id: 1
});

singleInstance.fetch({
  success: function(model, response, options) {
    // after the model has been fetched from the server...
  },
  error: function(model, response, options) {
    // handle fetch error...
  }
});
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
singleInstance.fetch({
  async: false,
  success: function(model, response, options) {
    // after the model has been fetched from the server...
  },
  error: function(model, response, options) {
    // handle fetch error...
  }
});
```

Refer to [Backbone's Model fetch method](http://backbonejs.org/#Model-fetch) documentation for more information.

####Query Scopes

The available query scopes for CorporatePaymentsPayment objects are:

* CorporatePaymentsPaymentAll

#####CorporatePaymentsPaymentAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsPaymentAll = new CitiMobileChallengeSdk.collections.CorporatePaymentsPaymentAll();

// using the query method
CorporatePaymentsPaymentAll.query({

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsPaymentAll.fetch({
  query: { // here the query is passed as an attribute on the single options hash

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsPaymentAll.query({

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var CorporatePaymentsPaymentInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsPayment();
CorporatePaymentsPaymentInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a CorporatePaymentsPayment instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
CorporatePaymentsPaymentInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of CorporatePaymentsPayment to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.CorporatePaymentsPayment.prototype.interpolationContext = [{foo: bar}, window];
```
###RetailBankingAccount

####Read

Read operations allow you to get a single RetailBankingAccount instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.RetailBankingAccount({
  id: 1
});

singleInstance.fetch({
  success: function(model, response, options) {
    // after the model has been fetched from the server...
  },
  error: function(model, response, options) {
    // handle fetch error...
  }
});
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
singleInstance.fetch({
  async: false,
  success: function(model, response, options) {
    // after the model has been fetched from the server...
  },
  error: function(model, response, options) {
    // handle fetch error...
  }
});
```

Refer to [Backbone's Model fetch method](http://backbonejs.org/#Model-fetch) documentation for more information.

####Query Scopes

The available query scopes for RetailBankingAccount objects are:

* RetailBankingAccountAll

#####RetailBankingAccountAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountAll = new CitiMobileChallengeSdk.collections.RetailBankingAccountAll();

// using the query method
RetailBankingAccountAll.query({

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountAll.fetch({
  query: { // here the query is passed as an attribute on the single options hash

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingAccountAll.query({

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var RetailBankingAccountInstance = new CitiMobileChallengeSdk.models.RetailBankingAccount();
RetailBankingAccountInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a RetailBankingAccount instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
RetailBankingAccountInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of RetailBankingAccount to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.RetailBankingAccount.prototype.interpolationContext = [{foo: bar}, window];
```
###RetailBankingAccountBalance

####Query Scopes

The available query scopes for RetailBankingAccountBalance objects are:

* RetailBankingAccountBalanceAll

#####RetailBankingAccountBalanceAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountBalanceAll = new CitiMobileChallengeSdk.collections.RetailBankingAccountBalanceAll();

// using the query method
RetailBankingAccountBalanceAll.query({

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountBalanceAll.fetch({
  query: { // here the query is passed as an attribute on the single options hash

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingAccountBalanceAll.query({

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var RetailBankingAccountBalanceInstance = new CitiMobileChallengeSdk.models.RetailBankingAccountBalance();
RetailBankingAccountBalanceInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a RetailBankingAccountBalance instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
RetailBankingAccountBalanceInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of RetailBankingAccountBalance to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.RetailBankingAccountBalance.prototype.interpolationContext = [{foo: bar}, window];
```
###RetailBankingAccountFundTransfer

####Create

This is an example of how you would create a RetailBankingAccountFundTransfer Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.RetailBankingAccountFundTransfer();

exampleModel.save({ "id": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `id` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "id": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var RetailBankingAccountFundTransferInstance = new CitiMobileChallengeSdk.models.RetailBankingAccountFundTransfer();
RetailBankingAccountFundTransferInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a RetailBankingAccountFundTransfer instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
RetailBankingAccountFundTransferInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of RetailBankingAccountFundTransfer to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.RetailBankingAccountFundTransfer.prototype.interpolationContext = [{foo: bar}, window];
```
###RetailBankingAccountTransaction

####Query Scopes

The available query scopes for RetailBankingAccountTransaction objects are:

* RetailBankingAccountTransactionAll

#####RetailBankingAccountTransactionAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountTransactionAll = new CitiMobileChallengeSdk.collections.RetailBankingAccountTransactionAll();

// using the query method
RetailBankingAccountTransactionAll.query({

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountTransactionAll.fetch({
  query: { // here the query is passed as an attribute on the single options hash

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingAccountTransactionAll.query({

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var RetailBankingAccountTransactionInstance = new CitiMobileChallengeSdk.models.RetailBankingAccountTransaction();
RetailBankingAccountTransactionInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a RetailBankingAccountTransaction instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
RetailBankingAccountTransactionInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of RetailBankingAccountTransaction to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.RetailBankingAccountTransaction.prototype.interpolationContext = [{foo: bar}, window];
```
###RetailBankingForeignCurrency

####Query Scopes

The available query scopes for RetailBankingForeignCurrency objects are:

* RetailBankingForeignCurrencyForeignCurrency

#####RetailBankingForeignCurrencyForeignCurrency

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingForeignCurrencyForeignCurrency = new CitiMobileChallengeSdk.collections.RetailBankingForeignCurrencyForeignCurrency();

// using the query method
RetailBankingForeignCurrencyForeignCurrency.query({

  "from_currency": "foo",

  "to_currency": "foo",

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingForeignCurrencyForeignCurrency.fetch({
  query: { // here the query is passed as an attribute on the single options hash

    "from_currency": "foo",

    "to_currency": "foo",

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingForeignCurrencyForeignCurrency.query({

  "from_currency": "foo",

  "to_currency": "foo",

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var RetailBankingForeignCurrencyInstance = new CitiMobileChallengeSdk.models.RetailBankingForeignCurrency();
RetailBankingForeignCurrencyInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a RetailBankingForeignCurrency instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
RetailBankingForeignCurrencyInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of RetailBankingForeignCurrency to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.RetailBankingForeignCurrency.prototype.interpolationContext = [{foo: bar}, window];
```
###RetailBankingLocation

####Query Scopes

The available query scopes for RetailBankingLocation objects are:

* RetailBankingLocationLocations

#####RetailBankingLocationLocations

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingLocationLocations = new CitiMobileChallengeSdk.collections.RetailBankingLocationLocations();

// using the query method
RetailBankingLocationLocations.query({

  "latitude": "foo",

  "longitude": "foo",

  "radius": "foo",

  "radius_uom": "foo",

  "location_type": "foo",

  "address": "foo",

  "city": "foo",

  "state": "foo",

  "postal_code": "foo",

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingLocationLocations.fetch({
  query: { // here the query is passed as an attribute on the single options hash

    "latitude": "foo",

    "longitude": "foo",

    "radius": "foo",

    "radius_uom": "foo",

    "location_type": "foo",

    "address": "foo",

    "city": "foo",

    "state": "foo",

    "postal_code": "foo",

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingLocationLocations.query({

  "latitude": "foo",

  "longitude": "foo",

  "radius": "foo",

  "radius_uom": "foo",

  "location_type": "foo",

  "address": "foo",

  "city": "foo",

  "state": "foo",

  "postal_code": "foo",

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var RetailBankingLocationInstance = new CitiMobileChallengeSdk.models.RetailBankingLocation();
RetailBankingLocationInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a RetailBankingLocation instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
RetailBankingLocationInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of RetailBankingLocation to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.RetailBankingLocation.prototype.interpolationContext = [{foo: bar}, window];
```
###RetailBankingLogin

####Create

This is an example of how you would create a RetailBankingLogin Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.RetailBankingLogin();

exampleModel.save({ "token": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `token` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "token": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var RetailBankingLoginInstance = new CitiMobileChallengeSdk.models.RetailBankingLogin();
RetailBankingLoginInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a RetailBankingLogin instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
RetailBankingLoginInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of RetailBankingLogin to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.RetailBankingLogin.prototype.interpolationContext = [{foo: bar}, window];
```
###RetailBankingPayee

####Query Scopes

The available query scopes for RetailBankingPayee objects are:

* RetailBankingPayeeAll

#####RetailBankingPayeeAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingPayeeAll = new CitiMobileChallengeSdk.collections.RetailBankingPayeeAll();

// using the query method
RetailBankingPayeeAll.query({

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingPayeeAll.fetch({
  query: { // here the query is passed as an attribute on the single options hash

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingPayeeAll.query({

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var RetailBankingPayeeInstance = new CitiMobileChallengeSdk.models.RetailBankingPayee();
RetailBankingPayeeInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a RetailBankingPayee instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
RetailBankingPayeeInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of RetailBankingPayee to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.RetailBankingPayee.prototype.interpolationContext = [{foo: bar}, window];
```
###RetailBankingPayeeType

####Query Scopes

The available query scopes for RetailBankingPayeeType objects are:

* RetailBankingPayeeTypeAll

#####RetailBankingPayeeTypeAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingPayeeTypeAll = new CitiMobileChallengeSdk.collections.RetailBankingPayeeTypeAll();

// using the query method
RetailBankingPayeeTypeAll.query({

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingPayeeTypeAll.fetch({
  query: { // here the query is passed as an attribute on the single options hash

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingPayeeTypeAll.query({

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var RetailBankingPayeeTypeInstance = new CitiMobileChallengeSdk.models.RetailBankingPayeeType();
RetailBankingPayeeTypeInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a RetailBankingPayeeType instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
RetailBankingPayeeTypeInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of RetailBankingPayeeType to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.RetailBankingPayeeType.prototype.interpolationContext = [{foo: bar}, window];
```
###RetailBankingRewardsCatalog

####Query Scopes

The available query scopes for RetailBankingRewardsCatalog objects are:

* RetailBankingRewardsCatalogRewardsCatalog

#####RetailBankingRewardsCatalogRewardsCatalog

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingRewardsCatalogRewardsCatalog = new CitiMobileChallengeSdk.collections.RetailBankingRewardsCatalogRewardsCatalog();

// using the query method
RetailBankingRewardsCatalogRewardsCatalog.query({

  "item_category": "foo",

}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingRewardsCatalogRewardsCatalog.fetch({
  query: { // here the query is passed as an attribute on the single options hash

    "item_category": "foo",

  },
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

The first object passed represents the field values to match when executing the query. The second object is an options hash, where you can define `success` and `error` callbacks but also a `limit` and `offset` value if you want the query results to be paginated.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingRewardsCatalogRewardsCatalog.query({

  "item_category": "foo",

}, {
  async: false,
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var RetailBankingRewardsCatalogInstance = new CitiMobileChallengeSdk.models.RetailBankingRewardsCatalog();
RetailBankingRewardsCatalogInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a RetailBankingRewardsCatalog instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
RetailBankingRewardsCatalogInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of RetailBankingRewardsCatalog to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.RetailBankingRewardsCatalog.prototype.interpolationContext = [{foo: bar}, window];
```
###RetailBankingRewardsRedemption

####Create

This is an example of how you would create a RetailBankingRewardsRedemption Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.RetailBankingRewardsRedemption();

exampleModel.save({ "id": "foo" }, {
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Here we are setting the attribute `id` in the Model to `"foo"` and then saving it. A complete representation of the Model is always sent to the server, regardless of which attributes you set in the save call.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "id": "foo" }, {
  async: false, // execute this request synchronously
  success: function(model, response, options) {
    // handle save success...
  },
  error: function(model, response, options) {
    // handle error...
  }
});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Value interpolation

On DirectToSource Models you can specify certain values of the request being made to use string interpolation, but you also need a way of specifying what the context is going to be during that operation.

The interpolation context can be set in more than one way. If you would like to specify a context to be used for a specific call you would do:

```javascript
var RetailBankingRewardsRedemptionInstance = new CitiMobileChallengeSdk.models.RetailBankingRewardsRedemption();
RetailBankingRewardsRedemptionInstance.save(
  null, // passing null means we want to save all attributes
  { // options
    interpolationContext: [
      {foo: bar},
      window
    ]
  }
);
```

**Note:** the interpolation context is always an *Array* of *Objects*. Those objects will be collapsed into a single Object which will then act as the context, so `[{a: "a", b: "b", c: "c"}, {b: "B", d: "D"}]` will end up as `{a: "a", b: "B", c: "c", d: "D"}`. Note that the Object with the highest index in the Array will overwrite previous ones.

Another way to set the interpolation context is to set it on a RetailBankingRewardsRedemption instance, if you would like that instance to always use the same context you can just set it like this:

```javascript
RetailBankingRewardsRedemptionInstance.interpolationContext = [{foo: bar}, window];
```

This way you don't have to set it on every call.

The next step is, if you would like **all** instances of RetailBankingRewardsRedemption to use the same context, you can set it in the prototype:

```javascript
CitiMobileChallengeSdk.models.RetailBankingRewardsRedemption.prototype.interpolationContext = [{foo: bar}, window];
```

## Development

This sections shows the dependencies and steps to develop or modify this SDK.

### Developing with Grunt

Grunt is a NodeJS-based task runner.  It helps automate common tasks, such as
asset compilation, minification, and testing.  Grunt tasks are included for this
SDK in `Gruntfile.js`.

Follow directions below to get up and running with Grunt.

#### Prerequisites

- [NodeJS](http://nodejs.org)

#### Install NodeJS Modules

From the root directory of the SDK (where `Gruntfile.js` is
located), install NodeJS modules:

    npm install

#### Build for Production

To compile assets and create a full production build, run the
build task:

    grunt build

#### Development

During development, a full minified SDK build is unnecessary.  To
compile assets without minifying:

    grunt compile

#### Automatic Compilation & Testing

Since it's cumbersome to manually compile assets after every change during
development, the SDK's `Gruntfile.js` includes a `watch` task.  The
task monitors changes to the SDK's `coffee` and `sass` assets,
automatically compiling (but not minifying) them.  Run the following command
before making changes:

    grunt watch

SDK tests are also executed by the `watch` task.  If changing the SDK
significantly, some or all tests may fail.  You may disable auto-testing by
editing the `watch` task in `Gruntfile.js`.

#### Running Tests

The SDK comes with a complete test suite.  Execute tests from grunt:

    grunt test

Or execute tests directly in a browser.  Open `test/index.html` and click
"Run Tests".
