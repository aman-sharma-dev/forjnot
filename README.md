# Stackbase Monorepo

Welcome to the **Stackbase Monorepo**! This repository is designed to provide a clean and scalable architecture for modern web applications, integrating **NestJS** for the backend and **Next.js** for the frontend, with a focus on shared packages, testing, and optimized developer experience.

## Table of Contents
1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Getting Started](#getting-started)
4. [Folder Structure](#folder-structure)
5. [Development Workflow](#development-workflow)
6. [Testing](#testing)
7. [CI/CD](#cicd)
8. [Shared Packages](#shared-packages)
9. [CLI Tools](#cli-tools)
10. [Environment Variables](#environment-variables)
11. [Linting & Formatting](#linting--formatting)
12. [Contributing](#contributing)
13. [License](#license)

## Overview

Stackbase is a monorepo setup designed for high scalability and maintainability. It uses **Turborepo** and **pnpm** to handle multiple apps and packages with efficient dependency management and optimized builds. The goal is to create a high-quality and professional backend-first setup, which can be easily extended for frontend development and other parts later.

- **Backend**: Built with **NestJS** for modern API and microservices architecture.
- **Frontend**: Built with **Next.js** for server-side rendering, static site generation, and easy React integration.
- **Shared Packages**: Contains shared utilities, configuration, logging, DTOs, types, etc., to maintain a DRY codebase.
  
## Architecture

The project follows a **modular monorepo** structure where:
- Each service or app resides in its respective folder within the `apps/` directory.
- Shared resources like utility functions, logging, and configuration are placed in the `packages/` directory.
- The entire project is managed and optimized using **Turborepo** for builds and caching.

### Key Features:
- **Scalable architecture**: Easily add and manage more apps and services in the monorepo.
- **Shared packages**: Common logic, utilities, and configurations are placed in the `packages/` directory.
- **Efficient builds**: Turbo and pnpm work together to optimize build times and manage dependencies effectively.

## Getting Started

### Prerequisites

To get started, you’ll need the following tools installed:

- **Node.js** (v18+ recommended)
- **pnpm** (version 7+)
- **Turborepo** (optional, but highly recommended)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stackbase.git
   cd stackbase
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Install global dependencies (optional but recommended):
   ```bash
   pnpm add -g turbo
   ```

4. Run the development environment:
   ```bash
   turbo dev
   ```

This will run both the frontend and backend applications, setting them up in development mode.

## Folder Structure

```bash
stackbase/
├── apps/
│   ├── backend/      # NestJS backend API
│   └── frontend/     # Next.js frontend
├── packages/
│   ├── config/       # Configuration files
│   ├── env/          # Environment management
│   ├── logger/       # Logging utilities
│   └── utils/        # Shared utilities
└── .gitignore
└── turbo.json        # Turborepo config
└── pnpm-workspace.yaml # pnpm workspace config
└── package.json      # Project dependencies and scripts
```

- **apps/backend**: Contains the backend NestJS app and its modules.
- **apps/frontend**: Contains the frontend Next.js app.
- **packages/config**: Centralized configuration files, including app-specific settings.
- **packages/env**: Manage environment variables for all services.
- **packages/logger**: Logging utility that can be shared across all services.
- **packages/utils**: Common utility functions used by both frontend and backend.

## Development Workflow

### Running Development Servers

To start both the backend and frontend, use:

```bash
pnpm turbo dev
```

You can also run specific apps individually:

- **Frontend (Next.js)**: 
  ```bash
  pnpm dev --filter=frontend
  ```

- **Backend (NestJS)**: 
  ```bash
  pnpm dev --filter=backend
  ```

### Running Specific Tests

To run tests for a particular service or package:

```bash
pnpm test --filter=backend
pnpm test --filter=frontend
```

To run all tests in the monorepo:

```bash
pnpm test
```

## Testing

### Coverage

The **coverage** folder is automatically generated when running tests using the testing framework. It contains test coverage reports for the services being tested.

- If you delete the coverage folder, it will regenerate itself after running tests.
- It is automatically added to `.gitignore` to prevent versioning of test coverage.

### Linting

Linting issues might appear in the `coverage` folder, which is automatically generated after test runs. This can be ignored as it does not affect the code quality or application functionality.

You can manually clean the folder, but it will regenerate after each test run.

## CI/CD

For continuous integration and deployment, we use GitHub Actions (or any other CI tool that fits your needs). The CI pipeline will automatically run tests, lint checks, and deploy the application to your desired environment.

### Example GitHub Actions Workflow:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up pnpm
      run: npm install -g pnpm
    - name: Install dependencies
      run: pnpm install
    - name: Run tests
      run: pnpm test
    - name: Deploy
      run: pnpm deploy
```

## Shared Packages

### **Config**

Shared configuration files for services to centralize settings like database configurations, API keys, etc.

### **Logger**

A custom logger that can be shared between apps and packages for consistent logging across the monorepo.

### **Env**

Environment management that helps centralize the handling of `.env` files across multiple services.

### **Utils**

Reusable utility functions that can be used across both backend and frontend services.

## CLI Tools

The project includes a custom CLI tool for generating modules and other common tasks.

### Example: Generate a new module

To generate a new module in your NestJS app:

```bash
pnpm generate:module <module-name>
```

This will prompt you to select folders to include in the module and will generate the appropriate files.

## Environment Variables

To set up environment variables for each app, create a `.env` file in the root of the respective app folder:

```dotenv
# apps/backend/.env
DATABASE_URL="mongodb://localhost:27017/your-database"
PORT=3000
```

Ensure that the `.env` file is properly loaded and accessed using the shared **env** package.

## Linting & Formatting

Linting and formatting are configured using **ESLint** and **Prettier**. You can run the following commands to lint and format your code:

- **Lint**:
  ```bash
  pnpm lint
  ```

- **Fix linting issues**:
  ```bash
  pnpm lint:fix
  ```

- **Format**:
  ```bash
  pnpm format
  ```

## Contributing

We welcome contributions to **Stackbase**! To contribute, please fork the repository, create a feature branch, and submit a pull request.

### Steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Make your changes.
4. Run tests and ensure linting passes.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
