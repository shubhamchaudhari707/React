import React, { Component } from 'react'
import ChildComponent2 from './ChildComponent2'


export default class ParentComponent1 extends Component {

    ParentMethod(name) {
        alert("Hello from Parent : " + name)
    }
   

    render() {
        return (
            <>
                <ChildComponent2 callMethod={this.ParentMethod}  />

            </>
        )
    }
}
