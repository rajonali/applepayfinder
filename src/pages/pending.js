import React, { Component } from 'react'


import axios from 'axios';


export default class Pending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: []
        };

    }


    getLocations(){

        var self = this;
        
        axios
        //change location address to action.payload
        .get('http://localhost:3000/api/location/get_pending_verified')
        .then(response => {
          //var newData = response.data[0]
          //console.log("newddata"+JSON.stringify(response.data));
        var locations = response.data.results;
          this.setState({
              locations
          })

        })
        .catch(function (error) {
            console.log(error);
        })

    }


    componentDidMount(props) {
     
        this.getLocations()
    }



    render() {
        return (
            <div>
                <br />
                <h3><strong>Pending Locations:</strong></h3>
                
                {
                    
                }
                
            </div>
        )
    }
}
