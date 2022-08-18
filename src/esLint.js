// Should not working
// react-hooks/exhaustive-deps and react-hooks/rules-of-hooks

import { useEffect, useState } from 'react';

export default function AppJs() {
	const [address, setAddress] = useState({country: '', city: ''});
	const obj = {country: 'Germany', city: 'Hamburg'};

	useEffect(() => {
		setAddress(obj);
	}, []);

	return address
}

// @typescript-eslint/no-unused-vars
const nonUnused = "test"
