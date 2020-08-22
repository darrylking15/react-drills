import React, { Component } from 'react'


class Image extends Component{
    constructor(){
        super()
        this.state ={
        
        }
    }

render(){
    return(
        <div>
            <img  alt='cat contflict'src={this.props.url}></img>
            <div >Error 409</div>
        </div>
    )
}




}

export default Image