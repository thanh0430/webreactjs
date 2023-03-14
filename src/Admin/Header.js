import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header(props) {
  return (
    <div>
        <div className='w-full h-20 border-2  bg-slate-300'>
            <div className='pt-6 flex pl-80 text-center'>
                <p className='  text-2xl'>{props.name} </p> 
                <div className='text-xl pl-96'> <a href='#'> <i className="fa fa-sign-out" ></i>Logout </a></div>        
            </div>
     
        </div>
    </div>
  
  )
}
