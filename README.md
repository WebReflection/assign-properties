# assignProperties

[![Build Status](https://travis-ci.com/WebReflection/assign-properties.svg?branch=master)](https://travis-ci.com/WebReflection/assign-properties) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/assign-properties/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/assign-properties?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)

An [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) like utility that preserve descriptors, as in accessors or value, or configurable, or writable, etc.

```js
import assignProperties from 'assign-properties';
const assignProperties = require('assign-properties');
// <script src="https://unpkg.com/assign-properties">
```

## Same [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) API

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

### Object spread suffers the same issue
```js
const base = {get random() { return Math.random() }};
const spread = {...base};
spread.random === spread.random; // true
```

So, if you want to bring accessors to the mix, this module is your stop.
