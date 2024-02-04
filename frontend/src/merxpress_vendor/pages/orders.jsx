import React, { useState } from "react";
// import ProductDetailsContainer  from '../components/displayproducts'

import OrderDetails from '../components/displayorders'
const Orders = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [Orderid, setorderid] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState('usd');
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    // Add any additional logic you need when a status is selected
  };


  const statusOptions = [
    "Select",
    "All",
    "Pending",
    "Ready to ship",
    "Shipped",
    "Delivered",
    "Canceled",
    "Delivery Failed",
    "Returned",
  ];

  const handleStartDateChange = (event) => {
    setstartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setendDate(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const handleorderIDChange = (event) => {
    setorderid(event.target.value);
    
  };

  const clearFilters = () => {
    setSelectedStatus("all");
    setstartDate("");
    setendDate("");
    setSelectedCountry("");
    setorderid("");
    setSelectedCurrency("");
  };

  return (
    <div className="text-black  w-full h-screen bg-neutral-300  sm:w-3/4 md:w-4/5 p-2 lg:p-4 xl:pt-0  ">
      <h1 className="font-bold p-2 text-xl">Order Management</h1>

      {/* Filter Section */}
      <div className="flex flex-col p-2  md:p-1 lg:p-3   lg:pb-1 space-y-1 lg:space-y-3 mb-4 bg-white md:h-1/3 rounded-xl">
        {/* Filter Heading */}
        <h2 className="font-bold text-lg">Filters</h2>

        {/* Dynamic Status Buttons */}
        {/* <div className="flex space-x-1 md:space-x-2">
          <span className="font-bold">Status:</span>
          {statusOptions.map((status) => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              className={`${
                selectedStatus === status
                  ? "bg-red-500 text-white"
                  : "bg-gray-300"
              } w-full   rounded text-xs md:rounded-full hover:bg-red-500 hover:text-white`}
            >
              {status}
            </button>
          ))}
        </div> */}
        <div className='flex lg:space-x-4 sm:flex-col sm:space-y-2'>   
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
        <div className="sm:flex sm:space-x-4 w-full">
          <div className="sm:flex-1 flex items-center justify-around sm:justify-normal">
            <label htmlFor="startDate" className="font-bold  mr-2 ">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              className="sm:w-24 lg:w-3/4 border p-1 rounded"
              onChange={handleStartDateChange}
              value={startDate}
              
            />
          </div>
          <div className="flex-1 flex items-center justify-around sm:justify-normal">
            <label htmlFor="endDate" className="font-bold mr-2">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              className=" sm:w-32 lg:w-3/4 border p-1 rounded"
              onChange={handleEndDateChange}
              value={endDate}
            />
          </div>
        </div>

        {/* Country Dropdown */}
        <div className="sm:flex md:space-x-4  w-full">
          <div className="sm:flex-1 flex items-center justify-around sm:justify-normal">
            <span className="font-bold sm:mr-6">Country:</span>
            <select
              className=" sm:w-full md:w-3/4 border p-1 rounded"
              onChange={handleCountryChange}
              value={selectedCountry}
            >
              <option value="">Select Country</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
              {/* Add more countries as needed */}
            </select>
            </div>

            {/* Clear Filters Button */}

            <div className="flex-1 flex items-center justify-around sm:justify-normal">
              <label htmlFor="orderID" className="font-bold mr-2">
                Order No:
              </label>
              <input
                type="text"
                id="orderID"
                className="w-32 lg:w-3/4 border p-1 rounded"
                placeholder="OrderID"
                onChange={handleorderIDChange}
                value={Orderid}
              />
            </div>
        
        </div>
      </div>

      <div className="sm:flex items-center justify-between lg:p-2 lg:pt-1 xl:pt-0">
   
      <div className="mr-4 pb-2 lg:pb-0  flex items-center justify-center space-x-5 md:space-x-20 ">
  <h1 className="mr-3 text-xl font-bold ">Currency :</h1>
  <label className="mr-3">
    <input
      type="radio"
      value="USD"
      checked={selectedCurrency === 'usd'}
      onChange={() => handleCurrencyChange('usd')}
      className="mr-2"
    />
    USD
  </label>

  <label className="mr-3"> {/* Added margin here */}
    <input
      type="radio"
      value="LOCAL"
      checked={selectedCurrency === 'local'}
      onChange={() => handleCurrencyChange('local')}
      className="mr-2"
    />
    Local
  </label>
</div>




  <div className="sm:pb-2 text-center p-2">
    <button
      className='text-red-500 border-red-500 font-medium border-2 p-0.5 lg:p-1 rounded sm:px-3'
      onClick={clearFilters}
    >
      Clear Filters
    </button>
  </div>
</div>


<OrderDetails filters={{ selectedStatus,startDate}}/>
    </div>
  );
};

export default Orders;
