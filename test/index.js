const assign = require('../cjs');

const result = assign({}, {get descriptor() {}});

const desc = Object.getOwnPropertyDescriptor(result, 'descriptor');

console.assert(typeof desc.get === 'function');
console.assert(typeof desc.set === 'undefined');
console.assert(typeof desc.writable === 'undefined');
console.assert(desc.enumerable);
console.assert(desc.configurable);
