import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <div className="full-height bg-light">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
