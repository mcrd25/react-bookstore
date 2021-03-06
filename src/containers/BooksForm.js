import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import './BookForm.css';

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
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;

    createBook({
      id: Math.floor(Math.random() * 1000),
      title,
      category,
    });

    this.setState({
      title: '',
      category: 'Action',
    });

    document.querySelector('input[name="title"]').value = '';
    document.querySelector('select[name="category"]').value = 'Action';
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
      <div className="container-fluid body-cont">
        <h3 className="text-secondary add-book">ADD NEW BOOK</h3>
        <form className="w-100 d-flex justify-content-between" onSubmit={this.handleSubmit}>
          <input className="form-input" type="text" name="title" placeholder="Book Title" onChange={this.handleChange} />
          <select className="mx-3 form-select white" name="category" onChange={this.handleChange}>{options}</select>
          <input className="btn btn-primary form-btn" type="submit" value="ADD BOOK" />
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBook(book)) });

export default connect(null, mapDispatchToProps)(BooksForm);
