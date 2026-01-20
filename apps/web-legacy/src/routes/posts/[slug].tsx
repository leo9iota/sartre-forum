import { Show, Suspense } from 'solid-js';

import { Title } from '@solidjs/meta';
import { createAsync, useParams } from '@solidjs/router';
import type { RouteDefinition } from '@solidjs/router';

import { getPost } from '@/lib/api/posts';

// Preload data during route navigation
export const route = {
  load: ({ params }) => getPost(params.slug ?? '')
} satisfies RouteDefinition;

export default function PostDetail() {
  const params = useParams();
  const post = createAsync(() => getPost(params.slug ?? ''));

  return (
    <main class='container mx-auto p-4 max-w-3xl'>
      <Suspense fallback={<div>Loading...</div>}>
        <Show when={post()} fallback={<div>Post not found</div>}>
          {p => (
            <>
              <Title>{p().title} | Sartre</Title>
              <article class='prose lg:prose-xl mx-auto'>
                <h1 class='text-4xl font-bold mb-4'>{p().title}</h1>
                <div class='text-gray-500 mb-8 text-sm'>
                  By Author • {new Date(p().createdAt).toLocaleDateString()}
                </div>
                <div class='whitespace-pre-wrap leading-relaxed'>{p().content}</div>
              </article>
            </>
          )}
        </Show>
      </Suspense>
    </main>
  );
}
