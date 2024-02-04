import React from "react";
import DisplayOrders from "../components/displayorders";
import Displaypromotion from "../components/Displaypromotion";

const Promotions = () => {
  return (
    <>
      <div className="text-black w-full md:flex  sm:w-3/4 md:w-4/5 md:h-screen  bg-zinc-300  ">
        <div className="text-center  md:w-2/6 p-2 mt-10  lg:p-5 lg:mt-5 xl:mt-0 ">
          <h1 className="font-bold text-medium   lg:text-xl">Promotion Management</h1>
          <p className="font-medium pt-3">Merxpress Compaigns</p>
          <p className="pt-1 md:text-sm lg:text-normal text-gray-600">There are no open positions</p>
        </div>
        <div className="md:w-4/6 p-2  xl:pt-0">
        <h2 className="text-lg font-semibold mb-4 pt-7  xl:pt-4 text-center ">Promotions Revenue</h2>
        <div className="bg-white shadow-md p-2 rounded-xl">
    <div className="flex justify-between pb-1">
        <div className="space-x-2 flex">
            <button className="bg-neutral-200 border border-black w-20 h-8 p-0.5 rounded-full">
                7 Days
            </button>
            <button className="bg-neutral-200 border border-black  w-20 h-8 p-0.5 rounded-full">
                30 Days
            </button>
            <button className="bg-neutral-200 w-20 h-8 border border-black  p-0.5 rounded-full">
                90 Days
            </button>
        </div>

        <button className="text-red-500 border-red-500 border-2 font-medium p-1 sm:pl-3 sm:pr-3 rounded-lg">
            Clear Filter
        </button>
    </div>

    <div className="text-center mt-4">
        <h2 className="text-xl font-bold">Total Sales From Promotions</h2>
        <p className="text-3xl font-bold text-green-500">$ 0</p>
    </div>


    <div className="flex justify-between mt-4 p-5">
    <div className="text-center">
        <p className="text-md text-black  font-medium">Average Before Campaign</p>
        <p className="text-lg font-bold">$ 1000</p>
    </div>

    
    <div className="border-2 border-black lg:mr-24"></div>

    <div className="text-center">
        <p className="text-md text-black  font-medium">Uplift</p>
        <p className="text-lg font-bold text-green-500">$ 200</p>
    </div>
</div>

</div>
<Displaypromotion/>
        </div>
      </div>
    </>
  );
};

export default Promotions;
