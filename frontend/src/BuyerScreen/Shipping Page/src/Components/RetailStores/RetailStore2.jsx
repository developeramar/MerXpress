import React from 'react'
import Retail from "../Assets/Retail.png"
import Zambia from "./ShippingTo/Zambia.jsx"

import threedots from "../Assets/ThreeDots.png"
import Down from "../Assets/Downward.png"
const RetailStore2 = () => {
  return (
    <div>
        {/* Shipping From  */}
      <div className='font-Inter border-b-2 p-6'>
          <p className='py-3 font-semibold text-Left_bar_color'>Shipping from</p>
          <div className='flex'>
               <img className='border-2 border-gray-300 p-1 h-12 rounded-lg' src={Retail} alt="" />
               <p className='px-4 '><span className='font-semibold pr-3'>Retail Store #2</span> <br /><span className='text-Left_bar_color'>Copenhagen, Denmark</span></p>
               <div className='flex ml-auto'>
               <a href="" className='py-1 px-2 border-2 border-GreyBorder mr-3 h-4/5 rounded-lg'>Connect provider</a>
               <a href="" className='py-1 px-2 border-2 border-GreyBorder h-4/5 rounded-lg'>Add shipping zone</a>
               </div>
          </div>
      </div>
       {/* Shipping To  */}
       <div  className='font-Inter border-b-2 border-DarkGrey p-6 h-52 flex'>
       <p className='py-3 font-semibold text-Left_bar_color'>Shipping to</p>
            <p className='text-grey my-auto mx-auto'>Not covered by any shipping zones.</p>
          </div>


       <div className='flex py-6 px-4'>
                 <p className='px-4 '><span className='font-semibold pr-3'>Not covered by your shipping zones</span><br /><span className='text-Left_bar_color'>236 countries and regions</span></p>
                 <div className='flex ml-auto'>
                 <img className = "p-2" src={threedots} alt="threedots" />
                 <button  className = "h-1/2 p-2"><img src={Down} alt="Down" /></button>
                 
                 </div>
            </div>
      
    </div>
  )
}

export default RetailStore2
