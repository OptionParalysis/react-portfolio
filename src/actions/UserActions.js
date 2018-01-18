import { auth, googleProvider, facebookProvider } from '../Firebase';

export const GET_USER = 'GET_USER';

export function getUser() {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      })
    })
  }
}

export function login(email, password) {
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  return dispatch => auth.signOut();
}

export function createAccount(email, password) {
  return dispatch => auth.createUserWithEmailAndPassword(email, password);
}

export function googleLogin() {
  return dispatch => auth.signInWithRedirect(googleProvider);
}

export function facebookLogin() {
  return dispatch => auth.signInWithRedirect(facebookProvider);
}