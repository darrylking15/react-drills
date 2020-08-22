import React, {Component} from 'react'

class NewTask extends Component{
    constructor(){
        super(); 
        this.state = {
            userInput: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
    }




    handleChange(val){
        this.setState({
            userInput: val
        })
    }


    handleAdd(){
        this.props.add(this.state.userInput)
        this.setState({userInput: ''})
    }





    render(){
        return(
            <div>
                <input 
                value={this.state.userInput}
                onChange= {e=> this.handleChange(e.target.value)}
                placeholder= 'Enter New Task'/> 
                <button onClick={this.handleAdd}>
                    Add
                </button>
            </div>
        )
    }
}


export default NewTask