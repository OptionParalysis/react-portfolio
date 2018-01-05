import axios from 'axios';
const firebase = require('firebase');

// firebase
var fireBaseConfig = {
    // Initialize Firebase
    apiKey: "AIzaSyCfhez8P7Xee5jLOO5qXrLldMjOMk0m2zY",
    authDomain: "portfolio-c7da3.firebaseapp.com",
    databaseURL: "https://portfolio-c7da3.firebaseio.com",
    projectId: "portfolio-c7da3",
    storageBucket: "portfolio-c7da3.appspot.com",
    messagingSenderId: "753227933187"
};
firebase.initializeApp(fireBaseConfig);

// sendgrid (for email)
// var sendGridConfig = {
//   apiKey: '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'
// }

// behance
const USER_ID = 'zachjanice';
const API_KEY = '?api_key=RgTb08jfwNBXwedEJsd0rOrLGU3FiLhx';
const PROJECTS_URL = 'https://api.behance.net/v2/users/';
const PROJECT_URL = 'https://www.behance.net/v2/projects/';

export const FETCH_PROJECTS = 'fetch_projects';
export const FETCH_PROJECT = 'fetch_project';
export const CREATE_CONTACT = 'create_contact';

export function fetchProjects() {
  const url = `${PROJECTS_URL}${USER_ID}/projects${API_KEY}`;
  const request = axios.get(url);
  
  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}

export function fetchProject(id) {
  const url = `${PROJECT_URL}${id}${API_KEY}`;
  const request = axios.get(url);
  
  return {
    type: FETCH_PROJECT,
    payload: request
  };
}

export function createContact(value) {
  const request = axios.get();
  
  return {
    type: CREATE_CONTACT,
    payload: request
  };
}