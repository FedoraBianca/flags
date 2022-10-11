import React from 'react';
import { Story } from '@storybook/react';

import Button from '../components/Button';
import { IButton } from '../components/Button/Button';
import Icon from '../components/Icon';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/Theme.style';

export default {
  title: 'Button',
  component: Button,
}

const LightTemplate: Story<IButton> = (args: any) => <ThemeProvider theme={themes.light}><Button {...args} /></ThemeProvider>;
const DarkTemplate: Story<IButton> = (args: any) => <ThemeProvider theme={themes.dark}><Button {...args} /></ThemeProvider>;

export const Light = LightTemplate.bind({});
Light.args = {
  children: <span>Germany</span>
};

export const Dark = DarkTemplate.bind({});
Dark.args = {
  children: <span>Germany</span>
};