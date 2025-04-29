"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { docsConfig } from "../../config/docs";

export function DocsSidebar() {
	const pathname = usePathname();

	return (
		<div className="space-y-6">
			{docsConfig.sidebarNav.map(
				(section: {
					title: string;
					items: { href: string; title: string }[];
				}) => (
					<div key={section.title} className="space-y-3">
						<h4 className="font-semibold text-sm tracking-wider uppercase text-muted-foreground">
							{section.title}
						</h4>
						<div className="space-y-1">
							{section.items.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										"block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
										pathname === item.href
											? "bg-primary/5 font-medium text-primary"
											: "text-muted-foreground hover:text-foreground",
									)}
								>
									{item.title}
								</Link>
							))}
						</div>
					</div>
				),
			)}
		</div>
	);
}
