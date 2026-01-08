import {
  CirclePlusIcon,
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon
} from 'lucide-solid';

import { Button } from '../button/button';
import { Menu } from './menu';
import type { MenuItemData } from './menu';

export const MenuDemo = () => {
  const menuItems: MenuItemData[] = [
    {
      id: 'account-group',
      type: 'group',
      label: 'My Account',
      children: [
        { type: 'separator', id: 'sep-1' },
        {
          id: 'profile',
          label: (
            <>
              <UserIcon />
              Profile
              <span style={{ 'margin-left': 'auto', 'font-size': '0.75rem', opacity: 0.6 }}>
                ⇧⌘P
              </span>
            </>
          )
        },
        {
          id: 'billing',
          label: (
            <>
              <CreditCardIcon /> Billing
            </>
          )
        },
        {
          id: 'settings',
          label: (
            <>
              <SettingsIcon /> Settings
              <span style={{ 'margin-left': 'auto', 'font-size': '0.75rem', opacity: 0.6 }}>
                ⌘,
              </span>
            </>
          )
        },
        // Nested Menu
        {
          id: 'invite',
          label: (
            <>
              <UserPlusIcon />
              Invite member
            </>
          ),
          children: [
            {
              id: 'email',
              label: (
                <>
                  <MailIcon /> Email
                </>
              )
            },
            {
              id: 'message',
              label: (
                <>
                  <MessageSquareIcon /> Message
                </>
              )
            },
            { type: 'separator', id: 'sep-nested' },
            {
              id: 'other',
              label: (
                <>
                  <CirclePlusIcon />
                  More Options...
                </>
              )
            }
          ]
        },
        { type: 'separator', id: 'sep-2' },
        {
          id: 'logout',
          label: (
            <>
              <LogOutIcon />
              Logout
            </>
          )
        }
      ]
    }
  ];

  return <Menu trigger={<Button variant='outline'>Open Menu</Button>} items={menuItems} />;
};
