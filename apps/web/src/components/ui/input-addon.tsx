import type { ComponentProps } from 'solid-js';

import { ark } from '@ark-ui/solid/factory';
import { styled } from '@styled-system/jsx';
import { inputAddon } from '@styled-system/recipes';

export type InputAddonProps = ComponentProps<typeof InputAddon>;
export const InputAddon = styled(ark.div, inputAddon);
