import styled from 'styled-components';

export const FlagCardWrapper = styled.div`
  width: 264px;
  height: 336px;
  cursor: pointer;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 14px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};

  h3 {
    font-size: 18px;
    font-weight: bolder;
  }

  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
`;