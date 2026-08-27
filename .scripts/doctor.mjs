#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import process from "node:process";

const checks = [];
const add = (ok, label, detail, fix) => checks.push({ ok, label, detail, fix });
const run = (command, args) => {
	try {
		return execFileSync(command, args, {
			encoding: "utf8",
			stdio: ["ignore", "pipe", "ignore"],
		}).trim();
	} catch {
		return null;
	}
};

const nodeMajor = Number(process.versions.node.split(".")[0]);
add(
	nodeMajor >= 20,
	"Node.js",
	process.versions.node,
	"Install Node.js 20 or newer (see .nvmrc).",
);

const pnpmFromAgent =
	process.env.npm_config_user_agent?.match(/pnpm\/([^\s]+)/)?.[1];
const pnpmVersion =
	pnpmFromAgent ??
	run(process.platform === "win32" ? "pnpm.cmd" : "pnpm", ["--version"]) ??
	run("corepack", ["pnpm", "--version"]);
add(
	Boolean(pnpmVersion),
	"pnpm",
	pnpmVersion ?? "not found",
	"Run corepack enable, then pnpm install.",
);

const installed = existsSync("node_modules/.pnpm");
add(
	installed,
	"Dependencies",
	installed ? "installed" : "missing",
	"Run pnpm install.",
);

const envExample = existsSync(".env.example");
const envFile = existsSync(".env");
add(
	!envExample || envFile,
	"Environment",
	envFile ? ".env present" : ".env missing",
	"Copy .env.example to .env and review its values.",
);

const branch = run("git", ["branch", "--show-current"]);
const intendedBranches = new Set(["main", "deployment"]);
add(
	Boolean(branch),
	"Git branch",
	branch ?? "unavailable",
	"Run this command inside the Forjnot repository.",
);

const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
const frontendPresent = existsSync("apps/frontend/package.json");
const variant =
	branch === "deployment" ? "showcase + deployment" : "starter development";

console.log(`\nForjnot doctor · ${packageJson.name}@${packageJson.version}`);
console.log(
	`Variant: ${variant}${frontendPresent ? " · frontend workspace detected" : " · API-focused"}\n`,
);

for (const check of checks) {
	console.log(
		`${check.ok ? "✓" : "✗"} ${check.label.padEnd(14)} ${check.detail}`,
	);
}

const failures = checks.filter((check) => !check.ok);
if (failures.length > 0) {
	console.log("\nSuggested fixes:");
	for (const failure of failures) console.log(`- ${failure.fix}`);
	process.exitCode = 1;
} else {
	console.log("\nReady. Run `pnpm dev` or `pnpm check`.");
}

if (branch && !intendedBranches.has(branch)) {
	console.log(
		`Tip: branch '${branch}' is a feature branch; open a PR into main first.`,
	);
}
