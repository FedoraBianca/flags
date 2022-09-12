import React from 'react';
import { GridWrapper } from './Grid.style';

export interface IGrid {
  className?: string;
}

const Grid: React.FC<IGrid> =({
  className = ''
}) => {
  return (
  <GridWrapper className={`d-flex flex-row ${className}`}>
    
  </GridWrapper>
  );
};

export default Grid;