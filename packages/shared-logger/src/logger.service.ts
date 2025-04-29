import { Injectable, type LoggerService } from "@nestjs/common";
import pino, { type Logger } from "pino";
import type { ILogger } from "./logger.interface";

@Injectable()
export class PinoLoggerService implements LoggerService, ILogger {
	private readonly logger: Logger;

	constructor() {
		this.logger = pino({
			transport: {
				target: "pino-pretty",
				options: {
					colorize: true,
					translateTime: "yyyy-mm-dd HH:MM:ss.l",
					ignore: "pid,hostname",
				},
			},
		});
	}

	log(message: string, context?: string) {
		this.logger.info({ context }, message);
	}

	error(message: string, trace?: string, context?: string) {
		this.logger.error({ context, trace }, message);
	}

	warn(message: string, context?: string) {
		this.logger.warn({ context }, message);
	}

	debug(message: string, context?: string) {
		this.logger.debug({ context }, message);
	}

	verbose(message: string, context?: string) {
		this.logger.trace({ context }, message);
	}
}
