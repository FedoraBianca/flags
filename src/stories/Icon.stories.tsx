import React from 'react';
import { Story } from '@storybook/react';

import Icon from '../components/Icon'
import { IIcon } from '../components/Icon/Icon';

export default {
  title: 'Icon',
  component: Icon,
}

const Template: Story<IIcon> = (args: any) => <Icon {...args} />

export const XIcon = Template.bind({});
XIcon.args = {
  icon: 'XMark',
  size: '60px',
  color: '#000',
};

export const XIconOutlined = Template.bind({});
XIconOutlined.args = {
  ...XIcon.args,
  icon: 'XMarkOutline',
};

export const ZeroIcon = Template.bind({});
ZeroIcon.args = {
  ...XIcon.args,
  icon: 'OMark',
};

export const ZeroIconOutlined = Template.bind({});
ZeroIconOutlined.args = {
  ...XIcon.args,
  icon: 'OMarkOutline',
};

export const RedoIcon = Template.bind({});
RedoIcon.args = {
  ...XIcon.args,
  icon: 'Redo',
};