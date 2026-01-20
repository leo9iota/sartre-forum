import { Show, splitProps } from 'solid-js';
import type { ComponentProps } from 'solid-js';

import { Avatar as ArkAvatar } from '@ark-ui/solid/avatar';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import { avatarRecipe, fallback, image } from './avatar.css';

type AvatarVariants = RecipeVariants<typeof avatarRecipe>;

export type AvatarProps = ComponentProps<typeof ArkAvatar.Root> &
  AvatarVariants & {
    src?: string;
    name?: string;
    alt?: string;
  };

export const Avatar = (props: AvatarProps) => {
  const [local, rest] = splitProps(props, ['src', 'name', 'alt', 'size', 'class', 'children']);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <ArkAvatar.Root class={`${avatarRecipe({ size: local.size })} ${local.class ?? ''}`} {...rest}>
      <ArkAvatar.Fallback class={fallback}>
        <Show when={local.name} fallback={local.children}>
          {getInitials(local.name!)}
        </Show>
      </ArkAvatar.Fallback>
      <Show when={local.src}>
        <ArkAvatar.Image src={local.src} alt={local.alt ?? local.name} class={image} />
      </Show>
    </ArkAvatar.Root>
  );
};
