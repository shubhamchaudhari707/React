import React, { Component } from 'react'
import Myprops from './Myprops'
import ConstructorsInReact from './ConstructorsInReact'
import StatesReact from './StatesReact'
import Destructing from './Destructing'
import EventHandler from './EventHandler'
import ParentComponent1 from './ParentComponent1'

class App extends Component {
  render() {
    return (
      <>
        {/* <Myprops name= 'shubham' age ={56}>
          <p>Cilderen 1</p>
        </Myprops>
        
        <Myprops name= 'dhanjay' age ={56}>
          <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>Mango</li>
          </ul>
        </Myprops>
        <Myprops name= 'rahul' age ={56}/> */}

        {/* <ConstructorsInReact name='constructors' age={25} /> */}

        {/* <StatesReact name='Rahul' /> */}

        {/* <Destructing name='Ramshj' age = {25} /> */}

        {/* <EventHandler name = 'Rahul' /> */}

        <ParentComponent1 />

      </>
    )
  }
}

// export const App2 = () => {
//   return (
//     <h1>Functional components</h1>
//   )
// }


export default App