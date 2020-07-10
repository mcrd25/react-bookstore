import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({ book, handleBookRemove }) => {
  const { id, title, category } = book;
  return (
    <tr>
      <td id={id} className="book card mb-3 px-4 py-4 bg-white d-flex align-items-start flex-column">
        <h5 className="text-secondary book-category">{category}</h5>
        <h1 className="mt-0 pt-0 book-title">{title}</h1>
        <button className="btn btn-link px-0 mb-0 pb-0 mt-3" type="button" onClick={() => handleBookRemove(book)}>Remove</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

export default Book;
