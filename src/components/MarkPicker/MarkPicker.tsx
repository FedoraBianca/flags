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
  value,
  className = ''
}) => {
  return (
  <MarkPickerWrapper className={`d-flex flex-column ${className}`}>
    <Heading type='XS'>PICK PLAYER 1'S MARK</Heading>
    <div className='mark-row'>
      <div className={`mark-wrapper ${value === PlayerTypes.PLAYER_X ? 'active': ''}`}>
        <Icon icon='XMark' size='32px' color={value === PlayerTypes.PLAYER_X ? '#1A2A33' : '#A8BFC9'} />
      </div>
      <div className={`mark-wrapper ${value === PlayerTypes.PLAYER_O ? 'active': ''}`}>
        <Icon icon='OMark' size='32px' color={value === PlayerTypes.PLAYER_O ? '#1A2A33' : '#A8BFC9'} />
        </div>
    </div>
    <p>REMEMBER: X GOES FIRST</p>
  </MarkPickerWrapper>
  );
};

export default MarkPicker;