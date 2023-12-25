const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if(typeof date === 'string' || typeof date === 'number' || typeof date === 'symbol' || Array.isArray(date) === 'true') {
    throw "Invalid date"
    //return 'Invalid date!'
  }
  if(isNaN(Date.parse(date))) {
    throw "Invalid date"
  }
  if(!date.getFullYear() && !date.getMonth() && !date.getDate() && !date.getHours() && !date.getMinutes() && !date.getDay() && !date.getTime()) {
    throw "Invalid date"
  }
  
  let month=date.getMonth( );
  if(month==11||month==0||month==1){
    return 'winter'
  }else if(month==2||month==3||month==4){
    return 'spring'
  }else if(month==5||month==6||month==7){
    return 'summer'
  }else if(month==8||month==9||month==10){
    return 'autumn'
  }if(month===false){
    return "Invalid date!"
  }
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  getSeason
};
