
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screen/Home'
import Detail from './screen/Detail'
import Cart from './screen/Cart'
import Filter from './MyComponet/Filter';
import FromPay from './screen/FromPay';

export default function Routers() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart  />} />
        <Route path="/Filter/:name" element={<Filter />} />
        <Route path="/FromPay" element={<FromPay />} />
        {/* <Route path="/product" element={<Product />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
           <Route path='' element={<NotFound />} />*/}
      </Routes>
    </BrowserRouter>
    );
}