/**
 Utility function to define classes using a prototypal inheritance model.
 Adds a "_super" property on the class constructor which contains the superclass prototype if "extends" was declared.
 Also if the class is a subclass, then all static properties from the superclass get copied into the subclass.

 Example usage:
 @example

 var MySuperClass = new AP.utility.createClass({

 	mySuperMethod: function() {...},

 	anotherMethod: function() {...}

 });

 var MyClass = new AP.utility.createClass({

 	// "MySuperClass" must be a constructor function to be extended
 	extends: MySuperClass,

 	// All properties added to the static object are accesible only from the constructor
 	//  specific instances will not get this properties
 	static: {
 		staticMethodNumberOne: function() {...}
 	},

 	// Optional constructor function. If no constructor is passed it will use an empty function
 	_constructor: function MyClass() {
 		this.anAttribute = "A random attribute";
 	},

 	// Classes created get a static "_super" attribute from which to access their parent's prototype
 	mySuperMethod: function() {
 		return MyClass._super.mySuperMethod();
 	},

 	methodOne: function() {...},

 	propertyOne: "foo",
 });


 MyClass.staticMethodNumberOne();

 var instance = new MyClass();

 instance.mySuperMethod(); // Overrided method
 instance.anotherMethod(); // Parent class method is accessible
 instance.methodOne();
 instance.propertyOne;

 @module AP
 @submodule utility
 @class Class
 */
AP.utility.createClass = (function() {
	
	function isValidString(str) {
		return (str && typeof str === "string" && str !== "") ? true : false;
	}
	
	function isValidObject(obj) {
		return (obj && typeof obj === "object") ? true : false;
	}
	
	function isValidFunction(fn) {
		return (fn && typeof fn === "function") ? true : false;
	}
	
	function Class(definition) {
		var _constructor = null,
			_extends = null,
			isExtension = false,
			Dummy = null;
			
		if(isValidFunction(definition["extends"])) {
			isExtension = true;
			_extends = definition["extends"];
		}
		
		if(!isValidFunction(definition["_constructor"])) {
			_constructor = function() {};
		} else {
			_constructor = definition["_constructor"];
		}
		
		// If it has a super class, copy static methods from parent to child
		if(isExtension) {
			for(var superProp in _extends) {
				if(_extends.hasOwnProperty(superProp)) {
					_constructor[superProp] = _extends[superProp];
				}
			}
		}
		
		// Then add class' static methods
		if(isValidObject(definition["static"])) {
			for(var staticProp in definition["static"]) {
				if(definition["static"].hasOwnProperty(staticProp)) {
					_constructor[staticProp] = definition["static"][staticProp];
				}
			}
		}
		
		if(isExtension) {
			Dummy = function() {};
			Dummy.prototype = _extends.prototype;
			_constructor.prototype = new Dummy();
			_constructor.prototype.constructor = _constructor;
			// Add _super attribute to be able to call superclass methods within subclass methods
			_constructor._super = _extends.prototype;
		}
		
		for(var prop in definition) {
			if(prop !== "_constructor" && prop !== "extends" && prop !== "static" && prop !== "prototype") {
				if(definition.hasOwnProperty(prop)) {
					_constructor.prototype[prop] = definition[prop];
				}	
			}
		}
		
		return _constructor;
	}
	
	return Class;
	
}(AP.utility || {}));