#CitiMobileChallengeSdk

## Description

This is the JQuery SDK library for CitiMobileChallenge. This SDK is based on **JQuery.js**, **Underscore.js** and **Backbone.js**.

## Table of Contents

### Authentication for Citi Mobile Challenge
```
An 'Authorization' header bearer token must be passed on every subsequent call after the login call.
Example:

sendAuthentication = function (xhr) {
  xhr.setRequestHeader('Authorization', ("Bearer ".concat("mytoken"));
}

fetch({
  beforeSend: sendAuthentication
});
 ```

<!-- TOC depth:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [CitiMobileChallengeSdk](#citimobilechallengesdk)
	- [Table of Contents](#table-of-contents)
	- [Project Structure](#project-structure)
	- [Adding the SDK to your Application](#adding-the-sdk-to-your-application)
		- [Dependencies](#dependencies)
	- [Setup](#setup)
	- [Authentication:  Login & Logout](#authentication-login-logout)
	- [Using local caching](#using-local-caching)
	- [Models](#models)
  
    
		- [CapitalMarketsActivity](#capitalmarketsactivity)
			- [Create](#create)
			- [Update](#update)
			- [Read](#read)
			- [Delete](#delete)
			- [Query Scopes](#query-scopes)
	    
	      
				- [CapitalMarketsActivityAll](#capitalmarketsactivityall)
	    
	      
				- [CapitalMarketsActivityExactMatch](#capitalmarketsactivityexactmatch)
	    
	      
				- [CapitalMarketsActivityCount](#capitalmarketsactivitycount)
	    
	      
				- [CapitalMarketsActivityCountExactMatch](#capitalmarketsactivitycountexactmatch)
	    
	      
				- [CapitalMarketsActivityActivities](#capitalmarketsactivityactivities)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation)
	   
   
    
		- [CapitalMarketsContact](#capitalmarketscontact)
			- [Create](#create-1)
			- [Update](#update-1)
			- [Read](#read-1)
			- [Delete](#delete-1)
			- [Query Scopes](#query-scopes-1)
	    
	      
				- [CapitalMarketsContactAll](#capitalmarketscontactall)
	    
	      
				- [CapitalMarketsContactExactMatch](#capitalmarketscontactexactmatch)
	    
	      
				- [CapitalMarketsContactCount](#capitalmarketscontactcount)
	    
	      
				- [CapitalMarketsContactCountExactMatch](#capitalmarketscontactcountexactmatch)
	    
	      
				- [CapitalMarketsContactContacts](#capitalmarketscontactcontacts)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-1)
	   
   
    
		- [CapitalMarketsContentService](#capitalmarketscontentservice)
			- [Create](#create-2)
			- [Update](#update-2)
			- [Read](#read-2)
			- [Delete](#delete-2)
			- [Query Scopes](#query-scopes-2)
	    
	      
				- [CapitalMarketsContentServiceAll](#capitalmarketscontentserviceall)
	    
	      
				- [CapitalMarketsContentServiceExactMatch](#capitalmarketscontentserviceexactmatch)
	    
	      
				- [CapitalMarketsContentServiceCount](#capitalmarketscontentservicecount)
	    
	      
				- [CapitalMarketsContentServiceCountExactMatch](#capitalmarketscontentservicecountexactmatch)
	    
	      
				- [CapitalMarketsContentServiceContentServices](#capitalmarketscontentservicecontentservices)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-2)
	   
   
    
		- [CapitalMarketsLogin](#capitalmarketslogin)
			- [Create](#create-3)
			- [Update](#update-3)
			- [Read](#read-3)
			- [Delete](#delete-3)
			- [Query Scopes](#query-scopes-3)
	    
	      
				- [CapitalMarketsLoginAll](#capitalmarketsloginall)
	    
	      
				- [CapitalMarketsLoginExactMatch](#capitalmarketsloginexactmatch)
	    
	      
				- [CapitalMarketsLoginCount](#capitalmarketslogincount)
	    
	      
				- [CapitalMarketsLoginCountExactMatch](#capitalmarketslogincountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-3)
	   
   
    
		- [CapitalMarketsOrder](#capitalmarketsorder)
			- [Create](#create-4)
			- [Update](#update-4)
			- [Read](#read-4)
			- [Delete](#delete-4)
			- [Query Scopes](#query-scopes-4)
	    
	      
				- [CapitalMarketsOrderAll](#capitalmarketsorderall)
	    
	      
				- [CapitalMarketsOrderExactMatch](#capitalmarketsorderexactmatch)
	    
	      
				- [CapitalMarketsOrderCount](#capitalmarketsordercount)
	    
	      
				- [CapitalMarketsOrderCountExactMatch](#capitalmarketsordercountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-4)
	   
   
    
		- [CapitalMarketsRevenue](#capitalmarketsrevenue)
			- [Create](#create-5)
			- [Update](#update-5)
			- [Read](#read-5)
			- [Delete](#delete-5)
			- [Query Scopes](#query-scopes-5)
	    
	      
				- [CapitalMarketsRevenueAll](#capitalmarketsrevenueall)
	    
	      
				- [CapitalMarketsRevenueExactMatch](#capitalmarketsrevenueexactmatch)
	    
	      
				- [CapitalMarketsRevenueCount](#capitalmarketsrevenuecount)
	    
	      
				- [CapitalMarketsRevenueCountExactMatch](#capitalmarketsrevenuecountexactmatch)
	    
	      
				- [CapitalMarketsRevenueRevenues](#capitalmarketsrevenuerevenues)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-5)
	   
   
    
		- [CorporatePaymentsAccount](#corporatepaymentsaccount)
			- [Create](#create-6)
			- [Update](#update-6)
			- [Read](#read-6)
			- [Delete](#delete-6)
			- [Query Scopes](#query-scopes-6)
	    
	      
				- [CorporatePaymentsAccountAll](#corporatepaymentsaccountall)
	    
	      
				- [CorporatePaymentsAccountExactMatch](#corporatepaymentsaccountexactmatch)
	    
	      
				- [CorporatePaymentsAccountCount](#corporatepaymentsaccountcount)
	    
	      
				- [CorporatePaymentsAccountCountExactMatch](#corporatepaymentsaccountcountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-6)
	   
   
    
		- [CorporatePaymentsBeneficiary](#corporatepaymentsbeneficiary)
			- [Create](#create-7)
			- [Update](#update-7)
			- [Read](#read-7)
			- [Delete](#delete-7)
			- [Query Scopes](#query-scopes-7)
	    
	      
				- [CorporatePaymentsBeneficiaryAll](#corporatepaymentsbeneficiaryall)
	    
	      
				- [CorporatePaymentsBeneficiaryExactMatch](#corporatepaymentsbeneficiaryexactmatch)
	    
	      
				- [CorporatePaymentsBeneficiaryCount](#corporatepaymentsbeneficiarycount)
	    
	      
				- [CorporatePaymentsBeneficiaryCountExactMatch](#corporatepaymentsbeneficiarycountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-7)
	   
   
    
		- [CorporatePaymentsCrossBorderFxBooking](#corporatepaymentscrossborderfxbooking)
			- [Create](#create-8)
			- [Update](#update-8)
			- [Read](#read-8)
			- [Delete](#delete-8)
			- [Query Scopes](#query-scopes-8)
	    
	      
				- [CorporatePaymentsCrossBorderFxBookingAll](#corporatepaymentscrossborderfxbookingall)
	    
	      
				- [CorporatePaymentsCrossBorderFxBookingExactMatch](#corporatepaymentscrossborderfxbookingexactmatch)
	    
	      
				- [CorporatePaymentsCrossBorderFxBookingCount](#corporatepaymentscrossborderfxbookingcount)
	    
	      
				- [CorporatePaymentsCrossBorderFxBookingCountExactMatch](#corporatepaymentscrossborderfxbookingcountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-8)
	   
   
    
		- [CorporatePaymentsCrossBorderFxPayment](#corporatepaymentscrossborderfxpayment)
			- [Create](#create-9)
			- [Update](#update-9)
			- [Read](#read-9)
			- [Delete](#delete-9)
			- [Query Scopes](#query-scopes-9)
	    
	      
				- [CorporatePaymentsCrossBorderFxPaymentAll](#corporatepaymentscrossborderfxpaymentall)
	    
	      
				- [CorporatePaymentsCrossBorderFxPaymentExactMatch](#corporatepaymentscrossborderfxpaymentexactmatch)
	    
	      
				- [CorporatePaymentsCrossBorderFxPaymentCount](#corporatepaymentscrossborderfxpaymentcount)
	    
	      
				- [CorporatePaymentsCrossBorderFxPaymentCountExactMatch](#corporatepaymentscrossborderfxpaymentcountexactmatch)
	    
	      
				- [CorporatePaymentsCrossBorderFxPaymentFxPayments](#corporatepaymentscrossborderfxpaymentfxpayments)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-9)
	   
   
    
		- [CorporatePaymentsCrossBorderFxQuote](#corporatepaymentscrossborderfxquote)
			- [Create](#create-10)
			- [Update](#update-10)
			- [Read](#read-10)
			- [Delete](#delete-10)
			- [Query Scopes](#query-scopes-10)
	    
	      
				- [CorporatePaymentsCrossBorderFxQuoteAll](#corporatepaymentscrossborderfxquoteall)
	    
	      
				- [CorporatePaymentsCrossBorderFxQuoteExactMatch](#corporatepaymentscrossborderfxquoteexactmatch)
	    
	      
				- [CorporatePaymentsCrossBorderFxQuoteCount](#corporatepaymentscrossborderfxquotecount)
	    
	      
				- [CorporatePaymentsCrossBorderFxQuoteCountExactMatch](#corporatepaymentscrossborderfxquotecountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-10)
	   
   
    
		- [CorporatePaymentsLogin](#corporatepaymentslogin)
			- [Create](#create-11)
			- [Update](#update-11)
			- [Read](#read-11)
			- [Delete](#delete-11)
			- [Query Scopes](#query-scopes-11)
	    
	      
				- [CorporatePaymentsLoginAll](#corporatepaymentsloginall)
	    
	      
				- [CorporatePaymentsLoginExactMatch](#corporatepaymentsloginexactmatch)
	    
	      
				- [CorporatePaymentsLoginCount](#corporatepaymentslogincount)
	    
	      
				- [CorporatePaymentsLoginCountExactMatch](#corporatepaymentslogincountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-11)
	   
   
    
		- [CorporatePaymentsPayment](#corporatepaymentspayment)
			- [Create](#create-12)
			- [Update](#update-12)
			- [Read](#read-12)
			- [Delete](#delete-12)
			- [Query Scopes](#query-scopes-12)
	    
	      
				- [CorporatePaymentsPaymentAll](#corporatepaymentspaymentall)
	    
	      
				- [CorporatePaymentsPaymentExactMatch](#corporatepaymentspaymentexactmatch)
	    
	      
				- [CorporatePaymentsPaymentCount](#corporatepaymentspaymentcount)
	    
	      
				- [CorporatePaymentsPaymentCountExactMatch](#corporatepaymentspaymentcountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-12)
	   
   
    
		- [RetailBankingAccount](#retailbankingaccount)
			- [Create](#create-13)
			- [Update](#update-13)
			- [Read](#read-13)
			- [Delete](#delete-13)
			- [Query Scopes](#query-scopes-13)
	    
	      
				- [RetailBankingAccountAll](#retailbankingaccountall)
	    
	      
				- [RetailBankingAccountExactMatch](#retailbankingaccountexactmatch)
	    
	      
				- [RetailBankingAccountCount](#retailbankingaccountcount)
	    
	      
				- [RetailBankingAccountCountExactMatch](#retailbankingaccountcountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-13)
	   
   
    
		- [RetailBankingAccountBalance](#retailbankingaccountbalance)
			- [Create](#create-14)
			- [Update](#update-14)
			- [Read](#read-14)
			- [Delete](#delete-14)
			- [Query Scopes](#query-scopes-14)
	    
	      
				- [RetailBankingAccountBalanceAll](#retailbankingaccountbalanceall)
	    
	      
				- [RetailBankingAccountBalanceExactMatch](#retailbankingaccountbalanceexactmatch)
	    
	      
				- [RetailBankingAccountBalanceCount](#retailbankingaccountbalancecount)
	    
	      
				- [RetailBankingAccountBalanceCountExactMatch](#retailbankingaccountbalancecountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-14)
	   
   
    
		- [RetailBankingAccountFundTransfer](#retailbankingaccountfundtransfer)
			- [Create](#create-15)
			- [Update](#update-15)
			- [Read](#read-15)
			- [Delete](#delete-15)
			- [Query Scopes](#query-scopes-15)
	    
	      
				- [RetailBankingAccountFundTransferAll](#retailbankingaccountfundtransferall)
	    
	      
				- [RetailBankingAccountFundTransferExactMatch](#retailbankingaccountfundtransferexactmatch)
	    
	      
				- [RetailBankingAccountFundTransferCount](#retailbankingaccountfundtransfercount)
	    
	      
				- [RetailBankingAccountFundTransferCountExactMatch](#retailbankingaccountfundtransfercountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-15)
	   
   
    
		- [RetailBankingAccountTransaction](#retailbankingaccounttransaction)
			- [Create](#create-16)
			- [Update](#update-16)
			- [Read](#read-16)
			- [Delete](#delete-16)
			- [Query Scopes](#query-scopes-16)
	    
	      
				- [RetailBankingAccountTransactionAll](#retailbankingaccounttransactionall)
	    
	      
				- [RetailBankingAccountTransactionExactMatch](#retailbankingaccounttransactionexactmatch)
	    
	      
				- [RetailBankingAccountTransactionCount](#retailbankingaccounttransactioncount)
	    
	      
				- [RetailBankingAccountTransactionCountExactMatch](#retailbankingaccounttransactioncountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-16)
	   
   
    
		- [RetailBankingForeignCurrency](#retailbankingforeigncurrency)
			- [Create](#create-17)
			- [Update](#update-17)
			- [Read](#read-17)
			- [Delete](#delete-17)
			- [Query Scopes](#query-scopes-17)
	    
	      
				- [RetailBankingForeignCurrencyAll](#retailbankingforeigncurrencyall)
	    
	      
				- [RetailBankingForeignCurrencyExactMatch](#retailbankingforeigncurrencyexactmatch)
	    
	      
				- [RetailBankingForeignCurrencyCount](#retailbankingforeigncurrencycount)
	    
	      
				- [RetailBankingForeignCurrencyCountExactMatch](#retailbankingforeigncurrencycountexactmatch)
	    
	      
				- [RetailBankingForeignCurrencyForeignCurrency](#retailbankingforeigncurrencyforeigncurrency)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-17)
	   
   
    
		- [RetailBankingLocation](#retailbankinglocation)
			- [Create](#create-18)
			- [Update](#update-18)
			- [Read](#read-18)
			- [Delete](#delete-18)
			- [Query Scopes](#query-scopes-18)
	    
	      
				- [RetailBankingLocationAll](#retailbankinglocationall)
	    
	      
				- [RetailBankingLocationExactMatch](#retailbankinglocationexactmatch)
	    
	      
				- [RetailBankingLocationCount](#retailbankinglocationcount)
	    
	      
				- [RetailBankingLocationCountExactMatch](#retailbankinglocationcountexactmatch)
	    
	      
				- [RetailBankingLocationLocations](#retailbankinglocationlocations)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-18)
	   
   
    
		- [RetailBankingLogin](#retailbankinglogin)
			- [Create](#create-19)
			- [Update](#update-19)
			- [Read](#read-19)
			- [Delete](#delete-19)
			- [Query Scopes](#query-scopes-19)
	    
	      
				- [RetailBankingLoginAll](#retailbankingloginall)
	    
	      
				- [RetailBankingLoginExactMatch](#retailbankingloginexactmatch)
	    
	      
				- [RetailBankingLoginCount](#retailbankinglogincount)
	    
	      
				- [RetailBankingLoginCountExactMatch](#retailbankinglogincountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-19)
	   
   
    
		- [RetailBankingPayee](#retailbankingpayee)
			- [Create](#create-20)
			- [Update](#update-20)
			- [Read](#read-20)
			- [Delete](#delete-20)
			- [Query Scopes](#query-scopes-20)
	    
	      
				- [RetailBankingPayeeAll](#retailbankingpayeeall)
	    
	      
				- [RetailBankingPayeeExactMatch](#retailbankingpayeeexactmatch)
	    
	      
				- [RetailBankingPayeeCount](#retailbankingpayeecount)
	    
	      
				- [RetailBankingPayeeCountExactMatch](#retailbankingpayeecountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-20)
	   
   
    
		- [RetailBankingPayeeType](#retailbankingpayeetype)
			- [Create](#create-21)
			- [Update](#update-21)
			- [Read](#read-21)
			- [Delete](#delete-21)
			- [Query Scopes](#query-scopes-21)
	    
	      
				- [RetailBankingPayeeTypeAll](#retailbankingpayeetypeall)
	    
	      
				- [RetailBankingPayeeTypeExactMatch](#retailbankingpayeetypeexactmatch)
	    
	      
				- [RetailBankingPayeeTypeCount](#retailbankingpayeetypecount)
	    
	      
				- [RetailBankingPayeeTypeCountExactMatch](#retailbankingpayeetypecountexactmatch)
	    
	    
	    
	    
			- [Value interpolation](#value-interpolation-21)
	   
   
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

## Authentication:  Login & Logout
```javascript
AP.auth.Authentication.login({
  username: 'test',
  password: 'password'
});

AP.auth.Authentication.logout();
```

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

###CapitalMarketsActivity

####Create

This is an example of how you would create a CapitalMarketsActivity Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CapitalMarketsActivity();

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

Updating a CapitalMarketsActivity Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single CapitalMarketsActivity instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CapitalMarketsActivity({
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

####Query Scopes

The available query scopes for CapitalMarketsActivity objects are:

* CapitalMarketsActivityAll
* CapitalMarketsActivityExactMatch
* CapitalMarketsActivityCount
* CapitalMarketsActivityCountExactMatch
* CapitalMarketsActivityActivities

#####CapitalMarketsActivityAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsActivityAll = new CitiMobileChallengeSdk.collections.CapitalMarketsActivityAll();

// using the query method
CapitalMarketsActivityAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsActivityAll.fetch({
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
CapitalMarketsActivityAll.query({
  
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

#####CapitalMarketsActivityExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsActivityExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsActivityExactMatch();

// using the query method
CapitalMarketsActivityExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsActivityExactMatch.fetch({
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
CapitalMarketsActivityExactMatch.query({
  
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

#####CapitalMarketsActivityCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsActivityCount = new CitiMobileChallengeSdk.collections.CapitalMarketsActivityCount();

// using the query method
CapitalMarketsActivityCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsActivityCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsActivityCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsActivityCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsActivityCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CapitalMarketsActivityCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsActivityCountExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsActivityCountExactMatch();

// using the query method
CapitalMarketsActivityCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsActivityCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsActivityCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsActivityCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsActivityCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
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

####Create

This is an example of how you would create a CapitalMarketsContact Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CapitalMarketsContact();

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

Updating a CapitalMarketsContact Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single CapitalMarketsContact instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CapitalMarketsContact({
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

####Query Scopes

The available query scopes for CapitalMarketsContact objects are:

* CapitalMarketsContactAll
* CapitalMarketsContactExactMatch
* CapitalMarketsContactCount
* CapitalMarketsContactCountExactMatch
* CapitalMarketsContactContacts

#####CapitalMarketsContactAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsContactAll = new CitiMobileChallengeSdk.collections.CapitalMarketsContactAll();

// using the query method
CapitalMarketsContactAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsContactAll.fetch({
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
CapitalMarketsContactAll.query({
  
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

#####CapitalMarketsContactExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsContactExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsContactExactMatch();

// using the query method
CapitalMarketsContactExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsContactExactMatch.fetch({
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
CapitalMarketsContactExactMatch.query({
  
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

#####CapitalMarketsContactCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsContactCount = new CitiMobileChallengeSdk.collections.CapitalMarketsContactCount();

// using the query method
CapitalMarketsContactCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsContactCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsContactCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsContactCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsContactCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CapitalMarketsContactCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsContactCountExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsContactCountExactMatch();

// using the query method
CapitalMarketsContactCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsContactCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsContactCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsContactCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsContactCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
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

####Create

This is an example of how you would create a CapitalMarketsContentService Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CapitalMarketsContentService();

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

Updating a CapitalMarketsContentService Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single CapitalMarketsContentService instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CapitalMarketsContentService({
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

####Query Scopes

The available query scopes for CapitalMarketsContentService objects are:

* CapitalMarketsContentServiceAll
* CapitalMarketsContentServiceExactMatch
* CapitalMarketsContentServiceCount
* CapitalMarketsContentServiceCountExactMatch
* CapitalMarketsContentServiceContentServices

#####CapitalMarketsContentServiceAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsContentServiceAll = new CitiMobileChallengeSdk.collections.CapitalMarketsContentServiceAll();

// using the query method
CapitalMarketsContentServiceAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsContentServiceAll.fetch({
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
CapitalMarketsContentServiceAll.query({
  
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

#####CapitalMarketsContentServiceExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsContentServiceExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsContentServiceExactMatch();

// using the query method
CapitalMarketsContentServiceExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsContentServiceExactMatch.fetch({
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
CapitalMarketsContentServiceExactMatch.query({
  
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

#####CapitalMarketsContentServiceCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsContentServiceCount = new CitiMobileChallengeSdk.collections.CapitalMarketsContentServiceCount();

// using the query method
CapitalMarketsContentServiceCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsContentServiceCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsContentServiceCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsContentServiceCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsContentServiceCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CapitalMarketsContentServiceCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsContentServiceCountExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsContentServiceCountExactMatch();

// using the query method
CapitalMarketsContentServiceCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsContentServiceCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsContentServiceCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsContentServiceCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsContentServiceCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
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

####Update

Updating a CapitalMarketsLogin Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

```javascript
exampleModel.save({ "token": "foo" });
```

Updating the Model this way will cause a `PUT` request to be triggered, if you would like to send a `PATCH` request instead, then you should call like so:

```javascript
exampleModel.save({ "token": "foo" }, {patch: true});
```

Just like in Model creation, even if you are not updating all Model attributes, a complete representation is sent to the server.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "token": "foo" }, {async: false});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Read

Read operations allow you to get a single CapitalMarketsLogin instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CapitalMarketsLogin({
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

####Query Scopes

The available query scopes for CapitalMarketsLogin objects are:

* CapitalMarketsLoginAll
* CapitalMarketsLoginExactMatch
* CapitalMarketsLoginCount
* CapitalMarketsLoginCountExactMatch

#####CapitalMarketsLoginAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsLoginAll = new CitiMobileChallengeSdk.collections.CapitalMarketsLoginAll();

// using the query method
CapitalMarketsLoginAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsLoginAll.fetch({
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
CapitalMarketsLoginAll.query({
  
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

#####CapitalMarketsLoginExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsLoginExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsLoginExactMatch();

// using the query method
CapitalMarketsLoginExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsLoginExactMatch.fetch({
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
CapitalMarketsLoginExactMatch.query({
  
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

#####CapitalMarketsLoginCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsLoginCount = new CitiMobileChallengeSdk.collections.CapitalMarketsLoginCount();

// using the query method
CapitalMarketsLoginCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsLoginCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsLoginCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsLoginCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsLoginCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CapitalMarketsLoginCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsLoginCountExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsLoginCountExactMatch();

// using the query method
CapitalMarketsLoginCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsLoginCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsLoginCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsLoginCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsLoginCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

  
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  

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

####Update

Updating a CapitalMarketsOrder Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

####Query Scopes

The available query scopes for CapitalMarketsOrder objects are:

* CapitalMarketsOrderAll
* CapitalMarketsOrderExactMatch
* CapitalMarketsOrderCount
* CapitalMarketsOrderCountExactMatch

#####CapitalMarketsOrderAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsOrderAll = new CitiMobileChallengeSdk.collections.CapitalMarketsOrderAll();

// using the query method
CapitalMarketsOrderAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsOrderAll.fetch({
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
CapitalMarketsOrderAll.query({
  
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

#####CapitalMarketsOrderExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsOrderExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsOrderExactMatch();

// using the query method
CapitalMarketsOrderExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsOrderExactMatch.fetch({
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
CapitalMarketsOrderExactMatch.query({
  
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

#####CapitalMarketsOrderCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsOrderCount = new CitiMobileChallengeSdk.collections.CapitalMarketsOrderCount();

// using the query method
CapitalMarketsOrderCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsOrderCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsOrderCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsOrderCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsOrderCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CapitalMarketsOrderCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsOrderCountExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsOrderCountExactMatch();

// using the query method
CapitalMarketsOrderCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsOrderCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsOrderCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsOrderCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsOrderCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

  
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  

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

####Create

This is an example of how you would create a CapitalMarketsRevenue Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.CapitalMarketsRevenue();

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

Updating a CapitalMarketsRevenue Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single CapitalMarketsRevenue instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CapitalMarketsRevenue({
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

####Query Scopes

The available query scopes for CapitalMarketsRevenue objects are:

* CapitalMarketsRevenueAll
* CapitalMarketsRevenueExactMatch
* CapitalMarketsRevenueCount
* CapitalMarketsRevenueCountExactMatch
* CapitalMarketsRevenueRevenues

#####CapitalMarketsRevenueAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsRevenueAll = new CitiMobileChallengeSdk.collections.CapitalMarketsRevenueAll();

// using the query method
CapitalMarketsRevenueAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsRevenueAll.fetch({
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
CapitalMarketsRevenueAll.query({
  
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

#####CapitalMarketsRevenueExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsRevenueExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsRevenueExactMatch();

// using the query method
CapitalMarketsRevenueExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsRevenueExactMatch.fetch({
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
CapitalMarketsRevenueExactMatch.query({
  
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

#####CapitalMarketsRevenueCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsRevenueCount = new CitiMobileChallengeSdk.collections.CapitalMarketsRevenueCount();

// using the query method
CapitalMarketsRevenueCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsRevenueCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsRevenueCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsRevenueCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsRevenueCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CapitalMarketsRevenueCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CapitalMarketsRevenueCountExactMatch = new CitiMobileChallengeSdk.collections.CapitalMarketsRevenueCountExactMatch();

// using the query method
CapitalMarketsRevenueCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CapitalMarketsRevenueCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CapitalMarketsRevenueCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CapitalMarketsRevenueCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CapitalMarketsRevenueCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
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

####Query Scopes

The available query scopes for CorporatePaymentsAccount objects are:

* CorporatePaymentsAccountAll
* CorporatePaymentsAccountExactMatch
* CorporatePaymentsAccountCount
* CorporatePaymentsAccountCountExactMatch

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

#####CorporatePaymentsAccountExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsAccountExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsAccountExactMatch();

// using the query method
CorporatePaymentsAccountExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsAccountExactMatch.fetch({
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
CorporatePaymentsAccountExactMatch.query({
  
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

#####CorporatePaymentsAccountCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsAccountCount = new CitiMobileChallengeSdk.collections.CorporatePaymentsAccountCount();

// using the query method
CorporatePaymentsAccountCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsAccountCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsAccountCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsAccountCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsAccountCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CorporatePaymentsAccountCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsAccountCountExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsAccountCountExactMatch();

// using the query method
CorporatePaymentsAccountCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsAccountCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsAccountCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsAccountCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsAccountCountExactMatch.valueOf();
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

####Query Scopes

The available query scopes for CorporatePaymentsBeneficiary objects are:

* CorporatePaymentsBeneficiaryAll
* CorporatePaymentsBeneficiaryExactMatch
* CorporatePaymentsBeneficiaryCount
* CorporatePaymentsBeneficiaryCountExactMatch

#####CorporatePaymentsBeneficiaryAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsBeneficiaryAll = new CitiMobileChallengeSdk.collections.CorporatePaymentsBeneficiaryAll();

// using the query method
CorporatePaymentsBeneficiaryAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsBeneficiaryAll.fetch({
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
CorporatePaymentsBeneficiaryAll.query({
  
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

#####CorporatePaymentsBeneficiaryExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsBeneficiaryExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsBeneficiaryExactMatch();

// using the query method
CorporatePaymentsBeneficiaryExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsBeneficiaryExactMatch.fetch({
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
CorporatePaymentsBeneficiaryExactMatch.query({
  
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

#####CorporatePaymentsBeneficiaryCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsBeneficiaryCount = new CitiMobileChallengeSdk.collections.CorporatePaymentsBeneficiaryCount();

// using the query method
CorporatePaymentsBeneficiaryCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsBeneficiaryCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsBeneficiaryCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsBeneficiaryCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsBeneficiaryCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CorporatePaymentsBeneficiaryCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsBeneficiaryCountExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsBeneficiaryCountExactMatch();

// using the query method
CorporatePaymentsBeneficiaryCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsBeneficiaryCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsBeneficiaryCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsBeneficiaryCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsBeneficiaryCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

  
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
  
   
  
   
  
   
  
   
  
   
  

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

####Update

Updating a CorporatePaymentsCrossBorderFxBooking Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

```javascript
exampleModel.save({ "accepted_on": "foo" });
```

Updating the Model this way will cause a `PUT` request to be triggered, if you would like to send a `PATCH` request instead, then you should call like so:

```javascript
exampleModel.save({ "accepted_on": "foo" }, {patch: true});
```

Just like in Model creation, even if you are not updating all Model attributes, a complete representation is sent to the server.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "accepted_on": "foo" }, {async: false});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Read

Read operations allow you to get a single CorporatePaymentsCrossBorderFxBooking instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxBooking({
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

####Query Scopes

The available query scopes for CorporatePaymentsCrossBorderFxBooking objects are:

* CorporatePaymentsCrossBorderFxBookingAll
* CorporatePaymentsCrossBorderFxBookingExactMatch
* CorporatePaymentsCrossBorderFxBookingCount
* CorporatePaymentsCrossBorderFxBookingCountExactMatch

#####CorporatePaymentsCrossBorderFxBookingAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxBookingAll = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxBookingAll();

// using the query method
CorporatePaymentsCrossBorderFxBookingAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxBookingAll.fetch({
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
CorporatePaymentsCrossBorderFxBookingAll.query({
  
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

#####CorporatePaymentsCrossBorderFxBookingExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxBookingExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxBookingExactMatch();

// using the query method
CorporatePaymentsCrossBorderFxBookingExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxBookingExactMatch.fetch({
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
CorporatePaymentsCrossBorderFxBookingExactMatch.query({
  
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

#####CorporatePaymentsCrossBorderFxBookingCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxBookingCount = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxBookingCount();

// using the query method
CorporatePaymentsCrossBorderFxBookingCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxBookingCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsCrossBorderFxBookingCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsCrossBorderFxBookingCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsCrossBorderFxBookingCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CorporatePaymentsCrossBorderFxBookingCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxBookingCountExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxBookingCountExactMatch();

// using the query method
CorporatePaymentsCrossBorderFxBookingCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxBookingCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsCrossBorderFxBookingCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsCrossBorderFxBookingCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsCrossBorderFxBookingCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

  
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
  
   
  
   
  
   
  
   
  
   
  

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

####Update

Updating a CorporatePaymentsCrossBorderFxPayment Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single CorporatePaymentsCrossBorderFxPayment instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxPayment({
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

####Query Scopes

The available query scopes for CorporatePaymentsCrossBorderFxPayment objects are:

* CorporatePaymentsCrossBorderFxPaymentAll
* CorporatePaymentsCrossBorderFxPaymentExactMatch
* CorporatePaymentsCrossBorderFxPaymentCount
* CorporatePaymentsCrossBorderFxPaymentCountExactMatch
* CorporatePaymentsCrossBorderFxPaymentFxPayments

#####CorporatePaymentsCrossBorderFxPaymentAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxPaymentAll = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxPaymentAll();

// using the query method
CorporatePaymentsCrossBorderFxPaymentAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxPaymentAll.fetch({
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
CorporatePaymentsCrossBorderFxPaymentAll.query({
  
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

#####CorporatePaymentsCrossBorderFxPaymentExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxPaymentExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxPaymentExactMatch();

// using the query method
CorporatePaymentsCrossBorderFxPaymentExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxPaymentExactMatch.fetch({
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
CorporatePaymentsCrossBorderFxPaymentExactMatch.query({
  
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

#####CorporatePaymentsCrossBorderFxPaymentCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxPaymentCount = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxPaymentCount();

// using the query method
CorporatePaymentsCrossBorderFxPaymentCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxPaymentCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsCrossBorderFxPaymentCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsCrossBorderFxPaymentCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsCrossBorderFxPaymentCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CorporatePaymentsCrossBorderFxPaymentCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxPaymentCountExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxPaymentCountExactMatch();

// using the query method
CorporatePaymentsCrossBorderFxPaymentCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxPaymentCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsCrossBorderFxPaymentCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsCrossBorderFxPaymentCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsCrossBorderFxPaymentCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CorporatePaymentsCrossBorderFxPaymentFxPayments

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxPaymentFxPayments = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxPaymentFxPayments();

// using the query method
CorporatePaymentsCrossBorderFxPaymentFxPayments.query({
  
  "citi_ref": "foo",
  
  "customer_txn_ref": "foo",
  
  "to_currency": "foo",
  
  "beneficiary_name": "foo",
  
  "value_date": "foo",
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxPaymentFxPayments.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
    "citi_ref": "foo",
    
    "customer_txn_ref": "foo",
    
    "to_currency": "foo",
    
    "beneficiary_name": "foo",
    
    "value_date": "foo",
    
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
CorporatePaymentsCrossBorderFxPaymentFxPayments.query({
  
  "citi_ref": "foo",
  
  "customer_txn_ref": "foo",
  
  "to_currency": "foo",
  
  "beneficiary_name": "foo",
  
  "value_date": "foo",
  
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

####Update

Updating a CorporatePaymentsCrossBorderFxQuote Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

```javascript
exampleModel.save({ "requested_on": "foo" });
```

Updating the Model this way will cause a `PUT` request to be triggered, if you would like to send a `PATCH` request instead, then you should call like so:

```javascript
exampleModel.save({ "requested_on": "foo" }, {patch: true});
```

Just like in Model creation, even if you are not updating all Model attributes, a complete representation is sent to the server.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "requested_on": "foo" }, {async: false});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Read

Read operations allow you to get a single CorporatePaymentsCrossBorderFxQuote instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsCrossBorderFxQuote({
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

####Query Scopes

The available query scopes for CorporatePaymentsCrossBorderFxQuote objects are:

* CorporatePaymentsCrossBorderFxQuoteAll
* CorporatePaymentsCrossBorderFxQuoteExactMatch
* CorporatePaymentsCrossBorderFxQuoteCount
* CorporatePaymentsCrossBorderFxQuoteCountExactMatch

#####CorporatePaymentsCrossBorderFxQuoteAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxQuoteAll = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxQuoteAll();

// using the query method
CorporatePaymentsCrossBorderFxQuoteAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxQuoteAll.fetch({
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
CorporatePaymentsCrossBorderFxQuoteAll.query({
  
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

#####CorporatePaymentsCrossBorderFxQuoteExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxQuoteExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxQuoteExactMatch();

// using the query method
CorporatePaymentsCrossBorderFxQuoteExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxQuoteExactMatch.fetch({
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
CorporatePaymentsCrossBorderFxQuoteExactMatch.query({
  
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

#####CorporatePaymentsCrossBorderFxQuoteCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxQuoteCount = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxQuoteCount();

// using the query method
CorporatePaymentsCrossBorderFxQuoteCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxQuoteCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsCrossBorderFxQuoteCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsCrossBorderFxQuoteCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsCrossBorderFxQuoteCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CorporatePaymentsCrossBorderFxQuoteCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsCrossBorderFxQuoteCountExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsCrossBorderFxQuoteCountExactMatch();

// using the query method
CorporatePaymentsCrossBorderFxQuoteCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsCrossBorderFxQuoteCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsCrossBorderFxQuoteCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsCrossBorderFxQuoteCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsCrossBorderFxQuoteCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

  
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
  
   
  
   
  
   
  
   
  
   
  

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

####Update

Updating a CorporatePaymentsLogin Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

```javascript
exampleModel.save({ "token": "foo" });
```

Updating the Model this way will cause a `PUT` request to be triggered, if you would like to send a `PATCH` request instead, then you should call like so:

```javascript
exampleModel.save({ "token": "foo" }, {patch: true});
```

Just like in Model creation, even if you are not updating all Model attributes, a complete representation is sent to the server.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "token": "foo" }, {async: false});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Read

Read operations allow you to get a single CorporatePaymentsLogin instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.CorporatePaymentsLogin({
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

####Query Scopes

The available query scopes for CorporatePaymentsLogin objects are:

* CorporatePaymentsLoginAll
* CorporatePaymentsLoginExactMatch
* CorporatePaymentsLoginCount
* CorporatePaymentsLoginCountExactMatch

#####CorporatePaymentsLoginAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsLoginAll = new CitiMobileChallengeSdk.collections.CorporatePaymentsLoginAll();

// using the query method
CorporatePaymentsLoginAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsLoginAll.fetch({
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
CorporatePaymentsLoginAll.query({
  
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

#####CorporatePaymentsLoginExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsLoginExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsLoginExactMatch();

// using the query method
CorporatePaymentsLoginExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsLoginExactMatch.fetch({
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
CorporatePaymentsLoginExactMatch.query({
  
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

#####CorporatePaymentsLoginCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsLoginCount = new CitiMobileChallengeSdk.collections.CorporatePaymentsLoginCount();

// using the query method
CorporatePaymentsLoginCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsLoginCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsLoginCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsLoginCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsLoginCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CorporatePaymentsLoginCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsLoginCountExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsLoginCountExactMatch();

// using the query method
CorporatePaymentsLoginCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsLoginCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsLoginCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsLoginCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsLoginCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

  
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
  
   
  
   
  
   
  
   
  
   
  

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

####Update

Updating a CorporatePaymentsPayment Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

####Query Scopes

The available query scopes for CorporatePaymentsPayment objects are:

* CorporatePaymentsPaymentAll
* CorporatePaymentsPaymentExactMatch
* CorporatePaymentsPaymentCount
* CorporatePaymentsPaymentCountExactMatch

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

#####CorporatePaymentsPaymentExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsPaymentExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsPaymentExactMatch();

// using the query method
CorporatePaymentsPaymentExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsPaymentExactMatch.fetch({
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
CorporatePaymentsPaymentExactMatch.query({
  
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

#####CorporatePaymentsPaymentCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsPaymentCount = new CitiMobileChallengeSdk.collections.CorporatePaymentsPaymentCount();

// using the query method
CorporatePaymentsPaymentCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsPaymentCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsPaymentCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsPaymentCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsPaymentCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####CorporatePaymentsPaymentCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var CorporatePaymentsPaymentCountExactMatch = new CitiMobileChallengeSdk.collections.CorporatePaymentsPaymentCountExactMatch();

// using the query method
CorporatePaymentsPaymentCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
CorporatePaymentsPaymentCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = CorporatePaymentsPaymentCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
CorporatePaymentsPaymentCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = CorporatePaymentsPaymentCountExactMatch.valueOf();
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

####Create

This is an example of how you would create a RetailBankingAccount Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.RetailBankingAccount();

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

Updating a RetailBankingAccount Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

####Query Scopes

The available query scopes for RetailBankingAccount objects are:

* RetailBankingAccountAll
* RetailBankingAccountExactMatch
* RetailBankingAccountCount
* RetailBankingAccountCountExactMatch

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

#####RetailBankingAccountExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingAccountExactMatch();

// using the query method
RetailBankingAccountExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountExactMatch.fetch({
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
RetailBankingAccountExactMatch.query({
  
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

#####RetailBankingAccountCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountCount = new CitiMobileChallengeSdk.collections.RetailBankingAccountCount();

// using the query method
RetailBankingAccountCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingAccountCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingAccountCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingAccountCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####RetailBankingAccountCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountCountExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingAccountCountExactMatch();

// using the query method
RetailBankingAccountCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingAccountCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingAccountCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingAccountCountExactMatch.valueOf();
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

####Create

This is an example of how you would create a RetailBankingAccountBalance Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.RetailBankingAccountBalance();

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

Updating a RetailBankingAccountBalance Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single RetailBankingAccountBalance instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.RetailBankingAccountBalance({
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

####Query Scopes

The available query scopes for RetailBankingAccountBalance objects are:

* RetailBankingAccountBalanceAll
* RetailBankingAccountBalanceExactMatch
* RetailBankingAccountBalanceCount
* RetailBankingAccountBalanceCountExactMatch

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

#####RetailBankingAccountBalanceExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountBalanceExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingAccountBalanceExactMatch();

// using the query method
RetailBankingAccountBalanceExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountBalanceExactMatch.fetch({
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
RetailBankingAccountBalanceExactMatch.query({
  
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

#####RetailBankingAccountBalanceCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountBalanceCount = new CitiMobileChallengeSdk.collections.RetailBankingAccountBalanceCount();

// using the query method
RetailBankingAccountBalanceCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountBalanceCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingAccountBalanceCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingAccountBalanceCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingAccountBalanceCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####RetailBankingAccountBalanceCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountBalanceCountExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingAccountBalanceCountExactMatch();

// using the query method
RetailBankingAccountBalanceCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountBalanceCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingAccountBalanceCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingAccountBalanceCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingAccountBalanceCountExactMatch.valueOf();
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

####Update

Updating a RetailBankingAccountFundTransfer Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single RetailBankingAccountFundTransfer instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.RetailBankingAccountFundTransfer({
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

####Query Scopes

The available query scopes for RetailBankingAccountFundTransfer objects are:

* RetailBankingAccountFundTransferAll
* RetailBankingAccountFundTransferExactMatch
* RetailBankingAccountFundTransferCount
* RetailBankingAccountFundTransferCountExactMatch

#####RetailBankingAccountFundTransferAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountFundTransferAll = new CitiMobileChallengeSdk.collections.RetailBankingAccountFundTransferAll();

// using the query method
RetailBankingAccountFundTransferAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountFundTransferAll.fetch({
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
RetailBankingAccountFundTransferAll.query({
  
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

#####RetailBankingAccountFundTransferExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountFundTransferExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingAccountFundTransferExactMatch();

// using the query method
RetailBankingAccountFundTransferExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountFundTransferExactMatch.fetch({
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
RetailBankingAccountFundTransferExactMatch.query({
  
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

#####RetailBankingAccountFundTransferCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountFundTransferCount = new CitiMobileChallengeSdk.collections.RetailBankingAccountFundTransferCount();

// using the query method
RetailBankingAccountFundTransferCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountFundTransferCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingAccountFundTransferCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingAccountFundTransferCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingAccountFundTransferCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####RetailBankingAccountFundTransferCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountFundTransferCountExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingAccountFundTransferCountExactMatch();

// using the query method
RetailBankingAccountFundTransferCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountFundTransferCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingAccountFundTransferCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingAccountFundTransferCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingAccountFundTransferCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

  
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  

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

####Create

This is an example of how you would create a RetailBankingAccountTransaction Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.RetailBankingAccountTransaction();

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

Updating a RetailBankingAccountTransaction Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single RetailBankingAccountTransaction instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.RetailBankingAccountTransaction({
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

####Query Scopes

The available query scopes for RetailBankingAccountTransaction objects are:

* RetailBankingAccountTransactionAll
* RetailBankingAccountTransactionExactMatch
* RetailBankingAccountTransactionCount
* RetailBankingAccountTransactionCountExactMatch

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

#####RetailBankingAccountTransactionExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountTransactionExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingAccountTransactionExactMatch();

// using the query method
RetailBankingAccountTransactionExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountTransactionExactMatch.fetch({
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
RetailBankingAccountTransactionExactMatch.query({
  
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

#####RetailBankingAccountTransactionCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountTransactionCount = new CitiMobileChallengeSdk.collections.RetailBankingAccountTransactionCount();

// using the query method
RetailBankingAccountTransactionCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountTransactionCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingAccountTransactionCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingAccountTransactionCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingAccountTransactionCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####RetailBankingAccountTransactionCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingAccountTransactionCountExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingAccountTransactionCountExactMatch();

// using the query method
RetailBankingAccountTransactionCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingAccountTransactionCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingAccountTransactionCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingAccountTransactionCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingAccountTransactionCountExactMatch.valueOf();
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

####Create

This is an example of how you would create a RetailBankingForeignCurrency Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.RetailBankingForeignCurrency();

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

Updating a RetailBankingForeignCurrency Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single RetailBankingForeignCurrency instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.RetailBankingForeignCurrency({
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

####Query Scopes

The available query scopes for RetailBankingForeignCurrency objects are:

* RetailBankingForeignCurrencyAll
* RetailBankingForeignCurrencyExactMatch
* RetailBankingForeignCurrencyCount
* RetailBankingForeignCurrencyCountExactMatch
* RetailBankingForeignCurrencyForeignCurrency

#####RetailBankingForeignCurrencyAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingForeignCurrencyAll = new CitiMobileChallengeSdk.collections.RetailBankingForeignCurrencyAll();

// using the query method
RetailBankingForeignCurrencyAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingForeignCurrencyAll.fetch({
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
RetailBankingForeignCurrencyAll.query({
  
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

#####RetailBankingForeignCurrencyExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingForeignCurrencyExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingForeignCurrencyExactMatch();

// using the query method
RetailBankingForeignCurrencyExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingForeignCurrencyExactMatch.fetch({
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
RetailBankingForeignCurrencyExactMatch.query({
  
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

#####RetailBankingForeignCurrencyCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingForeignCurrencyCount = new CitiMobileChallengeSdk.collections.RetailBankingForeignCurrencyCount();

// using the query method
RetailBankingForeignCurrencyCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingForeignCurrencyCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingForeignCurrencyCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingForeignCurrencyCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingForeignCurrencyCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####RetailBankingForeignCurrencyCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingForeignCurrencyCountExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingForeignCurrencyCountExactMatch();

// using the query method
RetailBankingForeignCurrencyCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingForeignCurrencyCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingForeignCurrencyCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingForeignCurrencyCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingForeignCurrencyCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
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

####Create

This is an example of how you would create a RetailBankingLocation Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.RetailBankingLocation();

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

Updating a RetailBankingLocation Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single RetailBankingLocation instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.RetailBankingLocation({
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

####Query Scopes

The available query scopes for RetailBankingLocation objects are:

* RetailBankingLocationAll
* RetailBankingLocationExactMatch
* RetailBankingLocationCount
* RetailBankingLocationCountExactMatch
* RetailBankingLocationLocations

#####RetailBankingLocationAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingLocationAll = new CitiMobileChallengeSdk.collections.RetailBankingLocationAll();

// using the query method
RetailBankingLocationAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingLocationAll.fetch({
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
RetailBankingLocationAll.query({
  
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

#####RetailBankingLocationExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingLocationExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingLocationExactMatch();

// using the query method
RetailBankingLocationExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingLocationExactMatch.fetch({
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
RetailBankingLocationExactMatch.query({
  
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

#####RetailBankingLocationCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingLocationCount = new CitiMobileChallengeSdk.collections.RetailBankingLocationCount();

// using the query method
RetailBankingLocationCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingLocationCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingLocationCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingLocationCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingLocationCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####RetailBankingLocationCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingLocationCountExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingLocationCountExactMatch();

// using the query method
RetailBankingLocationCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingLocationCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingLocationCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingLocationCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingLocationCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
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

####Update

Updating a RetailBankingLogin Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

```javascript
exampleModel.save({ "token": "foo" });
```

Updating the Model this way will cause a `PUT` request to be triggered, if you would like to send a `PATCH` request instead, then you should call like so:

```javascript
exampleModel.save({ "token": "foo" }, {patch: true});
```

Just like in Model creation, even if you are not updating all Model attributes, a complete representation is sent to the server.

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
exampleModel.save({ "token": "foo" }, {async: false});
```

Refer to [Backbone's Model save method](http://backbonejs.org/#Model-save) documentation for more information.

####Read

Read operations allow you to get a single RetailBankingLogin instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.RetailBankingLogin({
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

####Query Scopes

The available query scopes for RetailBankingLogin objects are:

* RetailBankingLoginAll
* RetailBankingLoginExactMatch
* RetailBankingLoginCount
* RetailBankingLoginCountExactMatch

#####RetailBankingLoginAll

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingLoginAll = new CitiMobileChallengeSdk.collections.RetailBankingLoginAll();

// using the query method
RetailBankingLoginAll.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingLoginAll.fetch({
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
RetailBankingLoginAll.query({
  
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

#####RetailBankingLoginExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingLoginExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingLoginExactMatch();

// using the query method
RetailBankingLoginExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingLoginExactMatch.fetch({
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
RetailBankingLoginExactMatch.query({
  
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

#####RetailBankingLoginCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingLoginCount = new CitiMobileChallengeSdk.collections.RetailBankingLoginCount();

// using the query method
RetailBankingLoginCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingLoginCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingLoginCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingLoginCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingLoginCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####RetailBankingLoginCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingLoginCountExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingLoginCountExactMatch();

// using the query method
RetailBankingLoginCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingLoginCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingLoginCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingLoginCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingLoginCountExactMatch.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.

  
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
    
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  
   
  

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

####Create

This is an example of how you would create a RetailBankingPayee Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.RetailBankingPayee();

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

Updating a RetailBankingPayee Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single RetailBankingPayee instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.RetailBankingPayee({
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

####Query Scopes

The available query scopes for RetailBankingPayee objects are:

* RetailBankingPayeeAll
* RetailBankingPayeeExactMatch
* RetailBankingPayeeCount
* RetailBankingPayeeCountExactMatch

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

#####RetailBankingPayeeExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingPayeeExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingPayeeExactMatch();

// using the query method
RetailBankingPayeeExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingPayeeExactMatch.fetch({
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
RetailBankingPayeeExactMatch.query({
  
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

#####RetailBankingPayeeCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingPayeeCount = new CitiMobileChallengeSdk.collections.RetailBankingPayeeCount();

// using the query method
RetailBankingPayeeCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingPayeeCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingPayeeCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingPayeeCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingPayeeCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####RetailBankingPayeeCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingPayeeCountExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingPayeeCountExactMatch();

// using the query method
RetailBankingPayeeCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingPayeeCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingPayeeCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingPayeeCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingPayeeCountExactMatch.valueOf();
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

####Create

This is an example of how you would create a RetailBankingPayeeType Model.

```javascript
var exampleModel = new CitiMobileChallengeSdk.models.RetailBankingPayeeType();

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

Updating a RetailBankingPayeeType Model is very similar to creating one. Updating is done by calling the save method on an already persisted object.

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

Read operations allow you to get a single RetailBankingPayeeType instance by its primary key.

```javascript
var singleInstance = new CitiMobileChallengeSdk.models.RetailBankingPayeeType({
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

####Query Scopes

The available query scopes for RetailBankingPayeeType objects are:

* RetailBankingPayeeTypeAll
* RetailBankingPayeeTypeExactMatch
* RetailBankingPayeeTypeCount
* RetailBankingPayeeTypeCountExactMatch

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

#####RetailBankingPayeeTypeExactMatch

Get all results that match the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingPayeeTypeExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingPayeeTypeExactMatch();

// using the query method
RetailBankingPayeeTypeExactMatch.query({
  
}, {
  data: {
    limit: 10,
    offset: 0
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingPayeeTypeExactMatch.fetch({
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
RetailBankingPayeeTypeExactMatch.query({
  
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

#####RetailBankingPayeeTypeCount

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingPayeeTypeCount = new CitiMobileChallengeSdk.collections.RetailBankingPayeeTypeCount();

// using the query method
RetailBankingPayeeTypeCount.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingPayeeTypeCount.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingPayeeTypeCount.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingPayeeTypeCount.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingPayeeTypeCount.valueOf();
```

Refer to [Backbone's Collection fetch method](http://backbonejs.org/#Collection-fetch) documentation for more information.
#####RetailBankingPayeeTypeCountExactMatch

Get the amount of instances that satisfy the given query. You may execute this query scope by calling the `query` method or the `fetch` method.

```javascript
var RetailBankingPayeeTypeCountExactMatch = new CitiMobileChallengeSdk.collections.RetailBankingPayeeTypeCountExactMatch();

// using the query method
RetailBankingPayeeTypeCountExactMatch.query({
  
}, {
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// using the fetch method
RetailBankingPayeeTypeCountExactMatch.fetch({
  query: { // here the query is passed as an attribute on the single options hash
    
  },
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

// to access the amount
var amount = RetailBankingPayeeTypeCountExactMatch.valueOf();
```

######Async

This action is asynchronous by default, if you would like to execute it synchronously you can do:

```javascript
RetailBankingPayeeTypeCountExactMatch.query({
  
}, {
  async: false,
  success: function(collection, response, options) {...},
  error: function(collection, response, options) {...}
});

var amount = RetailBankingPayeeTypeCountExactMatch.valueOf();
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
