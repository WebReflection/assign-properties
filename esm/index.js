import assign from '@ungap/assign';
import getOwnPropertyDescriptors from '@ungap/get-own-property-descriptors';

const {defineProperties} = Object;

export default function assignProperties(base) {
  const descriptors = {};
  for (let i = 1, {length} = arguments; i < length; i++)
    assign(descriptors, getOwnPropertyDescriptors(arguments[i]));
  return defineProperties(base, descriptors);
};
