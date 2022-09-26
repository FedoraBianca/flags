import styled from 'styled-components';

interface IHeadingStyle {
  color: string;
}

export const HeadingL = styled.h2<IHeadingStyle>`
  margin: 0;
  font-size: 40px;
  font-family: 'Outfit', serif;
  color: ${(props: IHeadingStyle) => props.color};
`;

export const HeadingM = styled.h3<IHeadingStyle>`
  margin: 0;
  font-size: 24px;
  font-family: 'Outfit', serif;
  color: ${(props: IHeadingStyle) => props.color};
`;

export const HeadingS = styled.h4<IHeadingStyle>`
  margin: 0;
  font-size: 20px;
  font-family: 'Outfit', serif;
  color: ${(props: IHeadingStyle) => props.color};
`;

export const HeadingXS = styled.h5<IHeadingStyle>`
  margin: 0;
  font-size: 16px;
  font-family: 'Outfit', serif;
  color: ${(props: IHeadingStyle) => props.color};
`;