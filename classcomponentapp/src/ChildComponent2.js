import React, { Component } from 'react'



export default class ChildComponent2 extends Component {
    render() {
        return (
            <>
                

                {/* <button onClick={this.props.callMethod}>Click Me</button> */}
                <button onClick={() => this.props.callMethod('akash')}>Click Me</button>

            </>
        )
    }
}
