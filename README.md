# Next.js Boilerplate

This repository is a starter for a Next.js app with these pieces already wired in:

- Next.js 16 with the App Router
- TypeScript
- Prisma + PostgreSQL
- Better Auth
- next-intl
- Tailwind CSS
- ESLint + Prettier + Husky

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

## 1. Fork The Repository

## 2. Clone Your Fork

## 3. Install Dependencies

```bash
pnpm install
```

## 4. Create Your Environment File

Create a `.env` file from `.env.example`.

macOS/Linux:

```bash
cp .env.example .env
```

```env
# Database configuration
DB_USER=postgres
DB_PASSWORD=postgres123
DB_HOST=localhost
DB_PORT=5432
DB_NAME=next_boilerplate

# Better Auth configuration
BETTER_AUTH_SECRET=replace-this-with-a-long-random-secret
BETTER_AUTH_URL=http://localhost:3000

# App State
NODE_ENV=development
```

Notes:

- `BETTER_AUTH_URL` should be `http://localhost:3000` for local development.
- `BETTER_AUTH_SECRET` must be at least 16 characters long.
- The database values in `.env` are also used by `compose.yaml` to boot the PostgreSQL container.

If you want to generate a secret with Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 5. Start PostgreSQL

This project includes a Docker Compose file for PostgreSQL.

```bash
docker compose up -d
```

To stop the database later:

```bash
docker compose down
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

Open [http://localhost:3000](http://localhost:3000).
