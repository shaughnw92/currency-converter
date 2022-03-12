/**
 * sliceFrom.js util
 * takes a string, finds a specific character and slices the string from that position
 * @param {string} string - the string being sliced
 * @param {string} character - the character being used as the starting point of the slice
 * @param {number} start - the start of the slice which is 0 by default
 * @returns {number} end - the end of the slice
 */

export const sliceFrom = (start = 0) => end => (string, character) => {
	if (!string.includes(character)) return string
	const [stringStart, stringEnd] = string.split(character)
	const completeString = stringStart + character + stringEnd?.slice(start, end)
	return completeString
}
