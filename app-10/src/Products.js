import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Products extends Component{
    constructor(){
        super()
        this.state = {
            products: []
        }
    }
    
    
    
    componentDidMount(){
        axios.get("https://practiceapi.devmountain.com/products").then(res => {
            this.setState({
                products: res.data
            })
        })
    }
    
    
    
    
    
    
    render(){
        let products = this.state.products.map((products, index) => {
            if(products.image){
                return (
                    <Link key={index} to={`details/${products.id}`}>
                    <img  alt='products' width='200' src={products.image}/> 
                    </Link>
                )
            }
        })
        
        return(<div>
                <h1>Products</h1>
                {products}
        </div>)
    }
}