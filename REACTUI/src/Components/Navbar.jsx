import React from 'react'
import logo from '../Images/xcelore_logo.png'

export const Navbar = () => {
  return (
    <div className='w-full absolute top-0 z-10 border-b-[0.5px] border-black'>
      <nav className='bg-transparent text-white w-full flex items-center justify-between px-[5.8%] py-[1%] '>
        <div className='logo'>
          <img className='max-w-[153px]' src={logo} alt="" />
        </div>
        <div className='2xl:flex hidden gap-7 items-center'>
          <ul className='flex gap-12 font-semibold whitespace-nowrap'>
            <li>Home</li>
            <li className='flex items-center gap-2'>Our Offerings <i className="fa-solid fa-angle-down"></i></li>
            <li>AI Products</li>
            <li className='flex items-center gap-2'>Accelerators <i className="fa-solid fa-angle-down"></i></li>
            <li>Blogs</li>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
          <div className='border bg-gradient-to-r font-semibold from-purple-400 to-orange-400 px-10 py-1 rounded-lg whitespace-nowrap'>Contact Us</div>
        </div>

        <div className='inline-block 2xl:hidden'>
        <i className="fa-solid fa-bars text-2xl"></i>
        </div>
      </nav>
    </div>
  )
}
