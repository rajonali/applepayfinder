import React, { Component } from 'react'


import axios from 'axios';


export default class Pending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: []
        };

    }


    locations = []


    getLocations(){
        
        axios
        //change location address to action.payload
        .get('http://localhost:3000/api/location/get_pending_verified')
        .then(response => {
          //var newData = response.data[0]
          //console.log("newddata"+JSON.stringify(response.data));
          //console.log(response.data.result[0]["locationName"])
          for (var i=0;i < response.data.result.length; i++  ){
              this.locations.push(response.data.result[i]["locationName"]);
              this.setState({
                locations: this.state.locations.concat(response.data.result[i]["locationName"])
              })
              
          }
        })
        .catch(function (error) {
            console.log(error);
        })

        console.log(this.locations)
        console.log(this.state.locations)


    }


    componentDidMount(props) {
     
        this.getLocations()
    }



    render() {
        return (
            <div>
                <br />
                <h3><i>Pending Locations:</i></h3><br />
                <ul class="list-group">

                {
                                this.locations.map(location => <li class="list-group-item">{location}</li>)
                    
                }
                </ul>

            </div>
        )
    }
}
