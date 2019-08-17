import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Footer from './components/footer';
import Pending from './pages/pending'

import {connect} from 'react-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function App(){

  return (

    <Router>

    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
        
        
        
        <div class="container">
  <div class="row">
        <div class="col-sm"><h1></h1></div>
        <div class="col-sm"><Link style={{textDecoration: "none", color:'white' }} to="/"><h1>🍎 Pay <strong>Finder v1</strong></h1></Link></div>
        <div class="col-sm" style={{}}>
          
          
    

          
          
          <button type="button" class="btn btn-outline-primary"><strong><Link style={{textDecoration: "none"}} to="/pending/">Pending Locations</Link></strong></button>





</div>
        
        </div>
        </div>      
      
      
      </header>

        <Route path="/" exact component={Home} />
        <Route path="/pending/" component={Pending} />

    </div>

    </Router>
  );

}


export default App;
