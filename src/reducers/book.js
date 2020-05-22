import * as actions from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case actions.CREATE_BOOK:
      return [
        ...state,
        {
          book: action.payload.book,
        },
      ];
    case actions.REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload.book.id)
    default:
      return state;
  }
};
