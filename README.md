du.js
------------

### What is du.js
**du.js** is a wrapper for **Dangerous Users Database**

### Usage
General Stats for **website**
```js
const wrapper = require('dangeroususers')

wrapper.stats().then(data => console.log(data))
```
Check User
```js
const wrapper = require('dangeroususers')

wrapper.checkuser("821471227230683186").then(data => console.log(data))
```
Report User
```js
const wrapper = require('dangeroususers')

wrapper.reportuser("api-key", "user-to-report", "reason-of-reporting").then(data => console.log(data))
```
Delete all reports
```js
const wrapper = require('dangeroususers')

wrapper.deleteallreports("api-key").then(data => console.log(data))
```
