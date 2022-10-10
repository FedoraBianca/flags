import React from 'react';
import { Story } from '@storybook/react';

import SearchInput from '../components/SearchInput/SearchInput';
import { ISearchInput } from '../components/SearchInput/SearchInput';

export default {
  title: 'SearchInput',
  component: SearchInput,
}

const Template: Story<ISearchInput> = (args: any) => <SearchInput {...args} />

export const Light = Template.bind({});
Light.args = {
  theme: 'light',
  searchFunction: () => {},
  placeholder: 'Search for a country…'
};

export const Dark = Template.bind({});
Dark.args = {
  ...Light,
  theme: 'dark',
};