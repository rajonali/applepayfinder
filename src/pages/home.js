import React, { Component } from 'react';

import MapContainer from '../components/mapContainer';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge, InputGroup, InputGroupAddon, Input } from 'reactstrap';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {input:"",places:listedPlacesMockData};
      }
    
    
    handleChange(e){
        this.setState({ input: e.target.value });
    }
    
    componentDidMount(props){
        //console.log(this.state.places);
        //console.log(['das','asda']);
    }
    

    render() {
        return (<div>
              <body style={{margin:10}}>
              <div class="container">
          
          <div class="row">
          
            <div class="col">
            <center>
            <br />
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAKYwzvX26frpBq3Wi_d483YybzulqaLw&callback=initMap"
            async defer></script>
             
        <MapContainer />
              </center>
            </div>

            <div class="col">
            <br />

         <InputGroup>
           <Input onChange={ this.handleChange.bind(this) } />
           <InputGroupAddon addonType="append">
             <Button onClick={this.onClickSearch}  color="secondary"><strong>🔎</strong></Button>
           </InputGroupAddon>
         </InputGroup>
         <br />
         <h1>{this.state.input}</h1>




         {this.state.places.map(p => (<div><Card>
                <CardBody>
                  <CardTitle><strong>{p.name}</strong></CardTitle>
                  <CardSubtitle className="text-muted">{p.address}</CardSubtitle>
                  <br />
                  <Badge class="align-middle" style={{fontSize:'15px'}} color="success">✓ Accepts Apple Pay</Badge>        
                  </CardBody>
              </Card><br /></div>))}

            </div>
          
          </div>
        </div>
              </body>
            </div>
          );
    }
}


const listedPlacesMockData= [
    {
      "name": "Mcdonalds",
      "address": "4979 Jones Creek Rd, Baton Rouge, LA 70817"
    },
    {
      "name": "Taco Bell",
      "address": "15295 George, O'Neal Ln, Baton Rouge, LA 70817"
    }
]

const googlePlacesMockData = [
    {
        "name": "Mcdonalds",
        "address": "4979 Jones Creek Rd, Baton Rouge, LA 70817"
      },
      {
        "name": "Taco Bell",
        "address": "15295 George, O'Neal Ln, Baton Rouge, LA 70817"
      }
]

  
export default Home;