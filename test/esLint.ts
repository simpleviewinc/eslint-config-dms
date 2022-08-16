// Should not working
// react-hooks/exhaustive-deps and react-hooks/rules-of-hooks

import { useEffect, useState } from 'react';

export default function AppTs() {
	const [address, setAddress] = useState({country: '', city: ''});
	const obj = {country: 'Germany', city: 'Hamburg'};

	if (obj) {
		useEffect(() => {
			setAddress(obj);
		}, []);
	}

	return address
}

// Should not work
// @typescript-eslint/no-explicit-any
const anyVariable: any = "test";
console.log(anyVariable);

// @typescript-eslint/no-unused-vars
const nonUnused = "test"