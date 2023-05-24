import React, { Component } from 'react'

class Updating2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name2: this.props.name
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedSateFromPops ar ecalled')
    if (props.name !== state.name2) {
      return {name2: props.name}
    }
    return null

  }
  render() {
    return (
      <>
        <h1>{this.state.name2}</h1>
      </>

    )
  }
}

export default Updating2