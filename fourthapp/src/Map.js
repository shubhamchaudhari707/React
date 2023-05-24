import React from 'react'

const Map = () => {
    let Students = ['shubham', 'vaibhav', 'akash']
    const numbers = [1, 2, 3, 4]
    let result = numbers.map((num,i)=><h1 key={i}>{num * 2}</h1>)
    return (
        <>
            {Students.map(cvalue => <h1> {cvalue} </h1>)}
            {/* {numbers.map(num => <h1> {num * 2} </h1>)} */}
            {result}
        </>
    )
}

export default Map