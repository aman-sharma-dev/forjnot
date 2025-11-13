# Frontend Application

This is the Next.js frontend application for the Forjnot monorepo template.

## Overview

The frontend is built with Next.js 15 and includes:

- **Static Site Generation (SSG)**: Optimized static site generation
- **App Router**: Next.js App Router for modern routing
- **Tailwind CSS**: Utility-first CSS framework
- **Theme Support**: Dark/light theme toggle
- **Documentation Site**: Built-in documentation pages

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

Run the frontend in development mode:

```bash
# From monorepo root
pnpm run client

# Or from this directory
pnpm run dev
```

The application will be available at `http://localhost:3000` (configurable via `PORT_FRONTEND` env variable).

### Environment Variables

Create a `.env` file in the monorepo root. See `.env.example` for required variables.

The frontend uses environment variables from `@forjnot/shared-env` package.

### Building

Build the application for production:

```bash
pnpm run build
```

This will create an optimized production build in the `.next` directory.

### Static Export

The frontend is configured for static site generation. To export:

```bash
pnpm run build
```

The static files will be generated in the `out` directory.

### Running in Production

```bash
pnpm run start
```

### Linting

```bash
pnpm run lint
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── (app)/          # App routes
│   └── docs/           # Documentation pages
├── components/         # React components
│   ├── docs/           # Documentation components
│   ├── landing/        # Landing page components
│   └── ui/             # UI components
├── config/             # Configuration files
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── services/           # API services
├── styles/             # Global styles
└── types/              # TypeScript types
```

## Features

### Documentation

The frontend includes a documentation system that automatically generates pages from markdown content in `src/lib/docs/content/`.

### Theme Toggle

Dark and light theme support is built-in using `next-themes`.

### Styling

- **Tailwind CSS 4**: Modern utility-first CSS
- **Custom Components**: Reusable UI components
- **Responsive Design**: Mobile-first approach

## Deployment

### Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Static Export

For static hosting, build and export:

```bash
pnpm run build
```

Then deploy the `out` directory to any static hosting service.

## Configuration

### Next.js Config

Configuration is in `next.config.ts`. The app is configured for:
- Static site generation
- Image optimization
- TypeScript support

### Tailwind Config

Tailwind CSS is configured via `postcss.config.mjs` and uses Tailwind v4.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com)
