import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Users = () => {
    return (
        <>
            <h2>User page </h2>
            <div>
                <h2>
                    <Link to="/users/1">User 1</Link>
                </h2>
                <h2>
                    <Link to="/users/2">User 2</Link>
                </h2>
                <h2>
                    <Link to="/users/3">User 3</Link>
                </h2>
            </div>

            <Outlet/>
        </>
    )
}

export default Users