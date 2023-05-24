// import React from 'react'

// const EventHandler = (props) => {

//     // function HelloFunction (){
//     //     alert('Hello Brother')
//     // }

//     const HelloFunction = (name) => {
//         alert('Hello ' + name)
//     }

//     return (
//         <>
//             <h1>Event Handler Methods</h1>
//             <input type="button" value='Click' onClick={this.HelloFunction} />
//             <input type="button" value='Click' onClick={() => HelloFunction(props.name)} />
//         </>
//     )
// }

// export default EventHandler




import React, { Component } from 'react'

export default class EventHandler extends Component {

    // Hellofunction(){
    //     alert('hello')
    // }

    render() {
        const Hellofunction=(name)=>{
            alert("hello "+name)
        }
        return (
            <>
                <h1>Event Handler Methods</h1>
                <input type="button" value='Click' onClick={()=>Hellofunction(this.props.name)} />
            </>
        )
    }
}
