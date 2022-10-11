import styled from 'styled-components';

export const RegionFilterWrapper = styled.div`
  font-size: 14px;

  .value-box {
    width: 200px;
    height: 56px;
    cursor: pointer;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px 20px;
  }

  .list {
    width: 200px;
    padding: 10px 20px;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;

    .option {
      cursor: pointer;

      &:hover {
        font-weight: 600;
      }
    }
  }

  .up-arrow {
    transform: rotate(90deg);
  }

  .down-arrow {
    transform: rotate(-90deg);
  }

  .value-box, .list {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
  }
`;