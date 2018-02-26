import { GET_SENSORS } from '../actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_SENSORS:
      return action.payload;
    default:
    return state;
  }
}
