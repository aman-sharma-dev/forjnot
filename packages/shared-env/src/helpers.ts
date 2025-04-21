import { RuntimeMode } from "./constants";

export function resolveBackendURL(mode: RuntimeMode, port: number): string {
	switch (mode) {
		case RuntimeMode.DEVELOPMENT:
			return process.env.DEV_BACKEND_URL ?? "";
		case RuntimeMode.PRODUCTION:
			return process.env.PROD_BACKEND_URL ?? "";
		default:
			return process.env.LOCAL_BACKEND_URL ?? `http://localhost:${port}`;
	}
}

export function resolveFrontendURL(mode: RuntimeMode, port: number): string {
	switch (mode) {
		case RuntimeMode.DEVELOPMENT:
			return process.env.DEV_FRONTEND_URL ?? "";
		case RuntimeMode.PRODUCTION:
			return process.env.PROD_FRONTEND_URL ?? "";
		default:
			return process.env.LOCAL_FRONTEND_URL ?? `http://localhost:${port}`;
	}
}
