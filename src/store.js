import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: Math.floor((Math.random())),
      title: 'Lorem Ipsum',
      category: 'Horror',
    },
    {
      id: Math.floor((Math.random())),
      title: 'Lorem Ipsum 2',
      category: 'Action',
    },
  ],
};

const store = createStore(rootReducer, initialState);

export default store;
