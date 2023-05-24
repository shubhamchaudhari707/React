import React, { Component } from 'react'

export default class Mounting1 extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      name: 'Shubham'
    }
    console.log('mounting 1 constructor invoke');
  }

  static getDerivedStateFromProps(props, state){
    console.log('mounting 1 getDerivedStateFromProps invoke');
    console.log(props)
    console.log(state)
    return null
  }

  componentDidMount(){
    console.log('mounting 1 componentDidMount inoke');
  }

  render() {
    console.log('mounting 1 render invoke');
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
      </>
    )
  }
}
