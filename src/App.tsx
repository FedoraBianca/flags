/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Modal from './components/Modal';
import { ModalTypes } from './components/Modal/Modal';
import ActiveGameFragment from './fracments/ActiveGameFragment';
import NewGameFragment from './fracments/NewGameFragment/NewGameFragment';
import Game, { GameStates, PlayerTypes } from './utils/game';

let game = new Game();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showNewGame, setShowNewGame] = useState(true);
  const [showActiveGame, setShowActiveGame] = useState(false);

  const handleGameStart = (selectedPlayer: PlayerTypes) => {
    if (game) {
      game.start(selectedPlayer);
      setShowNewGame(false);
      setShowActiveGame(true);
    }
  };

  const handleGameRestart = () => {
    if (game) {
      game = new Game();
      setShowNewGame(true);
      setShowActiveGame(false);
    }
  };

  // useEffect(() => {
  //   let timer: ReturnType<typeof setTimeout>;
  //   if (nextMove === players.computer && gameState !== GameStates.OVER) {
  //     timer = setTimeout(() => {
  //       computerMove();
  //     }, 500);
  //   }
  //   return () => timer && clearTimeout(timer);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [gameState, nextMove, players.computer]);

  // useEffect(() => {
  //   const winner = getWinner(grid);

  //   if (winner != null) {
  //     updateScore(winner);
  //     setWinner(winner);
  //     setGameState(GameStates.OVER);
  //     setShowModal(true);
  //   }

  // }, [nextMove]);


  return (
    <>
      {showNewGame && <NewGameFragment onGameStart={handleGameStart} />}
      {game && showActiveGame && <ActiveGameFragment game={game} onGameRestart={handleGameRestart} />}
      {game && showModal && <Modal showModal={showModal} type={ModalTypes.OUTCOME} winner={null} />}
    </>
  );
}

export default App;
