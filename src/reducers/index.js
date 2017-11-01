import { combineReducers } from 'redux';
import { reducer as flashReducer } from 'redux-flash';
import user from './reducer_user';
import rooms from './reducer_rooms';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  user,
  rooms,
  form: formReducer,
  flash: flashReducer,
});

export default rootReducer;
