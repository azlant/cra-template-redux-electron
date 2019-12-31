import { combineReducers } from 'redux';
import test from './test';

const rootReducer = combineReducers({
  test,
});

export default (state, action) => {
  return rootReducer(state, action);
};
