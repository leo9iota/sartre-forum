import { eq } from 'drizzle-orm';
import { Elysia, t } from 'elysia';

import { db } from '../db';
import { posts } from '../db/schema';

export const postsRouter = new Elysia({ prefix: '/posts' })
    .get('/', async () => {
        return await db.select().from(posts).all();
    })
    .get('/:slug', async ({ params: { slug } }) => {
        const post = await db.select().from(posts).where(eq(posts.slug, slug)).get();
        if (!post) return { error: 'Post not found' };
        return post;
    })
    .post(
        '/',
        async ({ body }) => {
            const [newPost] = await db
                .insert(posts)
                .values({
                    ...body,
                    id: crypto.randomUUID(),
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
                .returning();
            return newPost;
        },
        {
            body: t.Object({
                title: t.String(),
                slug: t.String(),
                content: t.String(),
                authorId: t.String(),
                published: t.Boolean()
            })
        }
    );
