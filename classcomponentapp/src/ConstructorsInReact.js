import React, { Component } from 'react'

export default class ConstructorsInReact extends Component {
    constructor() {
        super()
        console.log("I am constuctor")
    }

    render() {
        return (
            <>
                <h1>My name is {this.props.name} </h1>
                <h1>My age is {this.props.age} </h1>
            </>
        )
    }
}
