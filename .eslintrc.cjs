module.exports = {
	"root": true,
	"extends": [
		"@stijnklomp/eslint-config",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": { "project": ["./tsconfig.eslint.json"] },
	"plugins": [
		"@typescript-eslint",
		"prettier"
	],
	"ignorePatterns": ["doc/**"]
}