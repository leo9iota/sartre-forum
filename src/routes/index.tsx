import { createFileRoute } from '@tanstack/react-router';

import { css } from '../../styled-system/css';
import { Container, Stack } from '../../styled-system/jsx';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <Container paddingY='12'>
      <Stack gap='8' align='center' textAlign='center'>
        <h1 className={css({ textStyle: '4xl', fontWeight: 'bold', letterSpacing: 'tight' })}>
          Welcome to <span className={css({ color: 'cyan.500' })}>Sartre</span>
        </h1>
        <p className={css({ color: 'fg.muted', fontSize: 'lg', maxW: '2xl' })}>
          A modern personal blog built with TanStack Start, Park UI, and Panda CSS.
        </p>
      </Stack>
    </Container>
  );
}
