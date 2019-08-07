import { combineReducers } from 'redux';
import setLocation from './setLocation';
import queryLocation from './queryLocation';

export default combineReducers(
  {
    setLocation: setLocation,
    queryLocation: queryLocation
  }
);