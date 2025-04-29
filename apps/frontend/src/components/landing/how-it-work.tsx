import { ArrowRight } from "lucide-react";

const steps = [
	{
		number: "01",
		title: "Clone the Repository",
		description:
			"Get started with a simple git clone command. The repository contains everything you need to hit the ground running.",
	},
	{
		number: "02",
		title: "Install Dependencies",
		description:
			"Install all dependencies with a single pnpm command. The monorepo structure keeps everything organized.",
	},
	{
		number: "03",
		title: "Start Building",
		description:
			"Begin developing your application with best practices and tooling already configured.",
	},
];

export default function HowItWorks() {
	return (
		<section className="py-20">
			<div className="container mx-auto max-w-screen-xl px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold md:text-4xl">
						Simple to Get Started
					</h2>
					<p className="mx-auto max-w-2xl text-muted-foreground">
						No complicated setup. Start building your product immediately with
						these three simple steps.
					</p>
				</div>

				<div className="mx-auto grid max-w-3xl gap-8">
					{steps.map((step, index) => (
						<div
							key={step.number}
							className="relative rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
						>
							<div className="flex items-start gap-6">
								<div className="flex-shrink-0">
									<div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background text-xl font-bold">
										{step.number}
									</div>
								</div>
								<div>
									<h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
									<p className="text-muted-foreground">{step.description}</p>
								</div>
							</div>
							{index < steps.length - 1 && (
								<div className="absolute left-6 top-[calc(100%+0.5rem)] hidden h-6 border-l-2 border-dashed border-border md:block" />
							)}
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<div className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground">
						<span>
							<a href="/docs">View Documentation</a>
						</span>
						<ArrowRight className="h-4 w-4" />
					</div>
				</div>
			</div>
		</section>
	);
}
