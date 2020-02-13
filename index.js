var assignProperties = (function (exports) {
  'use strict';

  /*! (c) Andrea Giammarchi - ISC */
  var assign = Object.assign || function (target) {
    for (var o, i = 1; i < arguments.length; i++) {
      o = arguments[i] || {};

      for (var k in o) {
        if (o.hasOwnProperty(k)) target[k] = o[k];
      }
    }

    return target;
  };

  var getOwnPropertyDescriptors = function (Object) {
    var gOPDs = Object.getOwnPropertyDescriptors;
    if (gOPDs) return gOPDs;
    var dP = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var gOPN = Object.getOwnPropertyNames;
    var gOPS = Object.getOwnPropertySymbols;
    return function (object) {
      for (var key, descriptors = {}, keys = gOPN(object).concat(gOPS(object)), i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        dP(descriptors, key, {
          enumerable: true,
          value: gOPD(object, key)
        });
      }

      return descriptors;
    };
  }(Object);

  var defineProperties = Object.defineProperties;
  function assignProperties(base) {
    var descriptors = {};

    for (var i = 1, length = arguments.length; i < length; i++) {
      assign(descriptors, getOwnPropertyDescriptors(arguments[i]));
    }

    return defineProperties(base, descriptors);
  }

  exports.default = assignProperties;

  return exports;

}({}).default);
