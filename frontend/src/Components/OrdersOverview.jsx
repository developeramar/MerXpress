import React from 'react'
import Left from "./Assets/left.png"
import Right from "./Assets/right.png"
import clock from "./Assets/Clock.png"
import Help from "./Assets/Help.png"
import LeftBar from "./Leftbar"
import Inventory from "./Assets/inventory.png"
import Adjustments from "./Assets/adjustments.png"
import Export from "./Assets/export.png"
import Search from "./Assets/search.png"

const OrdersOverview = () => {
  return (
    <div>
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
  <div className='w-3/4 m-8 bg-white rounded-lg font-Inter text-sm'>
    <div className='flex font-bold  px-8 pt-8'>
    <p>Orders</p>
    <p className='text-grey px-4'>Drafts</p>
    <p className='font-medium ml-auto px-4'>All locations</p>
    <img src={Inventory} alt="Inventory" className='border border-3 p-1 rounded-lg'/>

    </div>
       

    <div className='flex my-5  px-8 py-3'>
      <div className='mx-2 p-2 border border-2 rounded-lg flex'>
        <img src={Adjustments} alt="Adjustments"/>
        <p className='px-2'>Filter</p>
      </div>

      <p className='mx-2 p-2 border border-2 rounded-lg'>Complete</p>
      <p className='mx-2 p-2 border border-2 rounded-lg'>Incomplete</p>
      <div className='mx-2 p-2 border border-2 rounded-lg bg-gray flex bg-grey ml-auto'>
        <img src={Search} alt="Search" className='px-3 pt-1 h-5 '/>
        <input placeholder='Find something' className='bg-grey'/>
      </div>

      <div className='p-2 border border-2 rounded-lg flex'>
        <img src={Export} alt="Export" className='h-5'/>
        <p className='px-2'>Export orders</p>
      </div>

    </div>
    
    <hr/>

    <div className='text-grey flex mx-2  px-8 py-3'>
      <p className='w-1/6'>Order</p>
      <p className='w-1/6'>Date</p>
      <p className='w-1/6'>Customer</p>
      <p className='w-1/6'>Channel</p>
      <p className='w-1/4'>Payment status</p>
      <p className='w-1/4 '>Fulfillment status</p>
      <p className='w-1/6'>Total</p>
    </div>

    <hr/>

    <div className='flex mx-2  px-8 py-3'>
      <p className='w-1/6'>#5688</p>
      <p className='w-1/6'>Aug 17, 2:56 PM</p>
      <p className='w-1/6'>Ludvig Rask</p>
      <p className='w-1/6'>Payment status</p>
      <div className='w-1/4  h-6 '>
      <div className='flex border border-2 rounded-lg w-10/12 px-3'>
      <div className='h-2 w-2 rounded-lg bg-red my-auto '></div>
      <p className='my-auto px-3'>Awaits payment</p>
      </div>
      </div>

      <div className='w-1/4  h-6 '>
      <div className='flex border border-2 rounded-lg w-11/12 px-3'>
      <div className='h-2 w-2 rounded-lg bg-red my-auto '></div>
      <p className='my-auto px-3'>Awaits fulfillment</p>
      </div>
      </div>

      <p className='w-1/6'>3,424.50 kr. <span className='text-grey'>DKK</span></p>
    </div>

    <hr/>

    <div className='flex mx-2  px-8 py-3'>
      <p className='w-1/6'>#5688</p>
      <p className='w-1/6'>Aug 17, 2:56 PM</p>
      <p className='w-1/6'>Ludvig Rask</p>
      <p className='w-1/6'>Payment status</p>
      <div className='w-1/4  h-6 '>
      <div className='flex border border-2 rounded-lg w-1/2 px-3'>
      <div className='h-2 w-2 rounded-lg bg-[#10B981] my-auto '></div>
      <p className='my-auto px-3'>Paid</p>
      </div>
      </div>

      <div className='w-1/4  h-6 '>
      <div className='flex border border-2 rounded-lg w-4/6 px-3'>
      <div className='h-2 w-2 rounded-lg bg-[#10B981] my-auto '></div>
      <p className='my-auto px-3'>Shipped</p>
      </div>
      </div>

      <p className='w-1/6'>3,424.50 kr. <span className='text-grey'>DKK</span></p>
    </div>

    <hr/>

    <div className='flex mx-2  px-8 py-3'>
      <p className='w-1/6'>#5688</p>
      <p className='w-1/6'>Aug 17, 2:56 PM</p>
      <p className='w-1/6'>Ludvig Rask</p>
      <p className='w-1/6'>Payment status</p>
      <div className='w-1/4  h-6 '>
      <div className='flex border border-2 rounded-lg w-1/2 px-3'>
      <div className='h-2 w-2 rounded-lg bg-[#10B981] my-auto '></div>
      <p className='my-auto px-3'>Paid</p>
      </div>
      </div>

      <div className='w-1/4  h-6 '>
      <div className='flex border border-2 rounded-lg w-4/6 px-3'>
      <div className='h-2 w-2 rounded-lg bg-[#10B981] my-auto '></div>
      <p className='my-auto px-3'>Shipped</p>
      </div>
      </div>

      <p className='w-1/6'>3,424.50 kr. <span className='text-grey'>DKK</span></p>
    </div>

    <hr/>

    <div className='flex mx-2  px-8 py-3'>
      <p className='w-1/6'>#5688</p>
      <p className='w-1/6'>Aug 17, 2:56 PM</p>
      <p className='w-1/6'>Ludvig Rask</p>
      <p className='w-1/6'>Payment status</p>
      <div className='w-1/4  h-6 '>
      <div className='flex border border-2 rounded-lg w-1/2 px-3'>
      <div className='h-2 w-2 rounded-lg bg-[#10B981] my-auto '></div>
      <p className='my-auto px-3'>Paid</p>
      </div>
      </div>

      <div className='w-1/4  h-6 '>
      <div className='flex border border-2 rounded-lg w-4/6 px-3'>
      <div className='h-2 w-2 rounded-lg bg-[#10B981] my-auto '></div>
      <p className='my-auto px-3'>Shipped</p>
      </div>
      </div>

      <p className='w-1/6'>3,424.50 kr. <span className='text-grey'>DKK</span></p>
    </div>

    <hr/>

    <div className='flex mx-2  px-8 py-3'>
      <p className='w-1/6'>#5688</p>
      <p className='w-1/6'>Aug 17, 2:56 PM</p>
      <p className='w-1/6'>Ludvig Rask</p>
      <p className='w-1/6'>Payment status</p>
      <div className='w-1/4  h-6 '>
      <div className='flex border border-2 rounded-lg w-1/2 px-3'>
      <div className='h-2 w-2 rounded-lg bg-[#10B981] my-auto '></div>
      <p className='my-auto px-3'>Paid</p>
      </div>
      </div>

      <div className='w-1/4  h-6 '>
      <div className='flex border border-2 rounded-lg w-4/6 px-3'>
      <div className='h-2 w-2 rounded-lg bg-[#10B981] my-auto '></div>
      <p className='my-auto px-3'>Shipped</p>
      </div>
      </div>

      <p className='w-1/6'>3,424.50 kr. <span className='text-grey'>DKK</span></p>
    </div>

    <hr/>



   

    
    
  </div>
  </div>
      
    </div>
  )
}

export default OrdersOverview
