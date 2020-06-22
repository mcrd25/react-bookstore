import * as actions from '../actions/types';

export default (state = 'All', action) => {
  switch (action.type) {
    case actions.CHANGE_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};
