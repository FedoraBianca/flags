import React from 'react';
import { Story } from '@storybook/react';

import Button from '../components/Button'
import { IButton } from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
}

const Template: Story<IButton> =(args: any) => <Button {...args} />;

export const PrimaryBlue = Template.bind({});
PrimaryBlue.args = {
  variant: 'primary',
  theme: 'blue',
  children: <span>Button Text</span>,
};

export const SecondaryBlue = Template.bind({});
SecondaryBlue.args = {
  variant: 'secondary',
  theme: 'blue',
  children: <span>Button Text</span>,
};

export const PrimaryYellow = Template.bind({});
PrimaryYellow.args = {
  variant: 'primary',
  theme: 'yellow',
  children: <span>Button Text</span>,
};

export const SecondaryYellow = Template.bind({});
SecondaryYellow.args = {
  variant: 'secondary',
  theme: 'yellow',
  children: <span>Button Text</span>,
};

export const PrimaryGrey = Template.bind({});
PrimaryGrey.args = {
  variant: 'primary',
  theme: 'grey',
  children: <span>Button Text</span>,
};

export const SecondaryGrey = Template.bind({});
SecondaryGrey.args = {
  variant: 'secondary',
  theme: 'grey',
  children: <span>Button Text</span>,
};

export const Redo = Template.bind({});
Redo.args = {
  variant: 'redo',
};