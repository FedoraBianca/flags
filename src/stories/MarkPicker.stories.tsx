import React from 'react';
import { Story } from '@storybook/react';

import MarkPicker from '../components/MarkPicker'
import { IMarkPicker } from '../components/MarkPicker/MarkPicker';
import { PlayerTypes } from '../utils/game';

export default {
  title: 'MarkPicker',
  component: MarkPicker,
}

const Template: Story<IMarkPicker> = (args: any) => <MarkPicker {...args} />;

export const XActive = Template.bind({});
XActive.args = {
  value: PlayerTypes.PLAYER_X
};

export const OActive = Template.bind({});
OActive.args = {
  value: PlayerTypes.PLAYER_O
};