import { GET_ROOMS, REQUEST } from '../actions/types';

export default function (state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case REQUEST:
      return [];
    case GET_ROOMS:
      return [...state, ...payload];
    default:
      return state;
  }
}
