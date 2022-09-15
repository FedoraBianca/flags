import React from 'react';
import { PlayerTypes } from '../../utils/constants';
import Heading from '../Heading';
import Icon from '../Icon';
import { MarkPickerWrapper } from './MarkPicker.style';

export interface IMarkPicker {
  value: PlayerTypes;
  className?: string;
  onChange: (selection: PlayerTypes) => void; 
}

const MarkPicker: React.FC<IMarkPicker> =({
  className = ''
}) => {
  return (
  <MarkPickerWrapper className={`d-flex flex-column ${className}`}>
    <Heading type='XS'>PICK PLAYER 1'S MARK</Heading>
    <div className='d-flex flex-row'>
      <div className='mark-wrapper'><Icon icon='XMark' size='32px' color='#A8BFC9' /></div>
      <div className='mark-wrapper'><Icon icon='OMark' size='32px' color='#1A2A33' /></div>
    </div>
    <p>REMEMBER: X GOES FIRST</p>
  </MarkPickerWrapper>
  );
};

export default MarkPicker;