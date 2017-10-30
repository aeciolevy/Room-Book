import { GET_USER } from '../actions/types';

export default function (state ={}, action){
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return { ...state, type: payload };
    default:
      return state;
  }
}
