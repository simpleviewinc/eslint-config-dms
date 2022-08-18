import { useEffect, useState } from 'react';

export default function AppJsx() {
	const [address, setAddress] = useState({country: '', city: ''});
	const obj = {country: 'Germany', city: 'Hamburg'};

	// react-hooks/rules-of-hooks
	useEffect(() => {
		setAddress(obj);
		// react-hooks/exhaustive-deps
	}, []);

	return address
}

// @typescript-eslint/no-unused-vars
const nonUnused = "test"
