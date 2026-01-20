import { For, Show, Suspense } from 'solid-js';

import { createAsync } from '@solidjs/router';
import type { RouteDefinition } from '@solidjs/router';

import { Button } from '@/components/ui/button/button';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';

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
      <Text variant='h1' class={styles.title}>
        Sartre Blog
      </Text>

      <div class={styles.section}>
        <Text variant='h2'>Interactive Components</Text>

        <div class={styles.flexRow}>
          <Button onClick={() => alert('Button Clicked!')}>Primary Button</Button>
          <Button variant='outline'>Secondary</Button>
          <Button loading>Loading</Button>
        </div>

        <div class={styles.flexRow}>
          <Text variant='label'>Toggle Feature</Text>
          <Switch defaultChecked />
        </div>
      </div>

      <div class={styles.postGrid}>
        <Text variant='h2'>Latest Posts</Text>
        <Suspense fallback={<Text color='muted'>Loading posts...</Text>}>
          <Show when={posts()} fallback={<Text color='muted'>No posts found.</Text>}>
            {postList => (
              <div class={styles.postGrid}>
                <For each={postList()}>
                  {post => (
                    <article class={styles.postCard}>
                      <a href={`/posts/${post.slug}`} class={styles.postLink}>
                        <Text variant='h4' class={styles.postTitle}>
                          {post.title}
                        </Text>
                        <Text variant='body-sm' color='muted' class={styles.postSnippet}>
                          {post.content}
                        </Text>
                        <Text variant='caption' class={styles.postDate}>
                          {new Date(post.createdAt).toLocaleDateString()}
                        </Text>
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
