import React from 'react';
import Heading from '../Heading';
import { ScoreBoxWrapper } from './ScoreBox.style';

export interface IScoreBox {
  title: string;
  score: number;
  color: string;
  className?: string;
}

const ScoreBox: React.FC<IScoreBox> = ({
  title,
  score,
  color,
  className = ''
}) => {
  return (
    <ScoreBoxWrapper backgroundColor={color} className={`d-flex flex-column justify-content-center ${className}`}>
      <div className='title'>
        {title}
      </div>
      <Heading type='M' className='score'>
        {score}
      </Heading>
    </ScoreBoxWrapper>
  );
};

export default ScoreBox;