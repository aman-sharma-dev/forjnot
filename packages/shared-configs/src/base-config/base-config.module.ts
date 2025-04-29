import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { BaseConfigService } from "./base-config.service";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [".env"], // resolves from monorepo root
			isGlobal: true,
		}),
	],
	providers: [BaseConfigService],
	exports: [BaseConfigService],
})
export class BaseConfigModule {}
