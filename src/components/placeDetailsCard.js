import React, { Component } from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardHeader,
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
                <Card style={{margin:10}}>
                    <CardHeader style={{backgroundColor:'#282c34'}}>
<h3 style={{color:"white"}}><strong>{ this.props.locationName }</strong></h3>
                    </CardHeader>
                    <CardBody >
                    <h6>{ this.props.locationAddr }</h6>

                    <div style={{paddingTop:'10px'}}>
                    { this.props.locationVerified ?
                      (<button style={{width:'100%'}} type="button" class="btn btn-outline-success" disabled><strong>Verified</strong></button>
                      ) : (<button type="button" style={{width:'100%'}} onClick={this.onClickReview.bind(this)} class="btn btn-danger"><strong>Submit for review</strong></button>
                      )
                }

</div>
                                    </CardBody>

                
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
