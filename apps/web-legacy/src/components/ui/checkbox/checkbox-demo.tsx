import { createSignal } from 'solid-js';

import { Checkbox } from './checkbox';

export const CheckboxDemo = () => {
  const [checked, setChecked] = createSignal<boolean | 'indeterminate'>(false);

  return (
    <div style={{ display: 'flex', 'flex-direction': 'column', gap: '1rem', padding: '2rem' }}>
      <Checkbox label='Accept terms and conditions' />
      <Checkbox label='Subscribe to newsletter' defaultChecked />
      <Checkbox label='Disabled checkbox' disabled />
      <Checkbox
        label='Controlled checkbox'
        checked={checked()}
        onCheckedChange={e => setChecked(e.checked)}
      />
      <Checkbox label='Invalid checkbox' invalid />
    </div>
  );
};
