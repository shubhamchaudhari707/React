import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import "./App.css";

const Navbar = () => {
    return (
        <>

            <nav >
                {/* <Link to="/"> Home </Link> */}
                <NavLink to="/" > Home </NavLink>
                <NavLink to="/products" > Products </NavLink>
                <NavLink to="/about"> About </NavLink>
                <NavLink to="/contact"> Contact </NavLink>
                <NavLink to="/users"> Users </NavLink>
                <NavLink to="/search"> Search </NavLink>
            </nav>



        </>
    )
}

export default Navbar