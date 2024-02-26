import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Uleft from "./Assets/Uleft.png"
import Uright from "./Assets/Uright.png"
import arrow from "./Assets/Arrow.png"
import BgTrail from "./Assets/Dummybg.png"
import BgTrail1 from "./Assets/Dummybg1.png"

const Merxclips = () => {
  return (
    <div className='bg-offersBg font-text font-semibold'>
    <Navbar/>
    <div className='my-10 mx-16'>
    <div className='flex  h-8'>
      <div className='flex bg-white p-1 rounded-xl border border-black mx-3'>
         <img src={Uleft} alt="Uleft" className='pr-6 pl-1'/>
         <img src={Uright} alt="Uright" className='px-1'/>
       
         
      </div>
      <div className="flex bg-offersBg rounded-2xl h-10 border border-black border-1 mx-10 w-8/12 ">
      <input type="text" className='w-96 mx-4 font-normal bg-offersBg' placeholder='Search for a video'/>
      <div className="flex ml-auto justify-end">
         <img src={arrow} alt="arrow"/>
      </div>

      </div>
      <button className='bg-[#EB4545] text-white py-2 px-16 rounded-xl h-12'>Download</button>
      

    
    </div>
    <div className='h-16'>
    </div>
    <div className='flex border border-[#D5CECE] border-2 h-[580px]'>

    <div className="flex p-4 w-8/12">
      <div className="text-center w-full">
        <div className=" scroll h-full overflow-x-hidden overflow-y-auto text-justify w-full ">
        <img src={BgTrail} alt="BgTrail" className='w-full p-6'/>
        <img src={BgTrail} alt="BgTrail" className='w-full p-6'/>
        <img src={BgTrail} alt="BgTrail" className='w-full p-6'/>
        
        
        </div>
      </div>
    </div>

    <div className='p-10 flex grid'>
    <h2 className='p-5 mx-auto font-bold text-xl'>Suggested Options</h2>
    <img src={BgTrail1} alt="BgTrail1"/>
    <img src={BgTrail1} alt="BgTrail1"/>
    
    </div>

    </div>

    <div className='flex grid'>
       <h2 className='p-5 mx-auto font-bold text-4xl'>Other Videos</h2>
       <div className="flex flex-wrap">
        
        <div className="w-full w-1/3 px-2 mb-4 flex grid ">
        <img src={BgTrail1} alt="BgTrail1" className='w-full p-2'/>
        <p className='mx-auto font-bold text-lg'>Kids accessories</p>
        </div>

        
        <div className="w-full w-1/3 px-2 mb-4 flex grid">
        <img src={BgTrail1} alt="BgTrail1" className='w-full p-2'/>
        <p className='mx-auto font-bold text-lg'>Electronics</p>
        </div>

       
        <div className="w-full w-1/3 px-2 mb-4  flex grid">
        <img src={BgTrail1} alt="BgTrail1" className='w-full p-2'/>
        <p className='mx-auto font-bold text-lg'>Groceries</p>
        </div>

        <div className="w-full w-1/3 px-2 mb-4 flex grid ">
        <img src={BgTrail1} alt="BgTrail1" className='w-full p-2'/>
        <p className='mx-auto font-bold text-lg'>Footwear</p>
        </div>

        
        <div className="w-full w-1/3 px-2 mb-4 flex grid">
        <img src={BgTrail1} alt="BgTrail1" className='w-full p-2'/>
        <p className='mx-auto font-bold text-lg'>Kitchen accessories</p>
        </div>

       
        <div className="w-full w-1/3 px-2 mb-4  flex grid">
        <img src={BgTrail1} alt="BgTrail1" className='w-full p-2'/>
        <p className='mx-auto font-bold text-lg'>House accessories</p>
        </div>

        <div className="w-full w-1/3 px-2 mb-4 flex grid ">
        <img src={BgTrail1} alt="BgTrail1" className='w-full p-2'/>
        <p className='mx-auto font-bold text-lg'>Beauty and health</p>
        </div>

        
        <div className="w-full w-1/3 px-2 mb-4 flex grid">
        <img src={BgTrail1} alt="BgTrail1" className='w-full p-2'/>
        <p className='mx-auto font-bold text-lg'>Home furnitures and accessories</p>
        </div>

       
        <div className="w-full w-1/3 px-2 mb-4  flex grid">
        <img src={BgTrail1} alt="BgTrail1" className='w-full p-2'/>
        <p className='mx-auto font-bold text-lg'>Mobile phone and computer accessories</p>
        </div>

    </div>
      
    <button className='bg-[#EB4545] text-white py-2 px-16 rounded-xl h-12 mx-auto my-16'>Watch more</button>

    </div>

    </div>
    <Footer/>
      
    </div>
  )
}

export default Merxclips
