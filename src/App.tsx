import React, { useCallback, useEffect, useState } from 'react';
import Button from './components/Button';
import Logo from './components/Logo';
import Modal from './components/Modal';
import ScoreBox from './components/ScoreBox';
import Square from './components/Square';
import { GAME_STATES, ModalTypes, PlayerTypes, WinnerTypes } from './utils/constants';
import { getRandomInt, getWinner } from './utils/helpers';

function App() {
  const [grid, setGrid] = useState(new Array(9).fill(null));
  const [gameState, setGameState] = useState(GAME_STATES.NOT_STARTED);
  const [players, setPlayers] = useState({
    human: PlayerTypes.PLAYER_X,
    computer: PlayerTypes.PLAYER_O
  });
  const [nextMove, setNextMove] = useState<PlayerTypes>(players.human);
  const [winner, setWinner] = useState<WinnerTypes | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (nextMove === players.computer && gameState !== GAME_STATES.OVER) {
      timer = setTimeout(() => {
        computerMove();
      }, 500);
    }
    return () => timer && clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, nextMove, players.computer]);

  useEffect(() => {
    setWinner(getWinner(grid));
    setGameState(GAME_STATES.OVER);
  }, [gameState, grid, nextMove]);

  const switchPlayer = (player: PlayerTypes) => {
    return player === PlayerTypes.PLAYER_X ? PlayerTypes.PLAYER_O : PlayerTypes.PLAYER_X;
  };

  const choosePlayer = (option: PlayerTypes) => {
    setPlayers({ human: option, computer: switchPlayer(option) });
    setGameState(GAME_STATES.IN_PROGRESS);
  };

  const move = useCallback(
    (index: number, player: PlayerTypes) => {
      if (player && gameState === GAME_STATES.IN_PROGRESS) {
        setGrid(grid => {
          const gridCopy = grid.concat();
          gridCopy[index] = player;
          return gridCopy;
        });
      }
    },
    [gameState]
  );

  const computerMove = useCallback(() => {
    let index = getRandomInt(0, 8);
    while (grid[index]) {
      index = getRandomInt(0, 8);
    }

    move(index, players.computer);
    setNextMove(players.human);

  }, [move, grid, players]);

  const humanMove = (index: number) => {
    if (!grid[index] && nextMove === players.human) {
      move(index, players.human);
      setNextMove(players.computer);
    }
  };

  return (
    <>
      <div className='game'>
        <div className='d-flex justify-content-between top-row'>
          <Logo />
          <Button variant='redo' />
        </div>

        <div className='grid'>
          {grid.map((value, index) => {
            const isFilled = value !== null;

            return (
              <Square
                isFilled={isFilled}
                player={value}
                className='square'
                key={index}
                onClick={() => humanMove(index)}
              />
            );
          })}
        </div>

        <div className='score-row'>
          <ScoreBox color='#31C3BD' title='X (You)' score={24} />
          <ScoreBox color='#A8BFC9' title='TIES' score={24} />
          <ScoreBox color='#F2B137' title='O (CPU)' score={24} />
        </div>
      </div>
      <Modal showModal={true} type={ModalTypes.OUTCOME} winner={winner} />
    </>
  );
}

export default App;
