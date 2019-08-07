import { QUERY_LOCATION } from "../constants/action-types";

const axios = require('axios');


const initialState = {
    queriedLocation: ""
  
};

function queryLocation(state = initialState, action) {
console.log("QUERIED LOCATION: "+ action.payload)
  switch(action.type) {
    case QUERY_LOCATION:
            axios
            .post('http://localhost:3000/api/location/retrieve_by_address', { address: action.payload} )
            .then(response => {
                console.log("RETRIEVE LOCATION" + JSON.stringify(response))
                //this.setState({transactions: response.data});

            })
            .catch(function (error) {
                console.log(error);
            })




      return {
        ...state,
        queriedLocation : action.payload
      }
    default:
      return state;
  }
}


export default queryLocation;
