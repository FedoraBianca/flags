import styled from 'styled-components';

interface IIconWrapper {
  color: string;
  size: string;
}

export const IconWrapper = styled.span<IIconWrapper>`
  color: ${(props: IIconWrapper) => props.color};
  font-size: ${(props: IIconWrapper) => props.size};
  width: ${(props: IIconWrapper) => props.size};
  height: ${(props: IIconWrapper) => props.size};
`;