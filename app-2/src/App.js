import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      data: [1,2,5, true, false, "king", 'darryl']
    }
  }

  render(){
    let dataToDisplay = this.state.data.map((element, index) => {
    return <h2 key={index}>{element}</h2>;
    });
   
  return <div className= 'App'>{dataToDisplay}</div>
    
    
  }











}




export default App;
