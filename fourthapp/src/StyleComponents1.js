import React from 'react'
import './App.css'

const StyleComponents1 = () => {

    let obj = {
        color: 'blue',
        backgroundColor: 'orange',
        fontSize: '50px',
    }

    let obj1 = {
        textAlign: 'center'
    }

    return (
        <>
            <h1 style={{ color: 'red' }}>Hello my name is Inline Css</h1>
            <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>Hello my name is Inline Css</h1>
            <h1 style={obj}>Hello my name is Inline Css</h1>
            <h1 style={{ ...obj, ...obj1 }}>Hello my name is Inline Css</h1>
            <h1 className='container'> * Hello my name is External Css * </h1>

        </>
    )
}

export default StyleComponents1