import React from 'react';
import { Story } from '@storybook/react';

import ScoreBox from '../components/ScoreBox'
import { IScoreBox } from '../components/ScoreBox/ScoreBox';

export default {
  title: 'ScoreBox',
  component: ScoreBox,
}

const Template: Story<IScoreBox> = (args: any) => <ScoreBox {...args} />

export const XScore = Template.bind({});
XScore.args = {
  title: 'X (YOU)',
  score: 12,
  color: '#31C3BD',
};

export const Ties = Template.bind({});
Ties.args = {
  title: 'TIES',
  score: 2,
  color: '#A8BFC9',
};

export const YScore = Template.bind({});
YScore.args = {
  title: 'Y (CPU)',
  score: 24,
  color: '#F2B137',
};