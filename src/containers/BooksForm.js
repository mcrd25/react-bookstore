import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';


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
    const { title, category } = this.state;

    this.props.createBook({
      id: Math.floor(Math.random() * 10),
      title,
      category,
    });

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

BooksForm.propTypes = {
  createBook: PropTypes.isRequired,
};

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBook(book)) });

export default BooksForm;
