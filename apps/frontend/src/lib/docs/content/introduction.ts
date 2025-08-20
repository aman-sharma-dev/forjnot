import { Doc } from "../types";

export const introduction: Doc = {
	title: "Introduction",
	description: "Overview of Forjnot and what it offers",
	ogTitle: "Introduction", 
	ogDescription: "Overview of Forjnot and what it offers",
	ogImage: "/forjnot.png",
	keywords: [
		"Forjnot",
		"monorepo template",
		"NestJS",
		"Next.js",
		"fullstack development",
		"TypeScript",
		"backend development",
		"frontend development",
		"developer tools",
		"code organization",
		"scalable architecture",
		"shared packages",
		"modern tooling"
	],
  canonical: "https://forjnot.vercel.app/docs/",
	content: `
    <div class="prose prose-slate max-w-none">
      <h1 class="scroll-m-20 text-4xl font-bold tracking-tight" id="introduction">🚀 Introduction</h1>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        <strong>Forjnot</strong> is a clean, scalable, and professional monorepo template built for developers who want a solid foundation for both backend and frontend apps using modern tooling.
      </p>
      <p class="leading-7">
        It aims to eliminate the repetitive setup work and lets you focus on building features right away — while still being highly customizable and production-ready.
      </p>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="project-structure">🏗️ Project Structure</h2>
      <div class="relative my-6">
        <button
          type="button"
          class="absolute top-2 right-2 z-10 inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent transition"
          onclick="navigator.clipboard.writeText(\`forjnot/
├── apps/
│   ├── backend/         # NestJS application
│   └── frontend/        # Next.js application
├── packages/
│   ├── shared-configs/         # Shared configurations
│   ├── shared-constants/       # Shared constants
│   ├── shared-dtos/            # Shared DTOs
│   ├── shared-env/             # Environment configuration
│   ├── shared-logger/          # Shared logger
│   ├── shared-types/           # Shared TypeScript types
│   └── shared-utils/           # Shared utilities
└── package.json\`)"
          aria-label="Copy"
        >
          Copy
        </button>
        <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>forjnot/
├── apps/
│   ├── backend/         # NestJS application
│   └── frontend/        # Next.js application
├── packages/
│   ├── shared-configs/         # Shared configurations
│   ├── shared-constants/       # Shared constants
│   ├── shared-dtos/            # Shared DTOs
│   ├── shared-env/             # Environment configuration
│   ├── shared-logger/          # Shared logger
│   ├── shared-types/           # Shared TypeScript types
│   └── shared-utils/           # Shared utilities
└── package.json</code></pre>
      </div>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="key-directories">📁 Key Directories Explained</h2>
      <div class="not-prose my-6 overflow-hidden rounded-lg border bg-background">
        <div class="flex items-center gap-2 border-b bg-muted/50 p-2">
          <div class="text-xs text-muted-foreground">Directory Functions</div>
        </div>
        <div class="p-4 space-y-4">
          <div>
            <h4 class="font-medium text-base">apps/backend/</h4>
            <p class="text-sm text-muted-foreground leading-7">NestJS application with modular architecture:</p>
            <pre class="mt-2 overflow-x-auto font-sans"><code>backend/
├── src/
│   ├── modules/           # Feature modules (auth, users, etc.)
│   │   ├── auth/         # (Example) Authentication module
│   │   │   ├── dto/     # Data Transfer Objects
│   │   │   ├── guards/  # Auth guards
│   │   │   └── ...      # Other auth files & folders
│   │   └── users/        # (Example) Users module
│   │       ├── dto/     # User DTOs
│   │       ├── entities/# User entities
│   │       └── ...      # Other user files & folders
│   ├── app.controller.spec.ts  # Main controller tests
│   ├── app.controller.ts       # Main application controller
│   ├── app.module.ts          # Root application module
│   ├── app.service.ts         # Main application service
│   └── main.ts               # Application entry point
├── test/                    # e2e tests
├── nest-cli.json           # NestJS CLI configuration
└── tsconfig.json           # TypeScript configuration</code></pre>
          </div>
          <div>
            <h4 class="font-medium text-base">apps/frontend/</h4>
            <p class="text-sm text-muted-foreground leading-7">Next.js application with app directory:</p>
            <pre class="mt-2 overflow-x-auto font-sans"><code>frontend/
├── public/                 # Static assets
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (auth)/            # (Example) Authentication routes group
│   │   ├── (dashboard)/       # (Example) Dashboard routes group
│   │   ├── docs/              # (Example) Documentation pages
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── dashboard/        # (Example) Dashboard components
│   │   ├── auth/             # (Example) Authentication components
│   │   ├── docs/             # (Example) Documentation components
│   │   ├── landing/          # (Example) Landing page components
│   │   ├── shared/           # (Example) Shared/common components
│   │   └── ui/               # UI component library
│   ├── hooks/                # Custom React hooks
│   │   ├── auth/            # (Example) Authentication related hooks
│   │   ├── data/            # (Example) Data fetching hooks
│   │   └── ui/              # (Example) UI related hooks
│   ├── lib/                  # Utilities and helpers
│   │   ├── utils.ts         # (Example) Helper functions
│   │   └── docs.ts          # (Example) Documentation utilities
│   ├── services/            # API and external services
│   │   ├── api/            # (Example) API client and endpoints
│   │   ├── auth/           # (Example) Authentication services
│   │   └── external/       # (Example) Third-party service integrations
│   ├── styles/              # Styling files
│   │   ├── globals.css     # Global styles
│   │   └── themes/         # (Example) Theme configurations
│   ├── types/               # Frontend-specific types
│   │   ├── components.ts  # (Example) Component prop types
│   │   └── common.ts      # (Example) Common type definitions
│   └── config/             # Frontend configurations
│       ├── api.ts         # (Example) API configuration
│       ├── auth.ts        # (Example) Auth configuration
│       └── site.ts        # (Example) Site-wide configuration
├── tailwind.config.ts       # Tailwind configuration
└── next.config.ts           # Next.js configuration</code></pre>
          </div>
          <div>
            <h4 class="font-medium text-base">packages/</h4>
            <p class="text-sm text-muted-foreground leading-7">Shared packages for code reuse across frontend and backend:</p>
            <pre class="mt-2 overflow-x-auto font-sans"><code>packages/
├── shared-configs/         # Shared configurations
├── shared-constants/       # Shared constants
├── shared-dtos/            # Shared DTOs
├── shared-env/             # Environment configuration
├── shared-logger/          # Shared logger
├── shared-types/           # Shared TypeScript types
└── shared-utils/           # Shared utilities</code></pre>
          </div>
        </div>
      </div>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="what-is-forjnot">💡 What is Forjnot?</h2>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Shared packages for configuration, types, DTOs, environment, and utilities.</li>
        <li>NestJS backend with modular architecture and optional CLI module generator.</li>
        <li>Optional Next.js frontend set up with Tailwind CSS and app directory support.</li>
        <li>Biome for formatting and linting — clean, fast, and consistent code.</li>
        <li>Scalable folder structure that feels organized from day one.</li>
        <li>Developer tools like Turbo, PM2, health checks, and more.</li>
        <li>Optional docs branch for public documentation and Vercel deployment.</li>
      </ul>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="why-forjnot">🌟 Why Forjnot?</h2>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Skip the boilerplate — common patterns and configs are already done for you.</li>
        <li>Monorepo-first — built with Turborepo to handle multiple apps and packages smoothly.</li>
        <li>Clean architecture — promotes separation of concerns, reusability, and testability.</li>
        <li>Fast development — generate modules and folders with a single CLI command.</li>
        <li>Modern DX — everything works out of the box with Biome, Turbo, pnpm, and more.</li>
      </ul>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="who-is-it-for">👥 Who is it for?</h2>
      <p class="leading-7">
        Developers building fullstack apps using NestJS and optionally Next.js. Teams looking to scale with modular backend services and shared logic. Anyone who wants a professional starting point that actually saves time.
      </p>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="whats-included">📦 What's Included</h2>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><code>apps/backend</code> – A NestJS application built with best practices.</li>
        <li><code>apps/frontend</code> – Optional Next.js app with Tailwind and app dir support.</li>
        <li><code>packages/</code> – Shared packages like env, config, types, logger, etc.</li>
        <li>Dev tooling – Biome, Turbo, PM2, Git hooks, and more.</li>
      </ul>
    </div>
  `,
	lastUpdated: new Date().toISOString(),
	slug: "introduction",
};
