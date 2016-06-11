# chain-promise
Simple implementation for chaining promises !!

# Install

```bash
npm install chain-promise
```

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

And, We want to execute these Promises one by one. We want to pass data from one to another.

This is simple task, can be done like this.

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
Above code can be re-written as

```js
asyncProcess1(D1)
  .then(asyncProcess2)
  .then(asyncProcess3)
  .then(function (D4) {
    console.log("Final data is, ", D4);
  });
```

You can see, we are passing data from each async process to another by one by one.

This works, But there are 1 problem

* How to handle dynamic list of asyncProcessors ?
 
If you have dynamic list of then you can use this tiny library (source code is just 3-4 lines) !

Above functionality can be re-written as

```js
var chainPromise = require("chain-promise");
chainPromise([asyncProcess1, asyncProcess2, asyncProcess3], D1).then(function (D4) {
  console.log("Final data is, ", D4);
});
```
