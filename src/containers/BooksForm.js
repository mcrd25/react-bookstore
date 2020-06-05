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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(this.props);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const { title, category } = this.state;
    // const { createBook } = this.props;

    this.props.createBook({
      id: Math.floor(Math.random() * 1000),
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
      <form onSubmit={this.handleSubmit}>
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

export default connect(null, mapDispatchToProps)(BooksForm);
// export default BooksForm;
