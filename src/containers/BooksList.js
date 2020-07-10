import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import './BookList.css';

const BooksList = ({
  books,
  removeBook,
  filter,
  changeFilter,
}) => {
  const handleBookRemove = book => {
    removeBook(book);
  };
  const handleFilterChange = e => {
    changeFilter(e.target.value);
  };
  const filteredBooks = (books, filter) => {
    if (filter === 'All') {
      return books;
    }
    return books.filter(book => filter === book.category);
  };
  return (
    <div className="w-100">
      <nav className="navbar navbar-light bg-white nav-style">
        <span className="navbar-brand my-2 title">Bookstore CMS</span>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <CategoryFilter handleFilterChange={handleFilterChange} />
          </li>
        </ul>
      </nav>
      <div className="container-fluid body-cont">
        <table className="mt-5 w-100">
          <tbody>
            {
              filteredBooks(books, filter).map(book => (
                <Book key={book.id} book={book} handleBookRemove={handleBookRemove} />
              ))
            }
          </tbody>
        </table>
        <hr className="my-5" />
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
