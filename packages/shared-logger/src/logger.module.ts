import { Global, Module } from "@nestjs/common";
import { PinoLoggerService } from "./logger.service";
import { LOGGER_TOKEN } from "./logger.token";

@Global()
@Module({
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
	exports: [LOGGER_TOKEN, PinoLoggerService],
})
export class LoggerModule {}
