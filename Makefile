up:
	docker-compose up --build

down:
	docker-compose down

test:
	pnpm --filter backend test

lint:
	pnpm lint
	
lint-fix:
	pnpm lint --fix