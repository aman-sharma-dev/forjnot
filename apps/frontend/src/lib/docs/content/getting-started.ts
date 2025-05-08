import { Doc } from "../types";

export const gettingStarted: Doc = {
	title: "Getting Started",
	description: "Learn how to get started with Forjnot",
	content: `
    <div class="prose prose-slate max-w-none">
      <h1 class="scroll-m-20 text-4xl font-bold tracking-tight" id="getting-started">🚦 Getting Started</h1>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Follow these steps to get up and running with Forjnot in minutes!
      </p>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="clone-repo">📥 Clone the Repository</h2>
      <div class="relative my-4">
        <button
          type="button"
          class="absolute top-2 right-2 z-10 inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent transition"
          onclick="navigator.clipboard.writeText('git clone https://github.com/aman-sharma-dev/forjnot.git')"
          aria-label="Copy"
        >
          Copy
        </button>
        <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>git clone https://github.com/aman-sharma-dev/forjnot.git</code></pre>
      </div>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="install-deps">📦 Install Dependencies</h2>
      <div class="relative my-4">
        <button
          type="button"
          class="absolute top-2 right-2 z-10 inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent transition"
          onclick="navigator.clipboard.writeText('pnpm install')"
          aria-label="Copy"
        >
          Copy
        </button>
        <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>pnpm install</code></pre>
      </div>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="start-backend">🚀 Start the Backend</h2>
      <div class="relative my-4">
        <button
          type="button"
          class="absolute top-2 right-2 z-10 inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent transition"
          onclick="navigator.clipboard.writeText('pnpm run server')"
          aria-label="Copy"
        >
          Copy
        </button>
        <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>pnpm run server</code></pre>
      </div>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="start-frontend">💻 Start the Frontend</h2>
      <div class="relative my-4">
        <button
          type="button"
          class="absolute top-2 right-2 z-10 inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent transition"
          onclick="navigator.clipboard.writeText('pnpm run client')"
          aria-label="Copy"
        >
          Copy
        </button>
        <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>pnpm run client</code></pre>
      </div>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="tips">💡 Tips</h2>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><code>pnpm dev</code> runs the backend (NestJS app).</li>
        <li><code>pnpm dev:frontend</code> runs the frontend (Next.js app).</li>
        <li>Both can be run in parallel for fullstack development.</li>
      </ul>
    </div>
  `,
	lastUpdated: new Date().toISOString(),
	slug: "getting-started",
};
