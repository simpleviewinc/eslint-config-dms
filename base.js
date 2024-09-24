module.exports = {
	"parserOptions": {
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"extends": [
		"eslint:recommended"
	],
	"rules": {
		"prefer-const": 2,
		"no-unused-vars": [
			2,
			{
				"vars": "all",
				"args": "none",
				"ignoreRestSiblings": true
			}
		],
		"no-var": 2,
		"one-var-declaration-per-line": 2,
		"indent": [
			"error",
			"tab",
			{
				"flatTernaryExpressions": true
			}
		],
		"space-infix-ops": 2,
		"keyword-spacing": 2,
		"space-before-blocks": 2,
		"key-spacing": 2
	},
	"overrides": [
		{
			"files": [
				"**/*.jsx"
			]
		},
		{
			"files": [
				"**/*.ts",
				"**/*.tsx"
			],
			"parser": "@typescript-eslint/parser",
			"plugins": [
				"@typescript-eslint"
			],
			"extends": [
				"plugin:@typescript-eslint/recommended"
			],
			"rules": {
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": [
					2,
					{
						"vars": "all",
						"args": "none",
						"ignoreRestSiblings": true
					}
				],
				"@typescript-eslint/no-explicit-any": "off",
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/no-inferrable-types": "off"
			}
		}
	],
	"env": {
		"browser": true,
		"node": true,
		"es6": true,
		"mocha": true,
		"jest": true
	}
};
