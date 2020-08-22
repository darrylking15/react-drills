import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      userInput: ""
    };

    this.handleAddInput = this.handleAddInput.bind(this);
  }

  
  
  handleInput(val){
    this.setState({userInput: val})
  }
  
  
handleAddInput(){
  this.setState({
    list: [...this.state.list, this.state.userInput],
    userInput: ''
  })
}
  
  
 render(){
  let list = this.state.list.map((element, index) => {
    return <Todo key={index} task={element} />;
  });
  
  return (
     <div className="App">
       <h2> My to-do list: </h2>
      
      
      <div>
      <input value={this.state.userInput} placeholder='Enter New Task!' onChange={e => this.handleInput(e.target.value)} ></input>
      <button onClick={this.handleAddInput} >Add</button>
      </div>
      {list}
     </div>
   );
  }



 }
 
 
 

export default App;
