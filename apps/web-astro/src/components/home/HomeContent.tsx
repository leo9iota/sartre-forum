import { For, Show } from 'solid-js';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';

import * as styles from '@/pages/homepage.css.ts';

interface Post {
  slug: string;
  title: string;
  content: string;
  createdAt: string | Date;
}

interface HomeContentProps {
  posts: Post[] | null | undefined;
}

export function HomeContent(props: HomeContentProps) {
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

        <Show
          when={props.posts && props.posts.length > 0}
          fallback={<Text color='muted'>No posts found.</Text>}
        >
          <div class={styles.postGrid}>
            <For each={props.posts}>
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
        </Show>
      </div>
    </main>
  );
}
