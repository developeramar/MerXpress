import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import Dummy from "./Assets/Dummy.png"

const AboutUs = () => {
  return (
    <div className='bg-offersBg font-text'>
       <Navbar/>
       <div className='text-black text-center m-8'>

            <h3 className='text-2xl font-extrabold p-4'>About Us</h3>
            <hr className='border-solid border-black'/>
            <h3 className='text-xl font-extrabold p-4'>Our Mission</h3>
            <p>We are committed to sharing the global economy, ensuring everyone has the opportunity to participate.</p>
            <h3 className='text-xl font-extrabold px-4 pb-3 pt-12'>What we offer</h3>
            <div className='flex justify-between'>
                <div className='text-center mx-12 w-1/2'>
                    <h3 className='text-sm font-extrabold'>Online Store</h3>
                    <p className='pb-4'>We're dedicated to offering a wide range of products and services globally, through partnerships for economic balance and universal benefit.</p>
                    <h3 className='text-sm font-extrabold'>Customer Ordering Point</h3>
                    <p  className='pb-4'>We've established ordering points to bridge the digital gap, ensuring accessibility for all, including those in rural and remote areas.</p>
                    <h3 className='text-sm font-extrabold'>Safe Payment</h3>
                    <p  className='pb-4'>Pay with the world’s most popular and secure payment methods.</p>
                    <h3 className='text-sm font-extrabold'>Agents</h3>
                    <p  className='pb-4'>Our agents play key roles in product inspection, ensuring authenticity and expediting clearance for customers.</p>
                </div>

                <div className='text-center mx-12 w-1/2'>
                    <h3 className='text-sm font-extrabold'>Vendors</h3>
                    <p  className='pb-4'>We embrace local and international suppliers, fostering inclusivity and a global marketplace for all vendors.</p>
                    <h3 className='text-sm font-extrabold'>Customer Support</h3>
                    <p  className='pb-4'>To build trust and connection, we offer 24/7 customer care services. We are here to assist with any queries or concerns via email, text, or direct calls.</p>
                    <h3 className='text-sm font-extrabold'>Shipping</h3>
                    <p  className='pb-4'>We partner with local and international shipping firms for swift deliveries, prioritizing speedy product arrival.</p>
                    <h3 className='text-sm font-extrabold'>Storage and Safety</h3>
                    <p  className='pb-4'>For storage and safety, we assume responsibility upon goods' arrival, with delivery points established across regions for customer convenience.</p>
                </div>

            </div>
            <h3 className='text-xl font-extrabold p-12'>Blog</h3>
            <div className='flex justify-between mx-32 mb-32'>
                <div className='text-center w-1/3'>
                   <img src={Dummy} alt="Dummy" className='mx-auto pb-12 px-6'/>
                   <p className='font-bold'>Product Spotlight: Introducing Our Latest Arrival!</p>
                </div>
                <div className='text-center w-1/3'>
                <img src={Dummy} alt="Dummy"className='mx-auto pb-12 px-6' />
                   <p className='font-bold'>Holiday Shopping Guide: The Perfect Gifts for Christmas</p>
                </div>
                <div className='text-center w-1/3'>
                <img src={Dummy} alt="Dummy" className='mx-auto pb-12 px-6'/>
                   <p className='font-bold'>Spotlight on Sustainability: Our Commitment to Eco-Friendly Practices




</p>
                </div>

            </div>
        </div>
       <Footer/>
    </div>
  )
}

export default AboutUs
