import { GET_SWITCHES, SWITCHES_STATUS } from '../actionTypes'
import { switches, database } from '../firebase'

export function getSwithes() {
  return dispatch => {
    // as soon as this function fires show loading to true
    dispatch({
      type: SWITCHES_STATUS,
      payload: true
    });
    switches.on('value',  snapshot => {
      dispatch({
        type: GET_SWITCHES,
        payload: snapshot.val()
      });
      // once notes are received show loading to false
      dispatch({
        type: SWITCHES_STATUS,
        payload: false
      });
      // wait to something changes and try again
    }, () => {
      dispatch({
        type: SWITCHES_STATUS,
        payload: -1
      })
    })
  }
}

export function toggleSwitchValue (sectionId, value) {
  return dispatch => {
    database.ref(`switches/${sectionId}/value`).set(value);
    switches.on('value',  snapshot => {
      dispatch({
        type: GET_SWITCHES,
        payload: snapshot.val()
      });
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
