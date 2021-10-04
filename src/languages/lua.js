export default [
	{
		match: /^#!.*|--(\[(=*)\[((?!--\]\2\])[^])*--\]\2\]|.*)/g,
		type: 'cmnt'
	},
	{
		match: /\b(and|break|do|else|elseif|end|for|function|if|in|local|not|or|repeat|return|then|until|while)\b/g,
		type: 'kwd'
	},
	{
		match: /\b(true|false|nil)\b/g,
		type: 'bool'
	},
	{
		match: /[+*/%^#=~<>:,.-]+/g,
		type: 'oper'
	},
	{
		expand: 'str'
	},
	{
		expand: 'num'
	},
	{
		match: /[a-z_]+(?=\s*[({])/g,
		type: 'func'
	}
]