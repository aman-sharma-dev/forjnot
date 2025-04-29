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
      Stackbase uses <strong><a href="https://biomejs.dev/" target="_blank" rel="noopener noreferrer">Biome.js</a></strong> as the default tool for both linting and code formatting.
      It’s fast, zero-dependency, and works out-of-the-box without needing to maintain a bunch of plugins or config files.
    </p>

    <h3 class="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">✨ Why Biome?</h3>
    <ul>
      <li>No ESLint or Prettier setup required</li>
      <li>Fast execution, written in Rust</li>
      <li>Supports modern JavaScript, TypeScript, JSX, and more</li>
      <li>Great developer experience with built-in formatting and diagnostics</li>
    </ul>

    <h3 class="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">🚀 Run Lint & Format</h3>

    <p>To lint and format your codebase, just run:</p>
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

    <p>You can also format all files directly using:</p>
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

    <h3 class="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">⚙️ Custom Rules?</h3>
    <p>
      By default, Stackbase does not include any <code>biome.json</code> config file to keep things minimal. 
      But if you'd like to customize rules or override defaults (e.g. change quote style, enable/disable specific lints), 
      you can add your own config at the root:
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

    <p>
      You can find the full config reference in the 
      <a href="https://biomejs.dev/docs" target="_blank" rel="noopener noreferrer">Biome docs</a>.
    </p>

    <p class="mt-6">Enjoy fast and consistent code formatting with zero hassle 🚀</p>
  </div>
  `,
};
