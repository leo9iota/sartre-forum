import { Collapsible } from './collapsible';

export const CollapsibleDemo = () => {
  return (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        gap: '1rem',
        padding: '2rem',
        'max-width': '400px'
      }}
    >
      <Collapsible trigger='What is Ark UI?'>
        Ark UI is a headless UI library with over 45+ components designed to build reusable,
        scalable Design Systems that works for a wide range of JS frameworks.
      </Collapsible>

      <Collapsible trigger='Default Open' defaultOpen>
        This collapsible starts in an open state by default.
      </Collapsible>

      <Collapsible trigger='Disabled' disabled>
        This content won't be visible because the collapsible is disabled.
      </Collapsible>
    </div>
  );
};
