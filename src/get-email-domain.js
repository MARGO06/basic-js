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
let arr1=email.match(/@\w+\.\w+/i);
//let string1=arr1.toString()
//let arr2=string1.split('');
//arr2.shift()
//let string2=arr2.toString()
//let result=string2.replace(/,/g,'')

return arr1
  
}

module.exports = {
  getEmailDomain
};
