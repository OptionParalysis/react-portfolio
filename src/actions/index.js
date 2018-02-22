import axios from 'axios';

// behance
const USER_ID = 'zachjanice';
const API_KEY = '?api_key=3uFNmciSUWV7Cc1j366WsDxh7jg8q97H';
const PROJECTS_URL = 'https://www.behance.net/v2/users/';
const PROJECT_URL = 'https://api.behance.net/v2/projects/';

export const FETCH_PROJECTS = 'fetch_projects';
export const FETCH_PROJECT = 'fetch_project';
export const FETCH_PROJECTS_ERR = 'fetch_projects_err';
export const FETCH_PROJECT_ERR = 'fetch_project_err';

// proxy for cors
const proxyurl = 'https://cors-anywhere.herokuapp.com/';

export const CREATE_CONTACT = 'create_contact';

function fetchProjectsSuccess(response) {
  return {
    type: FETCH_PROJECTS,
    payload: response
  }
}

function fectchProjectsErr(err) {
  return {
    type: FETCH_PROJECTS_ERR,
    payload: err
  }
}

export function fetchProjects() {
  const url = `${PROJECTS_URL}${USER_ID}/projects${API_KEY}`;

  return function(dispatch) {
    axios.get(proxyurl + url)
      .then((response) => {
        dispatch(fetchProjectsSuccess(response))
      })
      .catch((err) => {
        dispatch(fectchProjectsErr(err))
      })
  }
}

function fetchProjectSuccess(response) {
  return {
    type: FETCH_PROJECT,
    payload: response
  }
}

function fectchProjectErr(err) {
  console.log(err)
  return {
    type: FETCH_PROJECT_ERR,
    payload: err
  }
}

export function fetchProject(id) {
  const url = `${PROJECT_URL}${id}${API_KEY}`;
  
  return function(dispatch) {
    axios.get(proxyurl + url)
      .then((response) => {
        dispatch(fetchProjectSuccess(response))
      })
      .catch((err) => {
        dispatch(fectchProjectErr(err))
      })
  }
}

export function createContact(value) {
  const request = axios.get();
  
  return {
    type: CREATE_CONTACT,
    payload: request
  };
}