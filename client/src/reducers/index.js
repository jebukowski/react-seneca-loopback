import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import session from './sessionReducer';
import details from './detailsReducer';

const rootReducer = combineReducers({
  session,
  details,
  routing: routerReducer,
});

export default rootReducer;
