import React from 'react';
import { Story } from '@storybook/react';
import Square from '../components/Square';
import { ISquare } from '../components/Square/Square';
import { PlayerTypes } from '../utils/game';

export default {
  title: 'Square',
  component: Square,
}

const Template: Story<ISquare> = (args: any) => <Square {...args} />;

export const EmptyForPlayerX = Template.bind({});
EmptyForPlayerX.args = {
  player: PlayerTypes.PLAYER_X,
}

export const FilledForPlayerX = Template.bind({});
FilledForPlayerX.args = {
  ...EmptyForPlayerX.args,
  isFilled: true,
}

export const EmptyForPlayerO = Template.bind({});
EmptyForPlayerO.args = {
  player: PlayerTypes.PLAYER_O,
}

export const FilledForPlayerO = Template.bind({});
FilledForPlayerO.args = {
  ...EmptyForPlayerO.args,
  isFilled: true,
}