import React from 'react';
import Icon from '../Icon';
import { LogoWrapper } from './Logo.style';

export interface ILogo {
  className?: string;
}

const Logo: React.FC<ILogo> =({
  className = ''
}) => {
  return (
  <LogoWrapper className={`${className}`}>
    <Icon icon='XMark' size='32px' color='#31C3BD' />
    <Icon icon='OMark' size='32px' color='#F2B137' />
  </LogoWrapper>
  );
};

export default Logo;