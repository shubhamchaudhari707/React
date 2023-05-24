import React from 'react'
import PropTypes from 'prop-types';

const Hii = (props) => {
    return (
        <>
            <h1>name is {props.name} </h1>
            <h1>naem is {props.age} </h1>
            <h1>name is {props.isMarried} </h1>
            <h1>aray is {props.arr[0]} </h1>

            <div>
                <ul>
                    {
                        props.friends.map((value, i, isArray) => {
                            return <li>{value}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

Hii.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    arr: PropTypes.array
}

Hii.defaultProps = {
    name: 'qwe',
    age: 18

}

export default Hii