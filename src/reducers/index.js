import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ProjectsReducer from './reducer_projects';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  form: formReducer,
  user: UserReducer
});

export default rootReducer;