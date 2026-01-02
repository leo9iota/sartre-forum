import { db } from './db';
import { posts, users } from './db/schema';

const main = async () => {
    try {
        console.log('Seeding...');

        await db
            .insert(users)
            .values({
                id: 'user_1',
                name: 'Jean-Paul Sartre',
                email: 'sartre@existentialism.com',
                createdAt: new Date(),
                updatedAt: new Date()
            })
            .onConflictDoNothing();

        await db
            .insert(posts)
            .values({
                id: 'post_1',
                title: 'Existentialism is a Humanism',
                slug: 'existentialism-is-a-humanism',
                content:
                    'Man is condemned to be free; because once thrown into the world, he is responsible for everything he does. It is up to you to give [life] a meaning.',
                authorId: 'user_1',
                published: true,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            .onConflictDoNothing();

        console.log('Seeded successfully');
    } catch (e) {
        console.error('Seeding failed', e);
    }
};

main();
