import {SELECT_LOCATION} from "../constants/action-types";


export function selectLocation(payload) {
    return function (dispatch) {
      //console.log("select location action called!")
      dispatch({
        type:  SELECT_LOCATION,
        payload: payload
      })
    }
        
}


