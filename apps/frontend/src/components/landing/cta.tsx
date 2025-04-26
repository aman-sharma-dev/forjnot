import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
	return (
		<section className="relative overflow-hidden py-20">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-chart-4/10 via-chart-2/5 to-chart-1/5" />

			<div className="container relative z-10 mx-auto max-w-screen-xl px-4 text-center">
				<h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold md:text-4xl">
					Start building faster today.
				</h2>
				<p className="mx-auto mb-8 max-w-xl text-muted-foreground">
					Join the growing community of developers who are shipping products
					faster with Stackbase.
				</p>

				<div className="flex flex-col justify-center gap-4 sm:flex-row">
					<Link
						href="/docs/getting-started"
						className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
					>
						Use This Template
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Link>
					<Link
						href="/docs"
						className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/80"
					>
						<BookOpen className="h-4 w-4" />
						Docs
					</Link>
				</div>
			</div>
		</section>
	);
}
