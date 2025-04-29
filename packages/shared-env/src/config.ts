import * as dotenv from "dotenv";
import * as fs from "node:fs";
import * as path from "node:path";
import { envSchema } from "./schema";

function findDotEnv(startPath = process.cwd()): string | undefined {
	let dir = startPath;
	while (true) {
		const envPath = path.join(dir, ".env");
		if (fs.existsSync(envPath)) {
			return envPath;
		}
		const parent = path.dirname(dir);
		if (parent === dir) break;
		dir = parent;
	}
	return undefined;
}

const envPath = findDotEnv();
if (envPath) dotenv.config({ path: envPath });
else dotenv.config(); // fallback

const parsed = envSchema.safeParse(process.env);

console.log("🌱 Raw ENV:", {
	RUNTIME_MODE: process.env.RUNTIME_MODE,
});

if (!parsed.success) {
	console.error("Invalid environment variables:", parsed.error.format());
	process.exit(1);
}

export const env = parsed.data;
