//@ts-check
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";

/** @type {import("eslint").Linter.Config} */
export default {
	plugins: {
		"@stylistic": stylistic
	},
	files: [
		"**/*.js"
	],
	languageOptions: {
		ecmaVersion: 11,
		sourceType: "module",
		globals: {
			...globals.node,
			...globals.mocha,
			...globals.browser
		}
	},
	rules: {
		...js.configs.recommended.rules,
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
		"@stylistic/one-var-declaration-per-line": 2,
		"@stylistic/indent": [
			"error",
			"tab",
			{
				"flatTernaryExpressions": true
			}
		],
		"@stylistic/space-infix-ops": 2,
		"@stylistic/keyword-spacing": 2,
		"@stylistic/space-before-blocks": 2,
		"@stylistic/key-spacing": 2
	}
}
