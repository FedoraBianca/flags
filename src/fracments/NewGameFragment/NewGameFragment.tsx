import React, { useState } from 'react';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Logo from '../../components/Logo';
import MarkPicker from '../../components/MarkPicker';
import { PlayerTypes } from '../../utils/game';

interface INewGameFragment {
  onGameStart: (selection: PlayerTypes) => void;
  className?: string;
}

const NewGameFragment: React.FC<INewGameFragment> = ({
  onGameStart,
  className = '',
}) => {
  const [selection, setSelection] = useState(PlayerTypes.PLAYER_X);

  const handleMarkChange = (selection: PlayerTypes) => {
    setSelection(selection);
  };

  const handleStartGame = () => {
    onGameStart(selection);
  };

  return (
    <div className={`d-flex flex-column ${className}`}>
      <div className='w-100 d-flex flex-row justify-content-center'>
        <Logo />
      </div>

      <MarkPicker value={selection} onChange={handleMarkChange} className='my-5' />

      <Button variant='primary' theme='yellow' onClick={handleStartGame}>
        <Heading type='S' color='#1A2A33'>New Game (VS CPU)</Heading>
      </Button>
      {/* <Button variant='primary' theme='blue'>New Game (VS Player)</Button> */}
    </div>
  );
};

export default NewGameFragment;