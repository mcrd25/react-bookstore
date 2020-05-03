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
          books.each(book => (
            <h1>{book.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default BooksList;
