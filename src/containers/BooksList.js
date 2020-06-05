import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../components/Book';

const BooksList = ({ books, removeBook }) => {
  const handleBookRemove = book => {
    removeBook(book);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (
            <Book key={book.id} book={book} handleBookRemove={handleBookRemove} />
          ))
        }
      </tbody>
    </table>
  );
};


BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
