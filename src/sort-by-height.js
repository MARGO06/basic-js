const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
 let arr1= arr.filter(item => item !== -1);
 let arrNew = arr1.sort();
 let result1;
 for(let item of arrNew){
  for(let itemNext of arr) {
    if(itemNext !== -1){
      itemNext = item;
      result1.push(itemNext)
    }
  }
 }
  return result1

}

module.exports = {
  sortByHeight
};
