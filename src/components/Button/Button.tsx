import React from 'react';
import { ButtonWrapper } from "./Button.style";

export interface IButton {
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButton> = ({
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

  return (
    <ButtonWrapper
      className={className}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;