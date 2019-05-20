import React, {Component} from 'react';

import MapContainer from '../components/mapContainer';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Badge,
    InputGroup,
    InputGroupAddon,
    Input
} from 'reactstrap';

import CaptchaModal from '../components/captchaModal';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            listed_places: googlePlacesMockData,
            submitted: false
        };
    }

    handleChange(e) {
        this.setState({input: e.target.value});
    }

    componentDidMount(props) {
        //console.log(this.state.places); console.log(['das','asda']);
        navigator.geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
      
              this.setState({
                userLocation: { lat: latitude, lng: longitude },
                loading: false,
                placeData: this.props.placeData
              });
            })
    }

    submitForReview(address) {
        console.log({address});
    }


    
    render() {
        return (
            <div>

                <body style={{
                    paddingBottom:'95px'
                }}>
                    <div class="container" style={{
                   
                }}>

                        <div class="row" style={{flexDirection: 'row'}}>

                            <div class="col-sm-8" style={{flex:1}}>
                                <center>
                                    <br/>
                                    <script
                                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAKYwzvX26frpBq3Wi_d483YybzulqaLw&callback=initMap"
                                        async
                                        defer></script>

                                    <MapContainer style={{ position:'relative'}}placeData={this.state.listed_places}/>
                                </center>
                            </div>

                            <div class="col-sm-4" style={{paddingLeft:'30px'}}>
                                <br/>

                              <InputGroup>
                                    <Input
                                        onChange={this
                                        .handleChange
                                        .bind(this)}/>
                                    <InputGroupAddon addonType="append">
                                        <Button onClick={this.onClickSearch} color="secondary">
                                            <strong>🔎</strong>
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                                
                                <h1>{this.state.input}</h1>
<div>
                                {this
                                    .state
                                    .listed_places
                                    .map(p => (
                                        <div>
                                            <Card style={{height:'200px'}}>
                                                <CardBody>
                                                    <CardTitle>
                                                        <h3><strong>{p.name}</strong></h3>

                                                    </CardTitle>
                                                    <CardSubtitle className="text-muted">{p.address}</CardSubtitle>
                                                    <br />
                                                    {p.hasApplePay ?
                                                    <h5 style={{color:'black'}}><Badge color="success"><strong>✓ Accepts Apple Pay</strong></Badge></h5>
                                                    :
                                                    <CaptchaModal address={p.address} submitted={this.state.submitted}/>}
                                                    <p>
                                                             </p>
                                                </CardBody>
                                            </Card><br/></div>
                                    ))}
                                    </div>

                            </div>

                        </div>
                    </div>
                </body>
            </div>
        );
    }
}

const listedPlacesMockData = [
    {
        "name": "McDonalds",
        "coordinates": {lat: 37.759703, lng: -122.428093},
        "address": "4979 Jones Creek Rd, Baton Rouge, LA 70817",
        "hasApplePay": true
    }, {
        "name": "Taco Bell",
        "coordinates": {lat: 54.10941, lng: -12.74833},
        "address": "1601 Airline Dr, Metairie, LA 70001",
        "hasApplePay": false
    }, {
        "name": "Wendy's",
        "coordinates": {lat: -51.62397, lng: -173.95063},
        "address": "15295 George, O'Neal Ln, Baton Rouge, LA 70817",
        "hasApplePay": false
    }, {
        "name": "Bob's Car Shop",
        "coordinates": {lat: -26.11069, lng: 100.19747},
        "address": "2916 Jefferson Hwy, Jefferson, LA 70121",
        "hasApplePay": false
    }, {
        "name": "Sally's Nails",
        "coordinates": {lat: 48.65831, lng: -36.89748},
        "address": "15295 George, O'Neal Ln, Baton Rouge, LA 70817",
        "hasApplePay": false
    }, {
        "name": "CVS Pharmacy",
        "coordinates": {lat: 50.06358, lng: -129.64266},
        "address": "15295 George, O'Neal Ln, Baton Rouge, LA 70817",
        "hasApplePay": false
    }, {
        "name": "VapingCraze",
        "coordinates": {lat: -75.30763, lng: -41.20202},
        "address": "15295 George, O'Neal Ln, Baton Rouge, LA 70817",
        "hasApplePay": false
    }
]

const googlePlacesMockData = [
    {
        "name": "Jack in the Box",
        "coordinates": {lat: -75.30763, lng: -41.20202},
        "address": "11310 Airline Hwy, Baton Rouge, LA 70816",
        "hasApplePay": true
    }, 
    {
        "name": "Sonic Drive-In",
        "coordinates": {lat: 50.06358, lng: -129.64266},
        "address": "11145 Coursey Blvd, Baton Rouge, LA 70816",
        "hasApplePay": false
    },
    {
        "name": "VapingCraze",
        "coordinates": {lat: 48.65831, lng: -36.89748},
        "address": "15295 George, O'Neal Ln, Baton Rouge, LA 70817",
        "hasApplePay": false
    }
]

export default Home;