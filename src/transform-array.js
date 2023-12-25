const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if(arr.length === 0){
    return [];
  }

  if(Array.isArray(arr) === true) {
    return arr
  } else if( Array.isArray(arr) === false){
    return  "'arr' parameter must be an instance of the Array!"
  }

  if(Array.isArray(arr) === true){
    let newArr = arr.concat([]);
    for(let i=0; i<3; i++){
      if(newArr[0] === '--discard-prev' || newArr[0] === '--double-prev') {
        newArr.splice(0,1);
      }
      else if(newArr[4] === '--double-next' || newArr[4] === '--discard-next') {
        newArr.slice(-1);
      }
    }return newArr
  }

  if(Array.isArray(arr) === true){
    let newArr = arr.concat([]);
    for(let i=0; i<=newArr.length; i++){
      if(newArr[i] === '--discard-next'){
        newArr.splice(i,2)
      }
      if(newArr[i] === '--discard-prev'){
        newArr.splice(i,1)
      }
      if(newArr[i] === '--double-next'){
        newArr.splice(i,1,arr[i+1]);
      }
      if(newArr[i] === '--double-prev'){
         newArr.splice(i,1,arr[i-1]);
      }
    }return newArr
  }

}

module.exports = {
  transform
};
