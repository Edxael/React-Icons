import React, { Component } from 'react'
import FaBeer from 'react-icons/lib/fa/beer'
import Giticon from 'react-icons/lib/go/mark-github'

export default class extends Component{
    render(){
        
        return(
            <div>
                <h3>Icons Here</h3>
                <FaBeer />
                <Giticon size={30} color='aquamarine' style={ { backgroundColor: "gray", border: "1px solid black", margin: "9px", padding: "4px" } } />
            </div>
        )
    }
}