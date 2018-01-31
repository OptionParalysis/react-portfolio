import { auth, database, storage, googleProvider, facebookProvider } from '../Firebase';

export const GET_USER = 'GET_USER';
export const GET_DB_USERS = 'get_db_users';
export const USER_STATUS = 'user_status';
export const USER_DB_STATUS = 'user_db_status';

export function getUser() {
  return dispatch => {
    dispatch({
      type: USER_STATUS,
      payload: true
    });
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });
      dispatch({
        type: USER_STATUS,
        payload: false
      });
    });
  };
}

export function getDbUsers() {
  return dispatch => {
    dispatch({
      type: USER_DB_STATUS,
      payload: true
    });
    database.ref('users').on('value', db => {
      dispatch({
        type: GET_DB_USERS,
        payload: db.val()
      });
      dispatch({
        type: USER_DB_STATUS,
        payload: false
      });
    });
  };
}

export function login(email, password) {
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  return dispatch => auth.signOut();
}

export function googleLogin() {
  return dispatch => auth.signInWithRedirect(googleProvider);
}

export function facebookLogin() {
  return dispatch => auth.signInWithRedirect(facebookProvider);
}

export function createAccount(data, picture) {
  const { fname, lname, email, password, image } = data;
  return dispatch => auth.createUserWithEmailAndPassword(email, password).then((user) => {
    if (user !== null) {
      storage.child(`profile/${picture.name}/${new Date().getTime()}`).put(image[0]).then((snapshot) => {
        database.ref('users').child(user.uid).set({
          fname,
          lname,
          picture: snapshot.metadata.downloadURLs[0]
        });
      });
    }
  });
}