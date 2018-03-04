import axios from 'axios';
import { LOGS_STATUS, GET_LOGS } from '../actionTypes';

const apiUrl = 'https://training-todo-api.herokuapp.com/api/plant/sensors/';

export function getLogsSuccess(payload) {
  return {
    type: GET_LOGS,
    payload
  }
};
//Async Action
export function getLogs(id) {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return dispatch => {
    console.log(apiUrl+id);
    // as soon as this function fires show loading to true
    dispatch({
      type: LOGS_STATUS,
      payload: true
    });
    return axios.get(apiUrl+id)
    .then(response => {
      // Dispatch another action
      // to consume data
      console.log('getLogs ', response);
      // getLogsSuccess(response.data)
      dispatch({
        type: GET_LOGS,
        payload: response.data
      })
    })
    .catch(error => {
      // throw(error);
      dispatch({
        type: LOGS_STATUS,
        payload: null
      })
    });
  }
};
