import React from 'react'
import arrow from "./Assets/Arrow.png"

const Categories = () => {
  return (
    <div>
      <div className='flex justify-center font-text'>
      <div className='w-11/12 rounded-2xl mb-16'>
      <p className='font-text text-black text-xl'>Popular Categories<span className='text-base pl-5 text-offersColor font-normal'>Categories that people love</span></p>
           <div className='flex flex-wrap justify-between pt-16 text-black font-normal mb-4'>
            <div className='Eachoffer eachproduct py-4 border-l-30 border-RedBorder shadow-[7px_7px_9px_3px_rgba(0,0,0,0.06)]'>
                <p className='text-highlight Category'>Clothing and fashion</p>
            </div>
            <div className='Eachoffer eachproduct py-4 border-l-30 border-brownBorder shadow-[7px_7px_9px_3px_rgba(0,0,0,0.06)]'>
                <p className='text-brown Category'>African Products & Exports</p>
            </div>
            <div className='Eachoffer eachproduct py-4 border-l-30 border-PurpleBorder shadow-[7px_7px_9px_3px_rgba(0,0,0,0.06)]'>
                <p className='text-purple Category'>Beauty & Health</p>
            </div>
            <div className='Eachoffer eachproduct  py-4 border-l-30 border-black'>
                <p className='text-black Category'>Phones & Tablets</p>
            </div>
            <div className='Eachoffer eachproduct  py-4 border-l-30 border-GreyBorder shadow-[7px_7px_9px_3px_rgba(0,0,0,0.06)]'>
                <p className='text-Grey Category'>Home & Office</p>
            </div>
            <div className='Eachoffer eachproduct  py-4 border-l-30 border-BlueBorder shadow-[7px_7px_9px_3px_rgba(0,0,0,0.06)]'>
                <p className='text-Blue Category'>Jewelries</p>
            </div>
            <div className='Eachoffer eachproduct py-4 border-l-30 border-GreenBorder shadow-[7px_7px_9px_3px_rgba(0,0,0,0.06)]'>
                <p className='text-green Category'>Gaming Accessories</p>
            </div>
            <div className='Eachoffer eachproduct py-4 border-l-30 border-maroonBorder shadow-[7px_7px_9px_3px_rgba(0,0,0,0.06)]'>
                <p className='text-maroon Category'>TVs & Audio</p>
            </div>
           </div>
           <div className='flex bg-white rounded-3xl w-fit py-2 px-5 text-black shadow-[7px_7px_9px_3px_rgba(0,0,0,0.06)]'>
            <button className='pr-2'>See all categories</button>
            <img className='w-8' src={arrow} alt="arrow" />
           </div>
      </div>
      </div>
    </div>
  )
}

export default Categories
