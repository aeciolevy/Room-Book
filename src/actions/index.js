import { post } from '../utils/fetch';
import { GET_USER, GET_ROOMS, REQUEST } from './types';

const URL = 'https://challenges.1aim.com/roombooking/';

export function getUserType(user) {
  return function (dispatch) {
    dispatch({ type: GET_USER, payload: user });
  };
}

export function getRooms(date) {
  return async function (dispatch) {
    dispatch({ type: REQUEST });
    const response = await post(`${URL}/getrooms`, date);
    const sortedResponse = Object.values(response).sort((a, b) => a.name - b.name);
    const changedResponse = sortedResponse.map((elem, index) => {
      return { ...elem, id: index + 1 };
    });
    dispatch({ type: GET_ROOMS, payload: changedResponse });
  };
}

export function sendPass(data) {
  return async function (dispatch) {
    const response = await post(`${URL}/sendpass`, data);
    console.log(response);
  }
}
