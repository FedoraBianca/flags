import React from 'react';
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
      <div>
        {title}
      </div>
      <div>
        {score}
      </div>
    </ScoreBoxWrapper>
  );
};

export default ScoreBox;