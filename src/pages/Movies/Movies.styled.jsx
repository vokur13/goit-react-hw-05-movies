import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const NavItem = styled(NavLink)`
  // padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
