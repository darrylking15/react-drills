import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask'
import List from "./List"

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      userInput: ''
    }
    this.handleAddInput = this.handleAddInput.bind(this);
  }
  


  handleAddInput(task){
    this.setState({
      list: [...this.state.list, task], 
      
    })
  }
  
  
  
render(){
  return(
    <div className='App'>
      <h2>My Todo list: </h2>
      <NewTask add={this.handleAddInput}/>
      <List tasks={this.state.list}/>
    </div>
    )
  }
}

export default App;
