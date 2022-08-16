import { useEffect, useState } from 'react';

export default function AppTsx() {
	const [address, setAddress] = useState({country: '', city: ''});
	const obj = {country: 'Germany', city: 'Hamburg'};

	if (obj) {
		// react-hooks/rules-of-hooks
		useEffect(() => {
			setAddress(obj);
			// react-hooks/exhaustive-deps
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