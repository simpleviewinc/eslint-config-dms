import { useEffect, useState } from 'react';

export default function AppTs() {
	const [address, setAddress] = useState({ country: '', city: '' });
	const obj = { country: 'Germany', city: 'Hamburg' };

	// react-hooks/rules-of-hooks
	for (let i = 0; i < 10; i++) {
		useEffect(() => {
			setAddress(obj);
			// react-hooks/exhaustive-deps
		}, []);
	}

	return address;
}

// @typescript-eslint/no-unused-vars
const unused = "test";

// @typescript-eslint/no-explicit-any
const anyVariable: any = "test";
console.log(anyVariable);

// @typescript-eslint/no-inferrable-types
const inferable: string = "foo";
function inferableFn(arg1: string = "test") {
	return inferable;
}
inferableFn();
