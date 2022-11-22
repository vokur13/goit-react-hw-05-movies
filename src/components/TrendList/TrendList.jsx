import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { useLocation } from 'react-router-dom';
import { TrendListItem, NavItem } from './TrendList.styled';

export const TrendList = ({ data }) => {
  const location = useLocation();
  return (
    <Box m={2}>
      <ul>
        {data.map(({ id, title }) => (
          <TrendListItem key={id}>
            <NavItem to={`movies/${id}`} state={{ from: location }}>
              {title}
            </NavItem>
          </TrendListItem>
        ))}
      </ul>
    </Box>
  );
};

TrendList.propTypes = {
  data: PropTypes.array,
};
