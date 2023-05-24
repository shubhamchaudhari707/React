import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Errorpage from "./Errorpage";
import Products from "./Products"

import { Route, Routes, useNavigate } from "react-router-dom";
import Shirts from "./Shirts";
import Jeans from "./Jeans";
import Users from "./Users";
import UserDetails from "./UserDetails";
import Search from "./Search";

const App = () => {

  let navigate = useNavigate();

  // const NavigateToAbout =()=>{
  //   navigate("/about")
  // }

  const NavigateTo = (url) => {
    navigate(url)
  }

  const NavigateToWhere = () => {
    let name = 'shubham';
    if (name == 'shubham') {
      navigate("/about")
    }
    else {
      navigate("/contact")
    }
  }

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}  >
          <Route index element={<Shirts />} />
          <Route path="shirts" element={<Shirts />} />
          <Route path="jeans" element={<Jeans />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/users" element={<Users />}  >
          {/* <Route path="/users/1" element={<UserDetails/>}  />
          <Route path="/users/2" element={<UserDetails/>}  />
          <Route path="/users/3" element={<UserDetails/>}  /> */}

          <Route path=":id" element={<UserDetails />} />
        </Route>

          <Route path="search" element={<Search/>} />

        <Route path="*" element={<Errorpage />} />
      </Routes>

      {/* <button onClick={()=>navigate('/about')} >About</button>
       <button onClick={()=>navigate('/contact')} >Contact</button> */}

      {/* <button onClick={NavigateToAbout} >About</button> */}

      {/* <button onClick={()=>NavigateTo("/about")} >About</button>
       <button onClick={()=>NavigateTo("/contact")} >Contact</button> */}

      {/* <button onClick={()=>NavigateToWhere()}>Click Me</button> */}

      {/* <button onClick={()=>navigate(-1)}>Go Back</button> */}

    </>
  )

}

export default App;





