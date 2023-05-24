import React from 'react'
import ConditionalRendering2 from './ConditionalRendering2'
import ConditionalRendering3 from './ConditionalRendering3'

const ConditionalRendering1 = () => {

    // let name = 'shubham'
    // if(name == 'shubham'){
    //     return <ConditionalRendering2/>
    // }
    // else{
    //     return <ConditionalRendering3/>
    // }

    // let name= 'shubham'
    // let data;
    // if(name == 'shubham'){
    //     data = <ConditionalRendering2/>
    // }
    // else{
    //     data = <ConditionalRendering3/>
    // }

    // return(
    //     <>{data}</>
    // )

    // ternery operator
    
    // let age = 1;
    // let name = 'shubham';
    // return (
    //      <>
    //         {age >= 18 ? <h1>You can drive</h1> : <h1>You cannot drive</h1>}
    //         {name == 'shubham' ? <ConditionalRendering2 /> : <ConditionalRendering3 />}
    //     </>
    // )


    // Logical && Operator
    let name = 'shubham';
    return (
        <>
            {/* {name == 'shubham' && <h1>True value</h1>} */}
            {name == 'shubham' && <ConditionalRendering2 />}
        </>
    )

}

export default ConditionalRendering1