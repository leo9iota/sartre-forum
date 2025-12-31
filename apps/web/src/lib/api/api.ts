import { queryOptions } from '@tanstack/react-query';
import { notFound } from '@tanstack/react-router';
import { hc, type InferResponseType } from 'hono/client';

import type {
    Comment,
    ErrorResponse,
    Order,
    PaginatedResponse,
    Post,
    SortBy,
    SuccessResponse
} from '@sartre/shared/types';

// Using 'any' for API client type to avoid importing server code into frontend bundle
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const client = hc<any>('/', {
    fetch: (input: RequestInfo | URL, init?: RequestInit) =>
        fetch(input, {
            ...init,
            credentials: 'include'
        })
}).api;

export const postSignup = async (username: string, password: string) => {
    try {
        const response = await fetch('/api/auth/sign-up/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email: `${username}@murderoushack.local`,
                password: password,
                name: username
            })
        });

        if (response.ok) {
            const result = await response.json();
            return {
                success: true,
                message: 'Signup successful',
                data: { username: result.user.name }
            } as SuccessResponse<{ username: string }>;
        }

        const result = await response.json();
        return {
            success: false,
            error: result.message || 'Signup failed',
            isFormError: true
        } as ErrorResponse;
    } catch (error) {
        return {
            success: false,
            error: String(error),
            isFormError: false
        } as ErrorResponse;
    }
};

export const postLogin = async (username: string, password: string) => {
    try {
        const response = await fetch('/api/auth/sign-in/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email: `${username}@murderoushack.local`,
                password: password
            })
        });

        if (response.ok) {
            const result = await response.json();
            return {
                success: true,
                message: 'Login successful',
                data: { username: result.user.name }
            } as SuccessResponse<{ username: string }>;
        }

        const result = await response.json();
        return {
            success: false,
            error: result.message || 'Login failed',
            isFormError: true
        } as ErrorResponse;
    } catch (error) {
        return {
            success: false,
            error: String(error),
            isFormError: false
        } as ErrorResponse;
    }
};

export type GetPostsSuccess = PaginatedResponse<Post[]>;
export const getPosts = async ({
    pageParam = 1,
    pagination
}: {
    pageParam: number;
    pagination: {
        sortBy?: SortBy;
        order?: Order;
        author?: string;
        site?: string;
    };
}): Promise<PaginatedResponse<Post[]>> => {
    const response = await client.posts.$get({
        query: {
            page: pageParam,
            sortBy: pagination.sortBy,
            order: pagination.order,
            author: pagination.author,
            site: pagination.site
        }
    });
    if (!response.ok) {
        const data = (await response.json()) as unknown as ErrorResponse;
        throw new Error(data.error);
    }
    const data = await response.json();
    return data as PaginatedResponse<Post[]>;
};

export const getUser = async () => {
    try {
        const response = await fetch('/api/user', {
            method: 'GET',
            credentials: 'include'
        });

        if (response.ok) {
            const result = await response.json();
            return result.data?.username || null;
        }
        return null;
    } catch (error) {
        return null;
    }
};
export const userQueryOptions = () =>
    queryOptions({
        queryKey: ['user'],
        queryFn: getUser,
        staleTime: Infinity
    });

export async function upvotePost(
    id: string
): Promise<SuccessResponse<{ count: number; isUpvoted: boolean }>> {
    const response = await (client.posts[':id'] as any).upvote.$post({
        param: {
            id
        }
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    const data = (await response.json()) as unknown as ErrorResponse;
    throw new Error(data.error);
}

export const postSubmit = async (title: string, url: string, content: string) => {
    try {
        console.log('Submitting post with data:', { title, url, content });

        // Temporary: Use manual fetch instead of Hono client
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                title,
                url,
                content
            })
        });

        console.log('Response status:', response.status);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        const data = (await response.json()) as unknown as ErrorResponse;
        return data;
    } catch (error) {
        return {
            success: false,
            error: String(error),
            isFormError: false
        } as ErrorResponse;
    }
};

export const getPost = async (id: number) => {
    const response = await client.posts[':id'].$get({
        param: {
            id: id.toString()
        }
    });
    if (response.ok) {
        const data = await response.json();
        return data as SuccessResponse<Post>;
    } else {
        if (response.status === 404) {
            throw notFound();
        }
        const data = (await response.json()) as unknown as ErrorResponse;
        throw new Error(data.error);
    }
};

export async function getComments(
    id: number,
    page: number = 1,
    limit: number = 10,
    pagination: {
        sortBy?: SortBy;
        order?: Order;
    }
): Promise<PaginatedResponse<Comment[]>> {
    const response = await client.posts[':id'].comments.$get({
        param: {
            id: id.toString()
        },
        query: {
            page: page,
            limit: limit,
            includeChildren: true,
            sortBy: pagination.sortBy,
            order: pagination.order
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data as PaginatedResponse<Comment[]>;
    } else {
        const data = (await response.json()) as unknown as ErrorResponse;
        throw new Error(data.error);
    }
}

export async function getCommentComments(
    id: number,
    page: number = 1,
    limit: number = 2
): Promise<PaginatedResponse<Comment[]>> {
    const response = await client.comments[':id'].comments.$get({
        param: {
            id: id.toString()
        },
        query: {
            page: page,
            limit: limit
        }
    });
    if (response.ok) {
        const data = await response.json();
        return data as PaginatedResponse<Comment[]>;
    } else {
        const data = (await response.json()) as unknown as ErrorResponse;
        throw new Error(data.error);
    }
}

export async function upvoteComment(
    id: string
): Promise<
    SuccessResponse<{ count: number; isUpvoted: boolean; commentUpvotes: { userId: string }[] }>
> {
    const response = await (client.comments[':id'] as any).upvote.$post({
        param: {
            id
        }
    });
    if (response.ok) {
        return await response.json();
    }
    const data = (await response.json()) as unknown as ErrorResponse;
    throw Error(data.error);
}

export async function postComment(
    id: number,
    content: string,
    isNested?: boolean
): Promise<SuccessResponse<Comment> | ErrorResponse> {
    try {
        const response = isNested
            ? await (client.comments[':id'] as any).$post({
                  json: {
                      content
                  },
                  param: {
                      id: id.toString()
                  }
              })
            : await (client.posts[':id'] as any).comment.$post({
                  json: {
                      content
                  },
                  param: {
                      id: id.toString()
                  }
              });

        if (response.ok) {
            return await response.json();
        }
        const data = (await response.json()) as unknown as ErrorResponse;
        return data;
    } catch (error) {
        return {
            success: false,
            error: String(error),
            isFormError: false
        } as ErrorResponse;
    }
}

export async function deletePost(id: number): Promise<SuccessResponse<null> | ErrorResponse> {
    try {
        const response = await (client.posts[':id'] as any).$delete({
            param: {
                id: id.toString()
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        }

        const data = (await response.json()) as unknown as ErrorResponse;
        return data;
    } catch (error) {
        return {
            success: false,
            error: String(error),
            isFormError: false
        } as ErrorResponse;
    }
}

export const postLogout = async () => {
    try {
        await fetch('/api/auth/sign-out', {
            method: 'POST',
            credentials: 'include'
        });
        return { success: true } as SuccessResponse;
    } catch (error) {
        return {
            success: false,
            error: String(error),
            isFormError: false
        } as ErrorResponse;
    }
};
