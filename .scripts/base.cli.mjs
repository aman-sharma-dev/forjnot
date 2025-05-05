#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import path from "node:path";
import fs from "node:fs";
import chalk from "chalk";
import { spawn } from "node:child_process";
import gradient from "gradient-string";

// Print ASCII logo at the top
const logo = `
███████╗████████╗ █████╗  ██████╗██╗  ██╗██████╗  █████╗ ███████╗███████╗
██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝
███████╗   ██║   ███████║██║     █████╔╝ ██████╔╝███████║███████╗█████╗  
╚════██║   ██║   ██╔══██║██║     ██╔═██╗ ██╔══██╗██╔══██║╚════██║██╔══╝  
███████║   ██║   ██║  ██║╚██████╗██║  ██╗██████╔╝██║  ██║███████║███████╗
╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
`;
console.log(gradient.mind(logo));
// Initialize the CLI program
const program = new Command();

// Add global options
program.version("1.0.0").description("CLI for managing your Stackbase project");

// Function to execute shell commands using spawn
const runCommand = (command, args = []) => {
	const child = spawn(command, args, {
		stdio: "inherit",
		shell: true,
	});

	child.on("error", (error) => {
		console.error(chalk.red(`Error: ${error.message}`));
	});

	child.on("exit", (code) => {
		if (code !== 0) {
			console.error(chalk.red(`Process exited with code: ${code}`));
		}
	});
};

// Interactive menu
const mainMenu = async () => {
	console.log(chalk.blue("Available Commands:"));
	console.log(chalk.green("1. Build the project: pnpm run build:all"));
	console.log(chalk.green("2. Start the client: pnpm run client"));
	console.log(chalk.green("3. Start the server: pnpm run server"));
	console.log(chalk.green("4. Lint the code: pnpm run lint"));
	console.log(chalk.green("5. Format the code: pnpm run format"));
	console.log(
		chalk.green("6. Generate a new module: pnpm run generate:module"),
	);

	const choices = [
		{ name: "Build the project", value: "build" },
		{ name: "Start the client", value: "client" },
		{ name: "Start the server", value: "server" },
		{ name: "Lint the code", value: "lint" },
		{ name: "Format the code", value: "format" },
		{ name: "Generate a new module", value: "generate:module" },
	];

	const { command } = await inquirer.prompt([
		{
			type: "list",
			name: "command",
			message: chalk.blue("Select an action:"),
			choices,
		},
	]);

	switch (command) {
		case "build":
			console.log(chalk.green("Building the project..."));
			runCommand("pnpm", ["run", "build:all"]);
			break;
		case "client":
			console.log(chalk.green("Starting the client..."));
			runCommand("pnpm", ["run", "client"]);
			break;
		case "server":
			console.log(chalk.green("Starting the server..."));
			runCommand("pnpm", ["run", "server"]);
			break;
		case "lint":
			console.log(chalk.green("Linting the code..."));
			runCommand("pnpm", ["run", "lint"]);
			break;
		case "format":
			console.log(chalk.green("Formatting the code..."));
			runCommand("pnpm", ["run", "format"]);
			break;
		case "generate:module":
			console.log(chalk.green("Generating a new module"));
			runCommand("pnpm", ["run", "generate:module"]);
			break;
		default:
			console.log(chalk.red("Invalid choice"));
	}
};

// Generate the module
const generateModule = (moduleName) => {
	const baseDir = path.join(process.cwd(), `src/modules/${moduleName}`);
	const subFolders = [
		"services",
		"dtos",
		"interfaces",
		"repository",
		"helpers",
		"controllers",
	];

	// Create the module base directory
	fs.mkdirSync(baseDir, { recursive: true });

	// Create subfolders and their index.ts files
	for (const folder of subFolders) {
		const folderPath = path.join(baseDir, folder);
		fs.mkdirSync(folderPath, { recursive: true });

		const indexTsPath = path.join(folderPath, "index.ts");
		fs.writeFileSync(indexTsPath, `// ${folder} index.ts file`);
	}

	// Generate the users.module.ts
	const usersModulePath = path.join(baseDir, `${moduleName}.module.ts`);
	fs.writeFileSync(
		usersModulePath,
		`import { Module } from '@nestjs/common';
import { ${moduleName}Controller } from './controllers';
import { ${moduleName}Service } from './services';

@Module({
  imports: [],
  controllers: [${moduleName}Controller],
  providers: [${moduleName}Service],
})
export class ${moduleName}Module {}
`,
	);

	// Generate the module's index.ts
	const moduleIndexPath = path.join(baseDir, "index.ts");
	fs.writeFileSync(
		moduleIndexPath,
		`export * from './${moduleName}.module';\n`,
	);

	console.log(
		chalk.green(`Module ${moduleName} created successfully at ${baseDir}!`),
	);
};

// Parse the commands
program.parse(process.argv);

// If no command is passed, show interactive menu
if (!process.argv.slice(2).length) {
	// Handle Ctrl+C gracefully during inquirer prompts
	(async () => {
		try {
			await mainMenu();
		} catch (err) {
			if (err && err.name === "ExitPromptError") {
				console.log("\nExiting CLI. Goodbye!");
				process.exit(0);
			}
			// Re-throw if it's not an ExitPromptError
			throw err;
		}
	})();
}
