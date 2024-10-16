//@ts-check
import jsBase from "./javascript.mjs";
import flatTsConfig from "../flatTsConfig.mjs";

/** @type {import("eslint").Linter.Config} */
export default {
	...flatTsConfig,
	plugins: {
		...jsBase.plugins,
		...flatTsConfig.plugins
	},
	rules: {
		...jsBase.rules,
		...flatTsConfig.rules,
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-unused-vars": [
			2,
			{
				"vars": "all",
				"args": "none",
				"ignoreRestSiblings": true,
				"caughtErrors": "none"
			}
		],
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/no-require-imports": "off"
	}
};
