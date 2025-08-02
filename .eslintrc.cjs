module.exports = {
	root: true,
	extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
	plugins: ['prettier', 'react'],
	ignorePatterns: ['*.cjs', '*scss'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'react/react-in-jsx-scope': 'off'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
