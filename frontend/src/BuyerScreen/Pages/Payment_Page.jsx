import React from 'react'
import Header from '../../Component/Header'

import Group from '../../Component/Assets/group.png';
import Mpesa from '../../Component/Assets/Mpesa.png';
import PM from '../../Component/Assets/PAYMENT_METHOD.png';
import Shop from '../../Component/Assets/shop_add.png';




const Payment_Page = () => {
    return (
        <div className='container     '>
            <Header />

            <div className='w-4/5 mt-24 ml-40 h-auto   '>
                <div className='w-full-width h-fit ml-16'>
                    <h5 className='text-black font-semibold text-lg mb-5'>Payment and shipping </h5>
                </div>
                <div className='w-full-width h-svh flex '>
                    <div className='w-10/12 p-4 h-svh  '>
                        <div className="w-10/12 p-4 h-auto mb-5 ml-20 bg-white border border-gray-200 shadow  ">

                            <div className='w-full h-fit ml-24 '>
                                <div className='flex  '>
                                    <div className='flex items-center space-x-4 mt-5 flex'>
                                        <div className='flex items-center bg-red-500 hover:bg-red-600 rounded-lg pl-2'>
                                            <img src={Group} alt='Group' className='h-6 w-6 ' />
                                            <button type="button" className="text-white  text-sm px-5 py-2.5">
                                                DELIVERY
                                            </button>
                                        </div>

                                        <div className='flex items-center ml-4 text-red-700 cursor-pointer   border border-red-600   rounded-lg px-5 py-2 text-center font-medium dark:border-red-500 dark:text-red-500  '>
                                            <img src={Shop} alt='Shop' className='h-6 w-6  ' />
                                            <button type="button" className="pl-2 ">
                                                PICK UP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-4/5 h-fit mx-20  '>
                                { /*-------Form Detai start here---------- */}

                                <div className='w-full m-10 h-fit'>
                                    <div className='w-full h-fit'><h2 className='text text-black font-bold'>Delivery Detail</h2></div>
                                    <form>
                                        <div className="mb-4">
                                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                className="mt-1 p-2 w-full border rounded-md"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                className="mt-1 p-2 w-full border rounded-md"
                                                placeholder="Enter your address"
                                            />
                                        </div>

                                        <div className="grid grid-cols-3 gap-4 mb-4">
                                            <div className="col-span-2">
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    City/Town
                                                </label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    className="mt-1 p-2 w-full border rounded-md"
                                                    placeholder="Enter your city/town"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Country
                                                </label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    className="mt-1 p-2 w-full border rounded-md "

                                                >

                                                    {/* Add options for countries */}
                                                    <option value="country1">Country 1</option>
                                                    <option value="country2">Country 2</option>
                                                    <option value="country3">Country 3</option>
                                                    <option value="country4">Country 4</option>
                                                    <option value="country5">Country 5</option>
                                                    <option value="country6">Country 6</option>
                                                    <option value="country7">Country 7</option>
                                                    <option value="country8">Country 8</option>
                                                    {/* Add more options as needed */}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
                                                Mobile Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="mobileNumber"
                                                name="mobileNumber"
                                                className="mt-1 p-2 w-full border rounded-md"
                                                placeholder="+254XXXXXXXX"
                                            />
                                        </div>

                                        {/* Add more form fields as needed */}

                                        <div className='w-full h-fit'><h2 className='text text-black font-bold'>Select Payment Method</h2></div>

                                        <div className='w-full h-fit flex items-center justify-between mt-3'>
                                            {/* First Radio Button and Image */}
                                            <div className='flex items-center flex-grow'>
                                                <input type='radio' id='radio1' name='paymentMethod' className='mr-2' />
                                                <img src={Mpesa} alt='Mpesa' className='h-5 w-5' />
                                            </div>

                                            {/* Second Radio Button and Image */}
                                            <div className='flex items-center flex-grow'>
                                                <input type='radio' id='radio2' name='paymentMethod' className='mr-2' />
                                                <img src={PM} alt='AnotherPaymentMethod' className='h-5 w-5' />
                                            </div>
                                        </div>

                                        <div className='text text-black font-bold mt-3'><h2>Payment Detail</h2></div>

                                        <div className="mb-4">
                                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                                Card Name
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                className="mt-1 p-2 w-1/2 border rounded-md"
                                                placeholder="Card Name"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                                Card Number
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                className="mt-1 p-2 w-1/2 border rounded-md"
                                                placeholder="XXXX XXXX XXXX XXXX"
                                            />
                                        </div>


                                        {/* --------------*/}
                                        <div className="grid grid-cols-3 gap-4 mb-4">
                                            <div className="col-span-2">
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    Expiry Date
                                                </label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="Expiry Date"
                                                    className="mt-1 p-2 w-full border rounded-md"
                                                    placeholder="MM/YYYY"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    CCV CODE
                                                </label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    className="mt-1 p-2 w-full border rounded-md"
                                                    placeholder="CCV CODE"
                                                />

                                                {/* Add options for countries */}


                                            </div>
                                        </div>


                                    </form>
                                </div>

                                { /*-------Form Detai end here ---------- */}

                            </div>

                        </div>



                        {/*-----------------------------Second Col---------------------------------------------------------- */}



                    </div>
                    <div className='w-72 h-96 ' >
                        <div className=' p-2 w-72 h-32 bg-white  border border-gray-200 shadow   '>
                            <div className='w-full  h-16 '>
                                <div className=" w-full text-black font-semibold flex  "> Total Amount :  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end font-extrabold '> $695.35</span></div>
                                <div className=" w-full mt-4 text-black font-semibold flex  "> Shipping Fee :  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end font-extrabold '> $15</span></div>
                                <div className=" w-full mt-4 text-black font-extrabold flex  "> Total :  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end font-extrabold '> $710.35</span></div>

                            </div>
                        </div>
                        <div className='p-2 w-72 h-10 mt-2 '>
                            <div className="w-full text-black font-semibold flex" style={{ fontSize: '9.5px' }}>
                                By Clicking *Pay* I agree to company's <a style={{ fontSize: '10px', color: 'blue', }} className=' hover:underline cursor-pointer'>Terms and Conditions</a>
                            </div>
                        </div>

                        <div className=' w-72 h-10 mt-5   '>
                            <button type="button" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4  rounded-lg text-sm px-5 py-2.5 font-serif">Pay $ 710.35</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment_Page;