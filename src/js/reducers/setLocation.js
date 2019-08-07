import { SET_LOCATION } from "../constants/action-types";



const initialState = {
  selectedLocation: ""
};

function setLocation(state = initialState, action) {
    console.log("ACTION.PAYYLOAD: "+ JSON.stringify(action.payload))
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
