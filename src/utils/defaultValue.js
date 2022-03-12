/**
 * defaultValue.js util
 * main purpose for props, if value is empty, a default value will be returned
 * @param {string | number} value - prop or value being checked for length
 * @param {number} defaultValue - default value set if value is empty
 * @returns {number} if value is empty, a default value is provided, otherwise, the initial value is returned
 */

export const defaultValue = (value, defaultValue = 1) =>
	value.length ? value : defaultValue
