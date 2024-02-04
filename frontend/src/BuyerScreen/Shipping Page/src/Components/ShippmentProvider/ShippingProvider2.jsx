import React from 'react'
import Leftbar from "./ShippmentProviderLeft"
import Left from "../Assets/left.png"
import Right from "../Assets/right.png"
import clock from "../Assets/Clock.png"
import Help from "../Assets/Help.png"
import RetailStore2 from '../RetailStores/RetailStore2'

const ShippingProvider2 = () => {
  return (
    <div>
         <div className='ShippingHome'>
      
      <div className='flex bg-white ml-60 p-4'>
        <img src={Left} alt="left" />
        <img src={Right} alt="right" />
        <img src={clock} alt="clock" />
        <img className='ml-auto' src={Help} alt="Help" />
      </div>
      <div className='flex'>
      <div className='w-60 h-screen  bg-white my-6 mx-2'>
        <Leftbar/>
      </div>
      <div className='w-1/4 m-6 font-Inter '>
        <div className='ml-auto w-4/5 bg-white p-6 rounded-lg border-2 border-DarkGrey'>
        <h3 className='font-semibold text-xl py-4'>Shipping & Delivery</h3>
        <p className='text-Left_bar_color text-sm'>Choose where you ship and how much you charge for shipping at checkout. Define shipping options specific for your locations.</p>
        </div>
        
      </div>
      <div className=' w-1/2 text-sm'>
      <div className='bg-white mr-auto my-6 rounded-lg border-2 border-DarkGrey rounded-lg'>
         <RetailStore2/>
      </div>
      <div className='bg-white mr-auto my-6 rounded-lg border-2 border-DarkGrey rounded-lg'>
         <RetailStore2/>
      </div>
      </div>
      </div>
    </div>
      
    </div>
  )
}

export default ShippingProvider2
