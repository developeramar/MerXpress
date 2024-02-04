// MobileNavbar.js
import React, { useState } from 'react';
import { FaSearch, FaBell, FaShoppingBag,FaTimes, FaShoppingCart, FaBullhorn, FaGift, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profile from'../Assets/ka.jpg'

const MobileNavbar = ({ onClose }) => {
    const [showProductSubMenu, setShowProductSubMenu] = useState(false);

  const handleProductClick = () => {
    setShowProductSubMenu(!showProductSubMenu);
  };
    
    const totalNotifications = 12;
  return (
    <div className='fixed inset-0 z-50 bg-slate-100 p-4'>
           <div className='flex justify-end'>
        <FaTimes className='text-black cursor-pointer text-xl' onClick={onClose} />
      </div>

<div className='flex items-center justify-between pt-5'>
  <div className='rounded-full border-neutral-900 border-2'>
    <div className='rounded-full w-10 h-10 flex items-center justify-center'>
      <img
        src={profile}
        alt='Profile Picture'
        className='w-9 h-9 rounded-full'
      />
    </div>
  </div>
  <div className=' md:p-4 p-2 text-black '>
      <Link to='/' onClick={onClose}>   <h1 className='text-3xl  font-bold'>Merx<span className='text-red-600'>Press</span></h1> </Link>
      </div>

</div>


  {/* Close Icon */}
  <div className='flex justify-end p-5'>
  </div>
      {/* Add your mobile navigation content here */}
      <ul>
        <li className='flex items-center p-2 text-xl hover:bg-zinc-300 rounded-md text-black'>
          <FaSearch className='mr-4' />
          <Link to='/search' onClick={onClose}>Search</Link>
        </li>
        {/* Add similar structure for other links */}
        {/* ... */}
        <li className='flex items-center text-xl hover:bg-zinc-300 rounded-md justify-between p-2 text-black'>
      <div className='flex items-center'>
        <FaBell className='mr-4 sm:hidden md:block' />
        <Link to='/notifications'onClick={onClose}>
          Notifications 
        </Link>
      </div>

      {totalNotifications > 0 && (
        <span className=' ml-1 text-gray-500'>{totalNotifications}</span>
      )}
    </li>

       

        <li className='flex items-center p-2  text-xl  hover:bg-zinc-300 rounded-md text-black'>
    <FaShoppingCart className='mr-4 sm:hidden md:block' />
    <Link to='/orders'onClick={onClose}>Vendors</Link> 
    </li>
    <li className='flex items-center p-2  text-xl  hover:bg-zinc-300 rounded-md text-black'>
    <FaShoppingCart className='mr-4 sm:hidden md:block' />
    <Link to='/orders'onClick={onClose}>Orders</Link> 
    </li>
    <li className='flex items-center p-2  text-xl  hover:bg-zinc-300 rounded-md text-black'>
    <FaShoppingCart className='mr-4 sm:hidden md:block' />
    <Link to='/orders'onClick={onClose}>Shipping</Link> 
    </li>
    {/* Link 5 */}
    <li className='flex items-center p-2  text-xl hover:bg-zinc-300 rounded-md text-black'>
      <FaBullhorn className='mr-4 sm:hidden md:block' />
      <Link to='/Inventory' onClick={onClose}>Inventory</Link>
    </li>

 
    {/* Link 7 */}
    <li className='flex items-center p-2 hover:bg-zinc-300 text-xl rounded-md text-black'>
    <FaCog className='mr-4 sm:hidden md:block' />
     <Link to='/AccountStatement' onClick={onClose}>Settings</Link>
    </li>
      </ul>
      {/* Close Icon */}
   
    </div>
  );
};

export default MobileNavbar;
