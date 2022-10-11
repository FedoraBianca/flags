import React, { useContext } from 'react';
import ThemeSwitcher from '../ThemeSwitcher';
import { HeaderWrapper } from './Header.style';

export interface IHeader {
  onThemeSwitch: () => void;
  className?: string;
}

const Header: React.FC<IHeader> = ({
  onThemeSwitch,
  className = ''
}) => {

  return (
    <HeaderWrapper className={`d-flex flex-row align-items-center justify-content-between ${className}`}>
      <h2>Where in the world?</h2>
      <ThemeSwitcher onThemeSwitch={onThemeSwitch} />
    </HeaderWrapper>
  );
};

export default Header;