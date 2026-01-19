import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
    // TODO: Integrate Better Auth
    console.log(`[Middleware] Request: ${context.request.url}`);
    return next();
});
