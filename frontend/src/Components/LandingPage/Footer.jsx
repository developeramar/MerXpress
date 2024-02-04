import React from 'react'

const Footer = () => {
  return (
    <div className='text-white bg-FooterBg px-16 py-10'>
     <div className='flex justify-between p-26 items-start mb-10'> 
     <div className="leading-6">
      <h3 className='title mr-auto pb-3'>Merx<span className="text-highlight">press</span></h3>
      <p className='footer_P_style '>Connected with you all the way</p>
      </div>
      <div className='flex justify-between w-4/5'>
      <div className='each' >
        <h3 className='title footerSubTitle'>Connect with us</h3>
      <p className='footer_P_style'>Facebook</p>
      <p className='footer_P_style'>Linkedin</p>
      <p className='footer_P_style'>Twitter</p>
      <p className='footer_P_style'>Instagram</p>
      </div>

      <div className='each'>
      <h3 className='title footerSubTitle'>About  Merxpress</h3>
      <p className='footer_P_style'>About Us</p>
      <p className='footer_P_style'>Merxpress Careers</p>
      <p className='footer_P_style'>Blogs</p>
      <p className='footer_P_style'>Merx Clips</p>
      <p className='footer_P_style'>Merxpress Express</p>
      </div>

      <div className='each'>
      <h3 className='title footerSubTitle'>Customer  Service</h3>
      <p className='footer_P_style'>Terms & Conditions</p>
      <p className='footer_P_style'>Return & Refund Policy</p>
      <p className='footer_P_style'>Privacy Notice</p>
      <p className='footer_P_style'>Seller Portal</p>
      <p className='footer_P_style'>Report a product</p>
      </div>
      
      <div className='each'>
      <h3 className='title footerSubTitle' >Payment Methods</h3>
      <p className='footer_P_style'>Payment on Delivery</p>
      <p className='footer_P_style'>Visa</p>
      <p className='footer_P_style'>MasterCard</p>
      <p className='footer_P_style'>Merx Cash</p>
      </div>
      </div>
      </div>  
      
      <div className='flex flex-col justify-center items-center'>
      <hr className ="border-hr w-11/12 pb-4"/> 
      <h3 className='title'>Merx<span className="text-highlight">press</span></h3>
      <div className='flex w-3/4 justify-between pt-4 pb-10'>
        <p className='footer_P_style'>Conditions of Use</p>
        <p className='footer_P_style'>Privacy Notice</p>
        <p className='footer_P_style'>Your AD Privacy Notices</p>
        <p className='footer_P_style'>All Rights Reserved</p>
        <p className='footer_P_style'>© 2022 - 2023, Merxpress.com,inc.or its affliates</p>
      </div>

      </div>

    


    </div>
  )
}

export default Footer
