import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Components/DTP"
import Merxclips from "./Components/Merxclips"
import CS from "./Components/CatalogSection"

const Allroutes = () => {
  return (
    <div>
         <Routes>
             <Route path = "/" element ={<Home />}/>
             <Route path = "/merxclips" element ={<Merxclips />}/>
             <Route path = "/CatalogSection" element ={<CS />}/>
         </Routes>
      
    </div>
  )
}

export default Allroutes
