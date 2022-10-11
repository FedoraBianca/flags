import React from 'react';
import { Story } from '@storybook/react';

import SearchInput from '../components/SearchInput/SearchInput';
import { ISearchInput } from '../components/SearchInput/SearchInput';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/Theme.style';

export default {
  title: 'SearchInput',
  component: SearchInput,
}

const LightTemplate: Story<ISearchInput> = (args: any) => <ThemeProvider theme={themes.light}><SearchInput {...args} /></ThemeProvider>;
const DarkTemplate: Story<ISearchInput> = (args: any) => <ThemeProvider theme={themes.dark}><SearchInput {...args} /></ThemeProvider>;


export const Light = LightTemplate.bind({});
Light.args = {
  searchFunction: () => {},
  placeholder: 'Search for a country…'
};

export const Dark = DarkTemplate.bind({});
Dark.args = {
  searchFunction: () => {},
  placeholder: 'Search for a country…'
};