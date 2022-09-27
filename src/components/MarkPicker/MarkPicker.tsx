import React, { useState } from 'react';
import { PlayerTypes } from '../../utils/game';
import Heading from '../Heading';
import Icon from '../Icon';
import { MarkPickerWrapper } from './MarkPicker.style';

export interface IMarkPicker {
  value: PlayerTypes;
  onChange: (selection: PlayerTypes) => void; 
  className?: string;
}

const MarkPicker: React.FC<IMarkPicker> =({
  value,
  onChange,
  className = ''
}) => {
  const [selection, setSelection] = useState(value);

  const handleChange = (newSelection: PlayerTypes) => {
    setSelection(newSelection);
    onChange(newSelection);
  };

  return (
  <MarkPickerWrapper className={`d-flex flex-column ${className}`}>
    <Heading type='XS' color='#A8BFC9'>PICK PLAYER 1'S MARK</Heading>
    <div className='mark-row'>
      <div className={`mark-wrapper ${selection === PlayerTypes.PLAYER_X ? 'active': ''}`} onClick={() => handleChange(PlayerTypes.PLAYER_X)}>
        <Icon icon='XMark' size='32px' color={selection === PlayerTypes.PLAYER_X ? '#1A2A33' : '#A8BFC9'} />
      </div>
      <div className={`mark-wrapper ${selection === PlayerTypes.PLAYER_O ? 'active': ''}`} onClick={() => handleChange(PlayerTypes.PLAYER_O)}>
        <Icon icon='OMark' size='32px' color={selection === PlayerTypes.PLAYER_O ? '#1A2A33' : '#A8BFC9'} />
        </div>
    </div>
    <p>REMEMBER: X GOES FIRST</p>
  </MarkPickerWrapper>
  );
};

export default MarkPicker;