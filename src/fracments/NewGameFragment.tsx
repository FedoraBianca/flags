import React from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import MarkPicker from '../components/MarkPicker';
import { PlayerTypes } from '../utils/constants';

const NewGameFragment = () => {
  const handleMarkChange = (selection: PlayerTypes) => {

  };

  return (
    <div className='d-flex flex-column'>
      <div className='w-100 d-flex flex-row justify-content-center'>
        <Logo />
      </div>

      <MarkPicker value={PlayerTypes.PLAYER_O} onChange={handleMarkChange} />

      <Button variant='primary' theme='yellow'>New Game (VS CPU)</Button>
      <Button variant='primary' theme='blue'>New Game (VS Player)</Button>
    </div>
  );
};

export default NewGameFragment;