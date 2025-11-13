# Backend API

This is the NestJS backend application for the Forjnot monorepo template.

## Overview

The backend is built with NestJS and provides a RESTful API with the following features:

- **Swagger Documentation**: Auto-generated API documentation available at `/docs` (local environment only)
- **Shared Packages**: Uses shared packages from the monorepo for utilities, DTOs, types, and more
- **Environment Configuration**: Centralized environment variable management via `@forjnot/shared-env`
- **Logging**: Integrated logging system via `@forjnot/shared-logger`
- **Response Interceptors**: Standardized API responses

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8.15.5+

### Installation

Install dependencies from the monorepo root:

```bash
pnpm install
```

### Development

Run the backend in development mode:

```bash
# From monorepo root
pnpm run server

# Or from this directory
pnpm run dev
```

The server will start on `http://localhost:8080` (configurable via `PORT_BACKEND` env variable).

### Environment Variables

Create a `.env` file in the monorepo root. See `.env.example` for required variables.

Required variables:
- `SERVER_SECRET`: Secret key for server operations
- `ENCRYPTION_KEY`: Encryption key for sensitive data

Optional variables:
- `RUNTIME_MODE`: `local`, `development`, or `production` (default: `local`)
- `PORT_BACKEND`: Backend port (default: `8080`)
- `LOG_LEVEL`: Logging level (default: `debug`)

### API Documentation

When running in `local` mode, Swagger UI is available at:
- `http://localhost:8080/docs`

### Building

Build the application:

```bash
pnpm run build
```

### Running in Production

```bash
pnpm run start
```

### Testing

```bash
# Unit tests
pnpm run test

# Watch mode
pnpm run test:watch

# Coverage
pnpm run test:cov
```

## Project Structure

```
src/
├── main.ts              # Application entry point
├── app.module.ts        # Root module
├── app.controller.ts    # Root controller
└── app.service.ts       # Root service
```

## Shared Packages

This backend uses the following shared packages:

- `@forjnot/shared-env`: Environment configuration
- `@forjnot/shared-logger`: Logging utilities
- `@forjnot/shared-dtos`: Data Transfer Objects
- `@forjnot/shared-types`: TypeScript types
- `@forjnot/shared-utils`: Utility functions
- `@forjnot/shared-constants`: Application constants

## Module Generation

Use the CLI tool to generate new modules:

```bash
# From monorepo root
pnpm run generate:module
```

This will create a new module with the standard NestJS structure.

## Docker

Build and run with Docker:

```bash
# From monorepo root
docker-compose up --build
```

Or use the Makefile:

```bash
make up
```
