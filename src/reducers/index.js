import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  form: formReducer
});

export default rootReducer;