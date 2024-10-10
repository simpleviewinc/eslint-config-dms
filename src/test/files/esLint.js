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

// no-unused-vars
const unused = "test";
