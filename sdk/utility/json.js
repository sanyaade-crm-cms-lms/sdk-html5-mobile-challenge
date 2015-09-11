/**
* JSON utilities class
*
* @module AP
* @submodule utility
* @class JSON
* @static
*/
AP.utility.JSON = (function($class) {

  /* JSONPath 0.8.0 - XPath for JSON
   *
   * Copyright (c) 2007 Stefan Goessner (goessner.net)
   * Licensed under the MIT (MIT-LICENSE.txt) licence.
   */
  function jsonPath(obj, expr, arg) {
      var P = {
          resultType: arg && arg.resultType || "VALUE",
          result: [],
          normalize: function(expr) {
              var subx = [];
              return expr.replace(/[\['](\??\(.*?\))[\]']/g, function($0,$1){return "[#"+(subx.push($1)-1)+"]";})
                  .replace(/'?\.'?|\['?/g, ";")
                  .replace(/;;;|;;/g, ";..;")
                  .replace(/;$|'?\]|'$/g, "")
                  .replace(/#([0-9]+)/g, function($0,$1){return subx[$1];});
          },
          asPath: function(path) {
              var x = path.split(";"), p = "$";
              for (var i=1,n=x.length; i<n; i++)
                  p += /^[0-9*]+$/.test(x[i]) ? ("["+x[i]+"]") : ("['"+x[i]+"']");
              return p;
          },
          store: function(p, v) {
              if (p) P.result[P.result.length] = P.resultType == "PATH" ? P.asPath(p) : v;
              return !!p;
          },
          trace: function(expr, val, path) {
              if (expr) {
                  var x = expr.split(";"), loc = x.shift();
                  x = x.join(";");
                  if (val && val.hasOwnProperty(loc))
                      P.trace(x, val[loc], path + ";" + loc);
                  else if (loc === "*")
                      P.walk(loc, x, val, path, function(m,l,x,v,p) { P.trace(m+";"+x,v,p); });
                  else if (loc === "..") {
                      P.trace(x, val, path);
                      P.walk(loc, x, val, path, function(m,l,x,v,p) { typeof v[m] === "object" && P.trace("..;"+x,v[m],p+";"+m); });
                  }
                  else if (/,/.test(loc)) { // [name1,name2,...]
                      for (var s=loc.split(/'?,'?/),i=0,n=s.length; i<n; i++)
                          P.trace(s[i]+";"+x, val, path);
                  }
                  else if (/^\(.*?\)$/.test(loc)) // [(expr)]
                      P.trace(P.eval(loc, val, path.substr(path.lastIndexOf(";")+1))+";"+x, val, path);
                  else if (/^\?\(.*?\)$/.test(loc)) // [?(expr)]
                      P.walk(loc, x, val, path, function(m,l,x,v,p) { if (P.eval(l.replace(/^\?\((.*?)\)$/,"$1"),v[m],m)) P.trace(m+";"+x,v,p); });
                  else if (/^(-?[0-9]*):(-?[0-9]*):?([0-9]*)$/.test(loc)) // [start:end:step]  phyton slice syntax
                      P.slice(loc, x, val, path);
              }
              else
                  P.store(path, val);
          },
          walk: function(loc, expr, val, path, f) {
              if (val instanceof Array) {
                  for (var i=0,n=val.length; i<n; i++)
                      if (i in val)
                          f(i,loc,expr,val,path);
              }
              else if (typeof val === "object") {
                  for (var m in val)
                      if (val.hasOwnProperty(m))
                          f(m,loc,expr,val,path);
              }
          },
          slice: function(loc, expr, val, path) {
              if (val instanceof Array) {
                  var len=val.length, start=0, end=len, step=1;
                  loc.replace(/^(-?[0-9]*):(-?[0-9]*):?(-?[0-9]*)$/g, function($0,$1,$2,$3){start=parseInt($1||start);end=parseInt($2||end);step=parseInt($3||step);});
                  start = (start < 0) ? Math.max(0,start+len) : Math.min(len,start);
                  end   = (end < 0)   ? Math.max(0,end+len)   : Math.min(len,end);
                  for (var i=start; i<end; i+=step)
                      P.trace(i+";"+expr, val, path);
              }
          },
          eval: function(x, _v, _vname) {
              try { return $ && _v && eval(x.replace(/@/g, "_v")); }
              catch(e) { throw new SyntaxError("jsonPath: " + e.message + ": " + x.replace(/@/g, "_v").replace(/\^/g, "_a")); }
          }
      };

      var $ = obj;
      if (expr && obj && (P.resultType == "VALUE" || P.resultType == "PATH")) {
          P.trace(P.normalize(expr).replace(/^\$;/,""), obj, "$");
          return P.result.length ? P.result : false;
      }
  }


  function fromXml(xml) {
  	// Create the return object
  	var obj = {};

  	if (xml.nodeType == 1) { // element
  		// do attributes
  		if (xml.attributes.length > 0) {
  			for (var j = 0; j < xml.attributes.length; j++) {
  				var attribute = xml.attributes.item(j);
  				obj[attribute.nodeName] = attribute.nodeValue;
  			}
      }
  	} else if (xml.nodeType == 2 || xml.nodeType == 3) { // text
  		obj = xml.nodeValue;
  	}

  	// do children
  	if (xml.hasChildNodes() && xml.nodeType != 2) {
  		for(var i = 0; i < xml.childNodes.length; i++) {
  			var item = xml.childNodes.item(i);
  			var nodeName = item.nodeName;
  			if (typeof(obj[nodeName]) == "undefined") {
  				obj[nodeName] = fromXml(item);
  			} else {
  				if (typeof(obj[nodeName].push) == "undefined") {
  					var old = obj[nodeName];
  					obj[nodeName] = [];
  					obj[nodeName].push(old);
  				}
  				obj[nodeName].push(fromXml(item));
  			}
  		}
  	}
  	return obj;
  };

  var _JSON = $class({
    _constructor: function JSON() {},

    static: {
      /**
      * Select certain properties from an object based on a JSONPath selector expression
      * @method jsonPath
      * @param {Object} object to get the properties from
      * @param {String} selector JSONPath expression
      * @return {Object} selected properties object or false if not found
      * @static
      */
      jsonPath: function(obj, path) {
        return jsonPath(obj, path);
      },
      /**
      * Parse an XML node into a javascript object
      * @method fromXml
      * @param {Object} XML node to parse
      * @return {Object} javascript object equivalent of the XML node
      * @static
      */
      fromXml: function(xml) {
        return fromXml(xml);
      }
    }
  });

  return _JSON;

})(AP.utility.createClass);
