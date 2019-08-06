import { SELECT_LOCATION } from "../constants/action-types";



const initialState = {
  
};

function currLocation(state = initialState, action) {
    console.log("ACTION.PAYYLOAD: "+ JSON.stringify(action.payload))
  switch(action.type) {
    case SELECT_LOCATION:
      return {
        ...state,
        selectedLocation : action.payload
      }
    default:
      return state;
  }
}


export default currLocation;
