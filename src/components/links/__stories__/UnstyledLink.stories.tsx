import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export default {
  title: 'Components/Links/UnstyledLink',
  component: UnstyledLink,
  parameters: {
    docs: {
      description: {
        component:
          'Next.js Link wrapper that provide custom cursor for external link or if specified with `openNewTab` props.',
      },
    },
  },
} as ComponentMeta<typeof UnstyledLink>;

const Template: ComponentStory<typeof UnstyledLink> = (args) => (
  <UnstyledLink {...args} />
);

export const InternalLink = Template.bind({});
InternalLink.args = {
  href: '/',
  children: 'Internal Link',
};

export const ExternalLink = Template.bind({});
ExternalLink.parameters = {
  docs: {
    description: {
      story:
        "Usage with external link—`!href.startsWith('/') && !href.startsWith('#')`— will add a custom cursor. Try hovering the demo below.",
    },
  },
};
ExternalLink.args = {
  href: 'https://theodorusclarence.com',
  children: 'External Link',
};
