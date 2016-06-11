(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["example"] = factory();
	else
		root["example"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * Created by narendrasisodiya on 09/06/16.
	 */

	console.clear();

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
	var data = {};

	var D1 = {};
	//asyncProcess1(D1).then(function (D2) {
	//  asyncProcess2(D2).then(function (D3) {
	//    asyncProcess3(D3).then(function (D4) {
	//      console.log("Final data is, ", D4);
	//    });
	//  });
	//});


	chainPromise([asyncProcess1, asyncProcess2, asyncProcess3], D1).then(function (D4) {
	  console.log("Final data is, ", D4);
	});


/***/ }
/******/ ])
});
;