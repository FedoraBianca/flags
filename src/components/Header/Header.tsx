import React from 'react';
import { HeaderWrapper } from './Header.style';

export interface IHeader {
  theme?: 'dark' | 'light';
  className?: string;
}

const Header: React.FC<IHeader> = ({
  theme = 'light',
  className = ''
}) => {
  return (
    <HeaderWrapper className={`${theme} ${className}`}>
      <h2>Where in the world?</h2>
    </HeaderWrapper>
  );
};

export default Header;