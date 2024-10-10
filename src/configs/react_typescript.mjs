import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tsBase from "./typescript.mjs";

const files = [
	"**/*.ts",
	"**/*.jsx",
	"**/*.tsx"
]

const plugins = {
	...tsBase.plugins,
	react: reactPlugin.configs.flat.recommended.plugins.react,
	"react-hooks": reactHooks
}

/** @type {import("eslint").Linter.Config} */
export default {
	plugins,
	files,
	languageOptions: {
		...tsBase.languageOptions,
		...reactPlugin.configs.flat["jsx-runtime"].languageOptions
	},
	rules: {
		...tsBase.rules,
		...reactPlugin.configs.flat.recommended.rules,
		...reactPlugin.configs.flat["jsx-runtime"].rules,
		...reactHooks.configs.recommended.rules,
		"react-hooks/exhaustive-deps": "error"
	}
}
