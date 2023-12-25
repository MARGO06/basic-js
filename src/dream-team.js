const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if(members.length==0){
    return false
  }
  let sum ='';
  let counter=0;
  for(let member of members){
    if(typeof(member)==='string'){
    member = member.trim().charAt(0).toUpperCase();
    sum += member;}
    counter++}
    let name = sum.split('')
    return name.sort().join('')
}
module.exports = {
  createDreamTeam
};
