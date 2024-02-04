import React ,{ useState,useEffect }from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Components/ShippingHome"
import ShippingDetails from "./Components/DefaultTagToolTip"
import SP1 from "./Components/ShippmentProvider/ShippmentProvider1"
import SP2 from "./Components/ShippmentProvider/ShippingProvider2"

const AllRoutes = () => {
  return (
      <Routes>
         <Route path = "/" element ={<Home />}/>
         <Route path = "/Details" element ={<ShippingDetails />}/>
         <Route path = "/SP1" element ={<SP1 />}/>
         <Route path = "/SP2" element ={<SP2 />}/>
    </Routes>
  )
}

export default AllRoutes
