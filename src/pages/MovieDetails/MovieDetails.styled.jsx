import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
    list-style: square;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[0]}px;

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;

export const List = styled.ul`
  display: 'flex';
  flex-direction: 'column';
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;
