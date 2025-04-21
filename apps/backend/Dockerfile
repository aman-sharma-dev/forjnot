# Use official Node.js base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first for better caching
COPY ../../package.json ../../pnpm-lock.yaml ./

# Install dependencies (with pnpm)
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy backend app source
COPY . .

# Build the app
RUN pnpm build

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
