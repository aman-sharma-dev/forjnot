import { type DynamicModule, Global, Module } from "@nestjs/common";
import { PinoLoggerService } from "./logger.service";
import { LOGGER_TOKEN } from "./logger.token";

@Global()
@Module({})
export class LoggerModule {}

export function registerLoggerModule(): DynamicModule {
	return {
		module: LoggerModule,
		providers: [
			{
				provide: LOGGER_TOKEN,
				useClass: PinoLoggerService,
			},
			{
				provide: PinoLoggerService,
				useClass: PinoLoggerService,
			},
		],
		exports: [LOGGER_TOKEN],
	};
}
