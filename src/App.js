import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Footer from './components/footer';

function App() {


  
  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <h1>🍎 Pay <strong>Finder v1</strong></h1>
      </header>
      <Home />
      <Footer />
    </div>
  );
}



export default App;
