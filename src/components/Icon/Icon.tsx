import React from 'react';
import { IconWrapper } from './Icon.style';

export interface IIcon {
  icon: string;
  size: string;
  color: string;
  className?: string;
}

const Icon: React.FC<IIcon> = ({
  icon,
  size,
  color,
  className = ''
}) => {
  return (
  <IconWrapper color={color} size={size} className={`icon-${icon} ${className}`} />
  );
};

export default Icon;