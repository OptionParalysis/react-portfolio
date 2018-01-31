import * as firebase from 'firebase';

const config = {
  // Initialize Firebase
  apiKey: "AIzaSyCfhez8P7Xee5jLOO5qXrLldMjOMk0m2zY",
  authDomain: "portfolio-c7da3.firebaseapp.com",
  databaseURL: "https://portfolio-c7da3.firebaseio.com",
  projectId: "portfolio-c7da3",
  storageBucket: "portfolio-c7da3.appspot.com",
  messagingSenderId: "753227933187"
}
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage().ref();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

// sendgrid (for email)
// var sendGridConfig = {
//   apiKey: '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'
// }