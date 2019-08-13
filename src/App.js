import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Footer from './components/footer';


import {connect} from 'react-redux';

function App(){

  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
        <h1>🍎 Pay <strong>Finder v1</strong></h1>
      </header>
      <Home />
    </div>
  );

}


export default App;
