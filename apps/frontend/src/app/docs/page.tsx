import { getAllDocs } from "@/lib/docs";
import DOMPurify from "isomorphic-dompurify";

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
