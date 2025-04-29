"use client";

import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface Heading {
	id: string;
	text: string;
	level: number;
}

export function TableOfContents() {
	const [headings, setHeadings] = useState<Heading[]>([]);
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		// Reset states when route changes
		setHeadings([]);

		const timeoutId = setTimeout(() => {
			const elements = Array.from(document.querySelectorAll("h2, h3"));
			setHeadings(
				elements.map((element) => ({
					id: element.id,
					text: element.textContent ?? "",
					level: Number.parseInt(element.tagName[1]),
				})),
			);

			const observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							setActiveId(entry.target.id);
						}
					}
				},
				{ rootMargin: "-100px 0% -66%", threshold: 1 },
			);

			for (const { id } of elements) {
				const element = document.getElementById(id);
				if (element) observer.observe(element);
			}

			return () => observer.disconnect();
		}, 100);

		return () => clearTimeout(timeoutId);
	}, []); // Removed pathname from dependencies since it's not directly used

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
