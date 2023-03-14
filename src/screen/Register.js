import React from 'react';
import '../App.css';

export default function Register() {
  return (
    <div className='mt-16 px-16 auth-screen'>
      <div className='wrap-content'>
        <div className='left'></div>
        <div className='flex justify-center items-center right '>
          <div className=' p-10 border'>
            <div className='text-center text-3xl font-bold'>Sign Up</div>
            <div className='flex flex-row justify-between mt-4'>
              <div>
                <div>Họ</div>
                <input placeholder='' className='border-black border rounded pl-2 w-full h-10' />
              </div>
              <div>
                <div>Tên</div>
                <input placeholder='' className='border-black border rounded pl-2 w-full h-10' />
              </div>
            </div>
            <div className='mt-2'>Email</div>
            <input placeholder='Nhập Email của bạn...' className='border-black border rounded pl-2 w-full h-10' />
            <div className='mt-2'>Password</div>
            <div className='relative'>
              <input
                placeholder=''
                className='border-black border rounded pl-2 w-full h-10'
                type={'password'}
              />
              <div className='eye-input'></div>
            </div>
            <div
              className='rounded w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer mt-4'>
              Đăng ký
            </div>
            <div className='flex justify-center items-center mt-2 flex-col'>
              <div className='flex'>Already have an Account? <div to={'/login'} className='ml-2 text-blue-700 cursor-pointer'>Login</div></div>
              <div className='mt-2 px-8 text-center'>By continuing, you agree to accept our Privacy Policy & Terms of Service.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}