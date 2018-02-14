import React, { Component } from 'react'
import './style.css'

import FaBeer from 'react-icons/lib/fa/beer'
import Youtube from 'react-icons/lib/fa/youtube'
import Icon1 from 'react-icons/lib/fa/black-tie'
import Icon2 from 'react-icons/lib/go/mark-github'
import Icon3 from 'react-icons/lib/fa/briefcase'

export default class extends Component{
    render(){
        
        return(
            <div>
                <h1>Examples of Icons in React.js</h1>
                <h3>Icons Here</h3>
                
                <a href="https://www.youtube.com/" target="_blank"><Youtube size={30}/></a>
                <FaBeer size={30} color='rgb(233, 189, 136)' style={ { backgroundColor: "gray", border: "1px solid black", margin: "9px", padding: "4px" } } />
                <hr/><br/>
                
                <div>
                    by: Edmundo Rubio 
                    <Icon1 size={20} className="iconStyle"/> 
                    <a href="https://github.com/Edxael" target="_blank"><Icon2 size={20} className="iconStyle"/></a>
                    <a href="https://www.mycode.website/" target="_blank"><Icon3 size={20} className="iconStyle"/></a>
                </div>

            </div>
        )
    }
}