import { combineReducers } from 'redux';
import user from './reducer_user';
import rooms from './reducer_rooms';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  user,
  rooms,
  form: formReducer,
});

export default rootReducer;
