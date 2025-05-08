import { Doc } from "../types";

export const cliDoc: Doc = {
	title: "CLI Tool",
	description: "Use the built-in Forjnot CLI to streamline development",
	slug: "cli",
	lastUpdated: new Date().toISOString(),
	content: `
  <div class="prose prose-slate max-w-none">
    <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Forjnot CLI</h2>
    <p>
      Forjnot includes a built-in CLI to help you generate modules and manage core tasks faster.
      This tool provides an interactive prompt and wraps common scripts into a handy developer menu.
    </p>

    <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">📦 Launch the CLI</h3>
    <p>To view available CLI commands, run the following:</p>

    <div class="relative my-4">
      <button
        type="button"
        class="absolute top-2 right-2 z-10 inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent transition"
        onclick="navigator.clipboard.writeText('pnpm cli:help')"
        aria-label="Copy"
      >
        Copy
      </button>
      <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>pnpm cli:help</code></pre>
    </div>

    <p>When you run this command, you’ll see something like the following interactive menu:</p>

    <div class="relative my-4">
      <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>

      ███████╗ ██████╗ ██████╗      ██╗███╗   ██╗ ██████╗ ████████╗ | / /
      ██╔════╝██╔═══██╗██╔══██╗     ██║████╗  ██║██╔═══██╗╚══██╔══╝ |/ /
      █████╗  ██║   ██║██████╔╝     ██║██╔██╗ ██║██║   ██║   ██║    | /
      ██╔══╝  ██║   ██║██╔══██╗██   ██║██║╚██╗██║██║   ██║   ██║    |/
      ██║     ╚██████╔╝██║  ██║╚█████╔╝██║ ╚████║╚██████╔╝   ██║    |
      ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚════╝ ╚═╝  ╚═══╝ ╚═════╝    ╚═╝    |      

Available Commands:
1. Build the project: pnpm run build:all
2. Start the client: pnpm run client
3. Start the server: pnpm run server
4. Lint the code: pnpm run lint
5. Format the code: pnpm run format
6. Generate a new module: pnpm run generate:module
? Select an action: (Use arrow keys)
❯ Build the project
  Start the client
  Start the server
  Lint the code
  Format the code
  Generate a new module
</code></pre>
    </div>

    <p>
      Use the <strong>up/down arrow keys</strong> to navigate and <strong>press Enter</strong> to run the selected script.
      This makes it easier to avoid memorizing long script names during development.
    </p>

    <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">🧹 Don't need the CLI?</h3>
    <p>If you don’t plan to use the CLI, feel free to delete the <code>.scripts/</code> folder from the project root. 
    It’s fully optional and won’t affect the core functionality of Forjnot.</p>
  </div>
  `,
};
