import { SELECT_LOCATION } from "../constants/action-types";



const initialState = {
  
};

function currLocation(state = initialState, action) {
  switch(action.type) {
    case SELECT_LOCATION:
      return {
        ...state,
        selectedAddr: action.payload
      }
    default:
      return state;
  }
}


export default currLocation;
