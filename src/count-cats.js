const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix) {
  let matrix1=matrix.flat()
  let sum =0;
  let counter=0;
  for(let i=0;i<matrix1.length;i++){
    if(matrix1[i]=='^^'||matrix1[i]=="^^"){
      sum +=1;
    }counter++
  }return sum
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  countCats
};
