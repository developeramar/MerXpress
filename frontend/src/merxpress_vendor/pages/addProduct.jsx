import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'; // Import the arrow icons from React Icons
import { AiOutlineClose,  AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight, FaClock } from 'react-icons/fa';

const data = [
  {
    id: 1,
    title: 'Create a New Product',
    content: (
      <div>
      <form>
        {/* General Information Section */}
        <div className="mb-6 mt-3 ">
          <h2 className="text-lg  font-medium  mb-1">General Information<span className="text-red-500">*</span></h2>
    
          <p className="text-gray-600 mb-4">To Start Selling All you need is a name and a price.</p>
    
          {/* Add more general information fields as needed */}
        </div>
    
        {/* To Start Selling Section */}
        <div className="mb-2 flex justify-between w-4/5">
          {/* Product Title and Subtitle Fields */}
          <div className="mb-2 w-1/2 mr-4">
            <label className="block text-sm p-2 text-gray-500 font-semibold">
              Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter product title"
              className="border p-2 w-full rounded"
            />
          </div>
          <div className="mb-2 w-1/2">
            <label className="block text-sm text-gray-500 p-2 font-semibold">
              Subtitle
            </label>
            <input
              type="text"
              placeholder="Enter product subtitle"
              className="border p-2 w-full rounded"
            />
          </div>
    
          {/* Additional instructions or fields for starting selling */}
        </div>
        <p className="text-gray-600">Give your product a short and clear title.</p>
        <p className="text-gray-600 mb-4">50-60 characters is the recommended length for search engines.</p>
    
        {/* Product Details Section */}
        <div className="mb-3">    
          {/* Handle Label and Input */}
          <div className="mb-2">
            <label className="block text-sm text-gray-500 font-semibold mb-2">
              Handle<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter product handle"
              className="border p-2 rounded"
            />
          </div>
    
          {/* Description Label and Textarea */}
          <div className="mb-2">
            <label className="block text-sm text-gray-500 font-semibold mb-2">
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter product description"
              className="border p-2 w-full h-16 md:h-24 rounded"
              rows="4"
            />
          </div>
    
          {/* Additional instructions or fields for product details */}
        </div>
    
        {/* Pricing and Discount Section */}
        <div className="mb-6">    
          {/* Discountable Label and Paragraph */}
          <div className="mb-1">
            <h1 className="block text-md font-semibold mb-2">Discountable</h1>
            <div className="flex">
              <p className="text-gray-600 mb-1">When unchecked discounts will not be applied to this product.</p>
              <input type="checkbox" className="ml-2" />
            </div>
          </div>
    
          {/* Additional instructions or fields for pricing and discount */}
        </div>
      </form>
    </div>
    
    ),
  },
  {
    id: 2,
    title: 'Organize',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    title: 'Variants',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    title: 'Thumbnail',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 5,
    title: 'Media',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Alert = () => {
  return (
    <div className="bg-zinc-200 p-2  sm:pt-2 sm:pb-2  md:p-3 lg:p-3 rounded relative" role="alert">
      <div className="flex justify-between items-center w-full sm:w-2/3">
        <div className="flex items-center  pl-2 space-x-2">
          <span className="cursor-pointer bg-white p-1 rounded-md">
          <AiOutlineClose className="h-4 w-4 text-black" />
          </span>
        </div>
        <div className="flex items-center  space-x-">
          <button className="bg-white text-black pl-2 pr-2  font-medium rounded">Save as Draft</button>
          <button className="bg-gray-300 text-gray-500 pl-2 pr-2 ml-2 rounded">Publish Product</button>
          <span>
          <AiOutlineQuestionCircle className="text-gray-500 h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

const AddProduct = () => {
  const [openItems, setOpenItems] = useState([1]);

  const toggleItem = (id) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter((itemId) => itemId !== id)
        : [...prevOpenItems, id]
    );
  };

  return (
    <>
    <div className="text-black bg-white   sm:w-3/4 md:w-4/5">   
    <div className=" p-2 pl-3 bg-white flex items-center mb-4  border-gray-300 border-b space-x-5 ">
      <div className=" text-slate-400">
        <FaArrowLeft size={20} />
      </div>
      <div className="text-slate-400">
        <FaClock size={20} />
      </div>
      <div className="text-slate-400">
        <FaArrowRight size={20} />
      </div>
      
    </div>
    <Alert />
    <div className='sm:p-10 md:pr-36 pt-2 justify-center border-gray-300 border-t mt-4'>
    <div className={`m-1 mt-0 space-y-2 ${openItems.includes(1) ? '' : 'h-screen'}`}>
  {data.map((item) => (
    <div
      key={item.id}
      className={`group flex flex-col gap-2 rounded p-1 ${
        item.id !== 1 ? 'border-t-2 border-slate-300' : ''} text-black`}
      tabIndex={item.id}
    >
      <div
        className='flex cursor-pointer items-center mt-2 justify-between'
        onClick={() => toggleItem(item.id)}
      >
        <span className='font-bold text-xl'>{item.title}</span>
        {openItems.includes(item.id) ? (
          <AiOutlineMinus className='h-6 w-6 transition-all duration-500 group-focus:-rotate-180' />
        ) : (
          <AiOutlinePlus className='h-6 w-6 text-red-700 transition-all duration-500 group-focus:rotate-0' />
        )}
      </div>
      <div
        className={`${
          openItems.includes(item.id)
            ? 'visible opacity-100 max-h-screen'
            : 'invisible opacity-0 max-h-0'
        } items-center transition-all duration-1000`}
      >
        {item.content}
      </div>
    </div>
  ))}
</div>

    </div>

    </div>
    </>
  );
};

export default AddProduct;
