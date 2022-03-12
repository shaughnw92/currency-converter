/**
 * findValue.js uto;
 * takes an array, finds a value with a property and returns the key value if it includes the value given
 * @param {array} array - the array used in find function
 * @param {string} property - the array property used in the find function
 * @param {string} name - the value that the array property includes
 * @param {string} key - the array key that is used to return the required value
 * @returns {string | number | boolean | null | undefined} value - returns the value from the find function
 */

export const findValue = array => (property, name, key) =>
	array.find(value => value[property].includes(name))[key]
