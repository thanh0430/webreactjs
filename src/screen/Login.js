import React from 'react';
import '../App.css'

export default function Login() {
  return (
    <div className=' auth-screen'>
      {/* content */}
      <div className='wrap-content'>           
         <div className=' p-10 border'>
            <div className='text-center text-3xl font-bold'>Login</div>
            <div className='mt-4'>Email</div>
            <input
              placeholder='Nhập email của bạn' className='border-black border rounded pl-2 w-full h-10' />
            <div className='mt-2'>Password</div>
            <div className='relative'>
              <input
                placeholder='Mật Khẩu'
                className='border-black border rounded pl-2 w-full h-10'
                type={'password'}
              />
              <div className='eye-input'> </div>
            </div>
            <div
              className='rounded w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer mt-4'>
              ĐĂNG NHẬP
            </div>
           
            <div className='flex justify-center items-center mt-2 flex-col'>
              <div className='flex'>Nếu bạn chua có tài khoản? <div to={'/register'} className='ml-2 text-blue-700 cursor-pointer'>ĐĂNG KÝ</div></div>
              <div className='mt-2 px-8 text-center'>Bằng cách tiếp tục, bạn đồng ý chấp nhận Chính sách quyền riêng tư & Điều khoản dịch vụ của chúng tôi.</div>
            </div>
          </div>
        </div>
      </div>
 
  );
}
