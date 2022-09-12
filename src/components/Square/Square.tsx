import React from 'react';
import { PlayerTypes } from '../../App';
import Icon from '../Icon';
import { SquareWrapper } from './Square.style';

export interface ISquare {
  isFilled?: boolean;
  player?: PlayerTypes | null;
}

const Square: React.FC<ISquare> = ({
  isFilled = false,
  player = null
}) => {
  return (
    <SquareWrapper className={`${isFilled ? 'filled' : 'empty'}`}>
      {isFilled && <Icon
        color={player === PlayerTypes.PLAYER_O ? '#F2B137' : '#31C3BD'}
        icon={player === PlayerTypes.PLAYER_O ? 'OMark' : 'XMark'}
        size='64px'
      />}
      {!isFilled && <Icon
        color={player === PlayerTypes.PLAYER_O ? '#F2B137' : '#31C3BD'}
        icon={player === PlayerTypes.PLAYER_O ? 'OMarkOutline' : 'XMarkOutline'}
        size='64px'
        className='hover-icon'
      />}
    </SquareWrapper>
  );
};

export default Square;