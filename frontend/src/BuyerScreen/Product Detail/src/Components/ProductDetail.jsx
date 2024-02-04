import React from 'react'
import Navbar from "./Navbar"
import BigVideo from "./Assets/BigVideoBox.png"
import js1 from "./Assets/js1.png"
import js2 from "./Assets/js2.png"
import js3 from "./Assets/js3.png"
import minus from "./Assets/minus.png"
import plus from "./Assets/plus.png"
import heart from "./Assets/Heart.png"
import cart from "./Assets/cart.png"


const ProductDetail = () => {
  return (
    <div className='bg-offersBg font-text font-semibold'>
         <Navbar/>
         <div className='flex'>
            <div className='w-1/2 m-12'>
                <img src={BigVideo} alt="BigVideo" />
                <div className='flex'>
                    <img src={js1} alt="js1" className='pr-3 py-3' />
                    <img src={js2} alt="js2" className='pr-3 py-3'/>
                    <img src={js3} alt="js3" className='py-3'/>
                </div>

            </div>
            <div className='w-1/2 m-12'>
                <h2 className='text-sm font-semibold'>SONY PLAYSTATION</h2>
                <p className='text-2xl font-bold pt-6'>PlayStation 5 Console and Controller</p>
                <p className='text-offersColor pr-4 text-3xl my-12 font-thin'><span className='text-black pr-8 '>$499.99</span><span className='line-through text-2xl font-thin'>$ 510.99</span></p>
                <div className='flex my-6'>
                    <p className='mx-auto font-bold'>Storage:<span className='font-thin'>825GB</span> </p>
                    <div className='flex border border-solid border-black rounded-2xl px-2'>
                        <img src={minus} alt="minus" className='h-1 my-auto'/>
                        <p className='px-4'>1</p>
                        <img src={plus} alt="plus" className='h-3 my-auto' />
                    </div>
                </div>
                <p className='font-normal font-lg leading-8 py-6'>The PS5™ console unleashes new gaming possibilities that you never anticipated.
                    Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D audio, and an all-new generation of incredible PlayStation® games.</p>
            <div className='flex'>       
            <p className='ml-auto'><span className='text-[#30B800] text-xl'>4.6</span>/5 Rating  <span className='font-normal underline'>(1,637 reviews)</span></p>
            </div> 
            <div className='flex'>
            <button className='bg-ShopNow text-white px-5 py-3 font-bold text-sm rounded-lg mx-16 my-4 flex'><img src={cart} alt="cart" className='h-5'/><span className='pl-2'>Buy Now </span></button>
            <button className='border border-solid border-red text-highlight px-5 py-3 font-bold text-sm rounded-lg mx-16 my-4 flex'><span className='pr-2'>Add to wishlist </span><img src={heart} alt="heart" className='h-5/6'/></button>
            </div>

            </div>
           

         </div>
    </div>
  )
}

export default ProductDetail
