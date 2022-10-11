import React from 'react';
import { Story } from '@storybook/react';
import HomePage from '../pages/HomePage';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/Theme.style';

export default {
  title: 'HomePage',
  component: HomePage,
}

const LightTemplate: Story = (args: any) => <ThemeProvider theme={themes.light}><HomePage/></ThemeProvider>
const DarkTemplate: Story= (args: any) => <ThemeProvider theme={themes.dark}><HomePage/></ThemeProvider>

export const Light = LightTemplate.bind({});
export const Dark = DarkTemplate.bind({});