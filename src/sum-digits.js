const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr=Array.from(String(n),Number)
  let sum=0
  let s=0
  let arr1
  let result
  for(let i=0; i<arr.length; i++){
    sum += arr[i]
    if(sum<10){
      result=sum
    }else{
      arr1=Array.from(String(sum),Number)
      for(let j=0; j<arr1.length; j++){
        s += arr1[j]
      }
      result=s
    }
  }
  return result
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
