# Manual Scaffolding Guide

Follow these steps to set up your Turborepo with SolidStart and Elysia.

## Prerequisites

Ensure usage of `bun` (v1.1+).

## Phase 1: Initialize Root & Turbo

1.  **Initialize Git and Package.json**

    ```bash
    git init
    bun init -y
    ```

2.  **Update `package.json`** to be a Monorepo root. Replace content with:

    ```json
    {
      "name": "sartre-monorepo",
      "private": true,
      "workspaces": ["apps/*", "packages/*"],
      "scripts": {
        "build": "turbo run build",
        "dev": "turbo run dev",
        "lint": "turbo run lint",
        "format": "prettier --write \"**/*.{ts,tsx,md}\""
      },
      "devDependencies": {
        "turbo": "^2.0.0",
        "typescript": "^5.0.0",
        "prettier": "^3.0.0"
      }
    }
    ```

3.  **Create `turbo.json`**

    ```json
    {
      "$schema": "https://turbo.build/schema.json",
      "tasks": {
        "build": {
          "dependsOn": ["^build"],
          "outputs": ["dist/**", ".output/**", ".vinxi/**"]
        },
        "lint": {},
        "dev": {
          "cache": false,
          "persistent": true
        }
      }
    }
    ```

4.  **Create Directories**
    ```bash
    mkdir -p apps/web apps/server packages/ui packages/db
    ```

## Phase 2: Scaffold `apps/server` (Elysia)

1.  **Navigate to server folder**

    ```bash
    cd apps/server
    bun init -y
    ```

2.  **Install Dependencies**

    ```bash
    bun add elysia better-auth drizzle-orm @libsql/client
    bun add -d drizzle-kit bun-types
    ```

3.  **Create `src/index.ts`**

    ```typescript
    import { Elysia } from "elysia";

    const app = new Elysia().get("/", () => "Hello Elysia").listen(3001);

    console.log(
      `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
    );
    ```

4.  **Update `apps/server/package.json` scripts**
    ```json
    "scripts": {
      "dev": "bun run --watch src/index.ts",
      "build": "bun build src/index.ts --outdir dist --target bun"
    }
    ```

## Phase 3: Scaffold `apps/web` (SolidStart)

1.  **Navigate to web folder**

    ```bash
    cd ../web
    ```

    _(Tip: You might want to use the starter template here to save time, but to do it manually:)_

2.  **Install Dependencies**

    ```bash
    bun add solid-js solid-js/web firebase # (if needed)
    # Actually, for SolidStart + TanStack, it's best to use the starter:
    # bun create solid
    # (Select "bare" or "typescript")
    ```

    **Preferred Manual Install:**

    ```bash
    bun add @solidjs/start @solidjs/router @tanstack/solid-query @tanstack/solid-router vinxi
    bun add -d @types/node
    ```

3.  **Configure `app.config.ts`**

    ```typescript
    import { defineConfig } from "@solidjs/start/config";

    export default defineConfig({});
    ```

4.  **Update `apps/web/package.json` scripts**
    ```json
    "scripts": {
      "dev": "vinxi dev",
      "build": "vinxi build",
      "start": "vinxi start"
    }
    ```

## Phase 4: Install & Run

1.  **Return to Root and Install**

    ```bash
    cd ../..
    bun install
    ```

2.  **Run Everything**
    ```bash
    bun run dev
    ```
