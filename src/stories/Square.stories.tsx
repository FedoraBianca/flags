import React from 'react';
import { Story } from '@storybook/react';
import Square from '../components/Square';
import { ISquare, SquareState } from '../components/Square/Square';
import { PlayerTypes } from '../utils/game';

export default {
  title: 'Square',
  component: Square,
}

const Template: Story<ISquare> = (args: any) => <Square {...args} />;

export const Empty= Template.bind({});
Empty.args = {
  player: PlayerTypes.PLAYER_X,
  state: SquareState.empty,
}
export const Filled = Template.bind({});
Filled.args = {
  player: PlayerTypes.PLAYER_X,
  state: SquareState.filled,
}

export const Success = Template.bind({});
Success.args = {
  player: PlayerTypes.PLAYER_X,
  state: SquareState.success,
}