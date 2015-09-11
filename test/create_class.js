
(function() {
    var assert;

    assert = chai.assert;

    describe('AP.utility.createClass', function() {
        it("exists", function() {
            assert.isDefined(AP.utility.createClass);
        });
        it("should be a function", function() {
            assert.isFunction(AP.utility.createClass);
        });
        it("should be able to create a class without passing in a _constructor property", function() {
            var testClass = AP.utility.createClass({});
            assert.isDefined(testClass);
            assert.isFunction(testClass);

            var testClassInstance = new testClass();

            assert.isDefined(testClassInstance);
            assert.isObject(testClassInstance);
            assert.instanceOf(testClassInstance, testClass);
        });
        it("should create a class with the given constructor", function() {
            var testClass = AP.utility.createClass({
                _constructor: function testClass() {
                    this.a_field = "Hello World!";
                }
            });
            assert.isDefined(testClass);
            assert.isFunction(testClass);

            var testClassInstance = new testClass();

            assert.isDefined(testClassInstance);
            assert.isObject(testClassInstance);
            assert.property(testClassInstance, "a_field");
            assert.instanceOf(testClassInstance, testClass);
        });
        it("should add methods and properties to the class", function() {
           var testClass = AP.utility.createClass({
               props: {
                 a: "one",
                 b: "two"
               },
               sayHello: function() {
                   return "Hello!";
               }
           });

            var testClassInstance = new testClass();

            assert.isDefined(testClassInstance.sayHello);
            assert.isDefined(testClassInstance.props);

            assert.equal("Hello!", testClassInstance.sayHello());
            assert.isObject(testClassInstance.props);
            assert.equal("one", testClassInstance.props.a);
            assert.equal("two", testClassInstance.props.b);
        });
        it("should add static properties to the resulting constructor", function() {
           var testClass = AP.utility.createClass({
                static: {
                    aStaticMethod: function() {
                        return "This is a class method";
                    }
                }
           });

            var testClassInstance = new testClass();

            assert.isDefined(testClass.aStaticMethod);
            assert.isFunction(testClass.aStaticMethod);
            assert.equal("This is a class method", testClass.aStaticMethod());
            assert.isUndefined(testClassInstance.aStaticMethod);
        });

        describe("Inheritance", function() {

            it("should be able inherit from a given constructor", function() {
               var testClass = AP.utility.createClass({});
                var testSubclass = AP.utility.createClass({
                   extends: testClass
                });

                var testSubclassInstance = new testSubclass();

                assert.instanceOf(testSubclassInstance, testSubclass);
                assert.instanceOf(testSubclassInstance, testClass);
            });
            it("should get all methods and properties from parent class", function() {
                var testClass = AP.utility.createClass({
                    parentMethod: function() {
                        return "I am the parent class";
                    }
                });
                var testSubclass = AP.utility.createClass({
                    extends: testClass
                });

                var testSubclassInstance = new testSubclass();

                assert.isDefined(testSubclassInstance.parentMethod);
                assert.isFunction(testSubclassInstance.parentMethod);
                assert.equal("I am the parent class", testSubclassInstance.parentMethod());
            });
            it("should get all static methods from parent class", function() {
                var testClass = AP.utility.createClass({
                    static: {
                        parentStaticMethod: function() {
                            return "A static method";
                        }
                    }
                });
                var testSubclass = AP.utility.createClass({
                    extends: testClass
                });

                assert.isDefined(testSubclass.parentStaticMethod);
                assert.isFunction(testSubclass.parentStaticMethod);
                assert.equal("A static method", testSubclass.parentStaticMethod());
            })
            it("subclass should have a static _super property containing it parent's prototype", function() {
                var testClass = AP.utility.createClass({
                    aMethod: function() {
                        return "A string";
                    }
                });
                var testSubclass = AP.utility.createClass({
                    extends: testClass,
                    aMethod: function() {
                        return testSubclass._super.aMethod() + " extended";
                    }
                });

                var testSubclassInstance = new testSubclass();

                assert.isDefined(testSubclass._super);
                assert.isObject(testSubclass._super);
                assert.deepEqual(testSubclass._super, testClass.prototype);
                assert.strictEqual("A string extended", testSubclassInstance.aMethod());
            });
        });
    });

}).call(this);
