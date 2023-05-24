import React, { Component } from 'react'

class Myprops extends Component {
  render() {
    return (
      <>
        <h1>My name is {this.props.name} </h1>
        <h1>My age is {this.props.age} </h1>
        {this.props.children}
        <Myprops2/>
      </>
    )
  }
}

export class Myprops2 extends Component {
  render() {
    return (
      <>
        <h1>My props 2 aanother component</h1>
      </>
    )
  }
}

export default Myprops