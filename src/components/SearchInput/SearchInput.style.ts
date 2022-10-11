import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  width: 480px;
  height: 56px;
  padding: 0px 27px;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};

  input {
    border: none;
    font-size: 14px;
    margin-left: 24px;
    width: 90%;
    background-color: ${({ theme }) => theme.input.backgroundColor};
    color: ${({ theme }) => theme.input.color};

    &:focus {
      outline: none !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
  }
`;