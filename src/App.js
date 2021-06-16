import './App.css';
import React, { Component } from 'react';

class App extends Component{
  state = {
    cont:0
  }
  
  componentDidMount() {
    window.addEventListener("keydown", this.keydown)
  }

  keydown = (e) => {
    if (e.key === "ArrowUp"){
      this.positive()
    }
    if (e.key === "ArrowDown"){
      this.negative()
    }
  }

  positive = () => {
    if (this.state.cont < 10){
      this.setState({
        cont: this.state.cont + 1
      })
    }
  }
  
  negative = () => {
    if(this.state.cont > 0) {
      this.setState({
        cont: this.state.cont - 1
      })
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <button onClick={this.positive}>+</button>
        <h1>{this.state.cont}</h1>
        <button onClick={this.negative}>-</button>
      </header>
      </div>
    );
  }
}

export default App;
