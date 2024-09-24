import { useEffect, useState } from 'react';

export default function AppJsx() {
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

// no-unused-vars
const unused = "test";
