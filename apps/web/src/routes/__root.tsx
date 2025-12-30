import { lazy } from 'react';

import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/layout/navbar';

interface RouterContext {
  queryClient: QueryClient;
}

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // render nothing in production
    : lazy(() =>
        // lazy load in dev
        import('@tanstack/react-router-devtools').then(res => ({
          default: res.TanStackRouterDevtools
          // for Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent
});

function RootComponent() {
  return (
    <>
      <div className='flex min-h-screen flex-col bg-sartre-secondary text-foreground'>
        <Navbar />
        <main className='container mx-auto grow p-4'>
          <Outlet />
        </main>
        <footer className='p-4 text-center'>
          <p className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>
            <img src='/logo.svg' alt='sartre' className='size-4' />
            sartre &copy;
          </p>
        </footer>
      </div>
      <Toaster />
      <ReactQueryDevtools />
      <TanStackRouterDevtools position='bottom-left' />
    </>
  );
}
