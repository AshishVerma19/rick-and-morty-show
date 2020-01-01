import { combineReducers } from 'redux';
import characterReducer from './characterReducer';

const rootReducer = combineReducers({
  character: characterReducer
});

export default rootReducer;
