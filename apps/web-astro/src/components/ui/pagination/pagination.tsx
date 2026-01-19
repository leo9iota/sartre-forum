import { Pagination as ArkPagination } from '@ark-ui/solid/pagination';

import * as styles from './pagination.css';

export const PaginationRoot = (props: ArkPagination.RootProps) => (
  <ArkPagination.Root class={styles.paginationRoot} {...props} />
);

export const PaginationPrevTrigger = (props: ArkPagination.PrevTriggerProps) => (
  <ArkPagination.PrevTrigger class={styles.paginationTrigger} {...props} />
);

export const PaginationNextTrigger = (props: ArkPagination.NextTriggerProps) => (
  <ArkPagination.NextTrigger class={styles.paginationTrigger} {...props} />
);

export const PaginationItem = (props: ArkPagination.ItemProps) => (
  <ArkPagination.Item class={styles.paginationItem} {...props} />
);

export const PaginationEllipsis = (props: { class?: string }) => (
  <div class={`${styles.paginationEllipsis} ${props.class ?? ''}`}>...</div>
);

export const PaginationContext = ArkPagination.Context;
