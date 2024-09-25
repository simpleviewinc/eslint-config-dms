module.exports = {
	"extends": [
		"./base.js"
	],
	"overrides": [
		// switch to typescript linting for .tsx files
		{
			"files": [
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
		},
		// add react linting to .jsx, .ts, and .tsx files
		{
			"files": [
				"**/*.{jsx,ts,tsx}"
			],
			"plugins": [
				"react",
				"react-hooks"
			],
			"extends": [
				"plugin:react/recommended"
			],
			"settings": {
				"react": {
					"pragma": "React",
					"version": "detect"
				}
			},
			"rules": {
				"react-hooks/rules-of-hooks": "error",
				"react-hooks/exhaustive-deps": "error"
			}
		},
		// for new JSX transform from React 17 in .jsx and .tsx files
		{
			"files": [
				"**/*.{jsx,tsx}"
			],
			"extends": [
				"plugin:react/jsx-runtime"
			]
		}
	]
};
