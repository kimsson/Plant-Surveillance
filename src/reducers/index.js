import { combineReducers } from 'redux';
import switchesReducer from './switchesReducer';
import sensorsReducer from './sensorsReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';
import logsReducer from './logsReducer';

const rootReducer = combineReducers({
  switches: switchesReducer,
  sensors: sensorsReducer,
  user: userReducer,
  loading: loadingReducer,
  logs: logsReducer

});

export default rootReducer;
