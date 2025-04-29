#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import inquirer from 'inquirer';
import chalk from 'chalk';

const SUBFOLDER_OPTIONS = [
  'services',
  'dtos',
  'interfaces',
  'repositories',
  'entities',
  'middlewares',
  'validators',
  'helpers',
  'controllers',
];

const promptUser = async () => {
  const { moduleName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'moduleName',
      message: chalk.blue('Enter the module name:'),
      validate: (input) => !!input || 'Module name is required',
    },
  ]);

  const { selectedFolders } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selectedFolders',
      message: chalk.blue('Select folders to include in your module:'),
      choices: SUBFOLDER_OPTIONS,
      loop: false,
    },
  ]);

  return { moduleName, selectedFolders };
};

const generateModule = (moduleName, selectedFolders) => {
  const baseDir = path.join(process.cwd(), `/apps/backend/src/modules/${moduleName}`);
  fs.mkdirSync(baseDir, { recursive: true });

for (const folder of selectedFolders) {
  const folderPath = path.join(baseDir, folder);
  fs.mkdirSync(folderPath, { recursive: true });

  const indexPath = path.join(folderPath, 'index.ts');
  fs.writeFileSync(indexPath, `// ${folder} index.ts file`);
}

  const moduleFilePath = path.join(baseDir, `${moduleName}.module.ts`);
  fs.writeFileSync(moduleFilePath, `import { Module } from '@nestjs/common';
import { ${moduleName}Controller } from './controllers';
import { ${moduleName}Service } from './services';

@Module({
  imports: [],
  controllers: [${moduleName}Controller],
  providers: [${moduleName}Service],
})
export class ${capitalize(moduleName)}Module {}
`);

  console.log(chalk.green(`\n✅ Module '${moduleName}' created successfully at src/modules/${moduleName}/`));
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

(async () => {
  try {
    const { moduleName, selectedFolders } = await promptUser();
    generateModule(moduleName, selectedFolders);
  } catch (err) {
    // Handle Ctrl+C (ExitPromptError from inquirer)
    if (err && (err.name === 'ExitPromptError' || err.message?.includes('User force closed'))) {
      console.log('\nExiting CLI. Goodbye!');
      process.exit(0);
    }
    throw err;
  }
})();