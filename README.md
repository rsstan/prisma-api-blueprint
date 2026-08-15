# PRISMA-API-BLUEPRINT

This repo implements the same Express REST API using different architectural approaches, and also serves as a step-by-step template for setting up a Node.js + Express + Prisma project from scratch.

### Tech Stack

- Node.js
- TypeScript
- Express
- PostrgeSQL
- Prisma
- ESLint

## Architecture Implementations

Each architecture is implemented in a separate Git branch.

| Branch | Apporach | Docs |
|---|---|---|
| `layered-architecture` | Layered Architecture | [docs/layered-architecture.md](docs/layered-architecture.md) |
| `clean-architecture` | Clean Architecture | [docs/clean-architecture.md](docs/clean-architecture.md) |
| `hexagonal-architecture` | Hexagonal Architecture / Ports & Adapters | [docs/hexagonal-architecture.md](docs/hexagonal-architecture.md) |

The implementations should expose approximately the same REST API and use the same domain model. This makes it possible to compare how the same requirements are implemented using different architectural approaches.

## Project Setup

#### 1. Install Dependencies

```bash
npm install
```
Runtime dependencies:

```bash
npm install \
  express \
  @prisma/client \
  @prisma/adapter-pg \
  pg \
  dotenv
```

Development dependencies:

```bash
npm install -D \
  typescript \
  tsx \
  prisma \
  @types/node \
  @types/express \
  @types/pg
```

#### 2. Configure TypeScript

Generate a base config:
```bash
npx tsc --init
```

For a modern Node.js setup, you can start with something like this `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "target": "ES2022",            // Compile to modern JS syntax (supported by current Node.js versions)
    "module": "NodeNext",          // Use Node.js' native ESM/CJS module system
    "moduleResolution": "NodeNext",// Resolve modules the same way Node.js does

    "rootDir": "./src",            // Source files live here
    "outDir": "./dist",            // Compiled output goes here

    "strict": true,                // Enable all strict type-checking options
    "esModuleInterop": true,       // Allow default imports from CommonJS modules
    "skipLibCheck": true,          // Skip type-checking of .d.ts files (faster builds)

    "sourceMap": true              // Generate source maps for easier debugging
  },

  "include": ["src/**/*.ts"]       // Only compile files inside src/
}
```

In `package.json`, add:
```json
{
  "type": "module"
}
```

and the scripts:
```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

#### 3. Configure Environment Variables

If `npx prisma init` already created a `.env` file, just update the values inside it. Otherwise, copy the example file:
```bash
cp .env.example .env
```

Example:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/prisma_layered_api"
PORT=3000
```

#### 4. Initialize Prisma

```bash
npx prisma init
```

#### 5. Apply Database Migrations

First time:

```bash
npx prisma migrate dev
```

OR when creating a new migration after changing `schema.prisma`:

```bash
npx prisma migrate dev --name <migration-name>
```

For example:

```bash
npx prisma migrate dev --name add-post-status
```

#### 6. Generate Prisma Client

```bash
npx prisma generate
```

## Running the Application

### Development

```bash
npm run dev
```

### Build

Compile TypeScript:

```bash
npm run build
```

Run Compiled Application

```bash
npm start
```

## ESLint

Install:

```bash
npm install --save-dev eslint @eslint/js typescript typescript-eslint
```

Initialize ESLint Configuration:

```bash
npx eslint --init
```

Configure ESLint Scripts:

```json
{
    "scripts": {
        "lint": "eslint src --ext .ts",
        "lint:fix": "eslint src --ext .ts --fix"
    }
}
```

Running ESLint Manually:

```bash
# Run ESLint to check for errors
npm run lint
 
# Run ESLint to check and fix fixable errors
npm run lint:fix
```
