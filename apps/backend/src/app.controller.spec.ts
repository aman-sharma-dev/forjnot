import { Test, type TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DEFAULT_HELLO_RESPONSE } from "@stackbase/shared-constants";

describe("AppController", () => {
	let appController: AppController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService],
		}).compile();

		appController = app.get<AppController>(AppController);
	});

	describe("root", () => {
		it('should return "Hello World!"', () => {
			expect(appController.getHello()).toBe(DEFAULT_HELLO_RESPONSE);
		});
	});
});
