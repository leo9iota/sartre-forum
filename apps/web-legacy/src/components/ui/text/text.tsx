import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import type { JSX, ValidComponent } from 'solid-js';

import { textRecipe } from './text.css';
import type { TextVariants } from './text.css';

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'code';

// Variant type extracted from the recipe
type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'body-lg'
  | 'body-sm'
  | 'lead'
  | 'caption'
  | 'label'
  | 'code';

// Map variants to their semantic HTML elements
const variantElementMap: Record<TextVariant, TextElement> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  'body-lg': 'p',
  'body-sm': 'p',
  lead: 'p',
  caption: 'span',
  label: 'label',
  code: 'code'
};

type TextProps = TextVariants & {
  /** Override the inferred HTML element */
  as?: ValidComponent;
  /** Additional CSS classes */
  class?: string;
  /** Content to render */
  children?: JSX.Element;
};

export function Text(props: TextProps) {
  const [local, variantProps, rest] = splitProps(
    props,
    ['as', 'class', 'children'],
    ['variant', 'color', 'weight', 'align', 'truncate']
  );

  // Determine the element to render
  const element = () => {
    if (local.as) return local.as;
    return variantElementMap[variantProps.variant ?? 'body'];
  };

  // Combine recipe classes with any additional classes
  const className = () => {
    const recipeClass = textRecipe(variantProps);
    return local.class ? `${recipeClass} ${local.class}` : recipeClass;
  };

  return (
    <Dynamic component={element()} class={className()} {...rest}>
      {local.children}
    </Dynamic>
  );
}
