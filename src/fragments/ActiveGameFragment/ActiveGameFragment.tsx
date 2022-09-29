import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import ScoreBox from '../../components/ScoreBox';
import Square from '../../components/Square';
import { SquareState } from '../../components/Square/Square';
import Game, { GameStates, getRandomInt } from '../../utils/game';

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
  const [gridValues, setGridValues] = useState([...game.grid]);
  const [gridUpdateKey, setGridUpdateKey] = useState(getRandomInt(1, 1000000));

  useEffect(() => {
    setGridValues([...game.grid]);
    setGridUpdateKey(getRandomInt(4000000, 5000000));
  }, [game.grid, game.winner]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (game.players && game.nextMove === game.players.computer && game.state !== GameStates.OVER) {
      timer = setTimeout(() => {
        game.computerMove();
        setGridUpdateKey(getRandomInt(3000000, 4000000));
      }, 500);
    }
    return () => timer && clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.state, game.nextMove]);

  useEffect(() => {
    const winner = game.getWinner();

    if (winner != null) {
      game.updateScore(winner);
      game.winner = winner;
      game.state = GameStates.OVER;

      setGridUpdateKey(getRandomInt(1000000, 2000000));

      //setShowModal(true);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.nextMove]);

  const handleSquareClick = (value: number, index: number) => {
    game.humanMove(index);
    let newValues = [...gridValues];
    newValues[index] = value;
    setGridValues(newValues);
  };

  const handleRestart = () => {
    onGameRestart();
  };

  return (
    <div className={`game ${className}`}>
      <div className='d-flex justify-content-between top-row'>
        <Logo />
        <Button variant='redo' onClick={handleRestart} />
      </div>

      <div id={String(gridUpdateKey)} key={gridUpdateKey} className='grid'>
        {gridUpdateKey && gridValues.map((value: number, index: number) => {
          let state = (gridValues[index] === null) ? SquareState.empty : game.winner === value ? SquareState.success : SquareState.filled;
          return (
            <Square
              state={state}
              player={value}
              className='square'
              key={index + gridUpdateKey}
              onClick={() => handleSquareClick(value, index)}
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