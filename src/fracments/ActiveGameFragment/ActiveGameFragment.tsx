import React, { useState } from 'react';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import ScoreBox from '../../components/ScoreBox';
import Square from '../../components/Square';
import Game from '../../utils/game';

interface IActiveGameFragment {
  onGameRestart: () => void;
  game: Game;
  className?: string;
}

const ActiveGameFragment: React.FC<IActiveGameFragment> = ({
  onGameRestart,
  game,
  className = '',
}) => {

  const handleRestart = () => {
    onGameRestart();
  };

  return (
    <div className={`game ${className}`}>
      <div className='d-flex justify-content-between top-row'>
        <Logo />
        <Button variant='redo' onClick={handleRestart} />
      </div>

      <div className='grid'>
        {game.grid.map((value: number, index: number) => {
          const isFilled = value !== null;

          return (
            <Square
              isFilled={isFilled}
              player={value}
              className='square'
              key={index}
              onClick={() => game.humanMove(index)}
            />
          );
        })}
      </div>

      <div className='score-row'>
        <ScoreBox color='#31C3BD' title='X (You)' score={game.score.X} />
        <ScoreBox color='#A8BFC9' title='TIES' score={game.score.O} />
        <ScoreBox color='#F2B137' title='O (CPU)' score={game.score.ties} />
      </div>
    </div>
  );
};

export default ActiveGameFragment;