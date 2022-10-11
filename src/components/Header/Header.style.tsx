import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 80px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};

  h2 {
    font-weight: 800;
    font-size: 24px;
  }
`