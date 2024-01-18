import React from 'react'
import Header from './Header'
import Group from './Assets/group.png';
import Mpesa from './Assets/Mpesa.png';
import PM from './Assets/PAYMENT_METHOD.png';
import Shop from './Assets/shop_add.png';

const Payment_Page = () => {
    return (
        <div className='container bg-orange-50  '>
            <Header />

            <div className='w-4/5 mt-24 ml-40 h-svh '>
                <div className='w-full-width h-fit ml-16'>
                    <h5 className='text-black font-semibold text-lg mb-5'>Payment and shipping </h5>
                </div>
                <div className='w-full-width h-svh flex '>
                    <div className='w-10/12 p-4 h-svh '>
                        <div className="w-10/12 p-4 h-auto mb-5 ml-20 bg-white border border-gray-200 shadow flex ">
                            <div className='w-4/5 h-80 ml-20 mr-20 bg-gray-700'>
                                <div className='flex '>
                                    <div className='flex items-center space-x-4 mt-5'>
                                        <div className='flex items-center bg-red-500 hover:bg-red-600 rounded-lg'>
                                            <img src={Group} alt='Group'  className='h-6 w-6 pl-1.5' />
                                            <button type="button" className="text-white  text-sm px-5 py-2.5">
                                                DELIVERY
                                            </button>
                                        </div>

                                        <div className='flex items-center ml-4 border-red-600 '>
                                            <img src={Shop} alt='Shop' className='h-6 w-6' />
                                            <button type="button" className="text-red-700 hover:text-white border border-red-600 hover:bg-red-600  rounded-lg px-5 py-2 text-center font-medium dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 ">
                                                PICK UP
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>



                        {/*-----------------------------Second Col---------------------------------------------------------- */}



                    </div>
                    <div className='w-72 h-96 ' >
                        <div className=' p-2 w-72 h-32 bg-white  border border-gray-200 shadow   '>
                            <div className='w-full mt-7 h-16 '>
                                <div className=" w-full text-black font-semibold flex  "> Total Amount :  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end '> $195.35</span></div>
                                <div className=" w-full mt-4 text-black font-semibold flex  "> Shipping Fee :  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end '> $10</span></div>
                            </div>
                        </div>
                        <div className='p-2 w-72 h-10 mt-10 bg-white  border border-gray-200 shadow'>
                            <div className=" w-full text-black font-semibold flex  "> Total Amount :  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end '> $195.35</span></div>
                        </div>
                        <div className=' w-72 h-10 mt-5   '>
                            <button type="button" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4  rounded-lg text-sm px-5 py-2.5 font-serif">PROCEED TO CHECKOUT</button>
                        </div>
                        <div className=' w-72 h-10 mt-5   '>
                            <button type="button" className="text-red-700 hover:text-white border border-red-600 hover:bg-red-600   font-medium rounded-lg  px-5 py-2.5 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">CONTINUE SHOPPING</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment_Page;