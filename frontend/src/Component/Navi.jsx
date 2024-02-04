import React from 'react';

const Navi = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <a href="/login" className="block my-2">Login</a>
        <a href="/marketplacepage" className="block my-2">Marketplace Page</a>
        <a href="/paymentpage" className="block my-2">Payment Page</a>
        <a href="/ordersuccessfullpage" className="block my-2">Order Successful Page</a>
        <a href="/shoppingcartpage" className="block my-2">Shopping Cart Page</a>
      </div>
    </div>
  );
}

export default Navi;
