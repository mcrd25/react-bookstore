import React from 'react';
import Book from '../components/Book';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{
        id: 1,
        title: 'Title1',
        category: 'Biography',
      }, {
        id: 2,
        title: 'Title2',
        category: 'Adventure',
      }],
    };
  }

  render() {
    const { books } = this.state;
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
}

export default BooksList;
