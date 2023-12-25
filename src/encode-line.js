const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr1 = str.split('');
  let result = {};
  let stringResult = [];
  for(let i=0; i <= arr1.length-1; i++) {
    if(arr1[i] === arr1[i+1] || arr1[i] === arr1[i-1]){
      result[arr1[i]] = result[arr1[i]] ? result[arr1[i]] + 1 : 1;
    }
  }
  for(let key in result){
     stringResult.push(`${result[key]}${key}`)
  }
  return stringResult.join('')
}

module.exports = {
  encodeLine
};
