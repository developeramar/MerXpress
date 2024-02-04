import React from 'react'
import Footer from "./Footer"
import Navbar from "./Navbar"
import Categories from './Categories'
import Next from "./Assets/Next.png"
import Downward from "./Assets/Downward.png"

const Home = () => {
  return (
    <div className='bg-offersBg font-text font-semibold'>
        <Navbar/>
        <div className='flex text-black p-10'>
            <h3 >Home</h3>
            <img src={Next} alt="Next" className='h-6 pt-0.5 px-2'/>
            <h3>Shipping Details</h3>
        </div>
        <div className='flex'>
            <div className='w-1/4 text-base font-normal'>
                <div className='bg-white p-4 ml-12 mr-8 mt-2 leading-8'>
                <h1 className='font-bold text-xl font-heading'>Category</h1>
                <p>Crossbody Bags</p>
                <p>Wallet and holders</p>
                <p>Waist Pack</p>
                <p>Suitcase</p>
                <p>Tote Bags</p>
                <div className='flex'>
                <a>View More</a>
                <img src={Downward} alt="Downward" className='h-6 pt-2 px-2'/>
                </div>
                <h1 className='font-bold text-xl font-heading'>Brand</h1>
                <p>Fashion King</p>
                <p>Prada</p>
                <p>Gucci</p>
                <p>Louis Vuitton</p>
                <p>Chanel</p>
                <div className='flex'>
                <a>View More</a>
                <img src={Downward} alt="Downward" className='h-6 pt-2 px-2'/>
                </div>
                <h1 className='font-bold text-xl font-heading'>Price</h1>
                <div className='flex'>
                <p className='border border-solid border-black px-2 rounded-lg'>Min</p>
                <hr className='border-solid border-black w-8 mt-4 mx-2' />
                <p className='border border-solid border-black px-2 rounded-lg'>Max</p>
                </div>
                <h1 className='font-bold text-xl font-heading'>Size</h1>
                <div className='flex'>
                <input type="checkbox" id="myCheckbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-2 mr-2"></input>
                <p>XXLS</p>
                </div>
                <div className='flex'>
                <input type="checkbox" id="myCheckbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-2 mr-2"></input>
                <p>Small</p>
                </div>
                <div className='flex'>
                <input type="checkbox" id="myCheckbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-2 mr-2"></input>
                <p>Medium</p>
                </div>
                <div className='flex'>
                <input type="checkbox" id="myCheckbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-2 mr-2"></input>
                <p>Large</p>
                </div>
                <div className='flex'>
                <input type="checkbox" id="myCheckbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-2 mr-2"></input>
                <p>XL</p>
                </div>
                <h1 className='font-bold text-xl font-heading'>Gender</h1>
                <div className='flex'>
                <input type="checkbox" id="myCheckbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-2 mr-2"></input>
                <p>Male</p>
                </div>
                <div className='flex'>
                <input type="checkbox" id="myCheckbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-2 mr-2"></input>
                <p>Female</p>
               
                </div>
                <button className='bg-ShopNow text-white px-5 py-3 font-bold text-sm rounded-lg mx-16 my-4'>Apply</button>
                </div>
            </div>
            <div className='w-4/6 mr-24'>
        <Categories/>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
