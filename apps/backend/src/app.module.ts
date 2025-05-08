import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BaseConfigModule } from "@forjnot/shared-config";
import { LoggerModule } from "@forjnot/shared-logger";

@Module({
	imports: [BaseConfigModule, LoggerModule, TerminusModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
