import { Portal } from 'solid-js/web';

import {
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from './dialog';

export const DialogDemo = () => {
  return (
    <DialogRoot>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog content. You can add any content here including
              forms, lists, or other components.
            </DialogDescription>
            <DialogCloseTrigger aria-label='Close dialog'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
};
