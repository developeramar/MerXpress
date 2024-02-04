import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import Deliver from "./Assets/Delivery.png"
import Support from "./Assets/Support.png"
import Return from "./Assets/MoneyBack.png"
import HomeContent from './HomeContent'
import Categories from './Categories'
import CarousalArrow from "./Assets/Carousal_Arrow.png"
import Bg from "./Assets/Bg.png"
import "./Css/Landingpage.css"

const Landingpage = () => {
  return (
    <div className='bg-offersBg font-text font-semibold text-offersColor'>
      <Navbar/>
      <div className='flex justify-center'>
      <div className="flex items-center my-16  bg-white block w-11/12 rounded-2xl bg-[url('./Components/LandingPage/Assets/Bg.png')] bg-cover bg-no-repeat h-5/6 text-white font-heading">
           <div className='bg-black bg-opacity-20 backdrop-blur-2 py-3 pl-3'>
           <a href=""><img src={CarousalArrow} alt="" className='h-1/2 w-1/2'/></a>
           </div>
           <div className='py-16 px-12 '>
           <h1 className='text-7xl m-4'>Get 50% Off</h1>
           
           <p className='text-4xl font-extralight m-4'>on skin care products</p>
           <button className='bg-ShopNow py-2 px-3 rounded-3xl m-4'>SHOP NOW</button>
           </div>
           <div className='bg-black bg-opacity-20 backdrop-blur-2 py-3 pl-3 ml-auto'>
           <a href=""><img src={CarousalArrow} alt="" className='rotate-180 h-1/2 w-1/2'/></a>
           
           </div>
      </div>
      </div>
      <Categories/>
      <HomeContent/>
      <div className='Offer flex justify-center'>
      <div className='my-16 py-14 px-12 bg-white block w-11/12 rounded-2xl'>
           <p>You might ask,</p>
           <h3 className='title text-highlight pt-2'>Why Merxpress?</h3>
           <div className='Offers flex justify-between pt-16'>
            <div className='Deliver Eachoffer pr-4'>
                <img src={Deliver} alt="Deliver" className='w-1/4 h-1/3' />
                <p className='text-highlight font-semibold'>Fast Delivery</p>
                <p className='font-normal'>We make sure that all your deliveries arrive to you in the short time possible</p>
            </div>
            <div className='Support Eachoffer pr-4'>
                <img src={Support} alt="Support" className='w-1/4 h-1/3'/>
                <p className='text-highlight font-semibold'>24/7 Tech Support</p>
                <p className='font-normal'>We will always ready to help our customers whenever they face a problem in our website</p>

            </div>
            <div className='Return Eachoffer pr-4'>
                <img src={Return} alt="Return" className='w-1/4 h-1/3'/>
                <p className='text-highlight font-semibold'>Moneyback Gurantee</p>
                <p className='font-normal'>If your delivered product does not fit the description, you can return the product and get your money back</p>

            </div>

           </div>
      </div>
      
      </div>
      <Footer/>
    </div>
  )
}

export default Landingpage
