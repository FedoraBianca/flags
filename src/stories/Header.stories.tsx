import React from 'react';
import { Story } from '@storybook/react';
import Header, { IHeader } from '../components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/Theme.style';

export default {
  title: 'Header',
  component: Header,
}

const LightTemplate: Story<IHeader> = (args: any) => <ThemeProvider theme={themes.light}><Header {...args} /></ThemeProvider>
const DarkTemplate: Story<IHeader> = (args: any) => <ThemeProvider theme={themes.dark}><Header {...args} /></ThemeProvider>

export const Light = LightTemplate.bind({});
export const Dark = DarkTemplate.bind({});