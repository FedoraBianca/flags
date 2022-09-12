import React from 'react';
import { Story } from '@storybook/react';
import Square from '../components/Square';
import { ISquare } from '../components/Square/Square';
import { PlayerTypes } from '../App';

export default {
  title: 'Square',
  component: Square,
}

const Template: Story<ISquare> = (args: any) => <Square {...args} />

export const EmptySquareForPlayerX = Template.bind({});
EmptySquareForPlayerX.args = {
  player: PlayerTypes.PLAYER_X,
}

export const FilledSquareForPlayerX = Template.bind({});
FilledSquareForPlayerX.args = {
  ...EmptySquareForPlayerX.args,
  isFilled: true,
}

export const EmptySquareForPlayerO = Template.bind({});
EmptySquareForPlayerO.args = {
  player: PlayerTypes.PLAYER_O,
}

export const FilledSquareForPlayerO = Template.bind({});
FilledSquareForPlayerO.args = {
  ...EmptySquareForPlayerO.args,
  isFilled: true,
}