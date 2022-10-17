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
function getSeason(date) {
  /*throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here*/

  if (date == undefined) {return "Unable to determine the time of year!"}
  else if (typeof(date) != "object") {return "Invalid date!"}
  else {

    nMonth = date.getMonth();
    console.log("_2_");
    if ((nMonth == 11) || (nMonth < 2)) {return "winter"}
    else if (nMonth < 5) {return "spring"}
    else if (nMonth < 8) {return "summer"}
    else if (nMonth < 11) {return "autumn"}
    console.log("_3_");
  }
  
}

module.exports = {
  getSeason
};