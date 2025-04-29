import { Navbar, Footer } from "../../components/landing";
import { DocsSidebar } from "../../components/docs/docs-sidebar";
import { TableOfContents } from "../../components/docs/table-of-contents";

export default function DocsLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<div className="flex-1 pt-16">
				<div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 py-8">
					<aside className="w-full md:w-64 lg:w-72 shrink-0">
						<div className="sticky top-24">
							<DocsSidebar />
						</div>
					</aside>
					<main className="flex-1 min-w-0 overflow-hidden">
						<div className="max-w-3xl mx-auto">{children}</div>
					</main>
					<aside className="hidden xl:block w-64 shrink-0">
						<div className="sticky top-24 pl-6">
							<h4 className="font-medium mb-4">On This Page</h4>
							<TableOfContents />
						</div>
					</aside>
				</div>
			</div>
			<Footer />
		</div>
	);
}
