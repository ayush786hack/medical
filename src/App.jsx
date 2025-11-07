import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import { useAppContext } from './context/Appcontext';
import Login from './components/Login';
import AllProducts from './pages/AllProducts';
import ProductCategory from './pages/ProductCategory';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import AddDetail from './pages/AddDetail';
import Contact  from './pages/Contact';



const App = () => {
  const isSellerPath = useLocation().pathname.includes('seller');
  const {showUserLogin}= useAppContext();
  return (
    <div>
      {!isSellerPath && <Navbar />}
      {showUserLogin ? <Login /> :null}

      <Toaster />
      <div className={`${isSellerPath ? '' : 'px-6 md:px-17 lg:px-23 xl:px-31'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/products"  element={<AllProducts/>}></Route>
          <Route path="/products/:category" element={<ProductCategory/>} />
          <Route path="/products/:category/:id" element={<ProductDetail/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-detail" element={<AddDetail/>} />
          <Route path="/contact" element={<Contact />} />
     


        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
