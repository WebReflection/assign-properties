# assignProperties

An [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) like utility that preserve descriptors, as in accessors or value, or configurable, or writable, etc.

```js
import assignProperties from 'assign-properties';
const assignProperties = require('assign-properties');
// <script src="https://unpkg.com/assign-properties">
```

## Same `Object.assign` API

```js
// the issue with assign is that copies are values
const before = Object.assign({}, {get random() { return Math.random() }});

// mixins are broken this way
before.random === before.random; // true

// with assignProperties, everything is fine
const after = assignProperties({}, {get random() { return Math.random() }});

// the getter is passed along instead of being lost in the process
after.random === after.random; // false
```
