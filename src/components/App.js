import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <div className="bg-light booy">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
