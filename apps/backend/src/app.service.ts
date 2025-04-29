import { Injectable } from "@nestjs/common";
import {
	HealthCheckService,
	HealthCheck,
	DiskHealthIndicator,
	MemoryHealthIndicator,
	type HealthCheckResult,
} from "@nestjs/terminus";
import * as os from "node:os";
import * as path from "node:path";

@Injectable()
export class AppService {
	constructor(
		private readonly health: HealthCheckService,
		private readonly disk: DiskHealthIndicator,
		private readonly memory: MemoryHealthIndicator,
	) {}

	@HealthCheck()
	async checkHealth(): Promise<HealthCheckResult> {
		const rootPath = path.parse(os.homedir()).root;
		return this.health.check([
			() =>
				this.disk.checkStorage("disk", {
					path: rootPath,
					thresholdPercent: 0.9,
				}),
			() => this.memory.checkHeap("memory_heap", 150 * 1024 * 1024),
			() => this.memory.checkRSS("memory_rss", 150 * 1024 * 1024),
		]);
	}
}
