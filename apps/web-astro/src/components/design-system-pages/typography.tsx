import { Text } from '@/components/ui/text';

import * as styles from './typography.css';

export default function TypographyPage() {
  return (
    <div class={styles.container}>
      <Text variant="h1">Typography</Text>
      <Text variant="lead">
        A showcase of all typography variants available in the design system.
      </Text>

      {/* Headings Section */}
      <section class={styles.section}>
        <Text variant="h2">Headings</Text>
        <Text variant="body" color="muted">
          Headings use the Space Grotesk font family for a distinctive look.
        </Text>

        <div class={styles.showcase}>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              h1 — 2.25rem / bold
            </Text>
            <Text variant="h1">The quick brown fox</Text>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              h2 — 1.875rem / bold
            </Text>
            <Text variant="h2">The quick brown fox</Text>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              h3 — 1.5rem / semibold
            </Text>
            <Text variant="h3">The quick brown fox</Text>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              h4 — 1.25rem / semibold
            </Text>
            <Text variant="h4">The quick brown fox</Text>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              h5 — 1.125rem / medium
            </Text>
            <Text variant="h5">The quick brown fox</Text>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              h6 — 1rem / medium
            </Text>
            <Text variant="h6">The quick brown fox</Text>
          </div>
        </div>
      </section>

      {/* Body Text Section */}
      <section class={styles.section}>
        <Text variant="h2">Body Text</Text>
        <Text variant="body" color="muted">
          Body text uses the Inter font family for optimal readability.
        </Text>

        <div class={styles.showcase}>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              body-lg — 1.125rem
            </Text>
            <Text variant="body-lg">
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
            </Text>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              body — 1rem (default)
            </Text>
            <Text variant="body">
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
            </Text>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              body-sm — 0.875rem
            </Text>
            <Text variant="body-sm">
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
            </Text>
          </div>
        </div>
      </section>

      {/* Supporting Text Section */}
      <section class={styles.section}>
        <Text variant="h2">Supporting Text</Text>

        <div class={styles.showcase}>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              lead — 1.25rem / muted
            </Text>
            <Text variant="lead">
              A lead paragraph is used to introduce content with slightly larger, muted text.
            </Text>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              caption — 0.75rem
            </Text>
            <Text variant="caption">
              Captions are used for small supporting text like image descriptions.
            </Text>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              label — 0.875rem / medium
            </Text>
            <Text variant="label">Form field label</Text>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              code — monospace
            </Text>
            <Text variant="code">const greeting = "Hello, World!";</Text>
          </div>
        </div>
      </section>

      {/* Modifiers Section */}
      <section class={styles.section}>
        <Text variant="h2">Modifiers</Text>
        <Text variant="body" color="muted">
          Variants can be combined with modifiers for additional customization.
        </Text>

        <div class={styles.showcase}>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              Colors
            </Text>
            <div class={styles.row}>
              <Text variant="body">Default</Text>
              <Text variant="body" color="muted">
                Muted
              </Text>
              <Text variant="body" color="primary">
                Primary
              </Text>
            </div>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              Weights
            </Text>
            <div class={styles.row}>
              <Text variant="body" weight="normal">
                Normal
              </Text>
              <Text variant="body" weight="medium">
                Medium
              </Text>
              <Text variant="body" weight="semibold">
                Semibold
              </Text>
              <Text variant="body" weight="bold">
                Bold
              </Text>
            </div>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              Alignment
            </Text>
            <div class={styles.alignDemo}>
              <Text variant="body" align="left">
                Left aligned
              </Text>
              <Text variant="body" align="center">
                Center aligned
              </Text>
              <Text variant="body" align="right">
                Right aligned
              </Text>
            </div>
          </div>
          <div class={styles.item}>
            <Text variant="caption" color="muted">
              Truncation
            </Text>
            <div class={styles.truncateDemo}>
              <Text variant="body" truncate>
                This is a very long text that will be truncated with an ellipsis when it overflows
                the container width.
              </Text>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
