import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD_yKc_4Pubmpc6Ew4GX7b3cW467Bjz_WI",
  authDomain: "plant-e5d30.firebaseapp.com",
  databaseURL: "https://plant-e5d30.firebaseio.com",
  projectId: "plant-e5d30",
  storageBucket: "plant-e5d30.appspot.com",
  messagingSenderId: "754352210290"
};
firebase.initializeApp(config);

// export const database = firebase.database().ref('/plant-e5d30')
export const switches = firebase.database().ref('/switches');
export const sensors = firebase.database().ref('/sensors');
export const database = firebase.database();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
