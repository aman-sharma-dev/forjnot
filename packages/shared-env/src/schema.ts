import { z } from "zod";

export const envSchema = z.object({
	RUNTIME_MODE: z.enum(["local", "development", "production"]).default("local"),

	PORT_BACKEND: z.coerce.number().default(8080),
	PORT_FRONTEND: z.coerce.number().default(3000),

	BACKEND_URL_LOCAL: z.string().default("http://localhost:8080"),
	BACKEND_URL_DEVELOPMENT: z.string().default("https://development-server.com"),
	BACKEND_URL_PRODUCTION: z.string().default("https://production-server.com"),

	FRONTEND_URL_LOCAL: z.string().default("http://localhost:3000"),
	FRONTEND_URL_DEVELOPMENT: z
		.string()
		.default("https://development-client.com"),
	FRONTEND_URL_PRODUCTION: z.string().default("https://production-client.com"),

	POSTGRES_URL: z.string().optional(),
	MONGO_URL: z.string().optional(),
	MONGO_DB_NAME: z.string().optional(),

	SERVER_SECRET: z.string(),
	ENCRYPTION_KEY: z.string(),

	LOG_LEVEL: z.string().default("debug"),
});
