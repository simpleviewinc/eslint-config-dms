import tseslint from "typescript-eslint";

const flatConfig = tseslint.configs.recommended.reduce((prev, curr) => {
	for (const [key, val] of Object.entries(curr)) {
		if (key === "rules") {
			prev.rules = {
				...prev.rules,
				...val
			}
		} else if (key === "name") {
			continue;
		} else {
			prev[key] = val;
		}
	}

	return prev;
}, { rules: {} });

export default flatConfig;
