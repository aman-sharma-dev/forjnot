import { Doc } from "../types";

export const monorepo: Doc = {
	title: "Monorepo Architecture",
	description:
		"Why and when to use a monorepo, and the advantages of Forjnot's structure",
	content: `
    <div class="prose prose-slate max-w-none">
      <h1 class="scroll-m-20 text-4xl font-bold tracking-tight" id="monorepo-architecture">🗂️ Monorepo Architecture</h1>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        A <strong>monorepo</strong> (monolithic repository) is a single repository that holds the code and assets for multiple projects, apps, or packages. Forjnot is designed as a monorepo to help you scale, share code, and manage dependencies efficiently.
      </p>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="when-to-use-monorepo">🚦 When Should You Use a Monorepo?</h2>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>You have multiple apps (backend, frontend, CLI, etc.) that share code or dependencies.</li>
        <li>Your team wants to enforce consistent tooling, linting, and formatting across all projects.</li>
        <li>You need to coordinate releases and updates across several packages or services.</li>
        <li>You want to simplify dependency management and avoid version drift between packages.</li>
        <li>You value a single source of truth for your codebase and developer experience.</li>
      </ul>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="why-monorepo-advantages">🌟 Why Use a Monorepo? (Advantages)</h2>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><strong>Code Sharing:</strong> Easily share types, utilities, configs, and logic between apps and packages.</li>
        <li><strong>Atomic Changes:</strong> Make cross-cutting changes in a single commit (e.g., update a shared type and all consumers at once).</li>
        <li><strong>Consistent Tooling:</strong> Enforce the same lint, format, and test rules everywhere.</li>
        <li><strong>Faster Onboarding:</strong> New team members only need to clone one repo to get started.</li>
        <li><strong>Centralized Dependency Management:</strong> Keep dependencies in sync and avoid duplication.</li>
        <li><strong>Better CI/CD:</strong> Run tests and builds only for affected projects with tools like Turborepo.</li>
        <li><strong>Scalability:</strong> Add new apps or packages as your project grows, without restructuring.</li>
      </ul>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="forjnot-monorepo-highlights">🚀 Extreme Positives of Forjnot's Monorepo</h2>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><strong>Modern Tooling:</strong> Uses Turborepo for blazing-fast builds and caching.</li>
        <li><strong>Shared Everything:</strong> Configs, types, DTOs, environment, logger, and utilities are all reusable.</li>
        <li><strong>Production Ready:</strong> Biome, PM2, health checks, and more are set up out of the box.</li>
        <li><strong>Optional Frontend:</strong> Next.js app is included but not required—remove or extend as needed.</li>
        <li><strong>CLI Module Generator:</strong> Quickly scaffold new modules for the backend.</li>
        <li><strong>Consistent DX:</strong> All apps and packages follow the same conventions and structure.</li>
        <li><strong>Easy Deployment:</strong> Supports Vercel, Docker, and other modern deployment targets.</li>
      </ul>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="monorepo-structure">📦 Example Monorepo Structure</h2>
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

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="monorepo-init-command">🛠️ Initialize Your Own Monorepo</h2>
      <div class="relative my-4">
        <span class="block mb-2 text-sm font-medium text-muted-foreground">Clone the Forjnot monorepo template:</span>
        <button
          type="button"
          class="absolute top-2 right-2 z-10 inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent transition"
          onclick="navigator.clipboard.writeText('git clone https://github.com/your-org/forjnot.git')"
          aria-label="Copy"
        >
          Copy
        </button>
        <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>git clone https://github.com/your-org/forjnot.git</code></pre>
      </div>
    </div>
  `,
	lastUpdated: new Date().toISOString(),
	slug: "monorepo",
};
