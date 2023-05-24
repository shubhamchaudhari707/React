import React from 'react'
import { useNavigate } from 'react-router-dom';

const Errorpage = () => {
    let navigate = useNavigate();
  return (
    <>
        <h2>404 - Page Not Found </h2>
        <button onClick={()=>navigate("/")}>Go Previous</button>
    </>
  )
}

export default Errorpage