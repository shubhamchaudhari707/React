import React from 'react'

const Props = (pro) => {
    return (
        <>
            <h1>My Name is {pro.name}</h1>
            <h1>My age is {pro.age}</h1>
            {pro.children}
        </>
    )
}

export default Props