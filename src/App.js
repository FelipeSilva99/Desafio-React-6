import './App.css';
import React, { Component } from 'react';

class App extends Component{
  state = {
    cont:0
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
        <p>{this.state.cont}</p>
        <button onClick={this.negative}>-</button>
      </header>
      </div>
    );
  }
}

export default App;
