import { Clipboard } from './clipboard';

export const ClipboardDemo = () => {
  return (
    <div style={{ display: 'flex', 'flex-direction': 'column', gap: '2rem', padding: '2rem' }}>
      <Clipboard value='https://ark-ui.com' label='Copy this link' />
      <Clipboard value='npm install @ark-ui/solid' label='Install command' />
    </div>
  );
};
