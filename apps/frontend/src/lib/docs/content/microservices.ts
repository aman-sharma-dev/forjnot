import { Doc } from "../types";

export const microservices: Doc = {
	title: "Microservices",
	description:
		"What are microservices, when to use them, their types, and how Stackbase supports scalable microservice architecture.",
	content: `
    <div class="prose prose-slate max-w-none">
      <h1 class="scroll-m-20 text-4xl font-bold tracking-tight" id="microservices-architecture">🧩 Microservices Architecture</h1>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        <strong>Microservices</strong> is an architectural style that structures an application as a collection of small, independent, and loosely coupled services. Each service is responsible for a specific business capability and can be developed, deployed, and scaled independently.
      </p>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="when-to-use-microservices">🚦 When Should You Use Microservices?</h2>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Your application is growing and becoming difficult to manage as a single codebase (monolith).</li>
        <li>You want to scale specific parts of your system independently (e.g., scale only the API or worker service).</li>
        <li>Your team is large and you want to enable independent development and deployment cycles.</li>
        <li>You need to use different technologies or databases for different parts of your system.</li>
        <li>You want to improve system resilience—if one service fails, others keep running.</li>
      </ul>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="purpose-of-microservices">🎯 Purpose of Microservices</h2>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Break down complex applications into manageable, focused services.</li>
        <li>Enable independent deployment and scaling of services.</li>
        <li>Allow teams to work autonomously on different services.</li>
        <li>Increase system resilience and fault isolation.</li>
        <li>Facilitate technology diversity and experimentation.</li>
      </ul>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="types-of-microservices">🔗 Types of Microservices</h2>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li><strong>API Services:</strong> Handle HTTP requests and expose endpoints for clients.</li>
        <li><strong>Worker Services:</strong> Perform background jobs, processing, or scheduled tasks.</li>
        <li><strong>Gateway Services:</strong> Aggregate and route requests to other microservices.</li>
        <li><strong>Event-Driven Services:</strong> Communicate via events/messages (e.g., using queues or pub/sub).</li>
        <li><strong>Database Services:</strong> Own and manage specific data domains.</li>
      </ul>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="stackbase-microservices-support">🚀 Stackbase: Ready for Microservices</h2>
      <p class="leading-7">
        Stackbase is architected to make adding microservices seamless. You can introduce new services (like <code>apps/worker</code>, <code>apps/api-gateway</code>, etc.) right alongside your existing apps. The shared <code>packages/</code> directory lets you reuse types, DTOs, configs, and utilities across all services, making scaling and maintenance a breeze.
      </p>
      <div class="relative my-6">
        <span class="block mb-2 text-sm font-medium text-muted-foreground">Example: Add a new worker microservice</span>
        <button
          type="button"
          class="absolute top-2 right-2 z-10 inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent transition"
          onclick="navigator.clipboard.writeText('mkdir apps/worker')"
          aria-label="Copy"
        >
          Copy
        </button>
        <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>mkdir apps/worker</code></pre>
      </div>
      <div class="relative my-6">
        <span class="block mb-2 text-sm font-medium text-muted-foreground">Example: Add a new API gateway microservice</span>
        <button
          type="button"
          class="absolute top-2 right-2 z-10 inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent transition"
          onclick="navigator.clipboard.writeText('mkdir apps/api-gateway')"
          aria-label="Copy"
        >
          Copy
        </button>
        <pre class="overflow-x-auto rounded border bg-background p-4 text-sm font-mono"><code>mkdir apps/api-gateway</code></pre>
      </div>
      <p class="leading-7">
        The template is designed to scale as your needs grow—add as many microservices as you want, and keep your codebase organized and maintainable.
      </p>

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="pro-feature-microservice">💡 Want a Custom Microservice Embedded?</h2>
      <p class="leading-7">
        If you’d like to have a microservice tailored and integrated directly into your Stackbase monorepo, I offer a premium service to help you do just that. You’ll get a production-ready microservice, fully wired up and following best practices—saving you time and effort.
      </p>
      <p class="leading-7">
        <strong>Interested?</strong> Reach out to me, and I’ll help you get your custom microservice up and running in your monorepo!
      </p>
    </div>
  `,
	lastUpdated: new Date().toISOString(),
	slug: "microservices",
};
