import { testArray } from "@simpleview/mochalib";
import { strictEqual } from "node:assert/strict";
import { ESLint } from "eslint";

describe(__filename, function () {
	this.timeout(300000);

	describe("eslint configs", function () {
		const tests = [
			{
				name: "base config: js file",
				args: {
					configFile: "./base.js",
					file: "src/esLint.js",
					errorCount: 1,
					messages: [
						"no-unused-vars"
					]
				}
			},
			{
				name: "base config: jsx file",
				args: {
					configFile: "./base.js",
					file: "src/esLint.jsx",
					errorCount: 1,
					messages: [
						"no-unused-vars"
					]
				}
			},
			{
				name: "base config: ts file",
				args: {
					configFile: "./base.js",
					file: "src/esLint.ts",
					errorCount: 1,
					messages: [
						"@typescript-eslint/no-unused-vars"
					]
				}
			},
			{
				name: "base config: tsx file",
				args: {
					configFile: "./base.js",
					file: "src/esLint.tsx",
					errorCount: 1,
					messages: [
						"@typescript-eslint/no-unused-vars"
					]
				}
			}
		];

		testArray(tests, async function (test) {
			const eslint = new ESLint({
				overrideConfigFile: test.configFile
			});

			// lint file
			const result = await eslint.lintFiles(test.file);

			// check error count
			strictEqual(result[0].errorCount, test.errorCount);

			// check error messages
			for (let i = 0; i < result[0].messages.length; i++) {
				strictEqual(result[0].messages[i].ruleId, test.messages[i]);
			}
		});
	});
});
