import {combineReducers} from 'redux';

import app from './appReducer';
import resume from './resumeReducer';

export default combineReducers({
  app,
  resume
})
