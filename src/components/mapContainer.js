import React from "react";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";

import Geocode from "react-geocode";

const axios = require('axios');


Geocode.setApiKey("AIzaSyCAKYwzvX26frpBq3Wi_d483YybzulqaLw");

export class MapContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sampleLat: " -22.17179",
            sampleLng: " -39.16249",
            userLocation: {
                lat: "",
                lng: ""
            },
            loading: true,
            placeData: [],
            placeData2: []
        };
    }

    componentDidMount(props) {

        axios
            .get('http://localhost:3000/api/location/retrieve')
            .then(response => {
              this.setState({placeData: response.data.result});
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });



        navigator
            .geolocation
            .getCurrentPosition(position => {
                const {latitude, longitude} = position.coords;

                this.setState({
                    userLocation: {
                        lat: latitude,
                        lng: longitude
                    },
                    loading: false,
                    //placeData: this.props.placeData
                });
            }, () => {
                this.setState({loading: false});
            });

        // console.log("lol"+ this.getCoordsFromAddr("4979 Jones Creek Rd, Baton Rouge,
        // LA 70817")) console.log(this.state.placeData);
    }

    //not in use
    getAddrFromCoords(address) {
        console.log("Address: " + address);

        Geocode
            .fromLatLng("30.406178699999998", "-91.0343297")
            .then(response => {
                const address = response.results[0].formatted_address;
                //console.log(address);
            }, error => {
                console.error(error);
            });
    }

    getCoordsFromAddr(address) {
        Geocode
            .fromAddress(address)
            .then(response => {
                var lat = response.results[0].geometry.location['lat'];
                var lng = response.results[0].geometry.location['lng'];

                return { 
                  lat: lat,
                  lng: lng
                }
            }, error => {
                console.error(error);
            })

    }

    render() {

        const {loading, userLocation} = this.state;
        const {google} = this.props;

        if (loading) {
            return null;
        }

        return (
            <Map
                google={google}
                initialCenter={userLocation}
                zoom={13}
                style={{
                width: '100%',
                height: '100%'
            }}>

                {this
                    .state
                    .placeData
                    .map(p => (<Marker
                        key={p.id}
                        title={'The marker`s title will appear as a tooltip.'}
                        name={p.name}
                        position={p.coordinates}/>))}

            </Map>
        )
    }
}

export default GoogleApiWrapper({apiKey: "AIzaSyCAKYwzvX26frpBq3Wi_d483YybzulqaLw"})(MapContainer);