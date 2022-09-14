import React from 'react';
import { HeadingL, HeadingM, HeadingS, HeadingXS } from './Heading.style';

export interface IHeading {
  type: 'L' | 'M' | 'S' | 'XS';
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<IHeading> = ({
  type,
  children,
  className = ''
}) => {
  switch (type) {
    case 'L':
      return (
        <HeadingL className={`${className}`}>
          {children}
        </HeadingL>
      );
    case 'M':
      return (
        <HeadingM className={`${className}`}>
          {children}
        </HeadingM>
      );
    case 'S':
      return (
        <HeadingS className={`${className}`}>
          {children}
        </HeadingS>
      );
    case 'XS':
      return (
        <HeadingXS className={`${className}`}>
          {children}
        </HeadingXS>
      );
  };
};

export default Heading;