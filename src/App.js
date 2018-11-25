import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from "./containers/appLayout";
import axios from 'axios';

class App extends Component {
  componentDidMount() {
  axios.get (`http://5bfa8769a6af660013f1a0b8.mockapi.io/users`)
  .then((res) => {
    console.log(res.data);
  })
  }
  render() {
    return (
      <div className="App">
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <header className="App-header">
         <p>@deenesh machan design some wire frame for this site</p>
          <p>tambaram org</p>
        
         -------------------------------
        </header>
      </div>
    );
  }
}

export default App;
