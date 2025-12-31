import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';

import { routeTree } from '@/routeTree.gen';

import '@/globals.css';

import { Error } from '@/common/error';
import { NotFound } from '@/common/not-found';
import { Pending } from '@/common/pending';

// register stuff for type safety (module augmentation)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// init tanstack query stuff
const queryClient = new QueryClient();

// setup a router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  context: { queryClient },
  defaultPendingComponent: Pending,
  defaultNotFoundComponent: NotFound,
  defaultErrorComponent: ({ error }) => <Error error={error} />
});

const rootElement = document.getElementById('app')!;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
