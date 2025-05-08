import { Doc } from "../types";

export const microservices: Doc = {
	title: "Microservices",
	description:
		"What are microservices, when to use them, their types, and how Forjnot supports scalable microservice architecture.",
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

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="forjnot-microservices-support">🚀 Forjnot: Ready for Microservices</h2>
      <p class="leading-7">
        Forjnot is architected to make adding microservices seamless. You can introduce new services (like <code>apps/worker</code>, <code>apps/api-gateway</code>, etc.) right alongside your existing apps. The shared <code>packages/</code> directory lets you reuse types, DTOs, configs, and utilities across all services, making scaling and maintenance a breeze.
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

      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10" id="pro-feature-microservice">🧩 Need a Custom Microservice Setup?</h2>
If you’re building something unique and want to integrate a microservice beyond what’s included, feel free to reach out. While Forjnot is opinionated, it’s also flexible — and I’m happy to help guide you through adding support for popular backends I’ve worked with (like Node.js/NestJS, Python/FastAPI/Flask).

Want to collaborate or need a tailored setup?
<a 
class="inline-flex items-center text-sm font-semibold relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-pink-500 after:transition-all after:duration-300 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-500 dark:via-purple-500 dark:to-pink-500"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=amansharma42211@gmail.com&su=Custom%20Microservice%20Support%20Request&body=Hi%20Aman%2C%0AI%20would%20like%20some%20help%20with%20adding%20a%20custom%20microservice%20to%20Stackbase.%20Here%20are%20the%20details%3A"
  target="_blank" 
  rel="noopener noreferrer"
>
  Email me
</a>
    </div>
  `,
	lastUpdated: new Date().toISOString(),
	slug: "microservices",
};
