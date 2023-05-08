module.exports = {
	root: true,
	extends: [
		"@stijnklomp/eslint-config/eslint",
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true
	},
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module"
	},
	overrides: [
		{
			files: ["**/*.{ts,tsx}"],
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking"
			],
			parserOptions: {
				project: "./tsconfig.json"
			}
		}
	]
}
