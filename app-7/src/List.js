import React, {Component} from 'react'
import Todo from './Todo'



 export default class List extends Component{
    constructor(){
        super()
        this.state = {

        }
    }








render(){
    let list = this.props.tasks.map((element , index) => {
        return <Todo key={index} task={element} />
    
    })
   
        return(
                <div>{list}</div>
    )
}



    











}


