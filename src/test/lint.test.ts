import { testArray } from "@simpleview/mochalib";
import { deepStrictEqual } from "assert";
import { ESLint } from "eslint";

describe(__filename, function () {
	this.timeout(300000);
	describe("lint rules", function () {
		const tests = [
			{
				name: "js files",
				args: {
					files: [`src/*.js`],
					errorCount: 1,
					messages: [
						"no-unused-vars",
					]
				}
			},
			{
				name: "jsx files",
				args: {
					files: [`src/*.jsx`],
					errorCount: 2,
					messages: [
						"react-hooks/exhaustive-deps",
						"no-unused-vars",
					]
				}
			},
			{
				name: "ts files",
				args: {
					files: [`src/*.ts`],
					errorCount: 1,
					messages: [
						"@typescript-eslint/no-unused-vars",
					]
				}
			},
			{
				name: "tsx files",
				args: {
					files: [`src/*.tsx`],
					errorCount: 3,
					messages: [
						"react-hooks/exhaustive-deps",
						"no-unused-vars",
						"@typescript-eslint/no-unused-vars",
					]
				}
			}
		]

		testArray(tests, async function (test) {
			// 1. ESLint instance.
			const eslint = new ESLint();

			// 2. Lint file.
			const result = await eslint.lintFiles(test.files);

			// 3. Check Error Count
			deepStrictEqual(test.errorCount, result[0].errorCount);
			
			// 4. Check Error Messages
			for (let index = 0; index < result[0].messages.length; index++) {
				deepStrictEqual(result[0].messages[index].ruleId, test.messages[index]);
			}
		});
	});
})
