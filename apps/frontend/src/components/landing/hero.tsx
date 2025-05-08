"use client";

import { config } from "../../config/env";
import { ArrowRight, Atom, Folder, FolderOpen, Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section className="relative overflow-hidden py-20 md:py-32">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

			{/* Content */}
			<div className="container relative z-10 mx-auto flex max-w-screen-xl flex-col items-center px-4 text-center">
				{/* Animated dots (appear when component mounts) */}
				{mounted && (
					<>
						<div className="absolute -left-20 top-1/4 h-64 w-64 animate-pulse rounded-full bg-chart-1/20 blur-3xl" />
						<div className="absolute -right-20 top-1/2 h-64 w-64 animate-pulse rounded-full bg-chart-2/20 blur-3xl" />
					</>
				)}

				{/* Subtitle */}
				<div className="mb-6 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium">
					Full-Stack Monorepo Starter
				</div>

				{/* Title */}
				<h1 className="mb-6 bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
					Build Fullstack Products Fast.
				</h1>

				{/* Description */}
				<p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
					Forjnot gives you a battle-tested monorepo setup with NestJS,
					Next.js, and shared packages – everything you need to move fast.
				</p>

				{/* Buttons */}
				<div className="flex flex-col justify-center gap-4 sm:flex-row">
					<Link
						href="/docs/getting-started"
						className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
					>
						Get Started
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Link>
					<Link
						href={config.gitHubURL}
						className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/80"
					>
						<Github className="h-4 w-4" />
						View on GitHub
					</Link>
				</div>

				{/* Enhanced Editor Mockup */}
				<div className="relative mt-16 aspect-[3/2] w-full max-w-3xl overflow-hidden rounded-lg border bg-card shadow-lg">
					<div className="absolute inset-0">
						<div className="flex h-full w-full flex-col">
							{/* Editor Header */}
							<div className="flex h-10 items-center justify-between border-b bg-muted/50 px-4">
								<div className="flex gap-2">
									<div className="h-3 w-3 rounded-full bg-green-500" />
									<div className="h-3 w-3 rounded-full bg-yellow-500" />
									<div className="h-3 w-3 rounded-full bg-red-500" />
								</div>
								<div className="flex items-center gap-2 text-xs text-muted-foreground">
									<span className="rounded bg-muted px-2 py-1">main</span>
									<span>src/app/page.tsx</span>
								</div>
							</div>

							{/* Editor Content */}
							<div className="grid flex-1 grid-cols-5">
								{/* Sidebar */}
								<div className="col-span-1 border-r bg-card/50 p-2 sm:p-4">
									<div className="space-y-2 sm:space-y-3">
										<div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs">
											<Folder className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
											<span>packages/</span>
										</div>
										<div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs">
											<FolderOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
											<span>apps/</span>
										</div>
										<div className="ml-2 sm:ml-3 space-y-1.5 sm:space-y-2">
											<div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-primary">
												<Folder className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
												<span>backend</span>
											</div>
											<div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs">
												<FolderOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
												<span>frontend</span>
											</div>
										</div>
										<div className="ml-4 sm:ml-6 space-y-1.5 sm:space-y-2">
											<div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-primary">
												<FolderOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
												<span>src</span>
											</div>
										</div>
										<div className="ml-6 sm:ml-9 space-y-1.5 sm:space-y-2">
											<div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-primary">
												<FolderOpen className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
												<span>app</span>
											</div>
										</div>
										<div className="ml-8 sm:ml-12 space-y-1.5 sm:space-y-2">
											<div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-primary">
												<Atom className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
												<span>page.tsx</span>
											</div>
											<div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-primary">
												<Atom className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
												<span>layout.tsx</span>
											</div>
										</div>
									</div>
								</div>

								{/* Code Area */}
								<div className="col-span-4 overflow-hidden bg-background/50 p-4">
									<div className="space-y-3">
										<div className="flex items-center gap-2">
											<span className="text-xs text-muted-foreground">1</span>
											<span className="text-xs text-purple-500">import</span>
											<span className="text-xs">{"{ AppProps }"}</span>
											<span className="text-xs text-purple-500">from</span>
											<span className="text-xs text-green-500">'next/app'</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="text-xs text-muted-foreground">2</span>
											<span className="text-xs text-purple-500">import</span>
											<span className="text-xs">{"{ Layout }"}</span>
											<span className="text-xs text-purple-500">from</span>
											<span className="text-xs text-green-500">
												'@/components'
											</span>
										</div>
										<div className="h-2" />
										<div className="flex items-center gap-2">
											<span className="text-xs text-muted-foreground">4</span>
											<span className="text-xs text-purple-500">export</span>
											<span className="text-xs text-purple-500">default</span>
											<span className="text-xs text-blue-500">function</span>
											<span className="text-xs">App(</span>
											<span className="text-xs text-orange-500">props:</span>
											<span className="text-xs">AppProps)</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="text-xs text-muted-foreground">5</span>
											<span className="text-xs text-purple-500">return</span>
											<span className="text-xs">(</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="text-xs text-muted-foreground">6</span>
											<span className="text-xs ml-4">{"<Layout>"}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
