import { GET_SWITCHES } from '../actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_SWITCHES:
      return action.payload;
    default:
    return state;
  }
}
