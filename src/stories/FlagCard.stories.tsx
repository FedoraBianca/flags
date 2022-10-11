import React from 'react';
import { Story } from '@storybook/react';
import FlagCard from '../components/FlagCard';
import { IFlagCard } from '../components/FlagCard/FlagCard';
import { Country } from '../models/country';
import { ICurrency } from '../models/currency';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/Theme.style';

export default {
  title: 'FlagCard',
  component: FlagCard,
}

const LightTemplate: Story<IFlagCard> = (args: any) => <ThemeProvider theme={themes.light}><FlagCard {...args} /></ThemeProvider>;
const DarkTemplate: Story<IFlagCard> = (args: any) => <ThemeProvider theme={themes.dark}><FlagCard {...args} /></ThemeProvider>;

const mockCountry = new Country(
  'Romania',
  'România',
  '.ro',
  19286123,
  [{
    name: "Romanian leu",
    symbol: "lei"
  }] as ICurrency[],
  'Europe',
  'Southeast Europe',
  ['Romanian'],
  'Bucharest',
  [
    "BGR",
    "HUN",
    "MDA",
    "SRB",
    "UKR"
  ],
  'https://flagcdn.com/w320/ro.png'
);

export const Light = LightTemplate.bind({});
Light.args = {
  country: mockCountry
};

export const Dark = DarkTemplate.bind({});
Dark.args = {
  country: mockCountry
};