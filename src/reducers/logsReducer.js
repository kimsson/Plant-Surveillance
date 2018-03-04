import { GET_LOGS } from '../actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_LOGS:
      return action.payload;
    default:
    return state;
  }
}
