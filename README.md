# Forjnot: Monorepo Starter for Scalable Projects

## Overview

**Forjnot** is a high-performance monorepo starter template, designed to help developers quickly set up scalable, production-ready applications. It integrates **NestJS**, **Next.js**, and **TurboRepo** for a seamless experience in building real-world, microservice-based projects.

---

## Key Features

* **Modular & Scalable Backend**: Utilize **NestJS** for building flexible, maintainable backend applications.
* **Next.js with SSG**: Leverage **Next.js** for your frontend, with Static Site Generation (SSG) support out of the box.
* **TurboRepo Integration**: Build fast, with optimal monorepo management and efficient CI/CD workflows.
* **Shared Packages**: Easily manage reusable code and configurations across multiple apps and services within the monorepo.

---

## Why Choose Forjnot?

Forjnot is tailored for serious development needs and offers:

* A streamlined setup for rapid project initiation.
* A clean, efficient architecture for both frontend and backend development.
* A modular approach that allows for seamless scaling and microservice integration.
* A configuration-free experience—no unnecessary bloat or overhead, just exactly what you need to get started.

This is not a generic starter template. Forjnot is meticulously crafted for developers who seek clarity, precision, and real-world scalability.

---

## Project Structure

The repository follows a monorepo structure for scalability and modularity.

```
apps/
├── backend          # NestJS API
└── frontend         # Next.js app

packages/
├── shared-configs/  # Shared configurations
├── shared-constants/  # Shared constants
├── shared-dtos/     # Shared DTOs
├── shared-env/      # Environment configuration
├── shared-logger/   # Shared logger
├── shared-types/    # Shared TypeScript types
└── shared-utils/    # Shared utilities

Root Files:
.editorconfig
.gitignore
.env.example
biome.json
docker-compose.yml
makefile
package.json
pnpm-workspace.yaml
tsconfig.json / tsconfig.base.json
turbo.json
```

---

## Installation & Setup

To get started with Forjnot, follow these steps:

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run the Frontend

```bash
pnpm run client
```

### 3. Run the Backend

```bash
pnpm run server
```

---

## Build and Deployment

Forjnot is ready for deployment and offers an initial Docker configuration. The following command builds all necessary services:

```bash
pnpm run build:all
```

You can also use Docker for containerized deployment, with basic configurations provided in `docker-compose.yml`.

---

## Development Tools

Forjnot is designed to maintain code quality and consistency:

* **Linting & Formatting**: Ensure your code meets style standards.

  ```bash
  pnpm run lint
  pnpm run format
  ```

* **Swagger Docs**: Automatically generated documentation for APIs.

* **Makefile**: Manage project tasks, including builds and testing.

---

## Technologies Used

* **NestJS**: Backend framework for building scalable and maintainable APIs.
* **Next.js**: Frontend framework with support for Static Site Generation (SSG).
* **TurboRepo**: Efficient monorepo management tool.
* **pnpm**: Fast, disk space-efficient package manager.
* **Swagger**: Swagger integration for auto-generated API documentation, simplifying the testing and exploration of your APIs.
* **Makefile**: A Makefile is included for simplified task management, such as building, testing, and deployment processes.
* **Biome**: Linting and formatting integration.
* **Docker**: Basic containerization setup for easy deployment.

---

## License

Forjnot is licensed under the MIT License. Feel free to use, modify, and distribute the project according to the terms of the license.

---

## Contribution

Forjnot is an open-source project, and contributions are always welcome. You can contribute by:

* Reporting bugs or issues
* Submitting feature requests or improvements
* Reviewing pull requests

Forjnot is already a powerful tool, but it can always be improved. We encourage contributions that help enhance its functionality and usability.

---

## Final Thoughts

Forjnot is designed to help developers build scalable applications quickly and efficiently, with a focus on performance and maintainability. It provides a clean, modular foundation for both backend and frontend development, eliminating unnecessary complexity.

Feel free to use, modify, and extend Forjnot for your projects. Whether you're working on a new startup or a larger-scale enterprise application, Forjnot has you covered.
