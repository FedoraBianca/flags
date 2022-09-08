import React from 'react';
import { MarkWrapper } from './Mark.style';

export interface IMark {
  color: string;
  symbol: 'x' | 'o';
  size?: 'default'| 'small';
}

const Mark: React.FC<IMark> =({
  color,
  symbol,
  size = 'default'
}) => {
  return (
  <MarkWrapper color={color} size={size}>
    {symbol}
  </MarkWrapper>
  );
};

export default Mark;