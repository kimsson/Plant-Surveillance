import { GET_SENSORS, SENSORS_STATUS } from '../actionTypes'
import { sensors } from '../firebase'

export function getSensors() {
  return dispatch => {
    // as soon as this function fires show loading to true
    dispatch({
      type: SENSORS_STATUS,
      payload: true
    });
    sensors.on('value',  snapshot => {
      dispatch({
        type: GET_SENSORS,
        payload: snapshot.val()
      });
      // once notes are received show loading to false
      dispatch({
        type: SENSORS_STATUS,
        payload: false
      });
      // wait to something changes and try again
    }, () => {
      dispatch({
        type: SENSORS_STATUS,
        payload: -1
      })
    })
  }
}

// export function saveNote(note) {
//   return dispatch => database.push(note);
// }
//
// export function deleteNote(id) {
//   return dispatch => database.child(id).remove();
// }
//
// export function saveComment(noteId, comment) {
//   return dispatch => {
//     database
//       .child(noteId)
//       .child('comments')
//       .push(comment);
//   }
// }
