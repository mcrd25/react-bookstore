import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const filters = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const options = filters.map(
    filter => <option key={filter} value={filter}>{filter}</option>,
  );
  return (
    <select name="filter" onChange={handleFilterChange}>{options}</select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
