import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[1]}px;
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

// export const StyledButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: ${props => props.theme.space[2]}px;
//   margin: ${props => props.theme.space[0]}px;
//   padding-top: ${props => props.theme.space[3]}px;
//   padding-bottom: ${props => props.theme.space[3]}px;
//   padding-left: ${props => props.theme.space[4]}px;
//   padding-right: ${props => props.theme.space[4]}px;
//   border: ${props => props.theme.borders.normal};
//   border-radius: ${props => props.theme.radii.normal};
//   background-color: ${props =>
//     props.disabled ? props.theme.colors.muted : props.theme.colors.primary};
//   color: ${props => props.theme.colors.white};
//   cursor: pointer;
//   &:hover:not(:disabled),
//   &:focus:not(:disabled) {
//     background-color: ${props => props.theme.colors.secondary};
//   }
// `;
