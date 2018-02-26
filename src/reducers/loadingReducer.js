import { USER_STATUS, SWITCHES_STATUS } from '../actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case SWITCHES_STATUS:
      return { ...state, notes: action.payload };
    case USER_STATUS:
      return {...state, user: action.payload };
    default:
      return state;

  }
}
