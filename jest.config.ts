import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from 'tsconfig';

const config: JestConfigWithTsJest = {
	clearMocks: true,
	coverageProvider: 'v8',
	globals: {
		'ts-jest': {
			diagnostics: false,
		},
	},
	roots: ['.'],
	modulePaths: [compilerOptions.baseUrl],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
	transform: {
		'^.+\\.(t|j)sx?$': '@swc/jest',
	},
	testEnvironment: 'node',
	preset: 'ts-jest',
};

export default config;

// Docs
// https://jestjs.io/docs/configuration#globals-object
// https://jestjs.io/docs/cli
