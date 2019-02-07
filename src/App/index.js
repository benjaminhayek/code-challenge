import React, { Component } from 'react';
import mockData from '../utils/State-Caps';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomStates: [],
    }
  }

  componentDidMount(){
    this.getRandomStates()
  }

  getRandomStates = () => {
    // let countries = Object.keys(mockData[Object.values(mockData)])
    console.log(mockData)
  }

  render() {
    return (
      <div className="App">
        <h1>country game</h1>
      </div>
    );
  }
}

export default App;
