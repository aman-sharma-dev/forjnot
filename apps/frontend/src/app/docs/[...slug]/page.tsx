import { notFound } from "next/navigation";
import { getDocFromParams } from "@/lib/docs";
import DOMPurify from "isomorphic-dompurify";

interface DocsPageProps {
	params: Promise<{
		slug: string[];
	}>;
}

export async function generateStaticParams() {
	return [
		{ slug: ["getting-started"] },
		{ slug: ["introduction"] },
		{ slug: ["cli"] },
		{ slug: ["linting-formatting"] },
		{ slug: ["monorepo"] },
		{ slug: ["microservices"] },
	];
}

export default async function DocsPage({ params }: Readonly<DocsPageProps>) {
	const resolvedParams = await params;
	const slugPath = resolvedParams.slug?.length
		? resolvedParams.slug.join("/")
		: "getting-started";
	const doc = getDocFromParams(slugPath);

	if (!doc) {
		notFound();
	}

	const sanitizedContent = DOMPurify.sanitize(doc.content);

	return (
		<div
			className="prose dark:prose-invert max-w-none"
			dangerouslySetInnerHTML={{ __html: sanitizedContent }}
		/>
	);
}
