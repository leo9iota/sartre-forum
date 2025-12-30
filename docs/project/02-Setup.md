# Setup

Guide for setting up the project. You need Docker and Bun.

---
## Steps (dev)

1. Install Bun if not already installed

```sh
curl -fsSL https://bun.sh/install | sh
```

2. Clone the repo

```sh
git clone https://github.com/leo9iota/sartre-forum.git
cd sartre-forum
```

3. Install dependencies

```sh
bun install
```

4. Set up .env variables

```sh
cp .env.example .env
```

5. Start postgres db with Docker

```sh
docker compose up postgres-db -d
```

6. Push db schema

```sh
bun db:push
```

7. Start dev servers (frontend + server)

```sh
bun dev
```

---
### Steps (prod)

1. Set up .env variables

```sh
cp .env.example .env
```

2. Build and start all services

```sh
docker compose up --build
```

The command above will do the following stuff:
1. It builds the Docker img
2. It starts the Postgres DB
3. It runs the server
4. The app runs on http://localhost:3000

---
### Stopping Services

Local dev, press `CTRL` + `C` to stop the dev server and run the command below

```sh
docker compose down
```

Full Docker

```sh
docker compose down
```

remove volumes (database data)

```sh
docker compose down -v
```

---
### Common Commands

start dev servers

```sh
bun dev
```

build all apps

```sh
bun build
```

lint all code

```sh
bun lint
```

format all code

```sh
bun format
```

type check all code

```sh
bun type
```

push db schema changes

```sh
bun db:push
```

generate db migrations

```sh
bun db:gen
```

run db migrations

```sh
bun db:mig
```

### Notes

Ensure postgres db is running with this command

```sh
docker compose ps
```
