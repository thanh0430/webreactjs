import React from 'react'
import '../App.css'
export default function Footer() {
  return (
    <div className='footter'>
        <ul>
          <li> 
           <h2>Thông tin công ty</h2>
            <div className='footter1'>
              <p>Tel: 038.498.2547</p>
              <p>Hotline: 0384982547</p>
              <sp>Email: contact@ducvietco.com</sp>
              <p>Thời gian làm việc: 8:30 - 20:00</p>
             </div>
          </li>

          <li> 
          <h2>Chính Sách</h2>
              <div className='footter1'>
                <a href='#'> Ưu đãi đối tác</a><br/>
                <a href='#'> Bảo vệ thông tin người dùng</a><br/>
                <a href='#'> Điều kiện giao dịch </a><br/>
                <a href='#'> Bảo mật giao dịch của khách hàng </a><br/>
                <a href='#'> Chính sách bảo hành </a><br/>
                <a href='#'> Chính sách 30 ngày đổi trả</a><br/>
                <a href='#'> Chính sách quy định và thanh toán</a><br/>        
              </div>               
          </li>
          <li> <h2>Hỗ trợ khách hàng</h2>
            <div className='footter1'>
              <a href='#'> Hướng dẫn mua hàng</a><br/>
              <a href='#'> Hướng dấn mua laptop trả góp</a><br/>
              <a href='#'> Hướng dấn thanh toán </a><br/>
              <a href='#'> Phương thức vẫn chuyển </a><br/>
              <a href='#'> Vận chuyển và giao nhận</a><br/>
              <a href='#'> Chính sách đổi trả và bảo hành</a><br/>
              <a href='#'> Bảng giá nâng cấp linh phụ kiện</a><br/> 
            </div>
          </li>
          <li>
            <h2>Thông tin khác</h2>
            <div>
                <p>Tổng đài hỗ trợ miễn phí
                  <br/>(Gọi mua - Góp ý - Bảo hành)<br/>
                  1800.6800 (8:00 - 21:00)
                </p>
                <p>Email: thanhnn0403@gmail.com<br/>
                  Hotline: 0384982547
                </p>
            </div>
          </li>
        </ul>
    </div>
  )
}
