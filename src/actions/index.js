import axios from 'axios';

const USER_ID = 'zachjanice';
const API_KEY = '?api_key=RgTb08jfwNBXwedEJsd0rOrLGU3FiLhx';
const PROJECTS_URL = 'https://api.behance.net/v2/users/';
const PROJECT_URL = 'https://www.behance.net/v2/projects/';

export const FETCH_PROJECTS = 'fetch_projects';
export const FETCH_PROJECT = 'fetch_project';

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