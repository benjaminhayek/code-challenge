import React, { Component } from 'react';
import mockData from '../utils/State-Caps';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomStates: [],
      randomCapital: '',
      status: ''
    }
  }

  componentDidMount(){
    let results = this.dataCleaner()
    this.setState({randomStates: results})
    let capital = results[Math.floor(Math.random()*4)]
    this.setState({randomCapital: capital.capital})
  }

  dataCleaner = () => {
    let states = this.getRandomStates()
    let filtered = states.map(state => {
      return {name: state.name, capital: state.capital, correct: false}
    })
    return filtered
  }

  getRandomStates = () => {
    let stateInfo = Object.values(mockData)
    let fourRandom = []
    for (let i = 0; i < 4; i++) { 
    let randomState = stateInfo[Math.floor(Math.random()*stateInfo.length)]
      fourRandom.push(randomState)
    }
    return fourRandom
  }

  divStyle = {border: '1px solid green'}

  checkCapital = (value) => {
    if(value.capital === this.state.randomCapital) {
      this.setState({status: 'correct'})
    } else {
      this.setState({status: 'incorrect'})
    }
  }

  render() {
    return (
      <div className="App">
        <h1>country game</h1>
        <div>{this.state.randomStates.map(state => <div className={this.state.status === 'correct' ? 'right' : 'wrong'} value={state} onClick={() => this.checkCapital(state)} key={state.name}> {state.name} </div>)} </div>
        <div value={this.state.randomCapital}>{this.state.randomCapital}</div>
      </div>
    );
  }
}

export default App;
