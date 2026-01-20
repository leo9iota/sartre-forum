import { Dialog as ArkDialog } from '@ark-ui/solid/dialog';

import * as styles from './dialog.css';

export const DialogRoot = (props: ArkDialog.RootProps) => <ArkDialog.Root {...props} />;

export const DialogTrigger = (props: ArkDialog.TriggerProps) => <ArkDialog.Trigger {...props} />;

export const DialogBackdrop = (props: ArkDialog.BackdropProps) => (
  <ArkDialog.Backdrop class={styles.backdrop} {...props} />
);

export const DialogPositioner = (props: ArkDialog.PositionerProps) => (
  <ArkDialog.Positioner class={styles.positioner} {...props} />
);

export const DialogContent = (props: ArkDialog.ContentProps) => (
  <ArkDialog.Content class={styles.content} {...props} />
);

export const DialogTitle = (props: ArkDialog.TitleProps) => (
  <ArkDialog.Title class={styles.title} {...props} />
);

export const DialogDescription = (props: ArkDialog.DescriptionProps) => (
  <ArkDialog.Description class={styles.description} {...props} />
);

export const DialogCloseTrigger = (props: ArkDialog.CloseTriggerProps) => (
  <ArkDialog.CloseTrigger class={styles.closeTrigger} {...props} />
);
