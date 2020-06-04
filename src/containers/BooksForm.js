import React from 'react';


class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      title: '',
      category: 'Action',
    });
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
        <input type="text" name="title" onChange={this.handleChange} />
        <select name="category" onChange={this.handleChange}>{options}</select>
        <input type="submit" value="Add Book" />
      </form>
    );
  }
}

export default BooksForm;
