import React from 'react';
import Book from '../components/Book';

const BooksList = () => {
  const { books } = this.props.books;
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
            <Book key={book.id} book={book} />
          ))
        }
      </tbody>
    </table>
  );
}

const mapStatetoProps = (state) => ({ books: state.books })

export default connect(mapStatetoProps)(BooksList);
