/**
* XML utilities class
*
* @module AP
* @submodule utility
* @class XML
* @static
*/
AP.utility.XML = (function($class) {

  function objectToXmlString(name, obj) {
    var xmlString = '', i;
    if(!(obj instanceof Array || obj instanceof Function || obj instanceof Object)) {
      return '<'+name+'>'+obj+'</'+name+'>';
    }

    if(obj instanceof Date) {
      return '<'+name+'>'+obj+'</'+name+'>';
    } else if(obj instanceof Array) {
      for(i=0; i<obj.length; i++) {
        xmlString += objectToXmlString(name, obj[i]);
      }
    } else if(obj instanceof Object) {
      xmlString = '<'+name+'>';
      for(i in obj) {
        xmlString += objectToXmlString(i, obj[i]);
      }
      xmlString += '</'+name+'>';
    }

    return xmlString;
  }

  var _XML = $class({
    _constructor: function XML() {},

    static: {

      /**
      * Convert a javascript object into an XML string
      * @method toXmlString
      * @param {String} name to use as top level XML tag
      * @param {Object} javascript object to stringify
      * @return {String} XML string version of the object
      * @static
      */
      objectToXmlString: function(name, obj) {
        var xmlString = '<?xml version="1.0" encoding="UTF-8"?>';
        xmlString += objectToXmlString(name, obj);
        return xmlString;
      },

      xmlToString: function(xml) {
        var xmlString;
        //IE
        if (window.ActiveXObject){
            xmlString = xml.xml;
        }
        // code for Mozilla, Firefox, Opera, etc.
        else{
            xmlString = (new XMLSerializer()).serializeToString(xml);
        }
        return xmlString;
      }
    }
  });

  return _XML;

})(AP.utility.createClass);
