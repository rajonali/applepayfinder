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
import { selectLocation } from '../js/actions/index'




class PlaceDetailsCard extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        };

    }

    render() {
        return (
            <div><br />
                <Card>
                    <CardTitle>{ this.props.userSelected }</CardTitle>
                    <CardBody>
                    <p>{ this.props.userSelected }</p>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    userSelected: state.currLocation.selectedAddr
  });
  
  
const mapActionsToProps = {
}
  
export default connect(mapStateToProps, mapActionsToProps)(PlaceDetailsCard);
