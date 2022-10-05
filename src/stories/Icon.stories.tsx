import React from 'react';
import { Story } from '@storybook/react';

import Icon from '../components/Icon'
import { IIcon } from '../components/Icon/Icon';

export default {
  title: 'Icon',
  component: Icon,
}

const Template: Story<IIcon> = (args: any) => <Icon {...args} />

export const MagnifierIcon = Template.bind({});
MagnifierIcon.args = {
  icon: 'magnifier',
  size: '60px',
  color: '#111517',
};

export const ArrowIcon = Template.bind({});
ArrowIcon.args = {
  icon: 'arrow',
  size: '60px',
  color: '#111517',
};

export const BackArrowIcon = Template.bind({});
BackArrowIcon.args = {
  icon: 'back-arrow',
  size: '60px',
  color: '#111517',
};

export const MoonIcon = Template.bind({});
MoonIcon.args = {
  icon: 'moon',
  size: '60px',
  color: '#111517',
};

export const MoonOutlineIcon = Template.bind({});
MoonOutlineIcon.args = {
  icon: 'moon-outline',
  size: '60px',
  color: '#111517',
};