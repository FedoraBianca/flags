import styled from 'styled-components';

export const FlagCardWrapper = styled.div`
  width: 264px;
  height: 336px;
  cursor: pointer;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 14px;

  h3 {
    font-size: 18px;
    font-weight: bolder;
  }

  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .card-label {
    margin: 0 5px 0 0;
    font-weight: 600;
  }

  &.light {
    background-color: #FFFFFF;
  }

  &.dark {
    background-color: #2B3844;
    color: #FFFFFF;
  }
`;