import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from '../components/sidebar';
import AddProduct from './addProduct';
import ProductManagement from './productManagement';
import Orders from './orders';
import Promotions from './Promotions'
import AccountStatement from './AccountStatement';
import Home from './Home';
import TopNavbar from '../components/Topnavbar';

const MainPage = () => {
  return (
    <> 
    
   
    <Router>
    <div className="sm:hidden"> <TopNavbar/></div>
      <div className='flex'> 
        <Sidebar />
        {/* <div className="sm:hidden"> <TopNavbar/></div> */}
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/productmanagement" element={<ProductManagement/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/Promotions" element={<Promotions/>} />
          <Route path="/AccountStatement" element={<AccountStatement/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default MainPage;
