"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import { config } from "../../config/env";

const navLinks = [
	{ name: "Features", href: "/#features" },
	{ name: "How It Works", href: "/#how-it-works" },
	{ name: "Docs", href: "/docs" },
	{ name: "GitHub", href: config.gitHubURL },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="fixed left-0 right-0 top-0 z-40 border-b bg-background/80 backdrop-blur-md">
			<div className="container mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2">
					<img
						src="/stackbase-logo.png"
						alt="logo"
						className="w-8 h-8 object-contain mr-2"
					/>
					<span className="text-xl font-bold">Stackbase</span>
				</Link>

				{/* Desktop navigation */}
				<nav className="hidden items-center gap-6 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							{link.name}
						</Link>
					))}
					<ThemeToggle />
					<Link
						href="/docs/getting-started"
						className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
					>
						Get Started
					</Link>
				</nav>

				{/* Mobile menu button */}
				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<button
						type="button"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
					>
						{mobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{mobileMenuOpen && (
				<div className="container mx-auto max-w-screen-xl px-4 py-4 md:hidden">
					<nav className="flex flex-col space-y-4">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-sm text-muted-foreground transition-colors hover:text-foreground"
								onClick={() => setMobileMenuOpen(false)}
							>
								{link.name}
							</Link>
						))}
						<Link
							href="#"
							className="inline-flex justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
							onClick={() => setMobileMenuOpen(false)}
						>
							Get Started
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
}
