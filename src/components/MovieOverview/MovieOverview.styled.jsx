import styled from 'styled-components';

export const GenreList = styled.ul`
  display: flex;
`;

export const GenreItem = styled.li`
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[2]}px;
  }
`;
