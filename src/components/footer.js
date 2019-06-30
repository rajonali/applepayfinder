import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {connect} from 'react-redux';
import { selectLocation } from '../js/actions/index'


class Footer extends Component {

constructor(props){
    super(props);
    this.selectLocation = this.selectLocation.bind(this);
}

    selectLocation(){
        this.props.onUpdateLocation({SELECT_LOCATION:"13033 Carrington Place Ave"});
    }


    render() {
        return (
            <div className="App-footer">

<div>
               <a href="https://twitter.com/rajonali1" class="fab fa-twitter" style={{margin: "10px"}}></a>
               <a href="https://github.com/rajonali?tab=repositories" class="fab fa-github" style={{margin: "10px"}}></a>
               <a href="https://www.linkedin.com/in/rajonali1/" class="fab fa-linkedin-in" style={{margin: "10px"}}></a>
               </div>

               <p style={{fontFamily:'helvetica', fontSize:15, alignItems:'center'}}>©  Copyright Tasnim Ali 2019</p>


            </div>
        );
    }
}


const mapStateToProps = state => ({
    SELECT_LOCATION: state
  });
  
  
  const mapActionsToProps = {
   onUpdateLocation: selectLocation
  }
  
  export default connect(mapStateToProps, mapActionsToProps)(Footer);
  