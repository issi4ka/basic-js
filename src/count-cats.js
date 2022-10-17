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
function countCats(a) {
  /*throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here*/

  let sumCat = 0;

  for (let i = 0; i < a.length; i++) {
    b = a[i];
    for (let x = 0; x < b.length; x++) {
      c = b[x];
      if (c == '^^') {
        sumCat = sumCat + 1;
      }
    }
  }

  return sumCat
}

module.exports = {
  countCats
};
