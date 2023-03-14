import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {getCategoryFilter} from '../store/ProductThunkSlide'

export default function Filter() {
    // const [filter, setFilter]= useState([])
    const dispatch = useDispatch();
    const productListData = useSelector(state => state.productThunk.productList);
  
    useEffect(() => {
      dispatch(getCategoryFilter());     
    }, []);

  return (
    <div>         
          {productListData?.map(item => (
            <div
             key={item?.index}>          
            <input
              value={item.name}
              className='mr-1 ml-4 mt-4'
              type="radio"
              id="option1"
              name='hang'
                      
            />           
       <label htmlFor="option1">{item?.name}</label>
          </div>
            ))}
    </div>
  )
}
