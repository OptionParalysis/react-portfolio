import { 
  FETCH_PROJECTS,
  FETCH_PROJECT
} from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PROJECT:
      return { ...state, [action.payload.data.project.id]: action.payload.data.project };
    case FETCH_PROJECTS:
      return _.mapKeys(action.payload.data.projects, 'id');
    default: 
      return state;
  }
}
