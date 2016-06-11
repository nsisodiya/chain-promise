# chain-promise
Simple implementation for chaining promises !!

# Install

```bash
npm install chain-promise

# Example

Let suppose we have 3 Async Process like this

```js
var asyncProcess1 = function (obj) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("inside asyncProcess1", obj);
      obj.a = "a";
      resolve(obj);
    }, 2000);
  })
};
var asyncProcess2 = function (obj) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("inside asyncProcess2", obj);
      obj.b = obj.a + "b";
      resolve(obj);
    }, 2000);
  })
};
var asyncProcess3 = function (obj) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("inside asyncProcess3", obj);
      obj.c = obj.b + "c";
      resolve(obj);
    }, 2000);
  })
};
```

But we want to execute these Promises one by one. We want to pass data from another like this

```js
var D1 = {};
asyncProcess1(D1).then(function (D2) {
  asyncProcess2(D2).then(function (D3) {
    asyncProcess3(D3).then(function (D4) {
      console.log("Final data is, ", D4);
    });
  });
});
```
You can see, we are passing data from each async process to another by one by one.

This work, and we can code like this, But there are two problems

* This kind of chain and passing data from one another can be automated
* If there are dynamic list of asyncProcessors then this solution do not work well.
 
For this reason, I have created this tiny library.

Same functionality can be written as 

```js

var chainPromise = require("chain-promise");

chainPromise([asyncProcess1, asyncProcess2, asyncProcess3], D1).then(function (D4) {
  console.log("Final data is, ", D4);
});
```

 

