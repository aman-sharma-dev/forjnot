import type { INestApplication } from "@nestjs/common";
import type { InstanceWrapper } from "@nestjs/core/injector/instance-wrapper";
import type { Module } from "@nestjs/core/injector/module";

export async function CheckDependencies(app: INestApplication): Promise<void> {
const modules: Map<string, Module> = (app as INestApplication & { container: { getModules: () => Map<string, Module> } }).container.getModules();

	for (const [, moduleRef] of modules) {
		for (const [key, wrapper] of moduleRef.controllers as Map<
			string,
			InstanceWrapper
		>) {
			if (wrapper.isDependencyTreeStatic?.() === false) {
				console.error(`[Controller] ${key} has unresolved dependencies.`);
			}
		}

		for (const [key, wrapper] of moduleRef.providers as Map<
			string,
			InstanceWrapper
		>) {
			if (wrapper.isDependencyTreeStatic?.() === false) {
				console.error(`[Provider] ${key} has unresolved dependencies.`);
			}
		}
	}
}
