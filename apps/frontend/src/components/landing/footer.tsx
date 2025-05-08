import { Linkedin, Github, BookOpen } from "lucide-react";
import Link from "next/link";
import { config } from "../../config/env";

const footerLinks = [
	{ name: "GitHub", href: config.gitHubURL, icon: Github },
	{ name: "Docs", href: "/docs", icon: BookOpen },
	{ name: "LinkedIn", href: config.linkedinURL, icon: Linkedin },
];

export default function Footer() {
	return (
		<footer className="border-t py-12">
			<div className="container mx-auto max-w-screen-xl px-4">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<div className="flex items-center">
						<img
							src="/forjnot.png"
							alt="logo"
							className="w-10 h-10 object-contain mr-2"
						/>
						<span className="text-xl font-bold">Forjnot</span>
					</div>

					<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
						{footerLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
							>
								<link.icon className="h-4 w-4" />
								{link.name}
							</Link>
						))}
					</div>

					<div className="text-sm text-muted-foreground">
						&copy; {new Date().getFullYear()} Forjnot
					</div>
				</div>
			</div>
		</footer>
	);
}
