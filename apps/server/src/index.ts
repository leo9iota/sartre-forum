import { cors } from '@elysiajs/cors';
import { Elysia } from 'elysia';

import { auth } from './lib/auth';
import { postsRouter } from './routes/posts';

const app = new Elysia()
    .use(
        cors({
            origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            credentials: true,
            allowedHeaders: ['Content-Type', 'Authorization']
        })
    )
    .mount(auth.handler)
    .get('/', () => 'Hello Elysia')
    .group('/api', app => app.use(postsRouter))
    .listen(6969);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
