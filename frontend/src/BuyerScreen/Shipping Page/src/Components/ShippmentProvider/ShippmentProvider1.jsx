import React, { useState } from 'react';
import Leftbar from "./ShippmentProviderLeft"
import Left from "../Assets/left.png"
import Right from "../Assets/right.png"
import clock from "../Assets/Clock.png"
import Help from "../Assets/Help.png"
import Cross from "../Assets/Cross.png"
import Down from "../Assets/Downward.png"

const ShippmentProvider1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex font-inter'>
      
      <div className='w-60 h-screen bg-white m-2 flex flex-col'>
         <Leftbar/>
      </div>
      <div className=' bg-white m-2 p-4 text-sm w-full'>
      <div className='flex'>
        <a href=""><img src={Cross} alt="left" /></a>
        <button className='bg-red text-white p-1 px-2 rounded-lg ml-auto'>Connect provider</button>
      </div>
      <div className='mx-auto w-1/2'>
          <h1 className='font-semibold text-xl p-4'>Connect fulfillment provider</h1>
          <p className='px-4 '><span className='font-semibold pr-3'>Fulfillment provider</span> <br /><span className='text-Left_bar_color'>Use carrier or app to calculate rates. Rates are based on your customer’s address.</span></p>
      
      <div className="relative inline-block border-2 m-4 border-GreyBorder w-1/2 rounded-lg">
      <div className='flex ' onTouchMove={() => setIsOpen(!isOpen)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pt-2 px-4 rounded focus:outline-none flex"
      >
        UPS 
      </button>
      <button onClick={() => setIsOpen(!isOpen)} className='ml-auto' ><img src={Down} alt="Down" /></button>
    
      
      {isOpen && (
        <div className="absolute mt-10 w-full rounded-lg border-2 border-DarkGrey">
          <a href="#" className="block px-4 py-2 rounded-t-lg bg-white hover:bg-gray-100">DHL</a>
          <a href="#" className="block px-4 py-2 bg-white bg-gray-100">UPS</a>
          <a href="#" className="block px-4 py-2 rounded-b-lg bg-white hover:bg-gray-100">WebShipper</a>
        </div>
      )}
      </div>
      </div>
      <hr />
      <div className='flex my-10'>
      <p className='px-4 '><span className='font-semibold pr-3'>Services</span> <br /><span className='text-Left_bar_color'>Pick out the services you need for your store further down.</span></p>
      <a href="" className='py-1 px-2 border-2 border-GreyBorder h-4/5 rounded-lg ml-auto'>Add shipping zone</a>
      </div>
    </div>
      </div>
    </div>
  )
}

export default ShippmentProvider1
