import React from 'react';
import { Story } from '@storybook/react';
import RegionFilter, { IRegionFilter } from '../components/RegionFilter/RegionFilter';
import { IOption } from '../models/option';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/Theme.style';


export default {
  title: 'RegionFilter',
  component: RegionFilter,
}

const LightTemplate: Story<IRegionFilter> = (args: any) => <ThemeProvider theme={themes.light}><RegionFilter {...args} /></ThemeProvider>;
const DarkTemplate: Story<IRegionFilter> = (args: any) => <ThemeProvider theme={themes.dark}><RegionFilter {...args} /></ThemeProvider>;


const mockOptions = [
  {
    id: 1,
    name: 'Africa'
  },
  {
    id: 2,
    name: 'America'
  },
  {
    id: 3,
    name: 'Asia'
  },
  {
    id: 4,
    name: 'Europe'
  },
  {
    id: 5,
    name: 'Oceania'
  },
];

const mockChangeHandler = (option: IOption) => {
  console.log(option);
};

export const Light = LightTemplate.bind({});
Light.args = {
  onSelectionChanged: mockChangeHandler,
  options: mockOptions,
};

export const Dark = DarkTemplate.bind({});
Dark.args = {
  onSelectionChanged: mockChangeHandler,
  options: mockOptions,
};