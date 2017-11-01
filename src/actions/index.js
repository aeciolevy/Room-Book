import { post } from '../utils/fetch';
import { flashMessage, flashErrorMessage } from 'redux-flash';
import { translateMessage } from '../utils/help';
import { GET_USER, GET_ROOMS, REQUEST } from './types';

const URL = 'https://challenges.1aim.com/roombooking';

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
    console.log(response)
    const { code, text } = response.error;
    if (response.success) {
      dispatch(flashMessage('Booked and sent passes', { timeout: 3000 }));
    }
    dispatch(flashErrorMessage(translateMessage(code, text), { timeout: 4500 }));
  };
}
