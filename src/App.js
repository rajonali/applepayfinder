import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapsBox from './components/mapsBox';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';



function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1><strong>🍎 Pay Finder v1</strong></h1>
      </header>
      <body style={{margin:10}}>
      <div class="container">
  
  <div class="row">
  
    <div class="col">
    <center>
    <br />

      <MapsBox isMarkerShown />
      </center>
    </div>
  
  
    <div class="col">
    <br />
    <Card>
        <CardBody>
          <CardTitle><strong>Izzo's Illegal Burrito - Bluebonnet</strong></CardTitle>
          <CardSubtitle className="text-muted">4245 Bluebonnet Blvd, Baton Rouge, LA 70809</CardSubtitle>
          <br />
          <Badge class="align-middle" style={{fontSize:'15px'}} color="success">✓ Accepts Apple Pay</Badge>        
          </CardBody>
      </Card>
      <br />
      <Card>
        <CardBody>
          <CardTitle><strong>The Chimes East</strong></CardTitle>
          <CardSubtitle className="text-muted">4019, 10870 Coursey Blvd, Baton Rouge, LA 70816</CardSubtitle>
          <br />
          <Button class="align-middle" style={{fontSize:'15px'}} color="danger"><strong>Submit for review</strong></Button>        
        </CardBody>
      </Card>
      <br />

      <Card>
        <CardBody>
          <CardTitle><strong>California Pizza Kitchen at Perkins Rowe</strong></CardTitle>
          <CardSubtitle className="text-muted">10001 Perkins Rowe, Ste, 110 Perkins Rowe, Baton Rouge, LA 70810</CardSubtitle>
          <br />
          <Badge class="align-middle" style={{fontSize:'15px'}} color="success">✓ Accepts Apple Pay</Badge>        
        </CardBody>
      </Card>

    </div>
  
  </div>
</div>
      </body>
    </div>
  );
}

export default App;
