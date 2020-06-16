import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';
import Book from '../components/Book';

const BooksList = ({ books, removeBook, changeFilter }) => {
  const handleBookRemove = book => {
    removeBook(book);
  };
  const handleFilterChange = e => {
    changeFilter(e.target.value);
  };
  return (
    <div>
      <h5>Filter books:</h5>
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
    </div>
  );
};


BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const filteredBooks = (books, filter) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter(book => filter === book.category);
};
const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
