import React from 'react';
import { Story } from '@storybook/react';
import Mark from '../components/Mark'
import { IMark } from '../components/Mark/Mark';

export default {
  title: 'Mark',
  component: Mark,
}

const Template: Story<IMark> = (args: any) => <Mark {...args} />

export const XMark = Template.bind({});
XMark.args = {
  color: '#31C3BD',
  symbol: 'XMark',
  size: '60px'
};

export const OMark = Template.bind({});
OMark.args = {
  color: '#F2B137',
  symbol: 'OMark',
  size: '60px'
};
