# Use official Node.js base image
FROM node:20-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy root package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy package.json files for all packages and apps (for dependency resolution)
COPY packages/*/package.json ./packages/
COPY apps/backend/package.json ./apps/backend/
COPY apps/frontend/package.json ./apps/frontend/
COPY tsconfig.base.json tsconfig.json turbo.json ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy all source code
COPY packages ./packages
COPY apps/backend ./apps/backend

# Build the backend
WORKDIR /app/apps/backend
RUN pnpm build

# Expose the app port
EXPOSE 8080

# Start the app
CMD ["pnpm", "start"]
