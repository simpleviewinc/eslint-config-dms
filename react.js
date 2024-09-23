module.exports = {
	"extends": [
		"./base.js"
	],
	"overrides": [
		{
			"files": [
				"**/*.jsx",
				"**/*.ts",
				"**/*.tsx"
			],
			"plugins": [
				"react",
				"react-hooks"
			],
			"extends": [
				"plugin:react/recommended",
				"plugin:react/jsx-runtime"
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
		}
	]
};
