import { combineReducers } from 'redux';
import currLocation from './currLocation';

export default combineReducers(
  {
    currLocation: currLocation
  }
);