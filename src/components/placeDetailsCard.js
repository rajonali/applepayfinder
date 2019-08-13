import React, { Component } from 'react'
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
import { setLocation } from '../js/actions/index'


const axios = require('axios');


class PlaceDetailsCard extends Component {

    
    constructor(props) {
        super(props);
    }

    onClickReview = () => {
        var data = {
            locationAddress: this.props.locationAddr,
            locationName: this.props.locationName,
        }
        //console.log(action.payload)

         axios
          //change location address to action.payload
          .post('http://localhost:3000/api/location/pending_verified', data)
          .then(response => {
            //var newData = response.data[0]
            //console.log("newddata"+JSON.stringify(response.data));
            console.log("SUBMITTED LOCATION FOR VERIFICATION")
            //return newData
          })
          .catch(function (error) {
              console.log(error);
          })


    }
    render() {
        return (
            <div><br />
                <Card style={{padding:10}}>
                    <CardTitle><strong>{ this.props.locationName }</strong></CardTitle>
                    <CardBody>
                    <p>{ this.props.locationAddr }</p>
                    </CardBody>
                    { this.props.locationVerified ?
                      (<button type="button" class="btn btn-outline-success" disabled><strong>Verified</strong></button>
                      ) : (<button type="button" onClick={this.onClickReview.bind(this)} class="btn btn-danger"><strong>Submit for review</strong></button>
                      )

                }
                </Card>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    locationName: state.setLocation.selectedLocation.locationName,
    locationAddr: state.setLocation.selectedLocation.locationAddress,
    locationVerified: state.setLocation.selectedLocation.verified
  });
  
  
const mapActionsToProps = {
}
  
export default connect(mapStateToProps, mapActionsToProps)(PlaceDetailsCard);
