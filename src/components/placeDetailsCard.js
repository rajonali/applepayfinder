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




class PlaceDetailsCard extends Component {

    
    constructor(props) {
        super(props);
    }

    onClickReview = () => {
        console.log("SUBMITTED" + this.props.locationName);

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
