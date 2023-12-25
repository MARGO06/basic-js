const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let count = 0;
  let arr1 = s1.split('')
  let arr2 = s2.split('')
  let res ={};
  let res2 ={};
  let result = [];
  for(let item of arr1){
    res[item] = res[item] ? res[item] + 1 : 1;
  }
  for(let item2 of arr2){
    res2[item2] = res2[item2] ? res2[item2] + 1 : 1;
  }

  for(let key in res){
    for(let key2 in res2){
      if(key === key2 && res[key] < res2 [key2]){
        result.push(res[key])
      }else if((key === key2 && res[key] > res2 [key2])){
        result.push(res2[key2])
      }else if((key === key2 && res[key] === res2 [key2])){
        result.push(res2[key2])
    }
  }}

  for(let item3 of result){
    count +=item3;
  }
  return count

}

module.exports = {
  getCommonCharacterCount
};
