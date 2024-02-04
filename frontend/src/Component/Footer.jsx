import React from 'react'

const Footer = () => {
    return (
        <div className='w-full  bg-gray-900 h-96 text-white'>
            <div className=' w-11/12  h-60 ml-14   mr-2 flex pt-2 '>
                <div className='w-1/5  h-full '>
                    <div className=''>
                        <span className="text-white text-3xl">Merx</span>
                        <span className="text-red-500 text-3xl">press</span>
                    </div>
                    <p className='text text-xs'>Connected with you all the way</p>
                </div>
                
                <div className='w-1/5  h-full'>
                    <div className=''><h2 className='text text-2xl text-white mb-2 font-bold'>Connect with us</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Facebook</h2></div>
                    <div className=''><h2 className='text-white mb-1' >Instagram</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Linked In</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Twitter</h2></div>
                </div>

                <div className='w-1/5  h-full'>
                    <div className=''><h2 className='text text-2xl text-white mb-2 font-bold'>About Merxpress</h2></div>
                    <div className=''><h2 className='text-white mb-1'>About us</h2></div>
                    <div className=''><h2 className='text-white mb-1' >Merxpress Carrer</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Blogs</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Merx Clips</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Merxpress Express</h2></div>

                </div>

                <div className='w-1/5  h-full'>
                    <div className=''><h2 className='text text-2xl text-white mb-2 font-bold'>Customer Service</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Terms & Conditions</h2></div>
                    <div className=''><h2 className='text-white mb-1' >Return & Refund Policy</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Privacy Notice</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Seller Portal</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Report a Product</h2></div>

                </div>

                <div className='w-1/5  h-full'>
                    <div className=''><h2 className='text text-2xl text-white mb-2 font-bold'>Payment Method</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Payment on Delivery</h2></div>
                    <div className=''><h2 className='text-white mb-1' >Visa</h2></div>
                    <div className=''><h2 className='text-white mb-1'>MasterCard</h2></div>
                    <div className=''><h2 className='text-white mb-1'>Merx Cash</h2></div>

                </div>



            </div>
            <hr className=' bg-slate-800' />
            <div className='flex justify-center items-center '>
                <div className='w-11/12 h-28   rounded-lg mt-4 '>
                    <div className='text-center'>
                        <span className="text-white text-3xl">Merx</span>
                        <span className="text-red-500 text-3xl">press</span>
                    </div>
                    <div className='w-full flex justify-center mt-4'>
                        <div className='h-10 flex p-2'><p className='text text-end text-xs w-full'>Conditions of Use</p></div>
                        <div className='h-10 p-2'><p className='text text-end text-xs w-full'>Privacy Notice</p></div>
                        <div className='h-10 p-2'><p className='text text-xs w-full'>Your ADPrivacy Notices</p></div>
                        <div className='h-10 p-2'><p className='text text-xs w-full'>All right Reserve</p></div>
                        <div className='h-10 p-2'><p className='text text-xs w-full'>© 2023, Merxpress.com, Inc. or its affiliates</p></div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Footer