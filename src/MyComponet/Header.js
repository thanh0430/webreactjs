import React from 'react'
import '../App.css'
import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


export default function Header() {
  const[input, setInput]= useState('')
  const onchaneinput=(event)=>{
    setInput(event.target.value)
  }
  const bam=()=>{
    alert("xinchao")
  }
  return (
    <nav>
       <div className='head'>
        <div className='logo'>
          <img src={`${require("../Concent/image/logo.png")}`} alt='#'/>
        </div>  
        <div className="menu">
          <ul id='menu1'>
            <li><img src={`${require("../Concent/image/icon1.png")}`} alt='#'/> Lap Top</li>
            <li><img src={`${require("../Concent/image/icon2.png")}`} alt='#'/> Linh Kiện</li>
            <li><img src={`${require("../Concent/image/icon3.png")}`} alt='#'/> Phụ Kiện</li>
            <li><img src={`${require("../Concent/image/icon4.png")}`} alt='#'/> Chính Sách</li>
            <li><img src={`${require("../Concent/image/icon5.png")}`} alt='#'/> Bảo Hành</li>
          </ul>

        </div>
        <div className='search'>
          <input     
            type='text'         
            className='input'
            placeholder="Nhập sản phẩm cần tìm kiếm..."
            value={input}
            onChange={onchaneinput}
            size="35"
          />
          <div>
            <button onClick={bam} className='timkiem'> <i class="fas fa-search"></i></button>
          </div>
        </div>

        <div className='card'>
        <Link to='/cart'><div className='fa-solid fa-cart-shopping fa-2x   hover:border-cyan-500'></div> </Link>
          
          <i class="fa-solid fa-user fa-2x"></i>       
        </div>  
          
    </div>
    </nav> 
  )
}


