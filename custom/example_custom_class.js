CitiMobileChallengeSdk.ExampleCustomClass = (function($class) {
	
	var exampleCustomClass = $class({
		_constructor: function ExampleCustomClass() {
			this.message = "This is a custom class.";
		},
		
		message: null,
		
		getMessage: function() {
			return this.message;
		}
	});
	
	return exampleCustomClass;
	
})(AP.utility.createClass);
