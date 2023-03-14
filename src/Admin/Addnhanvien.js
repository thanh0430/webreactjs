import React from 'react'
import './adim.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Addnhanvien() {
    const [Addnhanvien, setAddnhanvien]= useState([])
    useEffect (()=>{
      const callApi = async () => {
        const result = await axios.get('http://localhost:9010/employee')
        console.log(result)
        setAddnhanvien(result.data.result)
        console.log(result.data.result)
      }
      callApi();
    }, []);

  return (
    <div>
        <div className='ml-60 mt-5'>
            <button
                type="button"
                className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  hover:bg-sky-400">
                Thêm mới
            </button>
        </div>
    {Addnhanvien.map ( item => (
        <div className='flex justify-center mt-7'>
    
        <table className='table-auto text-center '>
        <thead className=''>
        <tr>
            <th>Tên</th>
            <th>Ngày sinh</th>
            <th>giới tính</th>
            <th>Quê quán</th>
            <th>Chức vụ</th>
            <th>Số điện thoại</th>
            <th>Chức năng</th>
        </tr>
        </thead>
        <tbody >
        <tr class="gradeA">
            <td>{item.full_name}</td>
            <td>{item.birth}</td>
            <td>{item.gender}</td>
            <td>{item.address}</td>
            <td>{item.position}</td>
            <td>{item.indentification_number}</td>
            <td className='w-60'>
            <button
                    type="button"
                    className=" mr-10 rounded-full bg-primary px-6  text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  hover:bg-sky-400 ">
                    Sửa
                </button>
                <button
                    type="button"
                    className="rounded-full bg-primary px-6 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  hover:bg-sky-400">
                    Xóa
                </button>
            </td>
        </tr>         
        </tbody>
        </table>

        </div>

    ))}
    
    </div>
  )
}
