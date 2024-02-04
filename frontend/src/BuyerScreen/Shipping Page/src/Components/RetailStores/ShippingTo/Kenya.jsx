import React, { useState } from 'react';
import Map from "../../Assets/map.png"
import threedots from "../../Assets/ThreeDots.png"
import Down from "../../Assets/Downward.png"
import Edit from "../../Assets/edit.png"
import trash from "../../Assets/trash.png"

const Kenya = () => {
    const [isExtendedVisible, setIsExtendedVisible] = useState(false);

    const handleToggleExtension = () => {
      setIsExtendedVisible(!isExtendedVisible);
    };
  
  const [isVisible1, setIsVisible1] = useState(false);
  
    const handleToggle1 = () => {
      setIsVisible1(!isVisible1);
    };
    const [isVisible2, setIsVisible2] = useState(false);
  
    const handleToggle2 = () => {
      setIsVisible2(!isVisible2);
    };
    return (
         <div  className='font-Inter border-b-2 border-DarkGrey p-6'>
            <div className='flex'>
                 <img className='border-2 border-gray-300 p-1 h-12 rounded-lg' src={Map} alt="Map" />
                 <p className='px-4 '><span className='font-semibold pr-3'>Kenya</span><br /><span className='text-Left_bar_color'>2 shipping options . 1 return option</span></p>
                 <div className='flex ml-auto'>
                 <img className = "p-2" src={threedots} alt="threedots" />
                 <button onClick={handleToggleExtension} className = "h-1/2 p-2"><img src={Down} alt="Down" /></button>
                 
                 </div>
            </div>
            {isExtendedVisible && (
          <div className='Extended py-6 relative'>
            <p className='py-3 font-semibold text-Left_bar_color '>Shipping options</p>
            <div className='flex border-2 border-DarkGrey rounded-lg p-3 mb-2 '>
                 <p className='px-4 '><span className='font-semibold pr-3'>Free Shippings - GLS Parcel Shop (GLS Pakkeshop)</span><br /><span className='text-Left_bar_color'>2 to 8 business days . Min. subtotal: EUR, USD</span></p>
                 <div className='flex ml-auto'>
                 <button className="py-1 px-2 border-2 border-GreyBorder mr-3 h-4/5 rounded-lg flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full"></div><span className="ml-1">Store</span></button>
                 <button onClick={handleToggle1}><img className = "p-2" src={threedots} alt="threedots" /></button>
                 {isVisible1 && (
          <div className='Extended absolute right-0 ml-12 mt-12 bg-white p-2 border-2 border-DarkGrey rounded-lg'>
            {/* Your extended content goes here */}
            <a className='p-1 flex font-medium flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-2 h-6" src={Edit} alt="Edit" />Edit shipping option</a>
            <a className='p-1 flex font-medium flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-2 h-6 text-Red" src={trash} alt="trash" />Delete shipping zone</a>
          </div>
        )}
                 </div>
            </div>
            <div className='flex border-2 border-DarkGrey rounded-lg p-3  mb-2'>
                 <p className='px-4 '><span className='font-semibold pr-3'>GLS Parcel Shop (GLS Pakkeshop)</span><br /><span className='text-Left_bar_color'>1 to 3 business days . Min. subtotal: €50 EUR</span></p>
                 <div className='flex ml-auto'>
                 <button className="py-1 px-2 border-2 border-GreyBorder mr-3 h-4/5 rounded-lg flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full"></div><span className="ml-1">Store</span></button>
                 <button onClick={handleToggle2}><img className = "p-2" src={threedots} alt="threedots" /></button>
                 {isVisible2 && (
          <div className='Extended absolute right-0 ml-12 mt-12 bg-white p-2 border-2 border-DarkGrey rounded-lg'>
            {/* Your extended content goes here */}
            <a className='p-1 flex font-medium flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-2 h-6" src={Edit} alt="Edit" />Edit shipping option</a>
            <a className='p-1 flex font-medium flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-2 h-6 text-Red" src={trash} alt="trash" />Delete shipping zone</a>
          </div>
        )}
                 </div>
            </div>
          </div>
        )}
  
        </div>
    )
  }

export default Kenya
