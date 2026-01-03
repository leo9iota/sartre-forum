import type { ComponentProps } from 'solid-js';

import { styled } from '@styled-system/jsx';
import { text } from '@styled-system/recipes';
import type { TextVariantProps } from '@styled-system/recipes';
import type { StyledComponent } from '@styled-system/types';

type Props = TextVariantProps & { as?: any };

export type TextProps = ComponentProps<typeof Text>;
export const Text = styled('p', text) as StyledComponent<'p', Props>;
