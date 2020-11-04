import {combineReducers} from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
// import status from './StatusReducer';

const rootReducer = combineReducer({
  user,
});

export default rootReducer;
  