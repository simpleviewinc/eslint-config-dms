import { testArray, TestDef } from "@simpleview/mochalib";
import { ESLint } from "eslint";
import { deepStrictEqual } from "assert";

describe(__filename, function () {
	this.timeout(300000);

	describe("eslint configs", function () {
		interface Test {
			configFile: string
			file: string
			messages: string[]
		}

		const tests: TestDef<Test>[] = [
			{
				name: "javascript: on js file",
				args: {
					configFile: "./src/configs/javascript.mjs",
					file: `${__dirname}/files/esLint.js`,
					messages: [
						"no-var",
						"@stylistic/one-var-declaration-per-line",
						"@stylistic/space-infix-ops",
						"@stylistic/indent",
						"@stylistic/key-spacing",
						"@stylistic/keyword-spacing",
						"no-unused-vars"
					]
				}
			},
			{
				name: "typescript: on ts file",
				args: {
					configFile: "./src/configs/typescript.mjs",
					file: `${__dirname}/files/esLint.ts`,
					messages: [
						"no-var",
						"@stylistic/one-var-declaration-per-line",
						"@stylistic/space-infix-ops",
						"@stylistic/indent",
						"@stylistic/key-spacing",
						"@stylistic/keyword-spacing",
						"@typescript-eslint/no-unused-vars",
						"@typescript-eslint/no-non-null-assertion"
					]
				}
			},
			{
				name: "react config: ts file",
				args: {
					configFile: "./src/configs/react_typescript.mjs",
					file: `${__dirname}/files/esLint.ts`,
					messages: [
						"no-var",
						"@stylistic/one-var-declaration-per-line",
						"@stylistic/space-infix-ops",
						"@stylistic/indent",
						"@stylistic/key-spacing",
						"@stylistic/keyword-spacing",
						"@typescript-eslint/no-unused-vars",
						"react-hooks/rules-of-hooks",
						"react-hooks/exhaustive-deps",
						"@typescript-eslint/no-non-null-assertion"
					]
				}
			},
			{
				name: "react config: tsx file",
				args: {
					configFile: "./src/configs/react_typescript.mjs",
					file: `${__dirname}/files/Component.tsx`,
					messages: [
						"no-var",
						"@stylistic/one-var-declaration-per-line",
						"@stylistic/space-infix-ops",
						"@stylistic/indent",
						"@stylistic/key-spacing",
						"@stylistic/keyword-spacing",
						"@typescript-eslint/no-unused-vars",
						"react-hooks/exhaustive-deps",
						"react/jsx-key"
					]
				}
			}
		];

		testArray<Test>(tests, async function (test) {
			const eslint = new ESLint({
				overrideConfigFile: test.configFile
			});

			// lint file
			const result = await eslint.lintFiles(test.file);

			// check error messages
			const messages = result[0].messages.map(val => val.ruleId);
			deepStrictEqual(messages, test.messages);
		});
	});
});
