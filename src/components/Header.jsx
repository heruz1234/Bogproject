import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeaderNavBar() {
    const navigate= useNavigate()
    const [menuIcon,setmenuIcon] = useState(false)
    const changeMenu =() => {
        setmenuIcon(!menuIcon)
    }
    const menu = [
        {
           text: 'Home' ,
           link: '/'

        },
        {
            text: ' New Blog', 
            link: '/blog/add_new'
        }
    ]
    
  return (
    <div className="shadow-lg px-20 h-[10vh] flex justify-between items-center">
        <div className="font-bold text-2xl text-white">
            My<span className='text-red-400'>Blog</span>
        </div>
        <div className="">
            <ul className='hidden md:flex'>
                {menu.map((item, index) =>(
                    <li onClick={() => navigate(item.link)}
                    key={index} 
                    className='uppercase text-sm text-gray-400 font-bold px-4 py-5 cursor-pointer hover:text-red-400'>
                        {item.text}
                    </li>
                )
                )}
            </ul>
            <div className='md:hidden'>
                {
                    menuIcon === true ?
                    <i onClick={changeMenu} className='border p-2 rounded-2xl hover:animate-pulse pi pi-times text-white'></i>
                    :
                    <i onClick={changeMenu} className='border p-2 rounded-2xl hover:animate-pulse pi pi-bars text-white'></i>
                }
            </div>

            {
                menuIcon === true?
                <div className='absolute left-0 top-24 text-black  '>
                      {menu.map((item, index) =>(
                    <li onClick={() => navigate(item.link)}
                    key={index} 
                    className='mb-3 bg-[rgb(0,0,0,0.5)] uppercase text-lg font-bold px-4 py-5 w-[25.7rem] cursor-pointer hover:text-red-400'>
                        {item.text}
                    </li>
                )
                )}
                </div>: ''
            }
        </div>
    </div>
  )
}
