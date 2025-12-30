import { z } from 'zod';

import type { orderSchema, sortBySchema } from './schemas';

// type defs, stuff that the api (server) returns to the UI (client)
export type SuccessResponse<T = void> = {
    success: true;
    message: string;
} & (T extends void ? Record<string, never> : { data: T });

export type ErrorResponse = {
    success: false;
    error: string;
    isFormError?: boolean;
};

export type Post = {
    id: number;
    title: string;
    url: string | null;
    content: string | null;
    points: number;
    createdAt: string;
    commentCount: number;
    author: {
        id: string;
        username: string;
    };
    isUpvoted: boolean;
};

export type Comment = {
    id: number;
    userId: string;
    content: string;
    points: number;
    depth: number;
    commentCount: number;
    createdAt: string;
    postId: number;
    parentCommentId: number | null;
    commentUpvotes: {
        userId: string;
    }[];
    author: {
        username: string;
        id: string;
    };
    childComments?: Comment[];
};

export type SortBy = z.infer<typeof sortBySchema>;
export type Order = z.infer<typeof orderSchema>;

export type PaginatedResponse<T> = {
    pagination: {
        page: number;
        totalPages: number;
    };
    data: T;
} & Omit<SuccessResponse, 'data'>;
