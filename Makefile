up:
	docker-compose up --build

down:
	docker-compose down

test:
	pnpm test

lint:
	pnpm lint

format:
	pnpm format

dev:
	pnpm dev

build:
	pnpm build:all

install:
	pnpm install