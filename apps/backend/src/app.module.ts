import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BaseConfigModule } from "@stackbase/shared-config";
import { LoggerModule } from "@stackbase/shared-logger";

@Module({
	imports: [BaseConfigModule, LoggerModule, TerminusModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
