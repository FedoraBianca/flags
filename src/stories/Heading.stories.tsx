import React from 'react';
import { Story } from '@storybook/react';

import Heading from '../components/Heading'
import { IHeading } from '../components/Heading/Heading';

export default {
  title: 'Heading',
  component: Heading,
}

const Template: Story<IHeading> = (args: any) => <Heading {...args} />

export const HeadingL = Template.bind({});
HeadingL.args = {
  type: 'L',
  children: 'Lorem ipsum dolor sit amet'
};

export const HeadingM = Template.bind({});
HeadingM.args = {
  ...HeadingL.args,
  type: 'M'
};

export const HeadingS = Template.bind({});
HeadingS.args = {
  ...HeadingL.args,
  type: 'S'
};

export const HeadingXS = Template.bind({});
HeadingXS.args = {
  ...HeadingL.args,
  type: 'XS'
};