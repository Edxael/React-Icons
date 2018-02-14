import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GatherComp from './myApp/00-gather'

class IndexComp extends Component{
    render(){
        return(
            <div>
                <GatherComp/>
            </div>
        )
    }
}

ReactDOM.render(<IndexComp />, document.getElementById('root'))
