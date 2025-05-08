import { Doc } from "../types";

export const lintingAndFormatting: Doc = {
	title: "Linting & Formatting",
	description: "Built-in linting and formatting powered by Biome.js",
	slug: "linting-formatting",
	lastUpdated: new Date().toISOString(),
	content: `
  <div class="prose prose-slate max-w-none">
    <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Linting & Formatting</h2>

    <p>
      Forjnot uses <strong><a href="https://biomejs.dev/" target="_blank" rel="noopener noreferrer">Biome.js</a></strong> for both linting and formatting. 
      It’s a modern, fast, and zero-dependency tool — no need for separate ESLint or Prettier setups.
    </p>

    <h3 class="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">✨ Why Biome?</h3>
    <ul>
      <li>One tool for linting and formatting</li>
      <li>Written in Rust — incredibly fast</li>
      <li>Supports JavaScript, TypeScript, JSX, and more</li>
      <li>Includes sensible defaults for modern projects</li>
    </ul>

    <h3 class="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">📦 Pre-configured Setup</h3>
    <p>
      Forjnot includes a default <code>biome.json</code> configuration at the root of the repo. This means linting and formatting work out-of-the-box with no additional setup.
      You can customize rules, formatting style, or enable/disable specific lints as needed.
    </p>

    <div class="relative my-4">
      <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>// biome.json
{
  "formatter": {
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100,
    "quoteStyle": "double"
  },
  "linter": {
    "rules": {
      "recommended": true,
      "nursery": true
    }
  }
}
</code></pre>
    </div>

    <h3 class="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">🚀 Run Lint & Format</h3>
    <p>To check for lint issues or auto-format your codebase, use the following commands:</p>

    <div class="relative my-4">
      <button
        type="button"
        class="absolute top-2 right-2 z-10 inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent transition"
        onclick="navigator.clipboard.writeText('pnpm lint')"
        aria-label="Copy"
      >
        Copy
      </button>
      <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>pnpm lint</code></pre>
    </div>

    <p>To format all project files:</p>
    <div class="relative my-4">
      <button
        type="button"
        class="absolute top-2 right-2 z-10 inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent transition"
        onclick="navigator.clipboard.writeText('pnpm format')"
        aria-label="Copy"
      >
        Copy
      </button>
      <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>pnpm format</code></pre>
    </div>

    <p>
      For full customization options and rule references, check out the 
      <a href="https://biomejs.dev/docs" target="_blank" rel="noopener noreferrer">Biome documentation</a>.
    </p>

    <p class="mt-6">Enjoy fast, consistent, and fully-configurable code quality out-of-the-box 🚀</p>
  </div>
`,
};
