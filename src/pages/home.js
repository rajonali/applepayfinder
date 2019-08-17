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
import PlaceDetailsCard from '../components/placeDetailsCard';

import GoogleSuggest from '../components/googleSuggest';

import {connect} from 'react-redux';
import {setLocation} from '../js/actions/index'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listed_places: googlePlacesMockData,
            submitted: false,
            search_value: ""
        };

    }

    componentDidMount(props) {
        //console.log(this.state.places); console.log(['das','asda']);
        console.log(this.props);
    }


    render() {
        return (
            <div>

                <body style={{
                    paddingBottom: '95px'
                }}>
                    <div class="container" style={{}}>

                        <div
                            class="row"
                            style={{
                            flexDirection: 'row'
                        }}>

                            <div
                                class="col-sm-8"
                                style={{
                                height: '500px'
                            }}>
                                <center>
                                    <br/>
                                    <script
                                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAKYwzvX26frpBq3Wi_d483YybzulqaLw&callback=initMap"
                                        async
                                        defer></script>

                                    <MapContainer
                                        style={{
                                        position: 'relative'
                                    }}
                                        placeData={this.state.listed_places} />
                                </center>
                            </div>

                            <div
                                class="col-sm-4"
                                style={{
                                paddingLeft: '30px'
                            }}>
                                <br/>

                                <GoogleSuggest />
                                <PlaceDetailsCard placeDetails={this.state.search_value} ></PlaceDetailsCard>

                                {/*
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


                                    */}

                            </div>

                        </div>
                    </div>
                </body>
            </div>
        );
    }
}



const googlePlacesMockData = [
    {
        "name": "McDonalds",
        "coordinates": {
            lat: "30.403849",
            lng: "-91.053273"
        },
        "address": "4979 Jones Creek Rd, Baton Rouge, LA 70817",
        "hasApplePay": true
    }, {
        "name": "Taco Bell",
        "coordinates": {
            lat: "30.357758",
            lng: "-91.006925"
        },
        "address": "15168 Airline Hwy Suite B, Baton Rouge, LA 70809",
        "hasApplePay": true
    }, {
        "name": "Wendy's",
        "coordinates": {
            lat: "30.408704",
            lng: "-91.015029"
        },
        "address": "15295 George, O'Neal Ln, Baton Rouge, LA 70817",
        "hasApplePay": false
    }
]

const mapStateToProps = state => ({mystate: state});

const mapActionsToProps = {
    onUpdateLocation: setLocation
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
