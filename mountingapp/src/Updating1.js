import React, { Component } from 'react'
import Updating2 from './Updating2'

class Updating1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name1: 'vaibhav'
        }
    }

    changeState=()=>{
        console.log('Button clicked');
        this.setState({
            name1:'prem'
        })
    }

    render() {
        return (
            <>
                
                <Updating2 name={this.state.name1} />
                <button onClick={this.changeState}>Change State</button>
            </>
        )
    }
}


export default Updating1