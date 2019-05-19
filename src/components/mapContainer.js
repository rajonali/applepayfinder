import React from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCAKYwzvX26frpBq3Wi_d483YybzulqaLw");

export class MapContainer extends React.Component {
  state = { userLocation: { lat: 0, lng: 0 }, loading: true };

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
        console.log(this.state.userLocation);
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    Geocode.fromLatLng("30.406178699999998", "-91.0343297").then(
      response => {
        const address = response.results[0].formatted_address;
        console.log(address);
      },
      error => {
        console.error(error);
      }
    );

    
    if (loading) {
      return null;
    }

    return <Map google={google} initialCenter={userLocation} zoom={10} style={{  width: '95%', height: '95%'}}>
        <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={this.state.userLocation} />

    </Map>;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCAKYwzvX26frpBq3Wi_d483YybzulqaLw"
})(MapContainer);