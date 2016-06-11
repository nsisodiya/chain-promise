/**
 * Created by narendrasisodiya on 09/06/16.
 */

module.exports = function (pArr, data) {
  return new Promise(function (resolve) {
    var processedData = data;
    var counter = 0;

    function checkAndCallNext(tempData) {
      processedData = tempData;
      counter = counter + 1;
      if (counter === pArr.length) {
        resolve(processedData)
      } else {
        callPromise();
      }
    }

    function callPromise() {
      pArr[counter](processedData).then(checkAndCallNext);
    }

    callPromise();
  });
};
