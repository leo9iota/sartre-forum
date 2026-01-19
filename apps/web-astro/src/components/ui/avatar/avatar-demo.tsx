import { Avatar } from './avatar';

export const AvatarDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem', 'align-items': 'center', padding: '2rem' }}>
      <Avatar size='xs' name='John Doe' />
      <Avatar size='sm' name='Jane Doe' src='https://i.pravatar.cc/150?u=a' />
      <Avatar size='md' name='Bob Smith' />
      <Avatar size='lg' name='Alice Wonderland' src='https://i.pravatar.cc/150?u=b' />
      <Avatar size='xl' name='Charlie Brown' />
      <Avatar size='2xl' name='David Bowie' src='https://i.pravatar.cc/150?u=c' />
    </div>
  );
};
