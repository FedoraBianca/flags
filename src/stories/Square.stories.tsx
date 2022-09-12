import React from 'react';
import { Story } from '@storybook/react';
import Square from '../components/Square';
import { ISquare } from '../components/Square/Square';
// import Mark from '../components/Mark';
// import { XMarkOutline } from './Mark.stories';
// import { IMark } from '../components/Mark/Mark';

export default {
  title: 'Square',
  component: Square,
}

const Template: Story<ISquare> = (args: any) => <Square {...args} />

export const DefaulSquare = Template.bind({});

// export const SquareHoveredByX = Template.bind({});
// SquareHoveredByX.args = {
//   children: <Mark {...XMarkOutline.args as IMark} />
// };

// export const SquareHoveredByO = Template.bind({});
// SquareHoveredByO.args = {
//   children: null
// };