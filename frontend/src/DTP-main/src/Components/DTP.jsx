import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Next from "./Assets/Next.png"
import order1 from "./Assets/order1.png"
import order2 from "./Assets/order2.png"
import order3 from "./Assets/order3.png"
import order4 from "./Assets/order4.png"
import order5 from "./Assets/order5.png"
import sad from "./Assets/sad.png"
import happy from "./Assets/happy.png"
import good from "./Assets/good.png"
import best from "./Assets/best.png"
import Downward from "./Assets/Downward.png"

const DTP = () => {
  return (
    <div className='bg-offersBg font-text font-semibold'>
        <Navbar/>
        <div className='flex text-black p-10 font-extrabold'>
            <h3>Home</h3>
            <img src={Next} alt="Next" className='h-6 pt-0.5 px-2'/>
            <h3>Shipping Details</h3>
        </div>
        <div className='flex items-center mx-32 mb-16'>
        <hr className='border-solid border-4 border-black mx-2 flex-grow' />

        <div className='flex justify-between  absolute w-10/12'>
            <img src={order1} alt="order1"/>
            <img src={order2} alt="order2" />
            <img src={order3} alt="order3" />
            <img src={order4} alt="order4" />
            <img src={order5} alt="order5" />
        </div>
        </div>
        <div className='flex justify-between w-10/12 mx-32 mb-4'>
           <p>Order Confirmed</p>
           <p>Order Ready</p>
           <p>Order Shipped</p>
           <p>Out For Delivery</p>
           <p>Delivered</p>
        </div>
        <div className='px-10 py-4'>
        <h1 className='text-black  font-extrabold py-4'>ORDER DETAILS</h1>
        <hr className='border-solid border-[1px] border-black mx-2 '/>
        <div className='flex'> 
            <div className='p-2 font-extralight pr-12 w-1/2'>
                 <p className='font-extrabold py-4'>Customer Name</p>
                 <p>+42 349 490 4005</p>
                 <p className='font-extrabold py-4'>Delivery Address</p>
                 <p>Mr Daniel Izuchukwu Nwoye8,<br /> My Street,Ilassan Lekki,<br /> Lagos 105102Nigeria.</p>
                 <p className='font-extrabold py-4'>Sellers Name</p>
                 <p>Syndicate  Cosmetics and Brand Limited</p>
                 <p className='font-extrabold py-4'>Sellers Support</p>
                 <p>+42 349 490 4005</p>
                 <p>support@syndicate.com</p>

            </div>
            <div class="bg-black w-0.5 "></div>
            <div className='font-extralight w-3/4 py-4 px-6'>
            
                <p className='font-extrabold py-4 text-xl'>How was Your Delivery Experience?</p>
                <div className='flex justify-between pr-52 '>
                   <img src={sad} alt="sad" className='h-3/4'/>
                   <img src={happy} alt="happy" />
                   <img src={good} alt="good" className='h-3/4'/>
                   <img src={best} alt="best" className='h-3/4'/>
                </div>
                <div className='flex justify-between pr-52'>
                   <p>Sad</p>
                   <p>Average</p>
                   <p>Good</p>
                   <p>Best</p>
                </div>
                <div >
                <p className='font-extrabold py-4'>SHIPPING DETAILS</p>
                   <div className='flex border border-1 bg-white  rounded-lg border-black p-4 my-2'>
                    <p className='font-semibold text-sm'> 08.01 AM Sep 18</p>
                    <p className='px-8'><span className='font-extrabold'>Delivered</span><br /> Nairobi, Kenya</p>
                   </div>
                   <div className='flex border border-1 bg-white  rounded-lg border-black p-4 my-2'>
                    <p className='font-semibold text-sm'> 11.03 AM Sep 17</p>
                    <p className='px-8'><span className='font-extrabold'>Out For Delivery</span><br /> Mombasa, Kenya</p>
                   </div>
                   <div className='flex border border-1 bg-white  rounded-lg border-black p-4 my-2'>
                    <p className='font-semibold text-sm'>  5.03 AM Sep 17</p>
                    <p className='px-8'><span className='font-extrabold'>Arrival</span><br /> Mombasa, Kenya</p>
                   </div>
                   <div className='flex border border-1 bg-white  rounded-lg border-black p-4 my-2'>
                    <p className='font-semibold text-sm'> 12.03 PM Sep 16</p>
                    <p className='px-8'><span className='font-extrabold'>Departure </span><br />Lusaka, Zambia</p>
                   </div>
                </div>

                <div >
                <p className='font-extrabold py-4'>OLDER DETAILS</p>
                   <div className='flex border border-1 bg-white  rounded-lg border-black p-4 my-2'>
                    <p className='font-semibold text-sm'> 08.01 AM Sep 18</p>
                    <p className='px-8'><span className='font-extrabold'>PlayStation 5 Console and Controller</span><br /> Delivered</p>
                    <img src={Downward} alt="Downward" className='ml-auto h-1/2 my-auto'/>
                   </div>
                   <div className='flex border border-1 bg-white  rounded-lg border-black p-4 my-2'>
                    <p className='font-semibold text-sm'>  11.03 AM Aug 17</p>
                    <p className='px-8'><span className='font-extrabold'>Sony Speaker</span><br /> Delivered</p>
                    <img src={Downward} alt="Downward" className='ml-auto h-1/2 my-auto'/>
                   </div>
                   <div className='flex border border-1 bg-white  rounded-lg border-black p-4 my-2'>
                    <p className='font-semibold text-sm'>  5.03 AM Aug 17</p>
                    <p className='px-8'><span className='font-extrabold'>Controller</span><br />Delivered</p>
                    <img src={Downward} alt="Downward" className='ml-auto h-1/2 my-auto'/>
                   </div>
                   <div className='flex border border-1 bg-white  rounded-lg border-black p-4 my-2'>
                    <p className='font-semibold text-sm'>  12.03 PM Aug16</p>
                    <p className='px-8'><span className='font-extrabold'>Large Size Women Handbag </span><br />Delivered</p>
                    <img src={Downward} alt="Downward" className='ml-auto h-1/2 my-auto'/>
                   </div>
                </div>


            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default DTP
