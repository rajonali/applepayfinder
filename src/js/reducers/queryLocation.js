import { QUERY_LOCATION } from "../constants/action-types";



const initialState = {
  
};

function queryLocation(state = initialState, action) {
  //console.log("ACTION.PAYYLOAD: "+ JSON.stringify(action.payload))
  switch(action.type) {
    case QUERY_LOCATION:
        console.log("LOCATION QUERIED")
      return {
        ...state,
        queryLocation : action.payload
      }
    default:
      return state;
  }
}


export default queryLocation;
