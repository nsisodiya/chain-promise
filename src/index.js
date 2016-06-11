/**
 * Created by narendrasisodiya on 09/06/16.
 */
/*
 * Special Thanks to https://twitter.com/Mayank_chd & https://twitter.com/ankcodes
 * */

module.exports = function (pArr, data) {
  return pArr.reduce(function (lastPromise, fn) {
    return lastPromise.then(fn);
  }, Promise.resolve(data));
};
