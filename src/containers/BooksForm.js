import React from 'react';


const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const options = categories.map(category => {
    return <option key={category} value={category}>{category}</option>
  });
  return (
    <form>
      <input type="text" name="title" />
      <select name="category">{options}</select>
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BooksForm;
