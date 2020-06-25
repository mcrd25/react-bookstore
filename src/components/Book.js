import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({ book, handleBookRemove }) => {
  const { id, title, category } = book;
  return (
    <tr className="book card w-100 mb-3 px-4 py-4 bg-white">
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={() => handleBookRemove(book)}>x</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

export default Book;
