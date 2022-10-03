import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Modal, { ModalTypes } from '../../components/Modal/Modal';
import ScoreBox from '../../components/ScoreBox';
import Square from '../../components/Square';
import { SquareState } from '../../components/Square/Square';
import Game, { RoundStates, getRandomInt } from '../../utils/game';

interface IActiveGameFragment {
  onRestart: () => void;
  onQuit: () => void;
  game: Game;
  className?: string;
}

const ActiveGameFragment: React.FC<IActiveGameFragment> = ({
  onRestart,
  onQuit,
  game,
  className = '',
}) => {
  const [showOutcomeModal, setShowOutcomeModal] = useState(false);
  const [gridUpdateKey, setGridUpdateKey] = useState(getRandomInt(1, 1000000));

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (game.players && game.rounds[game.currentRoundIndex].nextMove === game.players.computer && game.rounds[game.currentRoundIndex].state !== RoundStates.OVER) {
      timer = setTimeout(() => {
        game.computerMove();
        setGridUpdateKey(getRandomInt(3000000, 4000000));
      }, 500);
    }
    return () => timer && clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.rounds[game.currentRoundIndex].state, game.rounds[game.currentRoundIndex].nextMove]);

  useEffect(() => {
    const winner = game.rounds[game.currentRoundIndex].getWinner();

    if (winner != null && game.rounds[game.currentRoundIndex].state !== RoundStates.OVER) {
      game.rounds[game.currentRoundIndex].winner = winner;
      game.rounds[game.currentRoundIndex].state = RoundStates.OVER;
      game.updateScore();
      setGridUpdateKey(getRandomInt(1000000, 2000000));
      console.log(game.score);
      setShowOutcomeModal(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.rounds[game.currentRoundIndex].nextMove]);

  const handleSquareClick = (value: number, index: number) => {
    game.humanMove(index);
    setGridUpdateKey(getRandomInt(6000000, 7000000));
  };

  const handleRestart = () => {
    onRestart();
  };

  const handleQuit = () => {
    setShowOutcomeModal(false);
    onQuit();
  };

  const handleNewRound = () => {
    setShowOutcomeModal(false);
    game.startNewRound();
  }

  return (
    <>
      <div className={`game ${className}`}>
        <div className='d-flex justify-content-between top-row'>
          <Logo />
          <Button variant='redo' onClick={handleRestart} />
        </div>

        <div id={String(gridUpdateKey)} key={gridUpdateKey} className='grid'>
          {gridUpdateKey && game.rounds[game.currentRoundIndex].grid.map((value: number, index: number) => {
            let state = (game.rounds[game.currentRoundIndex].grid[index] === null) ? SquareState.empty : game.rounds[game.currentRoundIndex].winner === value ? SquareState.success : SquareState.filled;
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
      <Modal
        type={ModalTypes.OUTCOME}
        showModal={showOutcomeModal}
        winner={game.rounds[game.currentRoundIndex].winner}
        onQuit={handleQuit}
        onNewRound={handleNewRound}
      />
    </>
  );
};

export default ActiveGameFragment;