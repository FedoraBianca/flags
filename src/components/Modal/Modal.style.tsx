import styled from 'styled-components';

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: #0000008c;

  .modal {
    width: 100%;
    height: 28vh;
    margin-top: 34vh;
    z-index: 101;
    align-items: center;
    background-color: #1F3641;
  }
`;