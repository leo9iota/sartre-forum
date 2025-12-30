# Sartre

Sartre is a forum for discussing tech related topics.

## Tech Stack

![Tech Stack](https://go-skill-icons.vercel.app/api/icons?i=ts,react,reactquery,bun,hono,drizzle,postgres,vite,shadcn,turborepo)

## Quick Start

> You need to have [Bun](https://bun.com/docs/installation) and Docker [Docker](https://www.docker.com/) installed

1. Clone the repo

```sh
git clone https://github.com/leo9iota/sartre-forum.git && cd sartre-forum
```

2. Install dependencies

```sh
bun i
```

3. Set up .env variables

```sh
cp .env.example .env
```

4. Start postgres db with Docker

```sh
docker compose up postgres-db -d
```

5. Push db schema

```sh
bun db:push
```

6. Start dev servers (frontend + server)

```sh
bun dev
```

## Architecture

![Architecture](./docs/images/sartre-architecture.png)
![Auth](./docs/images/sartre-auth.png)

## Features

- Paginated queries with [InfiniteQueries](https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries)
- Caching and cache-control
- Optimistic updates
