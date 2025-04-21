import { Injectable } from "@nestjs/common";

@Injectable()
export class BaseConfigService {
	get(key: string, defaultValue?: string): string {
		const value = process.env[key];
		if (value === undefined || value === null) {
			if (defaultValue !== undefined) return defaultValue;
			throw new Error(`Missing environment variable: ${key}`);
		}
		return value;
	}

	getNumber(key: string, defaultValue?: number): number {
		const val = this.get(key, defaultValue?.toString());
		const parsed = Number(val);
		if (Number.isNaN(parsed))
			throw new Error(`Invalid number for env var: ${key}`);
		return parsed;
	}

	getBoolean(key: string, defaultValue = false): boolean {
		const val = this.get(key, defaultValue ? "true" : "false").toLowerCase();
		return val === "true";
	}
}
