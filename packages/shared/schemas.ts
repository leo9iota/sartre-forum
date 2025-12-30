import { z } from 'zod';

/**
 * Schemas
 * Validation of user input
 */
export const loginSchema = z.object({
    username: z
        .string()
        .min(3, { message: 'Username must be at least 3 characters long.' })
        .max(31, { message: 'Username must be no longer than 31 characters.' })
        .regex(/^[a-zA-Z0-9_]+$/, {
            message: 'Username can contain only letters, numbers and underscores.'
        }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long.' })
        .max(255, { message: 'Password is too long.' })
});

export const signupSchema = z
    .object({
        username: z
            .string()
            .min(3, { message: 'Username must be at least 3 characters long.' })
            .max(31, { message: 'Username must be no longer than 31 characters.' })
            .regex(/^[a-zA-Z0-9_]+$/, {
                message: 'Username can contain only letters, numbers and underscores.'
            }),
        password: z
            .string()
            .min(8, { message: 'Password must be at least 8 characters long.' })
            .max(255, { message: 'Password is too long.' }),
        confirmPassword: z.string().min(1, { message: 'Please confirm your password.' })
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword']
    });

export const postSchema = z
    .object({
        title: z.string().min(3, { message: 'Title must be at least 3 characters long' }),
        url: z.preprocess(
            (val: unknown) => (val === '' ? undefined : val),
            z.string().trim().url({ message: 'URL must be a valid URL' }).optional()
        ),
        content: z.string().optional()
    })
    .refine((data: { url?: string; content?: string }) => !!data.url || !!data.content, {
        message: 'Either URL or content must be provided',
        path: ['url']
    });

export const commentSchema = z.object({
    content: z.string().min(3, { message: 'Comment must be at least 3 characters long' })
});

export const sortBySchema = z.enum(['points', 'recent']);
export const orderSchema = z.enum(['asc', 'desc']);

export const paginationSchema = z.object({
    limit: z.number({ coerce: true }).optional().default(10),
    page: z.number({ coerce: true }).optional().default(1),
    sortBy: sortBySchema.optional().default('points'),
    order: orderSchema.optional().default('desc'),
    author: z.optional(z.string()),
    site: z.string().optional()
});

// Schema for validating URL params
export const paramSchema = z.object({
    id: z.coerce.number()
});
