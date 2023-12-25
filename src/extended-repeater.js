const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const part = [];
  let fullString;
  const {repeatTimes:repeatTimes, separator: separator, addition:addition, additionRepeatTimes:additionRepeatTimes, additionSeparator:additionSeparator} = options;
  
  if(addition){
    part.push(addition);
  }
  
  if(additionSeparator) {
    part.push(additionSeparator)
  }
  
  let newString = part.join('').repeat(additionRepeatTimes - 1);
  let resultString = newString + addition;

  
 /*if(separator && !addition && !additionSeparator) {
    fullString = ((str + separator).repeat(repeatTimes-1)) + str;
  }else if (!separator && !addition && !additionSeparator){
    fullString = ((str + "+").repeat(repeatTimes-1)) + str;
  } */
  
  if ( repeatTimes && !separator && addition) {
    fullString = ((str + addition + "+" ).repeat(repeatTimes-1) + str + addition);
  }

  if((!separator && addition === "ADDITION" && !additionSeparator)) {
    let resultString1 = (addition + '|').repeat(additionRepeatTimes-1) + addition;
    fullString = ((str +resultString1 +'+').repeat(repeatTimes-1)) + str + resultString1;
  }else if ((!separator && addition === "ADDITION" && additionSeparator)) {
    fullString = ((str + newString).repeat(repeatTimes-1)) + addition + '+' + str + newString + addition;
  }

  if (separator && addition !== "ADDITION" && !additionSeparator) {
    fullString = ((str + addition + separator).repeat(repeatTimes-1)) + str + addition;
  }else if ((separator && addition === "ADDITION" && !additionSeparator)) {
    let resultString1 = (addition + '|').repeat(additionRepeatTimes-1) + addition;
    fullString = ((str + resultString1 ).repeat(repeatTimes-1)) +separator + str +resultString1;
  }
  else if( separator && addition !== "ADDITION" && additionSeparator){
    fullString = ((str + resultString + separator).repeat(repeatTimes - 1)) + str + resultString;
  }/*else if (repeatTimes && separator){
    fullString = ((str + separator).repeat(repeatTimes-1)) + str;
  } */

  if(separator && !addition && !additionSeparator) {
    fullString = ((str + separator).repeat(repeatTimes-1)) + str;
  }else if (!separator && !addition && !additionSeparator){
    fullString = ((str + "+").repeat(repeatTimes-1)) + str;
  } 
  
   
  
  /*else if(!separator){
    let separator = '+'
    fullString = (str + resultString + separator).repeat(repeatTimes)
  }else if(!repeatTimes){
    fullString = (str + addition+'!')
  }*/

  /*if(str.toLocaleUpperCase() === str){
    fullString = (str + newString + '|').repeat(repeatTimes)
  }*/


  return fullString;
}

module.exports = {
  repeater
};
