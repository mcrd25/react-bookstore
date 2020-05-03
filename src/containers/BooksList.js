import React from 'react';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{ name: 'Title' }, { name: 'Title' }],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        {
          books.map(book => (
            <h1 key={book}>{book.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default BooksList;
