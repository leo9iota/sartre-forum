import { cache } from '@solidjs/router';

import { api } from './client';

// Cache function for fetching all posts - works on both server and client
export const getPosts = cache(async () => {
    'use server';
    const { data, error } = await api.api.posts.get();
    if (error) throw error;
    return data;
}, 'posts');

// Cache function for fetching a single post by slug
export const getPost = cache(async (slug: string) => {
    'use server';
    const { data, error } = await api.api.posts({ slug }).get();
    if (error) throw error;
    if ('error' in data) throw new Error(data.error);
    return data;
}, 'post');
