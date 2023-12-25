const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   let arr = Array.from(String(n),Number);
   let result = [];
   let result1 = [];
   let arr1 = +arr.slice(1).join('');
   let arr2 = +arr.slice(0,-1).join('');
    +arr.splice(1,1);
   result.push( arr1, arr2)
   if (arr.length === 4) {
    let arr4 = +arr.splice(2,1).join('');
    result.push(arr4)
   }
   
   
   //let arr4 = +arr.splice(2).join('');
   ;
  
  
   return /*+(result.sort().slice(-1).join(''))*/ result
}

module.exports = {
  deleteDigit
};
