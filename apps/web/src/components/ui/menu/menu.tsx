import { Menu as ArkMenu } from '@ark-ui/solid/menu';
import {
  ChevronRightIcon,
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  CirclePlusIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon
} from 'lucide-solid';

export const Menu = () => {
  return (
    <ArkMenu.Root>
      <ArkMenu.Trigger>Open Menu</ArkMenu.Trigger>
      <ArkMenu.Positioner>
        <ArkMenu.Content>
          <ArkMenu.ItemGroup>
            <ArkMenu.ItemGroupLabel>My Account</ArkMenu.ItemGroupLabel>
            <ArkMenu.Separator />
            <ArkMenu.Item value='profile'>
              <UserIcon />
              Profile
              <span>⇧⌘P</span>
            </ArkMenu.Item>
            <ArkMenu.Item value='billing'>
              <CreditCardIcon /> Billing
            </ArkMenu.Item>
            <ArkMenu.Item value='settings'>
              <SettingsIcon /> Settings
              <span>⌘,</span>
            </ArkMenu.Item>
            <ArkMenu.Root positioning={{ placement: 'right-start', gutter: -2 }}>
              <ArkMenu.TriggerItem>
                <UserPlusIcon />
                Invite member
                <ChevronRightIcon />
              </ArkMenu.TriggerItem>
              <ArkMenu.Positioner>
                <ArkMenu.Content>
                  <ArkMenu.Item value='email'>
                    <MailIcon /> Email
                  </ArkMenu.Item>
                  <ArkMenu.Item value='message'>
                    <MessageSquareIcon /> Message
                  </ArkMenu.Item>
                  <ArkMenu.Separator />
                  <ArkMenu.Item value='other'>
                    <CirclePlusIcon />
                    More Options...
                  </ArkMenu.Item>
                </ArkMenu.Content>
              </ArkMenu.Positioner>
            </ArkMenu.Root>
            <ArkMenu.Separator />
            <ArkMenu.Item value='logout'>
              <LogOutIcon />
              Logout
            </ArkMenu.Item>
          </ArkMenu.ItemGroup>
        </ArkMenu.Content>
      </ArkMenu.Positioner>
    </ArkMenu.Root>
  );
};
