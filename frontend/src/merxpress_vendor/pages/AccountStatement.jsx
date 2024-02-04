import React, { useState } from "react";
import Displaystatement from "../components/displaysatements";
import Displaytransactions from "../components/displaytransaction";

const AccountStatement = () => {
  const [selected, setSelected] = useState("All");

  const handleButtonClick = (status) => {
    setSelected(status);
  };

  return (
    <div className="text-black xl:pt-2 p-3 lg:p-10  w-full  bg-neutral-200  sm:w-3/4   md:w-4/5 md:h-screen h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Account Statement
        </h2>
        <button className="text-red-500 border-red-500 border-2 p-1 mb-4 rounded-lg">
          Clear Filter
        </button>
      </div>
      <div className="sm:flex items-center justify-between border-red-500 border-t-4 bg-white lg:p-3 rounded-lg pt-1 pb-1">
        <div className="flex items-center sm:justify-between justify-evenly space-x-2 md:space-x-4">
          <button
            className="flex items-center justify-center bg-neutral-200 sm:w-12  md:w-16 lg:w-20 h-8 sm:p-1 p-2 rounded-full hover:bg-red-500 hover:text-white focus:outline-none"
            onClick={() => handleButtonClick("All")}
          >
            <span className="mr-2"></span>
            <label className="cursor-pointer justify-center font-medium">
              All
            </label>
          </button>

          <button
            className="flex items-center justify-center focus:outline-none bg-neutral-200  sm:w-14 md:w-16 lg:w-20 h-8 sm:p-1 p-2 rounded-full hover:bg-red-500 hover:text-white"
            onClick={() => handleButtonClick("Open")}
          >
            <span className="mr-2 bg-black rounded-full h-2 w-2 inline-block sm:hidden"></span>
            <label className="cursor-pointer font-medium">Open</label>
          </button>

          <button
            className="flex items-center justify-center focus:outline-none bg-neutral-200 sm:w-14   md:w-16 lg:w-20  h-8 sm:p-1 p-2 rounded-full hover:bg-red-500 hover:text-white"
            onClick={() => handleButtonClick("Paid")}
          >
            <span className="mr-2 bg-green-500 rounded-full h-2 w-2 inline-block sm:hidden"></span>
            <label className="cursor-pointer font-medium">Paid</label>
          </button>

          <button
            className="flex items-center justify-center focus:outline-none bg-neutral-200  sm:w-14   md:w-16 lg:w-20  h-8 sm:p-1 p-2 rounded-full hover:bg-red-500 hover:text-white"
            onClick={() => handleButtonClick("Unpaid")}
          >
            <span className="mr-2 bg-yellow-500 rounded-full h-2 w-2 inline-block sm:hidden"></span>
            <label className="cursor-pointer font-medium">Unpaid</label>
          </button>
        </div>

        <div className="flex items-center sm:justify-between justify-evenly mt-4 pr-2 pb-3">
          <label className="mr-2 font-medium">Currency:</label>
          <div className="flex items-center sm:space-x-2  space-x-8">
            <label className="flex items-center font-medium">
              <input
                type="radio"
                name="currency"
                value="usd"
                className="mr-1"
              />
              USD
            </label>
            <label className="flex items-center font-medium">
              <input
                type="radio"
                name="currency"
                value="local"
                className="mr-1"
              />
              Local
            </label>
          </div>
        </div>
      </div>

      <div className="md:flex  mt-2 h-4/5">
        <div className="md:w-1/2 mb-5 p-2 md:p-4 bg-white rounded-md ">
          <Displaystatement />
        </div>
        <div className="md:w-1/2 mb-5  p-2 md:p-4 md:ml-5 bg-white rounded-md ">
          <Displaytransactions />
        </div>
      </div>
    </div>
  );
};

export default AccountStatement;
