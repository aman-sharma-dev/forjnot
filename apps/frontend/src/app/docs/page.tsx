import { getAllDocs } from "../../lib/docs";
import DOMPurify from "isomorphic-dompurify";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const docs = getAllDocs();
	const defaultDoc = docs[0];
	return {
		title: `Stackbase | ${defaultDoc.title}`,
		description: defaultDoc.description,
		openGraph: {
			title: `Stackbase | ${defaultDoc.title}`,
			description: defaultDoc.description,
		},
		twitter: {
			title: `Stackbase | ${defaultDoc.title}`,
			description: defaultDoc.description,
		},
	};
}


export default function DocsPage() {
	const docs = getAllDocs();
	const defaultDoc = docs[0];
	const sanitizedContent = DOMPurify.sanitize(defaultDoc.content);

	return (
		<div
			className="prose dark:prose-invert"
			dangerouslySetInnerHTML={{ __html: sanitizedContent }}
		/>
	);
}
