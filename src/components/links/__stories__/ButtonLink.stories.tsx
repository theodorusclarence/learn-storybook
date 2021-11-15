import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

export default {
  title: 'Components/Links/ButtonLink',
  component: ButtonLink,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args} />
);

export const InternalLink = Template.bind({});
InternalLink.args = {
  href: '/',
  children: 'Internal Link',
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  href: 'https://theodorusclarence.com',
  children: 'External Link',
};
