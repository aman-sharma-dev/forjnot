import { Settings, Share2, Layout } from "lucide-react";

const features = [
	{
		title: "Modular NestJS Backend",
		description:
			"Build powerful APIs with a modular architecture that scales. Includes authentication, database setup, and common utilities.",
		icon: Settings,
		color: "bg-chart-1",
	},
	{
		title: "Shared Packages",
		description:
			"Share types, configurations, and utilities across your entire stack to ensure type safety and consistency.",
		icon: Share2,
		color: "bg-chart-2",
	},
	{
		title: "Modern Next.js Frontend",
		description:
			"Stunning UIs with the latest Next.js features. Includes component library, routing, and state management patterns.",
		icon: Layout,
		color: "bg-chart-4",
	},
];

export default function Features() {
	return (
		<section className="bg-secondary/30 py-20">
			<div className="container mx-auto max-w-screen-xl px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold md:text-4xl">
						Everything You Need to Scale
					</h2>
					<p className="mx-auto max-w-2xl text-muted-foreground">
						A complete toolkit with best practices baked in. Stop wasting time
						on boilerplate and focus on building your product.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-md transition-all hover:shadow-lg"
						>
							<div
								className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${feature.color}/10 opacity-70 transition-all group-hover:scale-150`}
							/>
							<div className="relative">
								<div
									className={`mb-4 inline-flex rounded-md p-3 ${feature.color}/20`}
								>
									<feature.icon
										className={`h-6 w-6 text-${feature.color.split("-")[1]}`}
									/>
								</div>
								<h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
								<p className="text-muted-foreground">{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
