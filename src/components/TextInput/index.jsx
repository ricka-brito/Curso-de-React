import P from 'prop-types';
import React from 'react';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      type="search"
      onChange={handleChange}
      value={searchValue}
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func,
};

TextInput.defaultProps = {
  disabled: false,
};
