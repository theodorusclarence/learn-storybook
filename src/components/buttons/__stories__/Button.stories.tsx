import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from '@/components/buttons/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  children: 'Button',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  children: 'Button',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  children: 'Button',
};
