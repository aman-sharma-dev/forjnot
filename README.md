███████╗████████╗ █████╗  ██████╗██╗  ██╗██████╗  █████╗ ███████╗███████╗
██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝
███████╗   ██║   ███████║██║     █████╔╝ ██████╔╝███████║███████╗█████╗  
╚════██║   ██║   ██╔══██║██║     ██╔═██╗ ██╔══██╗██╔══██║╚════██║██╔══╝  
███████║   ██║   ██║  ██║╚██████╗██║  ██╗██████╔╝██║  ██║███████║███████╗
╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
                                                                         


## 🧠 One-liner
> A battle-tested monorepo starter with **NestJS**, **Next.js**, and **TurboRepo** — made for real-world scaling, not toy projects.

---

## 🚀 Why Stackbase?

**Stackbase** is for serious developers who want to:

- Quickly start a monorepo project with precision.
- Use **NestJS** for the backend (modular, scalable).
- Use **Next.js** with SSG ready (or replace it anytime).
- Add unlimited microservices painlessly.
- Skip the hassle of stripping someone else's bloatware.

This is not a cookie-cutter starter. Every folder and config is handpicked with care.

---

## 📁 Project Structure

apps/
├── backend # NestJS API
└── frontend # Next.js app

packages/
├── shared-configs/         # Shared configurations
├── shared-constants/       # Shared constants
├── shared-dtos/            # Shared DTOs
├── shared-env/             # Environment configuration
├── shared-logger/          # Shared logger
├── shared-types/           # Shared TypeScript types
└── shared-utils/           # Shared utilities

Root Files:
.editorconfig
.gitignore
.env.example
biome.json
docker-compose.yml
makefile
package.json
pnpm-workspace.yaml
tsconfig.json / tsconfig.base.json
turbo.json

---

## 🛠️ CLI Support

Easily scaffold backend modules and folders:

```bash
pnpm cli help
📦 Install & Dev
bash
Copy
Edit
# Install all dependencies
pnpm install

# Run frontend
pnpm run client

# Run backend
pnpm run server
📦 Build Everything
bash
Copy
Edit
pnpm run build:all
🐳 Docker & Deployment
Docker config is present (docker-compose.yml), though not production-tested yet. PM2 is not included, but Vercel deployment is verified for frontend.

🧪 Tools & Tech Stack
🏗️ NestJS

💨 Next.js (SSG-ready)

🧪 Swagger (auto-generated docs)

🧩 TurboRepo

🐙 pnpm

🔧 Biome (lint + format)

🐳 Docker (basic setup)

⚙️ Makefile

✨ Linting & Formatting
bash
Copy
Edit
pnpm run lint
pnpm run format
🧾 License
This project is licensed under the MIT License — feel free to use and modify it.

🤝 Contributing
Open to contributions — bug fixes, improvements, or new ideas.
Stackbase is already powerful, but there’s always room for growth.
Feel free to explore and help shape it further.

🧭 Final Words
Stackbase isn’t bloated, it’s not overdone, and it’s not meant to impress.
It’s built to scale hard, start clean, and grow fast — just like real teams need.

Use it. Fork it. Break it. Improve it.
Stackbase is your foundation.