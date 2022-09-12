import React from 'react';
import { MarkWrapper } from './Mark.style';

export interface IMark {
  color: string;
  symbol: 'XMark' | 'OMark' | 'XMarkOutline' | 'OMarkOutline';
  size: string;
}

const Mark: React.FC<IMark> =({
  color,
  symbol,
  size,
}) => {
  return (
  <MarkWrapper color={color} size={size}>
    <span className={`icon-${symbol}`}></span>
  </MarkWrapper>
  );
};

export default Mark;