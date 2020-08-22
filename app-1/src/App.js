import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      userInput: ''
    }
  }

 
handleChange(val){
  this.setState({userInput: val})
}

render() {
  return(
    <div>
      <input onChange={(e)=> this.handleChange(e.target.value) }></input>
  <p>{this.state.userInput}</p>
    </div>
  )
}
}

export default App;
