import React from 'react'
import Sidebar from '../components/Sidebar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inventory from './Inventory';
import Location from '../components/location';
import { FaArrowLeft, FaArrowRight, FaClock } from 'react-icons/fa';

import {   AiOutlineQuestionCircle } from 'react-icons/ai';
import InventoryList from '../components/InventoryList';
import TopNavbar from '../components/Topnavbar'

const Mainpage = () => {
  return (
    <Router>
    {/* <div className="sm:hidden"> <TopNavbar/></div> */}
    <div className="flex">     
    <div className=" w-1/5 p-2 pl-3 bg-white flex items-center    border-gray-300 border-b space-x-5"></div>
    <div className=" w-4/5 p-1 pl-3 bg-white flex items-center  justify-between   border-gray-300 border-b space-x-5 ">
      <div className=" flex items-center space-x-5">          
      <div className=" text-slate-400">
        <FaArrowLeft size={20} />
      </div>
      <div className="text-slate-400">
        <FaClock size={20} />
      </div>
      <div className="text-slate-400">
        <FaArrowRight size={20} />
      </div>
      </div>
      <span >
          <AiOutlineQuestionCircle className="text-gray-500 h-6 w-6" />
          </span>
      </div>
      
    </div>
    <div className="sm:hidden"> <TopNavbar/></div>
      <div className='flex'> 
     
        <Sidebar />
       
        
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/Inventory" element={<Inventory/>} />
          <Route path="/InventoryList" element={<InventoryList/>} />
          <Route path="/Location" element={<Location/>} />

          {/* <Route path="/orders" element={<Orders/>} /> */}
          {/* <Route path="/Promotions" element={<Promotions/>} /> */}
          {/* <Route path="/AccountStatement" element={<AccountStatement/>} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default Mainpage
