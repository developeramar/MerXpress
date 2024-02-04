import React from 'react'
import Search from "../Assets/search.png"
import user from "../Assets/avatar.png"
import bars from "../Assets/bars.png"
import bell from "../Assets/bell.png"
import Promotion from "../Assets/sale.png"
import gift from "../Assets/gift.png"
import price from "../Assets/cash.png"
import Customer from "../Assets/users.png"
import cart from "../Assets/cart.png"
import tag from "../Assets/tag.png"
import Inventory from "../Assets/inventory.png"
import settings from "../Assets/settings.png"

const ShippmentProviderLeft = () => {
  return (
    <div className='py-8 px-2.
    text-Left_bar_color m-6'>
      <div className='flex'>
       <img className= "border-2 border-gray-300 rounded-full p-1 h-12 " src={user} alt="user" />
       <img className='ml-auto h-1/2 pt-2' src={bars} alt="bars" />
       </div> 
       <p className='px-1 font-Inter font-semibold text-sm pt-3'>Admin</p>
       <h1 className='px-1 font-Manrope font-bold text-xl text-black py-3'>Tekla Fabrics</h1>
     <a className='py-2 px-1 flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-6 w-15 h-5 pt-0.5" src={Search} alt="Search" />Search</a>
     <a className='py-2 px-1 flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-6 w-15 h-5 pt-0.5" src={bell} alt="bell" />Notifications</a>
     <a className='py-2 px-1 flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-6 w-15 h-5 pt-0.5" src={tag} alt="Vendor" />Products</a>
     <a className='py-2 px-1 flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-6 w-15 h-5 pt-0.5" src={Customer} alt="Customer" />Customers</a>
     <a className='py-2 px-1 flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-6 w-15 h-5 pt-0.5" src={cart} alt="cart" />Orders</a>
     <a className='py-2 px-1 flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-6 w-15 h-5 pt-0.5" src={Inventory} alt="Inventory" />Inventory</a>
     <a className='py-2 px-1 flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-6 w-15 h-5 pt-0.5" src={Promotion} alt="Inventory" />Promotions</a>
     <a className='py-2 px-1 flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-6 w-15 h-5 pt-0.5" src={gift} alt="Inventory" />Gift Cards</a>
     <a className='py-2 px-1 flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-6 w-15 h-5 pt-0.5" src={price} alt="Inventory" />Pricing</a>
     <a className='py-2 px-1 flex text-sm hover:bg-GreyBorder inline-block rounded-lg'><img className="pr-6 w-15 h-5 pt-0.5" src={settings} alt="settings" />Settings</a>
   </div>
  )
}

export default ShippmentProviderLeft
