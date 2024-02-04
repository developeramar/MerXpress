// Import necessary React components and icons
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import dummyorders from '../dummypromotion.js';

const Displaypromotion = () => {
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(4);

  useEffect(() => {
    // No filters are applied in this example, just use the entire dummy orders data
    setFilteredOrders(dummyorders);
  }, []); // Empty dependency array ensures this effect runs once on component mount

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalOrdersPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='text-black bg-white w-full mt-3 p-4 rounded-xl'>
      {/* Display the heading of the product details table */}
      <table className='w-full'>
        <thead>
          <tr>
            <th className="border-b-2 border-black p-2">Product</th>
            <th className="border-b-2 border-black">Seller SKU</th>
            <th className="border-b-2 border-black">Page Views</th>
            <th className="border-b-2 border-black">Items Sold</th>
            <th className="border-b-2 border-black">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {/* Display either the product details or the "No records to display" message */}
          {filteredOrders.length === 0 ? (
            <tr>
              <td className='text-center p-10' colSpan="5">No Sales From promotion this period</td>
            </tr>
          ) : (
            currentOrders.map(product => (
              <tr key={product.sellerSku}>
                <td className='text-center'>{product.product}</td>
                <td className='text-center'>{product.sellerSku}</td>
                <td className='text-center'>{product.pageViews}</td>
                <td className='text-center'>{product.itemsSold}</td>
                <td className='text-center'>{product.revenue}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
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

export default Displaypromotion;
