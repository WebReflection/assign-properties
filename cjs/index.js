'use strict';
const assign = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/assign'));
const getOwnPropertyDescriptors = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/get-own-property-descriptors'));

const {defineProperties} = Object;

function assignProperties(base) {
  const descriptors = {};
  for (let i = 1, {length} = arguments; i < length; i++)
    assign(descriptors, getOwnPropertyDescriptors(arguments[i]));
  return defineProperties(base, descriptors);
}
module.exports = assignProperties;
