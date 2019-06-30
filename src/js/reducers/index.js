import { SELECT_LOCATION } from "../constants/action-types";


function rootReducer(state, action) {
  if (action.type === SELECT_LOCATION) {
    return action.payload
    };
  }

  
export default rootReducer;