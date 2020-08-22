import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      filteredData: '',
      words: ['darryl', 'King', 'apple', 'bird', 'fish']
        
    }
   
    }
    handleChange(filter){
      this.setState({filteredData: filter})
}

render(){
  let newFilteredData = this.state.words
  .filter((element, index) => {
    return element.includes(this.state.filteredData)
  })
  .map((element, index) => {
  return <h2 key={index}>{element}</h2>
  })
  
  
  return(
    
    <div className="App">
     <input onChange={e => this.handleChange(e.target.value)} type='text'></input>
     {newFilteredData}
    </div>
    
  )
}










}

export default App;
