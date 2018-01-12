import { combineReducers } from 'redux';
import authenticationReducer from './authentication'

const rootReducer = combineReducers({
  autheticated: authenticationReducer
});

export default rootReducer;
