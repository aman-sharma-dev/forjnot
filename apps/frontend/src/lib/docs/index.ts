import { Doc } from "./types";
import {
	introduction,
	gettingStarted,
	cliDoc,
	lintingAndFormatting,
	monorepo,
	microservices,
} from "./content";

const docs: Doc[] = [
	introduction,
	gettingStarted,
	cliDoc,
	lintingAndFormatting,
	monorepo,
	microservices,
];

export function getAllDocs(): Doc[] {
	return docs;
}

export function getDocFromParams(slug: string): Doc | null {
	return docs.find((doc) => doc.slug === slug) || null;
}

export type { Doc } from "./types";
