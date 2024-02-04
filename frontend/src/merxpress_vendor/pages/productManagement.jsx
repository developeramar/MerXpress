import React, { useState } from 'react';
import ProductDetailsContainer  from '../components/displayproducts'
const ProductManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [productSID, setProductSID] = useState('');
  const [sellerSKU, setSellerSKU] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    // Add any additional logic you need when a status is selected
  };

  const statusOptions = [
    'Select',
    'All',
    'Pending',
    'NotReady',
    'Approved',
    'Rejected',
    'Active',
    'Inactive',
    'Deleted',
  ];

  const handleProductSIDChange = (event) => {
    setProductSID(event.target.value);
  };

  const handleSellerSKUChange = (event) => {
    setSellerSKU(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const clearFilters = () => {
    setSelectedStatus('all');
    setProductSID('');
    setSellerSKU('');
    setSelectedCountry('');
  };

  return (
    <div className='text-black w-full bg-neutral-200 h-screen  sm:w-3/4 md:w-4/5  p-0.5 md:p-4'>
      <h1 className='font-bold p-2 pb-8 text-xl'>Product Management</h1>

      {/* Filter Section */}
      <div className='flex flex-col  p-3 pb-2 space-y-3 mb-4 bg-white h-1/3 rounded-xl'>
        
        {/* Filter Heading */}
        <h2 className='font-bold text-lg'>Filters</h2>

        {/* Dynamic Status Buttons */}
        {/* <div className='flex space-x-1 lg:space-x-4'>
  <span className='font-bold '>Status:</span>
  {statusOptions.map((status) => (
    <button
      key={status}
      onClick={() => handleStatusChange(status)}
      className={`${
        selectedStatus === status ? 'bg-red-500 text-white' : 'bg-neutral-200 '
      } lg:p-0.5 text-xs md:text-sm font-medium w-full rounded-full hover:bg-red-500 hover:text-white`}
    >
      {status}
    </button>
  ))}
</div> */}
<div className='flex lg:space-x-4 sm:flex-col sm:space-y-2'>
 

  {/* Buttons Above sm Breakpoint */}
  <div className='hidden sm:flex space-x-1 lg:space-x-4'>
  <span className='font-bold'>Status:</span>

  {statusOptions.map((status, index) => (
    index > 0 ? ( // Check if it's not the first button
      <button
        key={status}
        onClick={() => handleStatusChange(status)}
        className={`${
          selectedStatus === status ? 'bg-red-500 text-white' : 'bg-neutral-200 '
        }  text-xs md:text-sm font-medium w-full rounded-full hover:bg-red-500 hover:text-white`}
      >
        {status}
      </button>
    ) : null
  ))}
  </div>

  {/* Dropdown Below sm Breakpoint */}
  <span className='font-bold sm:hidden mr-5'>Status:</span>
  <select
    onChange={(e) => handleStatusChange(e.target.value)}
    value={selectedStatus}
    className='sm:hidden w-full border p-0.5 rounded'
  >
    {statusOptions.map((status) => (
      <option key={status} value={status}>
        {status}
      </option>
    ))}
  </select>
</div>


<div className='sm:flex lg:space-x-4 w-full'>
  <div className='sm:flex-1 flex items-center '>
    <label htmlFor='productSID' className='font-bold  mr-2'>
      Product SID:
    </label>
    <input
      type='text'
      id='productSID'
      className='w-full sm:w-3/4 border p-1 rounded'
      placeholder='Product SID'
      onChange={handleProductSIDChange}
      value={productSID}
    />
  </div>
  <div className='flex-1 flex items-center '>
    <label htmlFor='sellerSKU' className='font-bold mr-2'>
      Seller SKU:
    </label>
    <input
      type='text'
      id='sellerSKU'
      className='w-full sm:w-3/4 border p-1 rounded'
      placeholder='Seller SKU'
      onChange={handleSellerSKUChange}
      value={sellerSKU}
    />
  </div>
</div>



        {/* Country Dropdown */}
        <div className='flex space-x-4 w-full'>
        <div className="flex-1 flex items-center">  
  <span className='font-bold sm:mr-10 mr-2'>Country:</span>
  <select
    className='sm:w-1/3 border p-1 rounded'
    onChange={handleCountryChange}
    value={selectedCountry}
  >
    <option value=''>Select Country</option>
    <option value='usa'>United States</option>
    <option value='canada'>Canada</option>
    <option value='uk'>United Kingdom</option>
    <option value='germany'>Germany</option>
    <option value='france'>France</option>
    {/* Add more countries as needed */}
  </select>

  {/* Clear Filters Button */}
</div>

          

        <div className="">
        <button
          className='text-red-500 border-red-500 border-2  p-0.5 font-medium rounded sm:mr-7 sm:px-3'
          onClick={clearFilters}
        >
          Clear Filters
        </button>
        </div>

        </div>
      </div>


     
      <ProductDetailsContainer filters={{ selectedStatus, productSID, sellerSKU, selectedCountry }} />
    </div>
  );
};

export default ProductManagement;
