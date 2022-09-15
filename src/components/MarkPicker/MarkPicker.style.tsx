import styled from 'styled-components';

export const MarkPickerWrapper = styled.div`
  background-color: #1F3641;
  color: #A8BFC9;
  border-radius: 15px;
  box-shadow: inset 0px -8px 0px #10212A;
  padding: 30px 25px;
  width: 460px;
  text-align: center;

  .mark-row {
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    padding: 8px;
    background-color: #1A2A33;
    margin-top: 25px;

    .mark-wrapper {
      display: flex;
      justify-content: center;
      border-radius: 10px;
      width: 50%;
      padding: 10px;
      cursor: pointer;

      &.active {
        background-color: #A8BFC9;
      }
    }
  }

  p {
    color: #A8BFC9;
    margin: 20px auto 5px auto;
    font-size: 14px;
  }
`;