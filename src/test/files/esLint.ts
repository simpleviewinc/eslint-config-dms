import { useCallback } from "react";

// no-var
var t1 = "fooValue";
console.log(t1);

// @stylistic/one-var-declaration-per-line
const t2 = 'foo', t3 = 'qux';
console.log(t2, t3);

// @stylistic/space-infix-ops
const t4 = 1+1;
console.log(t4);

// @stylistic/indent
function t5() {
    const t5_inner = "test";
	return t5_inner;
}
console.log(t5);

// @stylistic/key-spacing
const t6 = { test : "testValue" }
console.log(t6);

// @stylistic/keyword-spacing
if(t6) {
	console.log("yep");
}

// @typescript-eslint/no-unused-vars
const t7 = "test";

// @typescript-eslint/no-explicit-any - allowed
const t8: any = "test";
console.log(t8);

// @typescript-eslint/no-inferrable-types - allowed
const t9: string = "foo";
function t10(arg1: string = "test") {
	return t9;
}
console.log(t9, t10);

// bogus react callback, valid with TS, invalid with react_ts
function t11() {
	const doSomething = true;

	const foo = useCallback(() => {
		console.log(doSomething);
	}, []);
	console.log(foo);
}
console.log(t11);

// @typescript-eslint/no-non-null-assertion
interface T12 {
	nested?: string
}
const t12: T12 = {};
console.log(t12.nested!.toString())
