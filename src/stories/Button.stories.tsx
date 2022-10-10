import React from 'react';
import { Story } from '@storybook/react';

import Button from '../components/Button';
import { IButton } from '../components/Button/Button';
import Icon from '../components/Icon';

export default {
  title: 'Button',
  component: Button,
}

const Template: Story<IButton> = (args: any) => <Button {...args} />

export const Light = Template.bind({});
Light.args = {
  theme: 'light',
  children: <span>Germany</span>
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
  children: <span>Germany</span>
};