import {
  ChevronRight,
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
import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem
} from './menu';

export const MenuDemo = () => {
  return (
    <MenuRoot>
      <MenuTrigger>
        <Button variant='outline'>Open Menu</Button>
      </MenuTrigger>
      <MenuPositioner>
        <MenuContent>
          <MenuItemGroup>
            <MenuItemGroupLabel>My Account</MenuItemGroupLabel>
            <MenuSeparator />
            <MenuItem value='profile'>
              <UserIcon />
              Profile
              <span style={{ 'margin-left': 'auto', 'font-size': '0.75rem', opacity: 0.6 }}>
                ⇧⌘P
              </span>
            </MenuItem>
            <MenuItem value='billing'>
              <CreditCardIcon /> Billing
            </MenuItem>
            <MenuItem value='settings'>
              <SettingsIcon /> Settings
              <span style={{ 'margin-left': 'auto', 'font-size': '0.75rem', opacity: 0.6 }}>
                ⌘,
              </span>
            </MenuItem>

            {/* Nested Menu */}
            <MenuRoot positioning={{ placement: 'right-start', gutter: 4 }}>
              <MenuTriggerItem>
                <UserPlusIcon />
                Invite member
                <ChevronRight style={{ 'margin-left': 'auto', width: '1rem', height: '1rem' }} />
              </MenuTriggerItem>
              <MenuPositioner>
                <MenuContent>
                  <MenuItem value='email'>
                    <MailIcon /> Email
                  </MenuItem>
                  <MenuItem value='message'>
                    <MessageSquareIcon /> Message
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem value='other'>
                    <CirclePlusIcon />
                    More Options...
                  </MenuItem>
                </MenuContent>
              </MenuPositioner>
            </MenuRoot>
          </MenuItemGroup>

          <MenuSeparator />

          <MenuItem value='logout'>
            <LogOutIcon />
            Logout
          </MenuItem>
        </MenuContent>
      </MenuPositioner>
    </MenuRoot>
  );
};
