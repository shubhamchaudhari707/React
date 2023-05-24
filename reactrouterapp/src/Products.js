import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <h1>Welcome To My Products Page</h1>
      <nav>
        <Link to="shirts">Shirts</Link>
        <Link to="jeans">Jeans</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Products