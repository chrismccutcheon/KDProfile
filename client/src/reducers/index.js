import {combineReducers} from 'redux';

import app from './appReducer';
import resume from './resumeReducer';
import portfolio from './portfolioREducer';
import auth from './authReducer';

export default combineReducers({
  app,
  resume,
  portfolio,
  auth
})
