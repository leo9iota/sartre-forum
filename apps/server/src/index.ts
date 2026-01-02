import { cors } from '@elysiajs/cors';
import { Elysia } from 'elysia';

import { postsRouter } from './routes/posts';

const app = new Elysia()
    .use(cors())
    .get('/', () => 'Hello Elysia')
    .group('/api', app => app.use(postsRouter))
    .listen(6969);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
