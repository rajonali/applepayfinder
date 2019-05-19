import React, { Component } from 'react';

import MapContainer from '../components/mapContainer';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge, InputGroup, InputGroupAddon, Input } from 'reactstrap';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {input:"",places:placesData};
      }
    
    
    handleChange(e){
        this.setState({ input: e.target.value });
    }
    
    componentDidMount(props){
        //console.log(this.state.places);
        //console.log(['das','asda']);
        this.arrayToCards();
    }
    
    mappingFunction = p => <li key={p.name}> {p.address}</li>;

    arrayToCards(props){
        this.state.places.map((place) => (
            <p>place.name</p>
        ))
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
             <Button onClick={this.onClickSearch}  color="secondary"><strong>🔎 Search</strong></Button>
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


const placesData = [
    {
      "name": "Mcdonalds",
      "address": "13033 cd"
    },
    {
      "name": "Taco Bell",
      "address": "1343fsd"
    }
]

  
export default Home;