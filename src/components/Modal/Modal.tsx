import React, { useEffect, useState } from 'react';
import { WinnerTypes } from '../../utils/game';
import Button from '../Button';
import Heading from '../Heading';
import Icon from '../Icon';
import { ModalWrapper } from './Modal.style';

export enum ModalTypes {
  OUTCOME = 'OUTCOME',
  RESTART = 'RESTART',
}

export interface IModal {
  type: ModalTypes;
  showModal: boolean;
  winner: WinnerTypes | null;
  className?: string;
}

const Modal: React.FC<IModal> = ({
  type,
  showModal,
  winner,
  className = ''
}) => {
  const [mainMessage, setMainMessage] = useState<string | null>(null);

  useEffect(() => {
    if (type === ModalTypes.OUTCOME) {
      winner === WinnerTypes.DRAW ? setMainMessage('ROUND TIED') : setMainMessage('TAKES THE ROUND');
    }
    else {
      setMainMessage('RESTART GAME ?');
    }

  }, [winner, type]);

  const handleQuit = () => {

  };

  const handleNextRound = () => {

  };

  const handleCancel = () => {

  };

  const handleRestart = () => {

  };

  return (
    <ModalWrapper className={`${showModal ? 'd-flex': 'd-none' } ${className}`}>
      {type === ModalTypes.OUTCOME && <div className='modal d-flex flex-column py-4'>
        <div>
          { winner === WinnerTypes.PLAYER_X && <Icon icon='XMark' size='64px' color='#31C3BD' />}
          { winner === WinnerTypes.PLAYER_O && <Icon icon='OMark' size='64px' color='#F2B137' />}
          <Heading type='L' color={ winner === WinnerTypes.PLAYER_O ? '#F2B137' : '#31C3BD'}>
            { mainMessage }
          </Heading>
        </div>
        <div className='w-100 d-flex justify-content-center mt-4'>
          <Button variant='primary' theme='grey' onClick={handleQuit} className='mr-2'>
            <Heading type='XS' color='#1F3641'>QUIT</Heading>
          </Button>
          <Button variant='primary' theme='yellow' onClick={handleNextRound} className='ml-2'>
            <Heading type='XS' color='#1F3641'>NEXT ROUND</Heading>
          </Button>
        </div>
      </div>}

      {type === ModalTypes.RESTART && <div className='modal d-flex flex-column py-4'>
        <div className='w-100 d-flex justify-content-center mt-4'>
          <Heading type='L' color='#A8BFC9'>{ mainMessage }</Heading>
          <Button variant='primary' theme='grey' onClick={handleCancel} className='mr-2'>
            <Heading type='XS' color='#1F3641'>NO, CANCEL</Heading>
          </Button>
          <Button variant='primary' theme='yellow' onClick={handleRestart} className='ml-2'>
            <Heading type='XS' color='#1F3641'>YES, RESTART</Heading>
          </Button>
        </div>
      </div>}
    </ModalWrapper>
  );
};

export default Modal;