import React from 'react';


class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    const options = categories.map(
      category => <option key={category} value={category}>{category}</option>,
    );
    return (
      <form>
        <input type="text" name="title" />
        <select name="category">{options}</select>
        <input type="submit" value="Add Book" />
      </form>
    );
  }
}

export default BooksForm;
