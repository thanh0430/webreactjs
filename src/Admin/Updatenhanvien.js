import React from 'react'
import { useState } from 'react'
import './adim.css'

export default function Login() {
  const [inputvalue , setInputvalue]= useState({

  })

  const onchaneinput = (event)=>{
     console.log(event.target.value)
     setInputvalue(event.target.name)
     setInputvalue({...inputvalue, [event.target.name]:event.target.value})
  }
const bam= ()=>{
  alert(inputvalue)
}
  return (
    <div className='container'>
    <label>
    <span> Họ</span>
      <input 
        className='inputt'
        name="Ho"
        value={inputvalue.UseName}
        placeholder="Họ"
        onChange={onchaneinput}
      />
    </label>
      <label>
     <span> Tên</span>
      <input 
        className='inputt'      
        name="Ten"
        placeholder="Tên"
        value={inputvalue.Ten}
        onChange={onchaneinput}
      />
      </label>     
    <span> Quê quán</span>
      <input 
        className='inputt'
        name="Quequan"     
        placeholder="Quê quán"
        value={inputvalue.Quequan}
        onChange={onchaneinput}
      />
       <span> Chức vụ</span>
      <input 
        className='inputt' 
        name="Chức vụ"    
        value={inputvalue.confimpassword}
        onChange={onchaneinput}
      /> 
             <span> Số điện thoại</span>
        <input 
        className='inputt' 
        name="Sodienthoai"    
        value={inputvalue.Sodienthoai}
        onChange={onchaneinput}
      />     
        <span> Ngay sinh</span>
      <input 
        className='inputt' 
        type="date" 
        name="date"   
        value={inputvalue.date}
        onChange={onchaneinput}
      />  
          <span> giới tính:</span>      
      <div>
         <span> Nu</span>
        <input 
        className='inputt' 
        type="radio"   
        name="gioitinh"       
        value={inputvalue.gioitinh}
        onChange={onchaneinput}
      /> 
         <span> Nam</span>
        <input 
        className='inputt' 
        type="radio" 
        name="gioitinh"         
        value={inputvalue.gioitinh}
        onChange={onchaneinput}
      /> 
       
      </div>

          <button
            onClick={bam}
            type="button"
            className=" mt-9 inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  hover:bg-sky-400">
            Thêm mới 
        </button>
    </div>
  )
}
