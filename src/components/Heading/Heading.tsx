import React from 'react';
import { HeadingL, HeadingM, HeadingS, HeadingXS } from './Heading.style';

export interface IHeading {
  type: 'L' | 'M' | 'S' | 'XS';
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const Heading: React.FC<IHeading> = ({
  type,
  children,
  color = '#000000',
  className = ''
}) => {
  switch (type) {
    case 'L':
      return (
        <HeadingL color={color} className={`${className}`}>
          {children}
        </HeadingL>
      );
    case 'M':
      return (
        <HeadingM color={color} className={`${className}`}>
          {children}
        </HeadingM>
      );
    case 'S':
      return (
        <HeadingS color={color} className={`${className}`}>
          {children}
        </HeadingS>
      );
    case 'XS':
      return (
        <HeadingXS color={color} className={`${className}`}>
          {children}
        </HeadingXS>
      );
  };
};

export default Heading;