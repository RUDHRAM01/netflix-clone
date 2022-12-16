import {combineReducers} from 'redux';
import appSlice from './appSlice';
import signSlice from './frontend/signSlice';

export default combineReducers(
  {
  'applications': appSlice,
  'signIn': signSlice,
  },
);