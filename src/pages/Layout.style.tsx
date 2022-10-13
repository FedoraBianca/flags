import styled from 'styled-components';

export const PageWrapper = styled.div`
  height: calc(100vh - 80px);
  background-color: ${({ theme }) => theme.page.backgroundColor} !important;
  color: ${({ theme }) => theme.color};
  padding: 45px 80px;

  .icon-back-arrow {
    color: ${({ theme }) => theme.color};
  }

  .details-wrapper {
    margin-top: 45px;

    .image-wrapper {
      margin-right: 80px;
      width: 40%;

      img {
        width: 100%;
      }
    }
  }
`