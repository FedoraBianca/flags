import React, { useEffect, useState } from 'react';
import { PlayerTypes } from '../../utils/game';
import Icon from '../Icon';
import { SquareWrapper } from './Square.style';

export enum SquareState {
  empty,
  filled,
  success
}

export interface ISquare {
  state: SquareState;
  player?: PlayerTypes | null;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const Square: React.FC<ISquare> = ({
  state,
  player = null,
  onClick = null,
  className = '',
}) => {
  const [stateClass, setStateClass] = useState('');

  useEffect(() => {
    let className = state === SquareState.filled ? 'filled' : state === SquareState.empty ? 'empty' : 'success';
    setStateClass(className);
  }, [state]);

  const handleClick = (e:  React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <SquareWrapper
      onClick={handleClick}
      className={`${stateClass} ${className}`}
    >
      {state === SquareState.filled && <Icon
        color={player === PlayerTypes.PLAYER_O ? '#F2B137' : '#31C3BD'}
        icon={player === PlayerTypes.PLAYER_O ? 'OMark' : 'XMark'}
        size='64px'
      />}
      {state === SquareState.empty && <Icon
        color={player === PlayerTypes.PLAYER_O ? '#F2B137' : '#31C3BD'}
        icon={player === PlayerTypes.PLAYER_O ? 'OMarkOutline' : 'XMarkOutline'}
        size='64px'
        className='hover-icon'
      />}
      {state === SquareState.success && <Icon
        color='#1A2A33'
        icon={player === PlayerTypes.PLAYER_O ? 'OMark' : 'XMark'}
        size='64px'
      />}
    </SquareWrapper>
  );
};

export default Square;