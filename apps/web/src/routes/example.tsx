import { createFileRoute } from '@tanstack/react-router';

import { Spinner } from '@/components/ui/spinner';

export const Route = createFileRoute('/example')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className='container mx-auto space-y-12 p-8'>
      <h1 className='text-3xl font-bold'>Spinner Component Examples</h1>

      {/* Variants Section */}
      <section className='space-y-4'>
        <h2 className='text-xl font-semibold'>Variants</h2>
        <div className='flex flex-wrap items-center gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <Spinner variant='default' />
            <span className='text-sm text-muted-foreground'>default</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Spinner variant='gradient' />
            <span className='text-sm text-muted-foreground'>gradient</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Spinner variant='wave' />
            <span className='text-sm text-muted-foreground'>wave</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Spinner variant='dots' />
            <span className='text-sm text-muted-foreground'>dots</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Spinner variant='spinner' />
            <span className='text-sm text-muted-foreground'>spinner</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Spinner variant='simple' />
            <span className='text-sm text-muted-foreground'>simple</span>
          </div>
        </div>
      </section>

      {/* Sizes Section */}
      <section className='space-y-4'>
        <h2 className='text-xl font-semibold'>Sizes</h2>
        <div className='flex flex-wrap items-end gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <Spinner size='sm' />
            <span className='text-sm text-muted-foreground'>sm</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Spinner size='md' />
            <span className='text-sm text-muted-foreground'>md</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Spinner size='lg' />
            <span className='text-sm text-muted-foreground'>lg</span>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className='space-y-4'>
        <h2 className='text-xl font-semibold'>Colors</h2>
        <div className='flex flex-wrap items-center gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <Spinner color='primary' />
            <span className='text-sm text-muted-foreground'>primary</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Spinner color='secondary' />
            <span className='text-sm text-muted-foreground'>secondary</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Spinner color='success' />
            <span className='text-sm text-muted-foreground'>success</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Spinner color='warning' />
            <span className='text-sm text-muted-foreground'>warning</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Spinner color='danger' />
            <span className='text-sm text-muted-foreground'>danger</span>
          </div>
          <div className='flex flex-col items-center gap-2 rounded bg-slate-800 p-4'>
            <Spinner color='white' />
            <span className='text-sm text-white'>white</span>
          </div>
        </div>
      </section>

      {/* With Labels Section */}
      <section className='space-y-4'>
        <h2 className='text-xl font-semibold'>With Labels</h2>
        <div className='flex flex-wrap items-start gap-8'>
          <Spinner variant='default' label='Loading...' />
          <Spinner variant='wave' label='Please wait' size='lg' />
          <Spinner variant='dots' label='Fetching data' color='success' />
        </div>
      </section>
    </div>
  );
}
