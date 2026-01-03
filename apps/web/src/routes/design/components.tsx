import { createSignal } from 'solid-js';

import { css } from '@styled-system/css';

import { Button } from '@/components/ui/button';
import { ComponentCard, Section } from '@/components/design/component-card';
import { DesignLayout } from '@/components/design/design-layout';

export default function ComponentsPage() {
  const [switchValue, setSwitchValue] = createSignal(false);

  return (
    <DesignLayout
      title='Components'
      description='Interactive component gallery showcasing Park UI components.'
    >
      <Section title='Buttons'>
        <ComponentCard title='Button Variants' description='Different visual styles for buttons.'>
          <Button variant='solid'>Solid</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='link'>Link</Button>
        </ComponentCard>

        <div class={css({ mt: '4' })}>
          <ComponentCard title='Button Sizes' description='Available size options.'>
            <Button size='xs'>Extra Small</Button>
            <Button size='sm'>Small</Button>
            <Button size='md'>Medium</Button>
            <Button size='lg'>Large</Button>
            <Button size='xl'>Extra Large</Button>
          </ComponentCard>
        </div>
      </Section>

      <Section title='Form Controls'>
        <ComponentCard title='Input' description='Text input field with various states.'>
          <div class={css({ display: 'flex', flexDir: 'column', gap: '4', w: 'full', maxW: 'sm' })}>
            <input
              type='text'
              placeholder='Default input'
              class={css({
                w: 'full',
                h: '10',
                px: '3',
                borderWidth: '1px',
                rounded: 'md',
                bg: 'bg.default',
                _focus: { outline: '2px solid', outlineColor: 'accent.default', outlineOffset: '0' }
              })}
            />
            <input
              type='text'
              placeholder='Disabled input'
              disabled
              class={css({
                w: 'full',
                h: '10',
                px: '3',
                borderWidth: '1px',
                rounded: 'md',
                bg: 'gray.2',
                cursor: 'not-allowed',
                opacity: '0.5'
              })}
            />
          </div>
        </ComponentCard>
      </Section>

      <Section title='Cards'>
        <ComponentCard title='Basic Card' description='Container for grouping related content.'>
          <div
            class={css({
              p: '6',
              borderWidth: '1px',
              rounded: 'xl',
              bg: 'bg.default',
              maxW: 'sm',
              w: 'full'
            })}
          >
            <h4 class={css({ fontWeight: 'semibold', textStyle: 'lg', mb: '2' })}>Card Title</h4>
            <p class={css({ color: 'fg.muted' })}>
              This is a basic card component with a title and description.
            </p>
            <div class={css({ mt: '4' })}>
              <Button size='sm'>Action</Button>
            </div>
          </div>
        </ComponentCard>
      </Section>

      <Section title='Feedback'>
        <ComponentCard title='Badges' description='Status indicators and labels.'>
          <span
            class={css({
              px: '2',
              py: '0.5',
              rounded: 'full',
              textStyle: 'xs',
              fontWeight: 'medium',
              bg: 'gray.3',
              color: 'fg.default'
            })}
          >
            Default
          </span>
          <span
            class={css({
              px: '2',
              py: '0.5',
              rounded: 'full',
              textStyle: 'xs',
              fontWeight: 'medium',
              bg: 'green.3',
              color: 'green.11'
            })}
          >
            Success
          </span>
          <span
            class={css({
              px: '2',
              py: '0.5',
              rounded: 'full',
              textStyle: 'xs',
              fontWeight: 'medium',
              bg: 'red.3',
              color: 'red.11'
            })}
          >
            Error
          </span>
        </ComponentCard>
      </Section>

      <Section title='Usage'>
        <div
          class={css({ fontFamily: 'mono', bg: 'gray.2', p: '4', rounded: 'lg', textStyle: 'sm' })}
        >
          <code>{`import { Button } from '@/components/ui/button';`}</code>
          <br />
          <br />
          <code>{`<Button variant="solid" size="md">Click me</Button>`}</code>
        </div>
      </Section>
    </DesignLayout>
  );
}
