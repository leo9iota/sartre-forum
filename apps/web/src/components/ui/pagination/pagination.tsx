import { For, splitProps } from 'solid-js';

import { Pagination as ArkPagination } from '@ark-ui/solid/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-solid';

import * as styles from './pagination.css';

export interface PaginationProps extends ArkPagination.RootProps {
  class?: string;
}

/**
 * Pagination component for navigating through pages of data.
 */
export const Pagination = (props: PaginationProps) => {
  const [local, rest] = splitProps(props, ['class']);

  return (
    <ArkPagination.Root class={`${styles.paginationRoot} ${local.class ?? ''}`} {...rest}>
      <ArkPagination.PrevTrigger class={styles.paginationTrigger}>
        <ChevronLeft />
      </ArkPagination.PrevTrigger>
      <ArkPagination.Context>
        {context => (
          <For each={context.pages}>
            {page =>
              page.type === 'ellipsis' ? (
                <div class={styles.paginationEllipsis}>...</div>
              ) : (
                <ArkPagination.Item class={styles.paginationItem} {...page}>
                  {page.value}
                </ArkPagination.Item>
              )
            }
          </For>
        )}
      </ArkPagination.Context>
      <ArkPagination.NextTrigger class={styles.paginationTrigger}>
        <ChevronRight />
      </ArkPagination.NextTrigger>
    </ArkPagination.Root>
  );
};
