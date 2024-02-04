import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Components/LandingPage/Landingpage"
const Allroutes = () => {
  return (
    <div>
         <Routes>
             <Route path = "/" element ={<Home />}/>
         </Routes>
      
    </div>
  )
}

export default Allroutes
