import styled from 'styled-components';

export const PrimaryButton = styled.button`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  border: none;
  padding: 10px 25px 16px 25px;
  border-radius: 12px;

  &.blue {
    background-color: #31C3BD;
    box-shadow: inset 0px -8px 0px #118C87;
  }

  &.yellow {
    background-color: #F2B137;
    box-shadow: inset 0px -8px 0px #CC8B13;
  }

  &.grey {
    background-color: #A8BFC9;
    box-shadow: inset 0px -8px 0px #84979f;
  }
`

export const SecondaryButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  border: none;
  border-radius: 8px;
  padding: 5px 20px 7px 20px;

  &.blue {
    background-color: #31C3BD;
    box-shadow: inset 0px -4px 0px #118C87;
  }

  &.yellow {
    background-color: #F2B137;
    box-shadow: inset 0px -4px 0px #CC8B13;
  }

  &.grey {
    background-color: #A8BFC9;
    box-shadow: inset 0px -4px 0px #84979f;
  }
`

export const RedoButton = styled.button`
  cursor: pointer;
  font-size: 20px;
  width: 50px;
  height: 50px;
  background-color: #A8BFC9;
  box-shadow: inset 0px -4px 0px #84979f;
  border-radius: 8px;
  border: none;

  [class^="icon-"], [class*=" icon-"] {
    margin: auto;
  }
`