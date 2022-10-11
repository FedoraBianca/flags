import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { themes } from '../../styles/Theme.style';
import Icon from '../Icon';
import { ThemeSwitcherWrapper } from './ThemeSwitcher.style';

export interface IThemeSwitcher {
  onThemeSwitch: () => void;
  className?: string;
}

const ThemeSwitcher: React.FC<IThemeSwitcher> = ({
  onThemeSwitch,
  className = ''
}) => {
  const theme = useContext(ThemeContext);
  
  return (
    <ThemeSwitcherWrapper className={`d-flex flex-row align-items-center ${className}`} onClick={onThemeSwitch}>
      <Icon
        icon={ theme === themes.light ? 'moon-outline' : 'moon'}
        size='18px'
        color={theme === themes.light ? '#000000' : '#FFFFFF'}
        className='search-icon mr-2'
      />
      <div>
        { theme === themes.light ? 'Dark Mode' : 'Light Mode'}
      </div>
    </ThemeSwitcherWrapper>
  );
};

export default ThemeSwitcher;