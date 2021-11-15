import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import CustomLink from '@/components/links/CustomLink';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Links/CustomLink',
  component: CustomLink,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CustomLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomLink> = (args) => (
  <CustomLink {...args} />
);

export const InternalLink = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InternalLink.args = {
  href: '/',
  children: 'Internal Link',
};

export const ExternalLink = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExternalLink.args = {
  href: 'https://theodorusclarence.com',
  children: 'External Link',
};
