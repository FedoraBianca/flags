import styled from 'styled-components';

interface IScoreBoxWrapper {
  backgroundColor: string;
}

export const ScoreBoxWrapper = styled.div<IScoreBoxWrapper>`
  background-color: ${(props: IScoreBoxWrapper) => props.backgroundColor};
  border-radius: 15px;
  width: 140px;
  height: 72px;
  text-align: center;
  padding: 10px;
`;