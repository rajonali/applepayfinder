import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
    render() {
        return (
            <div className="App-footer">

<div>
               <a href="https://twitter.com/rajonali1" class="fab fa-twitter" style={{margin: "10px"}}></a>
               <a href="https://github.com/rajonali?tab=repositories" class="fab fa-github" style={{margin: "10px"}}></a>
               <a href="https://www.linkedin.com/in/rajonali1/" class="fab fa-linkedin-in" style={{margin: "10px"}}></a>
               </div>

               <p style={{fontFamily:'helvetica', fontSize:15, alignItems:'center'}}>© Copyright Tasnim Ali 2019</p>

            </div>
        );
    }
}

export default Footer;