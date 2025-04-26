"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Heading {
	id: string;
	text: string;
	level: number;
}

export function TableOfContents() {
	const [headings, setHeadings] = useState<Heading[]>([]);
	const [activeId, setActiveId] = useState<string>("");
	const pathname = usePathname();

	useEffect(() => {
		// Reset states when route changes
		setHeadings([]);
		setActiveId("");

		// Wait for content to be rendered
		setTimeout(() => {
			const elements = Array.from(
				document.querySelectorAll(".prose h2, .prose h3"),
			)
				.filter((element) => element.id && element.textContent)
				.map((element) => ({
					id: element.id,
					text: element.textContent ?? "",
					level: Number(element.tagName.charAt(1)),
				}));
			setHeadings(elements);

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setActiveId(entry.target.id);
						}
					});
				},
				{ rootMargin: "-100px 0% -66%", threshold: 1 },
			);

			elements.forEach(({ id }) => {
				const element = document.getElementById(id);
				if (element) observer.observe(element);
			});

			return () => observer.disconnect();
		}, 100);
	}, [pathname]); // Re-run when route changes

	if (headings.length === 0) {
		return null;
	}

	return (
		<nav className="space-y-1">
			{headings.map((heading) => (
				<a
					key={heading.id}
					href={`#${heading.id}`}
					className={cn(
						"block text-sm py-1 text-muted-foreground hover:text-foreground transition-colors",
						heading.level === 3 && "pl-4",
						activeId === heading.id && "text-foreground font-medium",
					)}
					onClick={(e) => {
						e.preventDefault();
						document.querySelector(`#${heading.id}`)?.scrollIntoView({
							behavior: "smooth",
						});
					}}
				>
					{heading.text}
				</a>
			))}
		</nav>
	);
}
