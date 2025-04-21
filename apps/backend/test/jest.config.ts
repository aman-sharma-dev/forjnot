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
		"^@stackbase/shared-config$":
			"<rootDir>/../../../packages/shared-configs/src",
		"^@stackbase/shared-logger$":
			"<rootDir>/../../../packages/shared-logger/src",
		"^@stackbase/shared-constants$":
			"<rootDir>/../../../packages/shared-constants/src",
		"^@stackbase/shared-util$": "<rootDir>/../../../packages/shared-util/src",
	},
};

export default config;
