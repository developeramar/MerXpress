import React from 'react'
import Left from "./Assets/left.png"
import Right from "./Assets/right.png"
import clock from "./Assets/Clock.png"
import Help from "./Assets/Help.png"
import LeftBar from "./ShippingLeftBar"
import threedots from "./Assets/ThreeDots.png"
import FP from "./Assets/FP.png"
import Retail from "./Assets/Retail.png"
import dress from "./Assets/Items.png"
import World from "./Assets/World.png"

const DefaultTagToolTip = () => {
  return (
    <div className='font-Inter text-sm'>
        <div className='flex bg-white ml-60 p-4'>
        <img src={Left} alt="left" />
        <img src={Right} alt="right" />
        <img src={clock} alt="clock" />
        <img className='ml-auto' src={Help} alt="Help" />
      </div>
      <div className='flex'>
      <div className='w-60 h-screen  bg-white my-6 mx-2'>
        <LeftBar/>
      </div>
      <div className='p-6 w-1/2 '>
          <div className='flex'>
              <a href="" className='px-4 mx-2 hover:border-2 border-DarkGrey hover:bg-white inline-block rounded-xl'>Intentory List</a>
              <a href="" className='px-4 mx-2 hover:border-2 border-DarkGrey hover:bg-white inline-block rounded-xl'>Locations</a>
              <a href="" className='px-4 mx-2 hover:border-2 border-DarkGrey hover:bg-white inline-block rounded-xl'>Transfers</a>
              <a href="" className='px-4 mx-2 hover:border-2 border-DarkGrey hover:bg-white inline-block rounded-xl'>Suppliers</a>
              <a href="" className='px-4 mx-2 hover:border-2 border-DarkGrey hover:bg-white inline-block rounded-xl'>Puchase Orders</a>
          </div>
          <div className='flex py-6 px-4 w-full bg-white rounded-lg m-5 border-2 border-DarkGrey'>
                 <p className='px-4 '><span className='font-semibold pr-3 text-xl'>Locations</span><br /><span className='text-Left_bar_color'>Manage the places you stock inventory, fulfill orders, and sell products.</span></p>
                 <div className='flex ml-auto border-2 p-3 border-GreyBorder rounded-lg h-12'>
                    <button>Add Location</button>
                 </div>
            </div>
            <div className='border-2 border-DarkGrey  mx-5 mt-5 w-full rounded-lg'>
            <div className='flex py-6 px-4 bg-white rounded-t-lg  border-b-2 border-DarkGrey'>
               <img className='border-2 border-gray-300 p-1 h-12 rounded-lg' src={Retail} alt="Retail" />
               <p className='px-4 '><span className='font-semibold pr-3'>Default location</span><br /><span className='text-Left_bar_color'>-</span></p>
               <div className='flex ml-auto'>
               <p className='text-DarkGrey bg-grey py-1 px-2 rounded-lg h-3/5 mt-2'> Default</p> 
               <img className = "p-2" src={threedots} alt="threedots" />
               </div>
          </div>
          <div  className='flex py-6 px-6 bg-white h-52 border-b-2 border-DarkGrey'>
       <p className='py-3 font-semibold text-Left_bar_color'>Connected sales channels</p>
            <p className='text-grey my-auto'>Not connected to any sales channels yet</p>
          </div>
        <div className='py-6 px-4 bg-white rounded-lg'>
          <p className='py-4 font-semibold text-Left_bar_color'>Items at this location</p>
        
          <div className='flex '>
               <img className='p-1 h-12 rounded-b-lg' src={dress} alt="dress" />
               <p className='px-4 pt-3'><span className='font-semibold pr-3'>Classic Bathrobe, Poplin sleepwear</span><span className='text-Left_bar_color'>+ 496 more</span></p>
               <div className='flex ml-auto border-2 p-3 border-GreyBorder rounded-lg h-12'>
                    <button>View inventory</button>
                 </div>
          </div>
          </div>
          </div>
      </div>
      

      <div className='w-1/4 mt-10'>
      <div className='border-2 border-DarkGrey  mx-5 mt-5 w-full rounded-lg'>
            <div className='py-6 px-4 bg-white rounded-t-lg'>
               <p className='px-4 '><span className='font-semibold pr-3 text-xl'>Location ranking rules</span><br /><span className='text-Left_bar_color'>Specify your location ranking. Medusa will use you location ranking when fulfilling orders.</span></p>
               
               <button  className='border-2 px-4 mt-4 mx-2 w-full border-GreyBorder rounded-lg h-8 font-medium'>Add new rule</button>
              
          </div>
          <div  className=' px-6 bg-white'>
       <p className='py-3 font-semibold text-Left_bar_color'>Default</p>
       <div className='flex py-2 px-4 rounded-lg  border-2 border-DarkGrey'>
               <img className='border-2 border-gray-300 p-1 h-12 rounded-lg' src={World} alt="World" />
               <p className='px-4 '><span className='font-semibold pr-3'>All regions</span><br /><span className='text-Left_bar_color'>24 regions</span></p>
               <div className='flex ml-auto'>
               <img className = "p-2" src={threedots} alt="threedots" />
               </div>
          </div>
          </div>
        
          <div  className='flex py-6 px-6 bg-white h-44 rounded-b-lg'>
       <p className='font-semibold text-Left_bar_color'>Overrides</p>
            <p className='text-grey my-auto'>No overrides have been added yet.</p>
          </div>
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default DefaultTagToolTip
