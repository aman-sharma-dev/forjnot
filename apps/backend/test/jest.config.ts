import type { Config } from "jest";

const config: Config = {
	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: ".",
	testEnvironment: "node",
	testRegex: ".e2e-spec.ts$",
	transform: {
		"^.+\\.(t|j)s$": "ts-jest",
	},
	coverageDirectory: "./coverage",
	collectCoverage: true,
	coverageProvider: "v8",
	testPathIgnorePatterns: ["/node_modules/", "/dist/"],
	coverageReporters: ["text", "lcov"],
	roots: ["<rootDir>"],
	moduleNameMapper: {
		"^@forjnot/shared-config$":
			"<rootDir>/../../../packages/shared-configs/src",
		"^@forjnot/shared-logger$": "<rootDir>/../../../packages/shared-logger/src",
		"^@forjnot/shared-constants$":
			"<rootDir>/../../../packages/shared-constants/src",
		"^@forjnot/shared-util$": "<rootDir>/../../../packages/shared-util/src",
	},
};

export default config;
