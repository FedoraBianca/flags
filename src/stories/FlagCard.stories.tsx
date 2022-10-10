import React from 'react';
import { Story } from '@storybook/react';
import FlagCard from '../components/FlagCard';
import { IFlagCard } from '../components/FlagCard/FlagCard';
import { Country } from '../models/country';
import { ICurrency } from '../models/currency';

export default {
  title: 'FlagCard',
  component: FlagCard,
}

const Template: Story<IFlagCard> = (args: any) => <FlagCard {...args} />

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

export const Light = Template.bind({});
Light.args = {
  country: mockCountry,
  theme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  country: mockCountry,
  theme: 'dark',
};