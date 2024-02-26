import React from 'react'
import Left from "./Assets/left.png"
import Right from "./Assets/right.png"
import clock from "./Assets/Clock.png"
import Help from "./Assets/Help.png"
import Hdots from "./Assets/Hdots.png"
import Person from "./Assets/Person.png"
import LeftBar from "./Leftbar"
import Towel from "./Assets/Towel.png"
import Lenin from "./Assets/Lenin.png"
import Inventory from "./Assets/inventory.png"
import Express from "./Assets/Express.png"
import Customer from "./Assets/Customer.png"
import Downward from "./Assets/Downward.png"
import ExportIcon from "./Assets/ExportIcon.png"
import Happy from "./Assets/happy.png"
import atrate from "./Assets/@.png"
import hash from "./Assets/hash.png"
import clip from "./Assets/clip.png"
import Upinput from "./Assets/Upinput.png"
import HalfOrange from "./Assets/HalfCircleOrange.png"
import Tick from "./Assets/Tick.png"




const OrdersFullfillment = () => {
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

<div className='w-1/2  pl-20 my-4 font-Inter text-sm'>
  <div className='bg-white p-4 border border-2 rounded-lg'>
    <div className='flex my-3'>
    <p className='font-bold text-lg'>Order #2416</p>

    <div className='h-8 ml-auto px-2'>
      <div className='flex border border-2 rounded-lg  px-3 h-full'>
      <div className='h-2 w-2 rounded-lg bg-red my-auto '></div>
      <p className='my-auto px-3'>Awaits payment</p>
      </div>
      </div>

      <div className=' h-8 px-2'>
      <div className='flex border border-2 rounded-lg px-3 h-full'>
      <div className='h-2 w-2 rounded-lg bg-red my-auto '></div>
      <p className='my-auto px-3'>Awaits fulfillment</p>
      </div>
      </div>

      <div className='p-1 border border-2 rounded-lg '>
      <img src={Hdots} alt="Hdots"/>
      </div>

    
    </div>


    <p className='text-grey'>Aug 17, 2022, 2:56:31 PM from Default Sales Channel</p>

    <div className='my-6 flex'>
       <div className='rounded-3xl w-10 h-10 bg-grey flex border border-2 mr-4'><p className='mx-auto my-auto'>JK</p></div>
       <div>
       <p className='font-semibold'>James Kariuki</p>
       <p className='text-grey'>jameskariuki@gmail.com</p>
       </div>
      
    
    </div>
  
  </div>


  <div className='bg-white p-4 border border-2 rounded-lg my-2'>
  <div className='flex my-3'>
  <p className='font-bold text-lg'>Summary</p>


    <div className=' h-8 px-2 ml-auto'>
    <div className='flex border border-2 rounded-lg px-3 h-full'>
    <p className='my-auto px-3'>Edit Order</p>
    </div>
    </div>

    <div className='p-1 border border-2 rounded-lg '>
    <img src={Hdots} alt="Hdots"/>
    </div>
  </div>
  <div className='my-6 flex text-grey'>
       <img src={Person} alt="Person"/>
       <div className='px-3 w-1/2'>
       <p className='font-semibold text-black'>Classic Bathrobe <span className='text-grey'>(SKU_CB_CA)</span></p>
       <p >Carmel . Large</p>
       </div>
       <p className="w-1/6">1,345.00 kr.</p>
       <p className='w-10'>1x</p>
       <p className='px-2 text-black  ml-auto'>1,345.00 kr.</p>
       <p>DKK</p>
     
      
    
    </div>

    <div className='my-6 flex text-grey'>
    <img src={Towel} alt="Towel"/>
    <div className='px-3 w-1/2'>
    <p className='font-semibold text-black'>Towels<span className='text-grey'>(SKU_TO)</span></p>
    <p >Coastal Stripes . Bath Towel</p>
       </div>
       <p className="w-1/6">495.00 kr..</p>
       <p className='w-10'>2x</p>
       <p className='px-2 text-black  ml-auto'>990.00 kr.</p>
       <p>DKK</p>
     
      
    
    </div>

    <div className='my-6 flex text-grey'>
       <img src={Lenin} alt="Lenin"/>
       <div className='px-3 w-1/2'>
       <p className='font-semibold text-black'>Linen Bedspread<span className='text-grey'>(SKU_TO_BR)</span></p>
       <p >Sand Grey . 240x260</p>
       </div>
       <p className="w-1/6">1,345.00 kr.</p>
       <p className='w-10'>1x</p>
       <p className='px-2 text-black  ml-auto'>1,345.00 kr.</p>
       <p>DKK</p>
     
      
    
    </div>

    <div className='my-6 flex text-grey'>
       <div className='w-1/2'>
       <p className='text-black'>Subtotal</p>
       </div>
       <p className='px-2 text-black ml-auto'>3680.00 kr.</p>
       <p>DKK</p>
    </div>

    <div className='my-6 flex text-grey'>
       <div className='w-1/2 flex'>
       <p className='text-black'>Discount</p>
       <p className='bg-grey text-sm h-6 my-auto px-2 mx-2 rounded-sm'>SUMMER20</p>
       </div>
       <p className='px-2 text-black ml-auto'>-736.00 kr.</p>
       <p>DKK</p>
    </div>

    <div className='my-6 flex text-grey'>
       <div className='w-1/2'>
       <p className='text-black'>Shipping</p>
       </div>
       <p className='px-2 text-black ml-auto'>100.00 kr.</p>
       <p>DKK</p>
    </div>

    <div className='my-6 flex text-grey'>
       <div className='w-1/2'>
       <p >standard shipping fee</p>
       </div>
       <p className='px-2 text-black ml-auto'>40.00 kr.</p>
       <p>DKK</p>
    </div>

    <div className='my-6 flex text-grey'>
       <div className='w-1/2'>
       <p >Special shipping surcharge</p>
       </div>
       <p className='px-2 text-black ml-auto'>60.00 kr.</p>
       <p>DKK</p>
    </div>

    <div className='my-6 flex text-grey'>
       <div className='w-1/2'>
       <p className='text-black'>Tax @ 12,5%</p>
       </div>
       <p className='px-2 text-black ml-auto'>528.50 kr.</p>
       <p>DKK</p>
    </div>

    <div className='my-6 flex text-grey'>
       <div className='w-1/2'>
       <p className='text-black'>Total</p>
       </div>
       <p className='px-2 text-black ml-auto text-xl'>3,424.50 kr.</p>
       
    </div>



    
    
  </div>

  <div className='bg-white p-4 border border-2 rounded-lg my-2'>
  <div className='flex my-3'>
  <p className='font-bold text-lg'>Fulfillment A</p>

  <div className='h-8 ml-auto px-2'>
    <div className='flex border border-2 rounded-lg  px-3 h-full'>
    <div className='h-2 w-2 rounded-lg bg-red my-auto '></div>
    <p className='my-auto px-3'>Awaits payment</p>
    </div>
    </div>

    <div className=' h-8 px-2'>
    <div className='flex border border-2 rounded-lg px-3 h-full'>
    <p className='my-auto px-1'>Mark as fulfilled</p>
    </div>
    </div>

    <div className='p-1 border border-2 rounded-lg '>
    <img src={Hdots} alt="Hdots"/>
    </div>
  
  </div>
  <p className='text-grey'>Shipping from</p>
  <div className='flex my-3'>
   <img src={Inventory} alt="Inventory" className='border border-2 p-1 rounded-lg'/>
   <p className='mx-3 my-auto'>Zambian Warehouse</p>
  </div>
   
  <p className='text-grey'>Items to be shipped</p>
  <div className='flex my-3'>
   <img src={Person} alt="Person"/>
   <div className='px-3 my-auto text-grey'>
   <p >1x <span className='text-black'>Classic Bathrobe</span> (SKU_TO)</p>
   </div>
  </div>

  <p className='text-grey'>Shipping method</p>
  <div className='flex my-3'>
   <img src={Express} alt="Express" className='border border-2 rounded-lg'/>
   <p className='mx-3 my-auto'>DHL Express Home - 30 kr</p>
  </div>

  </div>


  <div className='bg-white p-4 border border-2 rounded-lg my-2'>
  <div className='flex my-3'>
  <p className='font-bold text-lg'>Fulfillment B</p>

  <div className='h-8 ml-auto px-2'>
    <div className='flex border border-2 rounded-lg  px-3 h-full'>
    <div className='h-2 w-2 rounded-lg bg-red my-auto '></div>
    <p className='my-auto px-3'>Awaits payment</p>
    </div>
    </div>

    <div className=' h-8 px-2'>
    <div className='flex border border-2 rounded-lg px-3 h-full'>
    <p className='my-auto px-1'>Mark as fulfilled</p>
    </div>
    </div>

    <div className='p-1 border border-2 rounded-lg '>
    <img src={Hdots} alt="Hdots"/>
    </div>
  
  </div>
  <p className='text-grey'>Shipping from</p>
  <div className='flex my-3'>
   <img src={Inventory} alt="Inventory" className='border border-2 p-1 rounded-lg'/>
   <p className='mx-3 my-auto'>Zambian Warehouse</p>
  </div>
   
  <p className='text-grey'>Items to be shipped</p>
  <div className='flex my-3'>
   <img src={Towel} alt="Towel"/>
   <div className='px-3 my-auto text-grey'>
   <p >1x <span className='text-black'>Towels</span> (SKU_TO)</p>
   <p>Coastal Stripes . bath towel</p>
   </div>
  </div>

  <p className='text-grey'>Shipping method</p>
  <div className='flex my-3'>
   <img src={Express} alt="Express" className='border border-2 rounded-lg'/>
   <p className='mx-3 my-auto'>DHL Express Home - 30 kr</p>
  </div>

  </div>

  <div className='bg-white p-4 border border-2 rounded-lg my-2'>
  <div className='flex my-3'>
  <p className='font-bold text-lg'>Payments</p>

  <div className='h-8 ml-auto px-2'>
    <div className='flex border border-2 rounded-lg  px-3 h-full'>
    <div className='h-2 w-2 rounded-lg bg-red my-auto '></div>
    <p className='my-auto px-3'>Awaits payment</p>
    </div>
    </div>

    <div className=' h-8 px-2'>
    <div className='flex border border-2 rounded-lg px-3 h-full'>
    <p className='my-auto px-1'>Capture payment</p>
    
    </div>
    </div>
   
  
  </div>
  <div className='flex h-full w-full my-8'>
  <p className='mx-auto my-auto text-grey'>No payments have been captured yet.</p>
  </div>
  </div>

  <div className='bg-white p-4 border border-2 rounded-lg my-2'>
    <h1 className='font-bold text-lg'>Customer</h1>
    <div className='flex my-2'>
      <img src={Customer} alt="Customer" className='border border-2 p-1 rounded-3xl'/>
      <div className='px-4'>
        <p>James Kariuki</p>
        <p className='text-grey'>Nairobi, Kenya</p>
      </div>
      <img src={Hdots} alt="Hdots" className='ml-auto p-3'/>
    </div>

    <div className='my-3'>
      <p className='py-3'>Contact</p>
      <p className='text-grey'>Nairobi <br/> jameskariuki@gmail.com <br/> +254123456789</p>
    </div>

    <div className='my-3'>
      <p className='py-3'>Shipping address</p>
      <p className='text-grey'>Greenview Est hse 96, 4.  <br/> 1620, Kilimani <br/> Nairobi, Kenya</p>
    </div>
  </div>
  

  <div className='bg-white p-4 border border-2 rounded-lg my-2'>
    <h1 className='text-lg font-bold'>Raw order</h1>
    <div className='flex bg-grey p-2 my-3 rounded-lg'>
      <p className='bg-white rounded-2xl p-2 border border-2'>41 items</p>
      
      <img src={ExportIcon} alt="ExportIcon" className='ml-auto h-6 my-auto'/>
      <img src={Downward} alt="Downward"/>
      
    </div>
  </div>

    
</div>




<div className='w-1/4 pl-2 my-2 font-Inter text-sm'> 
  <div className='bg-white p-4 border border-2 rounded-lg my-2'>
  <div className='flex'>
  <h1 className='text-lg font-bold'>Activity</h1>
  <img src={Hdots} alt="Hdots" className='ml-auto p-3'/>
  </div>
  <div className='bg-[#F9FAFB] border border-2 rounded-lg p-3'>
  <input placeholder='Leave a comment' className='bg-[#F9FAFB]'/>
  <div className='flex'>
   <img src={Happy} alt="Happy"/>
   <img src={atrate} alt="atrate"/>
   <img src={hash} alt="hash"/>
   <img src={clip} alt="clip"/>
   <img src={Upinput} alt="Upinput" className='ml-auto'/>
  </div>
  </div>

  
   
  </div>
  <div className='bg-white p-4 border border-2 rounded-lg my-2 font-medium'>
  <div className='flex my-2'>
   <img src={HalfOrange} alt="HalfOrange"/>
   <p className='px-3'>Awaits fulfillment</p>
   <p className='text-grey ml-auto font-base'>3 days ago</p>

  </div>
  <p className='pl-6 text-grey py-3'>Shipping from Denmark Warehouse</p>
  <button className='p-2 w-full border border-2 my-2 font-base'>Mark as fulfilled</button>
  
  </div>
  <div className='bg-white p-4 border border-2 rounded-lg my-2 font-medium'>
  <div className='flex my-2'>
   <img src={HalfOrange} alt="HalfOrange"/>
   <p className='px-3'>Awaits fulfillment</p>
   <p className='text-grey ml-auto font-base'>3 days ago</p>

  </div>
  <p className='pl-6 text-grey py-3 font-base'>Shipping from Germany Warehouse</p>
  <button className='p-2 w-full border border-2 my-2 '>Mark as fulfilled</button>
  
  </div>

  <div className='bg-white p-4 border border-2 rounded-lg my-2 font-medium'>
  <div className='flex my-2'>
   <img src={Tick} alt="tick"/>
   <p className='px-3'>Items allocated</p>
   <p className='text-grey ml-auto font-base'>3 days ago</p>

  </div>
  <p className='pl-6 text-grey py-3 font-base'>2 locations involved</p>
  
  </div>

  <div className='bg-white p-4 border border-2 rounded-lg my-2 font-medium'>
  <div className='flex my-2'>
   <img src={Tick} alt="tick"/>
   <p className='px-3'>Order placed</p>
   <p className='text-grey ml-auto font-base'>3 days ago</p>

  </div>
  <p className='pl-6 text-grey py-3 font-base'>3,424.50 kr. (VISA *5545)</p>
  
  </div>

 

    
</div>




  </div>
      
    </div>
  )
}

export default OrdersFullfillment
