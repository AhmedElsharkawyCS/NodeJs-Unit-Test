/**
 * A module that shouts functions
 * @module
 */
module.exports = {
  /**
   * Checks even number.
   * @function
   * @param {number} num - The number that need to check it.
   * @returns {boolean} - `False` or `True`
   */
  isEven: (num) => {
    return num % 2 === 0;
  },
  /**
   * Adds two numbers.
   * @function
   * @param {number} num1 - The number one.
   * @param {number} num2 - The number two.
   * @returns {number} - `sum of two number`
   */
  add: (num1, num2) => {
    return num1 + num2;
  },
  /**
   * runs callback function.
   * @function
   * @param {number} id - The number one.
   * @param {CallableFunction} cb - The callback function do something.
   */
  dropClass: (id, cb) => {
    cb();
  },
};
