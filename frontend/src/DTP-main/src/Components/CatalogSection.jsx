import React from 'react'
import shirt1 from "./Assets/shirt.png"
import shoes1 from "./Assets/Shoes.png"
import scent from "./Assets/Cent.png"
import headset from "./Assets/Headphone.png"
import Joystick from "./Assets/JoyStick.png"
import shirt2 from "./Assets/Shirt2.png"
import keyboard from "./Assets/Keyboard.png"
import shoes2 from "./Assets/Shoes2.png"
import watch from "./Assets/Watch.png"
import monitor from "./Assets/Computer.png"
import shoes3 from "./Assets/Shoes3.png"
import makeupset from "./Assets/MakeupSet.png"
import hat1 from "./Assets/Hat.png"
import jacket from "./Assets/Jacket.png"
import hat2 from "./Assets/Hat2.png"
import shoes4 from "./Assets/Shoes4.png"

const CatalogSection = () => {
  return (
    <div className='bg-offersBg font-text p-10'>
    <div className='flex justify-center'>
      <div className='block w-11/12 rounded-2xl mb-16'>
      <p className='font-text text-black text-xl'>Customers who viewed this item also viewed</p>
           <div className='flex justify-between pt-16 text-black font-normal mb-2'>
            <div className='Deliver Eachoffer eachproduct border-2 border-[#00000033]'>
                <img src={shirt1} alt="shirts"  className="rounded-t-2xl"/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>705 Designer T-shirt</p>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base '>$ 29.99</span><span className='text-black font-bold text-lg pl-4'>$19.99</span></p>
            </div>
            <div className='Deliver Eachoffer eachproduct border-2 border-[#00000033]'>
                <img src={shoes1} alt="shirts"  className="rounded-t-2xl"/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Nike SuperFoam Boost</p>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 69.00</span><span className='text-black font-bold text-lg pl-4'>$50.00</span></p>
            </div>
            <div className='Deliver Eachoffer eachproduct border-2 border-[#00000033]'>
                <img src={scent} alt="shirts"  className="rounded-t-2xl"/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Blue de Chanel</p>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 210.00</span><span className='text-black font-bold text-lg pl-4'>$190.00</span></p>
            </div>
            <div className='Deliver Eachoffer eachproduct border-2 border-[#00000033]'>
                <img src={headset} alt="shirts"  className="rounded-t-2xl" />
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Sony MX300</p>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 299.99</span><span className='text-black font-bold text-lg pl-4'>$279.99</span></p>
            </div>

           </div>
      </div>
      </div>
      <div className='flex justify-center'>
      <div className='block w-11/12 rounded-2xl mb-16'>
      <p className='font-text text-black text-xl'>You may also like</p>
           <div className='flex justify-between pt-16 text-black font-normal mb-2'>
            <div className='Deliver Eachoffer eachproduct border-2 border-[#00000033]'>
                <img src={Joystick} alt="shirts" className='rounded-t-2xl' />
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Sony PlayStation 5</p>
                <p className='font-text text-offersColor font-normal'><span className='line-through text-base'></span><span className='text-black font-bold text-lg pl-4'>$49.99</span></p>
            </div>
            <div className='Deliver Eachoffer eachproduct border-2 border-[#00000033]'>
                <img src={shirt2} alt="shirts" className='rounded-t-2xl' />
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Yahweh Black Tee</p>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 9.00</span><span className='text-black font-bold text-lg pl-4'>$6.99</span></p>
            </div>
            <div className='Deliver Eachoffer eachproduct border-2 border-[#00000033]'>
                <img src={keyboard} alt="shirts" className="rounded-t-2xl" />
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Logitech Chroma Keyboard</p>
                <p className='font-text text-offersColor font-normal'><span className='line-through text-base'></span><span className='text-black font-bold text-lg pl-4'>$19.99</span></p>
            </div>
            <div className='Deliver Eachoffer eachproduct border-2 border-[#00000033]'>
                <img src={shoes2} alt="shirts" className="rounded-t-2xl" />
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Nike Terrafocus Greens</p>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'></span><span className='text-black font-bold text-lg pl-4'>$99.99</span></p>
            </div>
            

           </div>
      </div>
      </div>
    
    </div>
  )
}

export default CatalogSection
