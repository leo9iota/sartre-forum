import type { ComponentProps } from 'solid-js';

import { ark } from '@ark-ui/solid/factory';
import { styled } from '@styled-system/jsx';
import { badge } from '@styled-system/recipes';

export type BadgeProps = ComponentProps<typeof Badge>;
export const Badge = styled(ark.div, badge);
