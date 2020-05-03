import React from 'react';

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
        title: 'Title1',
        category: 'Adventure',
      }],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        {
          books.map(book => (
            <h1 key={book.title}>{book.title}</h1>
          ))
        }
      </div>
    );
  }
}

export default BooksList;
