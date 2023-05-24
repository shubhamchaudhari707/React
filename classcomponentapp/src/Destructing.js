import React, { Component } from 'react'

// const Destructing = (props) => {
// // const Destructing = ({name, age}) => {
//     let {name, age} = props
//   return (
//     <>
//         <h1>Destructing </h1>
//         <h1>My name is {name} </h1>
//         <h1>My name is {age} </h1>
//     </>
//   )
// }



// class Destructing extends Component {
//     render() {
//         let {name, age} = this.props
//         return (
//             <>
//                 <h1>Destructing </h1>
//                 <h1>My name is {name} </h1>
//                 <h1>My name is {age} </h1>
//             </>
//         )
//     }
// }



class Destructing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            age: this.props.age
        }
    }
    render() {
        let { name, age } = this.state
        return (
            <>
                <h1>Destructing </h1>
                <h1>My name is {name} </h1>
                <h1>My name is {age} </h1>
            </>
        )
    }
}



export default Destructing