import { For, Show, Suspense } from 'solid-js';

import { createAsync } from '@solidjs/router';
import type { RouteDefinition } from '@solidjs/router';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

import { getPosts } from '@/lib/api/posts';

import * as styles from './index.css';

// Preload data during route navigation
export const route = {
  load: () => getPosts()
} satisfies RouteDefinition;

export default function Home() {
  const posts = createAsync(() => getPosts());

  return (
    <main class={styles.main}>
      <h1 class={styles.title}>Sartre Blog</h1>

      <div class={styles.section}>
        <h2 class={styles.sectionTitle}>Interactive Components</h2>

        <div class={styles.flexRow}>
          <Button onClick={() => alert('Button Clicked!')}>Primary Button</Button>
          <Button variant='outline'>Secondary</Button>
          <Button loading>Loading</Button>
        </div>

        <div class={styles.flexRow}>
          <span class={styles.label}>Toggle Feature</span>
          <Switch defaultChecked />
        </div>
      </div>
      <div class={styles.postGrid}>
        <h2 class={styles.sectionTitle}>Latest Posts</h2>
        <Suspense fallback={<div>Loading posts...</div>}>
          <Show when={posts()} fallback={<div>No posts found.</div>}>
            {postList => (
              <div class={styles.postGrid}>
                <For each={postList()}>
                  {post => (
                    <article class={styles.postCard}>
                      <a href={`/posts/${post.slug}`} class={styles.postLink}>
                        <h3 class={styles.postTitle}>{post.title}</h3>
                        <p class={styles.postSnippet}>{post.content}</p>
                        <div class={styles.postDate}>
                          {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                      </a>
                    </article>
                  )}
                </For>
              </div>
            )}
          </Show>
        </Suspense>
      </div>
    </main>
  );
}
