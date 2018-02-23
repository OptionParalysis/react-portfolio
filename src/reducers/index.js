import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import ProjectsReducer from './reducer_projects';
import UserReducer from './reducer_user';
import LoadingReducer from './reducer_loading';
import DbUserReducer from './reducer_dbUser';

const rootReducer = combineReducers({
  routing: routerReducer,
  projects: ProjectsReducer,
  form: formReducer,
  user: UserReducer,
  loading: LoadingReducer,
  dbUsers: DbUserReducer
});

export default rootReducer;