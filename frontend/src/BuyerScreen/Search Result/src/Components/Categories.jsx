import React from 'react'
import scent from "./Assets/Cent.png"
import Next from "./Assets/Next.png"
import LeftArrrow from "./Assets/LeftArrow.png"
import RightArrow from "./Assets/RightArrow.png"
import fullstar from "./Assets/FullStar.png"
import hallowstar from "./Assets/HallowStar.png"
import hb1 from "./Assets/hb1.png"
import hb2 from"./Assets/hb2.png"
import hb3 from "./Assets/hb3.png"
import hb4 from "./Assets/hb4.png"
import hb5 from "./Assets/hb5.png"
import hb6 from "./Assets/hb6.png"
import hb7 from "./Assets/hb7.png"
import hb8 from "./Assets/hb8.png"
import hb9 from "./Assets/hb9.png"
import hb10 from "./Assets/hb10.png"
import hb12 from "./Assets/hb12.png"
import hb13 from "./Assets/hb13.png"

const Categories = () => {
  return (
    <div>
      <div className='justify-center font-normal'>
      <div className='flex bg-white p-3 mt-2 mb-4'>
      <p className='font-text text-black text-xl font-bold'>Handbags Stores<br/> <span className='text-base font-normal'>245 Found</span></p>
      <div className='ml-auto flex px-6 py-4'>
        <p className='pr-3'>1/120</p>
        <img src={LeftArrrow} alt="LeftArrrow" className='pr-2 '/>
        <img src={RightArrow} alt="RightArrow" />
      </div>
      </div>
       
           <div className='flex justify-between '>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb1} alt="hb1"  className="rounded-t-2xl "/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4 font-normal'>The Drop Koko Chain Strap Flap Bag</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb2} alt="hb2"  className="rounded-t-2xl"/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'> Michael Kors Drop</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb3} alt="hb3"  className="rounded-t-2xl"/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Montana  Shoulder Leather Tote Bag Top Handbag</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            </div>

            <div className='flex justify-between'>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb4} alt="hb4"  className="rounded-t-2xl"/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Women Shoulder Bags Tote Satchel Hobo 3pcs Purse set</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb5} alt="hb5"  className="rounded-t-2xl"/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Wrangler Hobo Bags for Women Vegan Leather Handle</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb6} alt="hb6"  className="rounded-t-2xl"/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Calvin Klein Gabrianna Bubble Lamb North/South key</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            </div>

            <div className='flex justify-between'>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb7} alt="hb7"  className="rounded-t-2xl"/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Women Fashion Handbags Wallet Tote Bag Shoulder</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb8} alt="hb8"  className="rounded-t-2xl"/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>YZAOLL Purses for Women Faux Leather  Tote Satchel</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb9} alt="hb9"  className="rounded-t-2xl"/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Colorblock Clutch Handbags Casual Crochet Bag purse</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            </div>

            <div className='flex justify-between'>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb10} alt="hb10"  className="rounded-t-2xl"/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>Montana West Crossbody Bags Designe Bucket Strap</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb12} alt="hb12"  className="rounded-t-2xl"/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'> Large Tote Bags Vegan Leather Satchel Hobo 2pc set</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            <div className=' Eachoffer eachproduct border-2 border-[#00000033] w-1/3'>
                <img src={hb13} alt="hb13"  className="rounded-t-2xl"/>
                <hr className='border-solid border-gray-300'/>
                <p className='font-product_detail text-xl pt-6 pb-2 px-4'>TANTIUE Crossbody Bags  Multi-Function Shoulder</p>
                <div className='flex pb-2 px-4'>
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={fullstar} alt="fullstar" />
                    <img src={hallowstar} alt="hallowstar" />
                    <img src={hallowstar} alt="hallowstar" />
                </div>
                <p className='font-text text-offersColor font-normal px-4'><span className='line-through text-base'>$ 5.99</span><span className='text-black font-bold text-lg pl-4'>$3.99</span></p>
            </div>
            </div>

            <div className='flex justify-between my-6'>
            <div>
            </div>
            <div className='flex w-1/2'>
        <a href=""><img src={Next} alt="Next" className='transform rotate-180'/></a>
        <p className='whitespace-break-spaces px-4 text-2xl text-product_detail font-normal'>1        2        3       4        5...      300</p>
        <a href=""><img src={Next} alt="Next" /></a>
      </div>
            <div>
                
            </div>
            </div>
           
      </div>
    </div>
  )
}

export default Categories
