import styled from 'styled-components';

export const SquareWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 140px;
  background-color: #1F3641;
  box-shadow: inset 0px -8px 0px #10212A;
  border-radius: 15px;

  .hover-icon {
    display: none;
  }

  &.empty {
    cursor: pointer;

    &:hover {
      .hover-icon {
        display: inline-flex;
      }
    }
  }
`;