import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    // let userId = useParams();
    // let id = userId.id;

    let {id} = useParams();

    return (
        <>

            <h1>User Details Page -- {id}  </h1>

        </>
    )
}

export default UserDetails