import React, {Component} from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
 
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


import {connect} from 'react-redux';


import { setLocation, queryLocation} from '../js/actions/index'




const MY_API_KEY = "AIzaSyCAKYwzvX26frpBq3Wi_d483YybzulqaLw" // fake
 
class GoogleSuggest extends React.Component {
    state = {
        search: "",
        value: "",

    }

    componentWillMount(){

    }
    
 
    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
    }
 
    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        //console.log(geocodedPrediction, originalPrediction) // eslint-disable-line
        //this.setState({value: geocodedPrediction.formatted_address})
        //console.log("Address:" + this.state.value)
        //console.log("STATE"+JSON.stringify(this.state));
        console.log(originalPrediction)
        var newObj = {
            name: originalPrediction.description,
            address: geocodedPrediction.formatted_address
        }
        this.props.setLocation(newObj)
        this.props.queryLocation(JSON.stringify(geocodedPrediction.formatted_address))
    }
    
    handleNoResult = () => {
        console.log('No results for ', this.state.search)
    }
 
    handleStatusUpdate = (status) => {
        //console.log(status)
    }
 
    render() {
        const {search, value} = this.state
        return (
            <ReactGoogleMapLoader
                params={{
                    key: MY_API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <ReactGooglePlacesSuggest
                            googleMaps={googleMaps}
                            autocompletionRequest={{
                                input: search,
                                // Optional options
                                // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                            }}
                            // Optional props
                            onNoResult={this.handleNoResult}
                            onSelectSuggest={this.handleSelectSuggest}
                            onStatusUpdate={this.handleStatusUpdate}
                            textNoResults="Invalid location. Please try again" // null or "" if you want to disable the no results item
                            customRender={prediction => (





<div>
                                            <Card style={{height:'150px'}}>
                                                <CardBody>
                                                    <CardTitle>
                                                        <h3><strong>
                                                        
                                                        {prediction
                                        ? prediction.terms[0].value
                                        : "Invalid location"}

                                                        </strong></h3>

                                                    </CardTitle>
                                                    <CardSubtitle className="text-muted">
                                                    {
                                                        //console.log("BUDDA" + JSON.stringify(prediction))
                                                    }
                                                    {prediction
                                        ? prediction.description
                                        : "Please try again"}

                                                    </CardSubtitle>
                                                    <br />
                                                </CardBody>
                                            </Card></div>



                            )}
                        >
                           


<InputGroup>
                                    <Input
                                type="text"
                                value={value}
                                placeholder="Search a location"
                                onChange={this.handleInputChange} />
                                    <InputGroupAddon addonType="append">
                                        <Button onClick={this.onClickSearch} color="secondary">
                                            <strong>🔎</strong>
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                        </ReactGooglePlacesSuggest>
                    )
                }
            />
        )
    }
}

  export default connect(null, { setLocation, queryLocation })(GoogleSuggest);
