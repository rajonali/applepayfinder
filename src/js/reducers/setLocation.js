import { SET_LOCATION } from "../constants/action-types";



const initialState = {
  selectedLocation: ""
};

function setLocation(state = initialState, action) {
  switch(action.type) {
    case SET_LOCATION:
      return {
        ...state,
        selectedLocation : action.payload
      }
    default:
      return state;
  }
}


export default setLocation;
