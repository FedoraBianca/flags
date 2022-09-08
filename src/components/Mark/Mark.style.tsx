import styled from 'styled-components';

interface IMarkWrapper {
  color: string;
  size: 'default' | 'small';
}

export const MarkWrapper = styled.div<IMarkWrapper>`
  color: ${(props: IMarkWrapper) => props.color};
  font-size: ${(props: IMarkWrapper) => props.size === 'default' ? '60px': '30px'};
`;