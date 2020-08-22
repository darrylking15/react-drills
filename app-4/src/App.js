import React, { Component } from 'react';
import Login from './Login'

import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      userInput: ''
    }



   
  }





render() {
  return(
    <div>
      <Login/>
    </div>
  )
}


}


export default App;
