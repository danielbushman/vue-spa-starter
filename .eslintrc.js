// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: { sourceType: 'module' },
	env: { browser: true },
	
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: 'standard',
 
	// required to lint *.vue files
	plugins: [ 'html' ],
	
	// add your custom rules here
	'rules': {
		
		// allow paren-less arrow functions
		'arrow-parens': 0,

		semi: ["error", "always"],
		
		// tabbed indentation
		'indent': ['error', 'tab'],
		'no-tabs': 0,
		
		// allow async-await
		'generator-star-spacing': 0,

		// allow object keys to be tabbed or spaced
		'key-spacing': ["error", { "mode": "minimum" }],

		// allow blank line at beginning of block
		'padded-blocks': 0,
		
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
}