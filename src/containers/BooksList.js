import React from 'react';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{ name: 'Title' }, { name: 'Title' }],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        {
          books.map(book => (
            <div key={book}>{book.name}</div>
          ))
        }
      </div>
    );
  }
}

export default BooksList;
