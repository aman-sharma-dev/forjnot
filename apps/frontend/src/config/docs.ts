interface DocsConfig {
	sidebarNav: {
		title: string;
		items: {
			title: string;
			href: string;
		}[];
	}[];
}

export const docsConfig: DocsConfig = {
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs",
				},
				{
					title: "Quick Start",
					href: "/docs/getting-started",
				},
			],
		},
		{
			title: "Tooling",
			items: [
				{
					title: "CLI",
					href: "/docs/cli",
				},
				{
					title: "Linting & Formatting",
					href: "/docs/linting-formatting",
				},
			],
		},
		{
			title: "Architecture",
			items: [
				{
					title: "Monorepo",
					href: "/docs/monorepo",
				},
				{
					title: "Microservices",
					href: "/docs/microservices",
				},
			],
		},
	],
};
