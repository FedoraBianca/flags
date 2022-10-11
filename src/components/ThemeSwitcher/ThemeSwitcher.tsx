import React from 'react';
import Icon from '../Icon';
import { ThemeSwitcherWrapper } from './ThemeSwitcher.style';

export interface IThemeSwitcher {
  theme?: 'dark' | 'light';
  className?: string;
}

const ThemeSwitcher: React.FC<IThemeSwitcher> = ({
  theme = 'light',
  className = ''
}) => {
  return (
    <ThemeSwitcherWrapper className={`${theme} ${className}`}>
      <Icon
        icon='moon'
        size='18px'
        color={theme === 'light' ? '#000000' : '#FFFFFF'}
        className='search-icon'
      />
      <div>
        { theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </div>
    </ThemeSwitcherWrapper>
  );
};

export default ThemeSwitcher;