import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { env } from "@stackbase/shared-env";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import {
	ResponseInterceptor,
	CheckDependencies,
} from "@stackbase/shared-utils";
import { type ILogger, LOGGER_TOKEN } from "@stackbase/shared-logger";

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule, {
		bufferLogs: true,
	});

	const logger = app.get<ILogger>(LOGGER_TOKEN);
	app.useLogger(logger);

	if (env.RUNTIME_MODE === "local") {
		await CheckDependencies(app);
		const config = new DocumentBuilder()
			.setTitle("Stackbase API")
			.setDescription("The backend API for the Stackbase monorepo")
			.setVersion("1.0")
			.build();

		const document = SwaggerModule.createDocument(app, config);
		SwaggerModule.setup("docs", app, document);
		logger.log("Swagger UI available at /docs (local only)", "Bootstrap");
	} else {
		logger.log("Swagger UI is not enabled in this environment", "Bootstrap");
	}

	app.useGlobalInterceptors(new ResponseInterceptor());
	app.enableShutdownHooks();

	const port = env.PORT_BACKEND;
	await app.listen(port);
	logger.log(`Server is running at http://localhost:${port}`, "Bootstrap");
}

void bootstrap().catch((error: unknown) => {
	console.error("Failed to bootstrap application:", error);
	process.exit(1);
});
