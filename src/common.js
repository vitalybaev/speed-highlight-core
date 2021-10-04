/**
 * Commun used match pattern
*/

export default {
	num: {
		match: /(\.e?|\b)\d(e-|[\d.oxa-fA-F_])*(\.|\b)/g,
		type: 'num'
	},
	str: {
		match: /(["'])(\\[^]|(?!\1)[^\r\n\\])*\1?/g,
		type: 'str'
	},
	strDouble: {
		match: /"((?!")[^\r\n\\]|\\[^])*"?/g,
		type: 'str'
	}
}
