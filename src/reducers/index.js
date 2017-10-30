import { combineReducers } from 'redux';
import user from './reducer_user';
import rooms from './reducer_rooms';

const rootReducer = combineReducers({
  user,
  rooms,
});

export default rootReducer;
