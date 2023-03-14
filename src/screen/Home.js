import React from 'react'
import Header from '../MyComponet/Header'
import SyncSlider from '../MyComponet/Slide'
import Footer from '../MyComponet/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../MyComponet/product'
import { useSelector, useDispatch } from "react-redux";
import {addProduct} from '../store/ProductSlide'
import {  useNavigate } from 'react-router-dom';
import Filter from '../MyComponet/Filter'
import '../App.css'

export default function Home() {

  const navigate = useNavigate();
  const dispatch=useDispatch();

  const [productList, setProductList]= useState([])
  useEffect (()=>{
    const callApi = async () => {
      const result = await axios.get(' http://localhost:9010/product')
      console.log(result)
      setProductList(result.data.result.response)
      console.log(productList)
    }
    callApi();
  }, []);

  const onAddProduct=(e)=> () =>{
    console.log(e)
    dispatch(addProduct({ ...e, quantity: 1}));
  }
  return (
    <div>
        <Header/>
        <SyncSlider/>
        <div className='product-container flex flex-row mt-20'>
        {/* filter column */}
        <div className='w-72 mr-10 ml-10'>
          <div className='mt-6 flex flex-row items-center justify-between'>
            <div className='text-2xl font-bold'>Bộ Lọc</div>
          </div>

          <div className='font-bold mt-2'>Price</div>

          <div className=''>
            <div>
              <input
                className='mr-1 ml-4 mt-4'
                type="radio"
                id="men"
                name="gender"
                value="men"
              // checked={gender === "MEN"}
              // onChange={() => {}}
              />
              <label htmlFor="men">Từ 4-7tr</label>
            </div>
            <div>
              <input
                className='mr-1 ml-4 mt-4'
                type="radio"
                id="women"
                name="gender"
                value="women"
              // checked={gender === "women"}
              // onChange={() => {}}
              />
              <label htmlFor="women">Từ 7-15tr</label>
            </div>
            <div>
              <input
                className='mr-1 ml-4 mt-4'
                type="radio"
                id="kid"
                name="gender"
                value="kid"
              // checked={gender === "kid"}
              // onChange={() => {}}
              />
              <label htmlFor="kid">Từ 15-20tr</label>
            </div>
            <div>
              <input
                className='mr-1 ml-4 mt-4'
                type="radio"
                id="kid"
                name="gender"
                value="kid"
              // checked={gender === "kid"}
              // onChange={() => {}}
              />
              <label htmlFor="kid">Trên 20tr</label>
            </div>
          </div>
          <div className='font-bold mt-2'>Brand</div>
         <Filter/>
        </div>
        <div className='flex-1 mt-10'>        
          {/* item */}
          <div className='flex flex-wrap overflow-auto mt-4 -mr-10' style={{ height: 'calc(250vh - 16rem)' }}>
            {productList.map(e => (
              <div key={e?.imdex} className='mr-12 mb-12' style={{ width: 'calc(25% - 48px)' }}>
                <div className="relative">
                  {/* <img src={require(`../assets/images/${e.image}`)} alt={e.title} className='object-cover h-48 w-full' /> */}
                  <img src={(e.image)} alt={e.title} className='object-cover h-48 w-full' />
                  <div className="wrap-heart">
             
                  </div>
                </div>
                <div className='p-1 text-center' onClick = {() =>  navigate(`/detail/${e.id}`)}>
                  <div className='font-bold'>{e.product_name}</div>
                  <div className='text-blue '>{e.price} đ</div>
                </div>
                <div onClick={onAddProduct(e)} className='bg-gray-800 h-11 flex justify-center items-center uppercase font-medium text-white cursor-pointer hover:bg-red-600'>
                  Add to cart
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Product/>
      <Footer/>   
    </div>
  )
}






