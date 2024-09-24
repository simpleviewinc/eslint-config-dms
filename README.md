# eslint-config-dms

It provides a base eslint config with typescript support. It also provides a react-specific eslint config (that extends the base config) for react projects. You can skip installing unnecessary react linting-specific dependencies if using the base config.

## Installation
Add this package as a dependency.

### For react config only
If you use the react config, you need to add these additional peer dependencies:
```
eslint-plugin-react
eslint-plugin-react-hooks
```

## Usage
In your project's eslint config, you can either extend from the base or the react config.

### base config
```
{
	"extends": ["@simpleview/eslint-config-dms/base"]
}
```

### react config
```
{
	"extends": ["@simpleview/eslint-config-dms/react"]
}
```

## Customization
You can override or extend the rules provided by this package in your own project's eslint config
```
{
	"extends": ["@simpleview/eslint-config-dms/base"],
	"rules": {
		"no-console": "warn"
	}
}
```

## Testing
In the `src` directory, it has 4 test files to test if both the base and react configs work as intended.

### Run configs
Run eslint with base or react config on test files to see the rules working.
```
npm run style:base
```
or
```
npm run style:react
```

### Verify configs
Run tests to verify that the base and react configs work as intended.
```
npm run test
```
