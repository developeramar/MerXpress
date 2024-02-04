import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import dummyorders from '../dummyorders.js';


const DisplayOrders = ({ filters }) => {
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5); // Change this to the desired number of items per page

  useEffect(() => {
    // Apply filters to the dummy orders data and update filteredOrders state
    const filteredData = dummyorders.filter(order => {
      // Apply your filtering logic based on the filters
      let passesFilter = true;
  
      // Check if order status matches the selectedStatus filter
      if (filters.selectedStatus !== 'All' && order.status !== filters.selectedStatus) {
        passesFilter = false;
      }
      if (filters.orderNo && order.orderNo.indexOf(filters.orderNo) === -1) {
        passesFilter = false;
      }
  
  
      // Add more filtering logic as needed
  
      return passesFilter; // Order passes any of the filters
    });
  
    setFilteredOrders(filteredData);
  }, [filters]);
  
  

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalOrdersPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  return (
    <div className='text-black  overflow-y-auto bg-white w-full md:h-2/5 p-1 lg:pt-0 rounded-xl'>
      {/* Display the heading of the order details table */}
      <table className='w-full'>
        <thead>
          <tr className='sm:text-md text-sm'>
            <th className="border-b-2 border-black md:p-2">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className='w-5 h-5'
              />
            </th>
            <th className="border-b-2 border-black p-2">Order No</th>
            <th className="border-b-2 border-black p-2">Order Date</th>
            <th className="border-b-2 border-black p-2 ">Pending Orders</th>
            <th className="border-b-2 border-black p-2">Payment Method</th>
            <th className="border-b-2 border-black p-2">Price</th>
            <th className="border-b-2 border-black p-2">Shipped Method</th>
            <th className="border-b-2 border-black p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Display either the order details or the "No records to display" message */}
          {filteredOrders.length === 0 ? (
            <tr>
              <td className='text-center p-10' colSpan="8">No Orders to display</td>
            </tr>
          ) : (
            currentOrders.map(order => (
              <tr className='text-sm' key={order.orderNo}>
  {/* No checkbox in each row */}
  <td className='text-center'></td>
  <td className='text-center'>{order.orderNo}</td>
  <td className='text-center'>{order.orderDate}</td>
  <td className='text-center'>{order.pendingOrders}</td>
  <td className='text-center'>{order.paymentMethod}</td>
  <td className='text-center'>{order.price}</td>
  <td className='text-center'>{order.shippedMethod}</td>
  <td className='text-center'>{order.status}</td>
</tr>

            ))
          )}
        </tbody>
      </table>

      <div className="flex justify-end  lg:mt-5">
        <button
          className="text-black px-4 py-2 mx-2 rounded"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft /> 
        </button>
        <button
          className="text-black px-4 py-2 mx-2 rounded"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalOrdersPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DisplayOrders;
