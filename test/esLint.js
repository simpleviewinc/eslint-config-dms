// Should not working
// react-hooks/exhaustive-deps and react-hooks/rules-of-hooks

import { useEffect, useState } from 'react';

export default function AppJs() {
	const [address, setAddress] = useState({country: '', city: ''});
	const obj = {country: 'Germany', city: 'Hamburg'};

	if (obj) {
		useEffect(() => {
			setAddress(obj);
		}, []);
	}

	return address
}