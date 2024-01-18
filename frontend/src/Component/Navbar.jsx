 import React from 'react';
import Cart from "./Assets/cart.png";
import Category from "./Assets/Catogories.png";
import Search from "./Assets/search.png";
import Arrow from "./Assets/Arrow.png";

const Navbar = () => {
  return (
    <div>
      {/* Your existing code for the first Navbar component */}
      <div className='bg-navbar font-text text-white'>
        <div className='flex-row py-6 px-2 font-semibold'>
          <h3 className='title font-heading'>Merx<span className='text-highlight'>press</span></h3>
          <p>About us</p>
          <p>Help</p>
          <div className="flex bg-white rounded-3xl w-2/5">
            <input type="text" className='w-96 mx-8 font-normal' placeholder='Search for desired product'/>
            <div className="flex mx-auto py-4 justify-end">
               <img src={Search} alt="Search" className='h-5/6 w-1/2'/>
            </div>
          </div>
          
          <div className="dropdown relative inline-block">
            <button className="flex text-white p-4 text-base justify-center font-bold"> US <img src={Arrow} alt="Arrow" className='h-1/4 w-1/4 my-auto mx-2'/></button>
            <div className="dropdown-content absolute bg-drop-down-bg absolute hidden z-1 hover:block">
              <a className='dropdown_link' href="#">Link 1</a>
              <a className= "dropdown_link" href="#">Link 2</a>
              <a className= "dropdown_link" href="#">Link 3</a>
            </div>
          </div>

          <p className="font-light">My Account</p>
          <div className='flex items-center'>
            <img src={Cart} alt="Cart" className='w-1/4 h-4/12'/>
            <p className="px-2 font-light">Cart(0)</p>
          </div>
        </div>

        <div className='flex-row px-16 py-6 w-3/5 font-light'>
          <div className ="flex items-center">
            <img src={Category} alt="Category" className="w-6 h-1/5"/>
            <p className='px-3'>All Categories</p>
          </div> 
          <p className ="text-highlight">Sell on Merxpress</p>
          <p className ="text-highlight">Top Deals</p>
          <p>Marketplace</p>
          <p>Merx Clips</p>
          <p>Blog</p>
        </div>
      </div>

      {/* Your existing code for the second Navbar component */}
      <div>
        {/* ... (existing code) */}
      </div>
    </div>
  );
}

export default Navbar; 
