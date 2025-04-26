"use client";

import { Doc } from "@/lib/docs";

interface DocsContentProps {
	doc: Doc;
}

export function DocsContent({ doc }: Readonly<DocsContentProps>) {
	return (
		<article className="max-w-3xl mx-auto">
			<div dangerouslySetInnerHTML={{ __html: doc.content }} />
		</article>
	);
}
