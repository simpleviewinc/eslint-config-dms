# eslint-config-dms

It provides a base eslint config with typescript support. It also provides a react-specific eslint config (that extends the base config) for react projects. You can skip installing unnecessary react linting-specific dependencies if using the base config.

## Installation
Add `eslint-config-dms` as a dependency. Requires eslint 9 flat file format.

Choose the import specific to your project. You should only use one of these imports.

```ts
// use the JS config
// will enforce linting on all js files
import config from "eslint-config-dms/javascript"

// use the TS config
// will enforce linting on all js/js files
import config from "eslint-config-dms/typescript"

// use the react_typescript config
// will enforce linting on all js/jsx/ts/tsx files
import config from "eslint-config-dms/react_typescript"
```

* Requires `eslint` >=9
* Requires `node` 20.0.0

## Customization
You can override or extend the rules provided by this package in your own project's eslint config
```
import config from "eslint-config-dms/typescript"

export default {
	...config,
	rules: {
		...config.rules,
		"no-console": "warn"
	}
}
```

### Verify configs
Run tests to verify that the base and react configs work as intended.
```
npm run test
```
