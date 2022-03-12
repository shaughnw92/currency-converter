/**
 * singular.js util
 * Takes the value and the name and returns singular name is value is 1
 * @param {number} value - The value used to determine whether name should be singular or not
 * @param {string} name - The name of the currency of the value.
 * @returns {string} name - if the value is 1 and the name is not already singular, a singular version of the name is returned, otherwise, name is returned
 */

export const singular = (value, name) =>
	value === 1 && name.endsWith('s') ? name.slice(0, -1) : name
