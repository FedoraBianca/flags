import React from 'react';
import { Story } from '@storybook/react';
import ThemeSwitcher, { IThemeSwitcher } from '../components/ThemeSwitcher/ThemeSwitcher';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/Theme.style';

export default {
  title: 'ThemeSwitcher',
  component: ThemeSwitcher,
}

const LightTemplate: Story<IThemeSwitcher> = (args: any) => <ThemeProvider theme={themes.light}><ThemeSwitcher {...args} /></ThemeProvider>
const DarkTemplate: Story<IThemeSwitcher> = (args: any) => <ThemeProvider theme={themes.dark}><ThemeSwitcher {...args} /></ThemeProvider>

export const Light = LightTemplate.bind({});
Light.args = {
  onThemeSwitch: () => {}
};
export const Dark = DarkTemplate.bind({});
DarkTemplate.args = {
  onThemeSwitch: () => {}
};