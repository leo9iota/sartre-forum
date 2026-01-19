import { Tabs } from './tabs';

export const TabsDemo = () => {
  const items = [
    {
      value: 'react',
      trigger: 'React',
      content: <div>React is a JavaScript library for building user interfaces.</div>
    },
    {
      value: 'solid',
      trigger: 'Solid',
      content: <div>Solid is a declarative JavaScript library for creating user interfaces.</div>
    },
    {
      value: 'vue',
      trigger: 'Vue',
      content: <div>Vue is a progressive framework for building user interfaces.</div>
    },
    {
      value: 'svelte',
      trigger: 'Svelte',
      content: <div>Svelte is a radical new approach to building user interfaces.</div>,
      disabled: true
    }
  ];

  return <Tabs defaultValue='react' items={items} />;
};
