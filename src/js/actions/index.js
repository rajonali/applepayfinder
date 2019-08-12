import {SET_LOCATION, QUERY_LOCATION} from "../constants/action-types";



export function setLocation(payload) {
    return function (dispatch) {
      //console.log("select location action called!")
      dispatch({
        type:  SET_LOCATION,
        payload: { ...payload }
      })
    }
        
}


export function queryLocation(payload) {
  return function (dispatch) {
    dispatch({
      type:  QUERY_LOCATION,
      payload: payload 
    })
  }
      
}




