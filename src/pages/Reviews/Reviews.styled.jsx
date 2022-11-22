import styled from 'styled-components';

export const List = styled.ul`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const Item = styled.li`
  list-style: square;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Title = styled.h3`
  margin-bottom: ${p => p.theme.space[2]}px;
`;
