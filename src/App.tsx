/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import ActiveGameFragment from './fragments/ActiveGameFragment';
import NewGameFragment from './fragments/NewGameFragment/NewGameFragment';
import Game, { PlayerTypes } from './utils/game';

let game = new Game();

function App() {
  const [showNewGame, setShowNewGame] = useState(true);
  const [showActiveGame, setShowActiveGame] = useState(false);

  const handleGameStart = (selectedPlayer: PlayerTypes) => {
    if (game) {
      game.start(selectedPlayer);
      setShowNewGame(false);
      setShowActiveGame(true);
    }
  };

  const handleQuit = () => {
    game = new Game();
    setShowNewGame(true);
    setShowActiveGame(false);
  };

  return (
    <>
      {showNewGame && <NewGameFragment onGameStart={handleGameStart} />}
      {game && showActiveGame && <ActiveGameFragment
        game={game}
        onQuit={handleQuit}
      />}
    </>
  );
}

export default App;
