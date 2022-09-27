import React from 'react';
import { PlayerTypes } from '../../utils/game';
import Icon from '../Icon';
import { SquareWrapper } from './Square.style';

export interface ISquare {
  isFilled?: boolean;
  player?: PlayerTypes | null;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const Square: React.FC<ISquare> = ({
  isFilled = false,
  player = null,
  onClick = null,
  className = '',
}) => {
  const handleClick = (e:  React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <SquareWrapper
      onClick={handleClick}
      className={`${isFilled ? 'filled' : 'empty'} ${className}`}
    >
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