import { Box } from '../Box';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Box
      as="header"
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="#3caea3"
      px={4}
      boxShadow="0px 4px 8px 0px rgba(34, 60, 80, 0.42)"
    >
      <Box as="nav" display="flex" flex={1}>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
