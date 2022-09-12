import React, { useState } from 'react';
import Mark from './components/Mark';
import ScoreBox from './components/ScoreBox';
import Square from './components/Square';

export enum PlayerTypes {
  PLAYER_X = 1,
  PLAYER_O = 2
}

function App() {
  const [grid, setGrid] = useState(new Array(9).fill(null));
  // TODO: Update this according to the user choice
  const [players, setPlayers] = useState({
    human: PlayerTypes.PLAYER_O,
    computer: PlayerTypes.PLAYER_X
  })

  return (
    <div className='game'>
      <div className='d-flex flex-row'>
        {/* TODO and logo row here */}
      </div>

      <div className='grid'>
        {grid.map((value, index) => {
          const isFilled = value !== null;

          return (
            <Square isFilled={isFilled} player={value} className='square'/>
          );
        })}
      </div>

      <div className='d-flex flex-row'>
        <ScoreBox color='#31C3BD' title='X (You)' score={24} />
        <ScoreBox color='#A8BFC9' title='TIES' score={24} />
        <ScoreBox color='#F2B137' title='O (CPU)' score={24} />
      </div>
    </div>
  );
}

export default App;
