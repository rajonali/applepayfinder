import React, { Component } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


class MapsBox extends Component {
   
    render() {
        const GoogleMapExample = withGoogleMap(props => (
           <GoogleMap
             defaultCenter = { myPlaces.pos }
             defaultZoom = { 13 }>
            <Marker position={myPlaces.pos} />
            <Marker position={myPlaces.pos2} />
           {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
           </GoogleMap>
        ));
        return(
           <div>
             <GoogleMapExample
               containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
               mapElement={ <div style={{ height: `100%` }} /> }
             />
           </div>
        );
        }
}

const myPlaces = {
    pos : {lat: 30.4128918, lng: -91.03710149999999},
    pos2 : {lat: 30.415022, lng: -91.059167},
}

export default MapsBox;

