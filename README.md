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

1. Open this repository on GitHub.
2. Click **Fork**.
3. Create the fork in your own GitHub account.

## 2. Clone Your Fork

Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY_NAME` with your values:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

If you use SSH:

```bash
git clone git@github.com:YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

## 3. Install Dependencies

This project uses `pnpm`.

```bash
pnpm install
```

## 4. Create Your Environment File

Create a `.env` file from `.env.example`.

macOS/Linux:

```bash
cp .env.example .env
```

PowerShell:

```powershell
Copy-Item .env.example .env
```

Command Prompt:

```cmd
copy .env.example .env
```

Then update `.env` with your local values.

Example:

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
pnpm prisma db push
pnpm run auth:migrate
```

If you want to inspect the database in a UI:

```bash
pnpm run db:studio
```

## 7. Run The App

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## One-Time Setup Summary

If you prefer the short version, the full setup flow is:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
pnpm install
cp .env.example .env
# edit .env
docker compose up -d
pnpm prisma db push
pnpm run auth:migrate
pnpm dev
```

On Windows, replace the `cp` step with `Copy-Item .env.example .env` in PowerShell or `copy .env.example .env` in Command Prompt.

## Available Scripts

```bash
pnpm dev          # start Next.js in development
pnpm build        # production build
pnpm start        # run the production build
pnpm lint         # run ESLint
pnpm format       # run Prettier
pnpm run db:up    # start the database container
pnpm run db:down  # stop the database container
pnpm run db:push  # push the Prisma schema to the database
pnpm run db:studio
pnpm run auth:migrate
```

## Troubleshooting

### Port 5432 is already in use

Change `DB_PORT` in `.env` to a free port, then restart the database:

```bash
docker compose down
docker compose up -d
```

### The app fails because environment variables are missing

Make sure `.env` exists and every field from `.env.example` has a value.

### `pnpm run db:up` does not work on your machine

The package script uses `docker-compose`. If your Docker setup only supports `docker compose`, run this directly instead:

```bash
docker compose up -d
```

### The bundled `setup` script does not work on Windows

The `setup` script uses `cp`, which works in macOS, Linux, and Git Bash, but not in a default Windows shell. Use the step-by-step commands from this README instead.
