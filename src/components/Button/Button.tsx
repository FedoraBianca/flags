import React from 'react';
import Icon from '../Icon';
import { PrimaryButton, SecondaryButton, RedoButton } from "./Button.style";

export interface IButton {
  variant?: 'primary' | 'secondary' | 'redo';
  theme?: 'blue' | 'yellow' | 'grey'
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButton> = ({
  variant = 'primary',
  theme = 'blue',
  onClick = null,
  disabled = false,
  children = null,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  switch (variant) {
    case 'primary':
      return (
        <PrimaryButton
          className={`${theme} ${className}`}
          disabled={disabled}
          onClick={handleClick}
        >
          {children}
        </PrimaryButton>
      );
    case 'secondary':
      return (
        <SecondaryButton
          className={`${theme} ${className}`}
          disabled={disabled}
          onClick={handleClick}
        >
          {children}
        </SecondaryButton>
      );
    case 'redo':
      return (
        <RedoButton
          className={`${theme} ${className}`}
          disabled={disabled}
          onClick={handleClick}
        >
          <Icon icon='Redo' color='#1F3641' size='20px' />
        </RedoButton>
      );
  }
};

export default Button;