import styled from 'styled-components';

export const ThemeSwitcherWrapper = styled.div`
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.color};
`