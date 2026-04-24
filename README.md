# Next.js Boilerplate

This repository is a starter for a Next.js app with these pieces already wired in:

- Next.js 16 with the App Router
- TypeScript
- Prisma
- Better Auth
- next-intl
- Tailwind CSS
- ESLint + Prettier + Husky
- Shadcn UI components
- Docker Compose setup for PostgreSQL
- Login and registration pages
- Project structure with clear separation of concerns

## Prerequisites

Install these tools before starting:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) 20 or newer
- [pnpm](https://pnpm.io/installation)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) or another Docker environment with Docker Compose support

Check that they are available:

```bash
git --version
node --version
pnpm --version
docker --version
docker compose version
```

<hr>

# Getting Started

## 1. Click the "Use this template" button to create your own copy.

## 2. Clone Your Remote Repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

## 3. Install Dependencies

```bash
pnpm install
```

## 4. Create Your Environment File

Create a `.env` file from `.env.example`.

```bash
cp .env.example .env
```

Notes:

- `BETTER_AUTH_URL` should be `http://localhost:3000` for local development.
- `BETTER_AUTH_SECRET` must be at least 32 characters long.
- The database values in `.env` are also used by `compose.yaml` to boot the PostgreSQL container.

If you want to generate a secret with Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 5. Start PostgreSQL

```bash
# To start the database:
pnpm db:up
```

```bash
# To stop the database:
pnpm db:down
```

```bash
# To stop the database and remove all data:
pnpm db:nuke
```

```bash
# To view database logs:
pnpm db:logs
```

## 6. Initialize The Database

After the database is running, apply the Prisma schema and auth tables:

```bash
pnpm prisma migrate dev --name init
pnpm prisma generate
```

## 7. Run The App

Start the development server:

```bash
pnpm dev
```
