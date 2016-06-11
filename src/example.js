/**
 * Created by narendrasisodiya on 09/06/16.
 */

console.clear();

var asyncProcess1 = function (obj) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      obj.a = "a";
      resolve(obj);
      console.log("inside asyncProcess1", obj);
    }, 2000);
  })
};
var asyncProcess2 = function (obj) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      obj.b = obj.a + "b";
      resolve(obj);
      console.log("inside asyncProcess2", obj);
    }, 2000);
  })
};
var asyncProcess3 = function (obj) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      obj.c = obj.b + "c";
      resolve(obj);
      console.log("inside asyncProcess3", obj);
    }, 2000);
  })
};
var data = {};

var D1 = {};
//asyncProcess1(D1)
//  .then(asyncProcess2)
//  .then(asyncProcess3)
//  .then(function (D4) {
//    console.log("Final data is, ", D4);
//  });


chainPromise([asyncProcess1, asyncProcess2, asyncProcess3], D1).then(function (D4) {
  console.log("Final data is, ", D4);
});
