// Should not working
// react-hooks/exhaustive-deps and react-hooks/rules-of-hooks

import { useEffect, useState } from 'react';

export default function AppTs() {
	const [address, setAddress] = useState({country: '', city: ''});
	const obj = {country: 'Germany', city: 'Hamburg'};

	useEffect(() => {
		setAddress(obj);
	}, []);

	return address
}

// @typescript-eslint/no-unused-vars
const nonUnused = "test"

// @typescript-eslint/no-inferrable-types - should not error on these
const inferable: string = "foo";
function inferableFn(arg1: string = "test") {
	return inferable;
}
inferableFn();
