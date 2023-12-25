const { NotImplementedError } = require('../extensions/index.js');
const { repeater } = require('./extended-repeater.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
 let str1 = String(n);
 let arr = str1.split('-');
 let result1;
 for(item of arr) {
  let result = parseInt (item,16)
  if(arr.length = 6 && typeof result === 'number'){
    result1 = true
  } result1 = false
 }
return result1
 
}
module.exports = {
  isMAC48Address
};
