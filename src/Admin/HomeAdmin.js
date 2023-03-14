import React from 'react'
import './adim.css'
import Header from './Header'
import Addnhanvien from './Addnhanvien'

export default function HomeAdmin() {
  return (
     
    <div className=' body flex w-full'>
        <div className='w-1/6 h-full bg-slate-500 '>
            <div className='h-36 '>
                <div  className='w-full' ><img className='m-auto pt-8' src={`${require("../Concent/image/icon1.png")}`} alt='#'/> </div>
                <div className='w-full '> <span className='ml-10 mt-5'>nguyễn nhật thành</span></div>
            </div> 
            <div >
                <ul className='list-none ml-10'>
                    <li className=''>
                       <a href='#' > Home</a>
                        
                    </li>
                    <li className='mt-10'>
                        <a href='#'> Quản lý nhân viên</a>

                    </li>
                    <li className='mt-10'>
                        <a href='#'> Quản lý sản phẩm</a>
                    </li>
                    <li className='mt-10'>
                        <a href='#'> Quản lý hóa đơn</a>
                    </li>
                </ul>
            </div>   
        </div>      
        <div className='w-5/6 bg-slate-200 h-full'>
        <Header name="Chào mừng bạn đến với Admin shop"/>
        <Addnhanvien/>
        </div>
    </div> 
  )
}
  