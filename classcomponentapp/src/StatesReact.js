import React, { Component } from 'react'

export default class StatesReact extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         num:1,
    //         // name:'shubham',
    //         name:this.props.name,
    //         age:25,
    //         surname:'chaudhari'
    //     }
    // }

    // state without constructor
    state = {
        num:1,
        // name:'shubham',
        name:this.props.name,
        age:25,
        surname:'chaudhari'
    }

    changeName(){
        this.setState({
            num:this.state.num + 1,
            name:'Dhanjay',
            age:30,
            surname:'Bhide'
        })
    }

    render() {
        return (
            <>
                <h1>React Class based components </h1>

                <h1> {this.state.num} </h1>
                <h1> {this.state.name} </h1>
                <h1> {this.state.age} </h1>
                <h1> {this.state.surname} </h1>
                <input type="button" value='click' onClick={()=>this.changeName()} />
            </>
        )
    }
}
