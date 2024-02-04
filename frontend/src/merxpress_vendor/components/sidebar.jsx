import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from'../images/ka.jpg'
import { FaSearch,FaShoppingBag, FaBullhorn, FaBell, FaCog,FaBars , FaGift,FaShoppingCart } from 'react-icons/fa';

const Sidebar = () => {
    const [showProductSubMenu, setShowProductSubMenu] = useState(false);

  const handleProductClick = () => {
    setShowProductSubMenu(!showProductSubMenu);
  };
  const totalNotifications = 12;
  return (
    <div className=' text-white w-full  overflow-hidden   hidden  sm:w-1/4  lg:p-4 sm:flex flex-col md:w-1/5 shadow-xl bg-slate-100'>
      {/* Profile Picture */}
      <div className='flex items-center justify-between p-4 mt-2'>
      <div className='flex items-center'>
  <div className='rounded-full border-neutral-900 border-2'>
    <div className='rounded-full w-10 h-10 flex items-center justify-center'>
      <img
        src={profile}
        alt='Profile Picture'
        className='w-9 h-9 rounded-full'
      />
    </div>
  </div>


</div>


  {/* Close Icon */}
  <div className='flex justify-end'>
  <FaBars className='text-black ' />
  </div>
</div>
<p className='text-black text-md md:ml-5 ml-3 font-semibold'>Vendor</p>

      {/* Company Name */}
      <div className=' md:p-4 p-2 text-black'>
      <Link to='/'>   <h1 className='text-2xl  font-bold'>Merx<span className='text-red-600'>Press</span></h1> </Link>
      </div>

      {/* Navigation Links with Icons */}
      <div className='flex-grow'>
  <ul>
    {/* Link 1 */}
    <li className='flex items-center p-3   hover:bg-zinc-300 rounded-md text-black'>
      < FaSearch className='mr-4 sm:hidden md:block' />
      <Link to='/search'>Search</Link>
    </li>

    {/* Link 2 */}
    <li className='flex items-center  hover:bg-zinc-300 rounded-md justify-between p-2 text-black'>
      <div className='flex items-center'>
        <FaBell className='mr-4 sm:hidden md:block' />
        <Link to='/notifications'>
          Notifications 
        </Link>
      </div>

      {totalNotifications > 0 && (
        <span className=' ml-1 text-gray-500'>{totalNotifications}</span>
      )}
    </li>

    {/* Repeat similar structure for other links */}
    {/* Link 3 */}
    <li className='flex items-center hover:bg-zinc-300 rounded-md p-2 text-black cursor-pointer' onClick={handleProductClick} >
            <FaShoppingBag className='mr-4 sm:hidden md:block' />
            <span>Products</span>
           
          </li>

          {/* Submenu for Products Link */}
          {showProductSubMenu && (
            <ul className='ml-6'>
             <li className='flex items-center md:p-2 md:ml-3  text-black hover:bg-zinc-300 rounded-md'>
    <Link to='/addproduct'>Add Product</Link>
</li>

              <li className='flex items-center md:p-2 md:ml-3 text-black hover:bg-zinc-300 rounded-md'>
              <Link to='/productmanagement'>Product Management</Link>
              </li>
              {/* Add more submenu items as needed */}
            </ul>
          )}

    {/* Link 4 */}
    <li className='flex items-center p-2  hover:bg-zinc-300 rounded-md text-black'>
    <FaShoppingCart className='mr-4 sm:hidden md:block' />
    <Link to='/orders'>Orders</Link>
    </li>

    {/* Link 5 */}
    <li className='flex items-center p-2  hover:bg-zinc-300 rounded-md text-black'>
      <FaBullhorn className='mr-4 sm:hidden md:block' />
      <Link to='/Promotions'>Promotions</Link>
    </li>

    {/* Link 6 */}
    <li className='flex items-center p-2  hover:bg-zinc-300 rounded-md text-black'>
      <FaGift className='mr-4 sm:hidden md:block' />
     <Link to='/Promotions'>Advertise</Link>
    </li>

    {/* Link 7 */}
    <li className='flex items-center p-2 hover:bg-zinc-300 rounded-md text-black'>
    <FaCog className='mr-4 sm:hidden md:block' />
     <Link to='/AccountStatement'>Account Statement</Link>
    </li>
  </ul>
</div>
    </div>
  );
};

export default Sidebar;
