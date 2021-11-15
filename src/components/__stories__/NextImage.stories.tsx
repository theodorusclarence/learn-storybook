import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import NextImage from '../NextImage';

export default {
  title: 'Components/NextImage',
  component: NextImage,
} as ComponentMeta<typeof NextImage>;

const Template: ComponentStory<typeof NextImage> = (args) => (
  <NextImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-32 md:w-40',
  src: '/favicon/apple-icon-180x180.png',
  width: '180',
  height: '180',
  alt: 'Favicon',
};
