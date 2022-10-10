import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  width: 480px;
  padding: 19px 27px;
  border-radius: 5px;

  input {
    border: none;
    font-size: 14px;
    margin-left: 25px;
    width: 90%;

    &:focus {
      outline: none !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
  }

  &.light {
    color: #848484;
    background-color: #FFFFFF;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  &.dark {
    color: #FFFFFF;
    background-color: #2B3844;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
    input {
      background-color: #2B3844;
    }
  }
`;