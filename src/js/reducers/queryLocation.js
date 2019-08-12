import { QUERY_LOCATION } from "../constants/action-types";


import { setLocation } from '../actions/index'

import {connect} from 'react-redux';


const axios = require('axios');


const initialState = {
    address: "",
    name:"",  
    obj : {}
};

function queryLocation(state = initialState, action) {
  //console.log("QUERIED LOCATION: "+ JSON.stringify(action.payload))


  switch(action.type) {
    case QUERY_LOCATION:
      
            var newAddress = {}

           var data = {
              locationAddress: action.payload
          }
          //console.log(action.payload)

          var response2 =
          (
           axios
            //change location address to action.payload
            .post('http://localhost:3000/api/location/retrieve_by_address', data)
            .then(response => {
              var newData = response.data[0]
              console.log("newddata"+JSON.stringify(newData));
              setLocation(newData);
              //return newData
            })
            .catch(function (error) {
                console.log(error);
            })

          )

            return {
              ...state,
              bob:response2
            }

            console.log("REsponse 2 "+ response2)



    default:
      return state;
  }
}

export default queryLocation;
