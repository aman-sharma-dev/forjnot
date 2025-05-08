import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { type HealthCheckResult } from "@nestjs/terminus";
import { DEFAULT_HELLO_RESPONSE } from "@forjnot/shared-constants";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return DEFAULT_HELLO_RESPONSE as string;
	}

	@Get("/health")
	async getHealth(): Promise<HealthCheckResult> {
		return this.appService.checkHealth();
	}
}
