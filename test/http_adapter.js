
(function() {

  var assert = chai.assert;


  var adapter_configuration = {

    create: {
      type : "HttpAdapterConfiguration",
      request_field_level_mappings : [
        {
          type : "RequestFieldLevelMapping",
          remote_field_name : "id",
          field_definition : {
            name : "id"
          }
        },
        {
          type : "RequestFieldLevelMapping",
          remote_field_name : "description",
          field_definition : {
            name : "desc"
          }
        }
      ],
      response_field_level_mappings : [
        {
          type : "ResponseFieldLevelMapping",
          remote_field_name : "id",
          field_definition : {
            name : "id"
          }
        },
        {
          type : "ResponseFieldLevelMapping",
          remote_field_name : "description",
          field_definition : {
            name : "desc"
          }
        }
      ],
      http_verb : "POST",
      path_selector : "$",
      incremental_path : "test/model/create/{{id}}",
      body_format : "form-encoded",
      object_name_mapping : null,
      body_payload_template : '{ "id": {{id}}, "description": "{{desc}}" }',
      action : "create",
      incremental_headers : [
        {name: "Header-Two", value: "Header-Value-{{id}}"},
        {name: "Header-Three", value: "Header-Value-Three"}
      ],
      incremental_url_parameters : [
        {name: "paramTwo", value: "valueTwo"},
        {name: "paramThree", value: "{{id}}"}
      ]
    },

    update: {
      type : "HttpAdapterConfiguration",
      request_field_level_mappings : [
        {
          type : "RequestFieldLevelMapping",
          remote_field_name : "id",
          field_definition : {
            name : "id"
          }
        },
        {
          type : "RequestFieldLevelMapping",
          remote_field_name : "description",
          field_definition : {
            name : "desc"
          }
        }
      ],
      response_field_level_mappings : [
        {
          type : "ResponseFieldLevelMapping",
          remote_field_name : "id",
          field_definition : {
            name : "id"
          }
        },
        {
          type : "ResponseFieldLevelMapping",
          remote_field_name : "description",
          field_definition : {
            name : "desc"
          }
        }
      ],
      http_verb : "PUT",
      path_selector : "$",
      incremental_path : "test/model/update",
      body_format : "json",
      object_name_mapping : null,
      body_payload_template : null,
      action : "update",
      incremental_headers : [],
      incremental_url_parameters : []
    },


    read: {
      type : "HttpAdapterConfiguration",
      request_field_level_mappings : [
        {
          type : "RequestFieldLevelMapping",
          remote_field_name : "id",
          field_definition : {
            name : "id"
          }
        }
      ],
      response_field_level_mappings : [
        {
          type : "ResponseFieldLevelMapping",
          remote_field_name : "id/text()",
          field_definition : {
            name : "id"
          }
        },
        {
          type : "ResponseFieldLevelMapping",
          remote_field_name : "description/text()",
          field_definition : {
            name : "desc"
          }
        }
      ],
      http_verb : "GET",
      path_selector : "/test",
      incremental_path : "test/model/read",
      body_format : "xml",
      object_name_mapping : null,
      body_payload_template : "",
      action : "read",
      incremental_headers : [],
      incremental_url_parameters : []
    }

  };


  /**
  *     TESTING MODEL ----------------------------------------------------------
  */
  var TestModel = (function($class, _Model) {
    var _TestModel = $class({
      extends: _Model,
      _constructor: function() {
        _TestModel._super.constructor.apply(this, arguments);
      },

      adapter_configuration: adapter_configuration

    });

    return _TestModel;
  })(AP.utility.createClass, AP.model.Model);


  /**
  *     TESTING ADAPTER --------------------------------------------------------
  */
  var TestAdapter = (function($class, _HttpAdapter) {

    var _TestAdapter = $class({
      extends: _HttpAdapter,
      _constructor: function(){
        _TestAdapter._super.constructor.apply(this, arguments);
      },
      base_uri: "https://www.foo.com",
      format: "json",
      headers: [
        {name: "Header-One", value: "Header-Value-One"},
        {name: "Header-Two", value: "Header-Value-Two"}
      ],
      url_parameters: [
        {name: "paramOne", value: "valueOne"},
        {name: "paramTwo", value: "valueTwo"}
      ]
    });

    return _TestAdapter;
  })(AP.utility.createClass, AP.adapter.HttpAdapter);




  /**
  *       UNIT TESTS  ----------------------------------------------------------
  */
  describe("AP.adapter.HttpAdapter", function() {
    var adapter, model;

    function runSetup() {
      adapter = new TestAdapter();
      model = new TestModel({
        id: 111,
        desc: "a generic description"
      });
    }

    describe("Headers", function() {
      beforeEach(runSetup);
      it("should add incremental headers and interpolate", function() {
        var config = adapter.buildRequest("create", model);
        var headers = config.headers;
        assert.isDefined(headers);
        assert.isObject(headers);

        assert.equal(headers["Header-One"], "Header-Value-One");
        assert.equal(headers["Header-Two"], "Header-Value-111");
        assert.equal(headers["Header-Three"], "Header-Value-Three");
      });
    });

    describe("Incremental path", function() {
      beforeEach(runSetup);
      it("should build incremental url path", function() {
        var config = adapter.buildRequest("read", model);
        var url = config.url;
        assert.isDefined(url);
        assert.isString(url);
        assert.notEqual(url.indexOf("https://www.foo.com/test/model/read"), -1);
      });
      it("should interpolate values in the url path", function() {
        var config = adapter.buildRequest("create", model);
        var url = config.url;
        assert.isDefined(url);
        assert.isString(url);
        assert.notEqual(url.indexOf("https://www.foo.com/test/model/create/111"), -1);
      });
    });

    describe("Url parameters", function() {
      beforeEach(runSetup);
      it("should create incremental url parameters in request data", function() {
        var config = adapter.buildRequest("create", model);
        var url = config.url;
        assert.isDefined(url);
        assert.isString(url);
        assert.notEqual(url.indexOf("paramOne=valueOne"), -1);
        assert.notEqual(url.indexOf("paramTwo=valueTwo"), -1);
      });
      it("should interpolate values in url parameters", function() {
        var config = adapter.buildRequest("create", model);
        var url = config.url;
        assert.isDefined(url);
        assert.isString(url);
        assert.notEqual(url.indexOf("paramThree=111"), -1);
      });
    });

    describe("Body payload template", function() {
      beforeEach(runSetup);
      it("should interpolate values into the body payload", function() {
        var config = adapter.buildRequest("create", model);
        var data = config.data;
        assert.isDefined(data);
        assert.deepEqual(data, { id: 111, description: "a generic description" });
      });
    });

    describe("Format", function() {
      beforeEach(runSetup);
      it("should add form-encoded content type format in the request", function() {
        var config = adapter.buildRequest("create", model);
        var type = config.contentType;
        assert.isDefined(type);
        assert.isString(type);
        assert.equal(type, "application/x-www-form-urlencoded; charset=UTF-8")
      });
      it("should add json content type format in the request", function() {
        var config = adapter.buildRequest("update", model);
        var type = config.contentType;
        assert.isDefined(type);
        assert.isString(type);
        assert.equal(type, "application/json");
      });
    });

    describe("Request field mappings", function() {
      beforeEach(runSetup);
      it("should map model fields to data", function() {
        var config = adapter.buildRequest("update", model);
        var data = config.data;
        assert.isDefined(data);
        assert.isObject(data);

        assert.isDefined(data["id"]);
        assert.equal(data["id"], 111);

        assert.isDefined(data["description"]);
        assert.equal(data["description"], "a generic description");
      });
    });

    describe("Response field mappings", function() {
      beforeEach(runSetup);
      it("should map json responses", function() {
        var response = { "id": 900, "description": "response description example" };
        var responseData = adapter.mapResponse(model, response, model.adapter_configuration.create);
        assert.isDefined(responseData);
        assert.isDefined(responseData.id);
        assert.equal(responseData.id, 900);
        assert.isDefined(responseData.desc);
        assert.equal(responseData.desc, "response description example");
      });
      it("should map xml responses", function() {
        var response = $.parseXML('<?xml version="1.0" encoding="UTF-8"?><test><id>900</id><description>response description example</description></test>');
        var responseData = adapter.mapResponse(model, response, model.adapter_configuration.read);
        assert.isDefined(responseData);
        assert.isDefined(responseData.id);
        assert.equal(responseData.id, "900");
        assert.isDefined(responseData.desc);
        assert.equal(responseData.desc, "response description example");
      });
    });

  });


})();
