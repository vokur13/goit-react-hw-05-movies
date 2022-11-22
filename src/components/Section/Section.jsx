import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

export const Section = ({ title, children }) => {
  return (
    <Box mb={1}>
      {title && <h2>{title}</h2>}
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
