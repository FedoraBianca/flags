import React from 'react';
import { Story } from '@storybook/react';
import RegionFilter, { IRegionFilter } from '../components/RegionFilter/RegionFilter';
import { IOption } from '../models/option';


export default {
  title: 'RegionFilter',
  component: RegionFilter,
}

const Template: Story<IRegionFilter> = (args: any) => <RegionFilter {...args} />

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

export const Light = Template.bind({});
Light.args = {
  onSelectionChanged: mockChangeHandler,
  options: mockOptions,
  theme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  onSelectionChanged: mockChangeHandler,
  options: mockOptions,
  theme: 'dark',
};