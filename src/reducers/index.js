import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ProjectsReducer from './reducer_projects';
import UserReducer from './reducer_user';
import LoadingReducer from './reducer_loading';
import DbUserReducer from './reducer_dbUser';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  form: formReducer,
  user: UserReducer,
  loading: LoadingReducer,
  dbUsers: DbUserReducer
});

export default rootReducer;