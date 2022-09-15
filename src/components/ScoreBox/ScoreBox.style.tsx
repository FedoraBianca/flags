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

  .title {
    font-size: 14px;
    margin: 6px auto 5px auto;
  }

  .score {
    margin: 0 auto 10px auto;
  }
`;