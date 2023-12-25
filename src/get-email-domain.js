const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email) {
let arr = email.split('@');
let result;
if(arr.length === 2) {
  let [first, second ] = arr;
  result = second; 
}
 else if (arr.length === 3){
  let [first, second,last ] = arr;
  result = last; 
}
return result
}

module.exports = {
  getEmailDomain
};
