import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  cursor: pointer;
  border: none;
  font-size: 14px;
  padding: 10px 30px;
  border-radius: 2px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);

  &.light {
    color: #111517;
    background-color: #FFFFFF;
  }

  &.dark {
    color: #FFFFFF;
    background-color: #2B3844;
  }
`