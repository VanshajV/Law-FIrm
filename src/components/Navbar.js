import React from 'react'

export default function Navbar() {
  return (
    <div className=''>

    <div id="navhead" className='flex mt-[34px] md:ml-[120px] md:mr-[103px]  text-center items-center h-[42px] justify-between mx-10  md:space-x-20'>
    <div>
      <h1 className=' text-[#3A4B43] text-[24px]'><b>snazzy</b>lawyer</h1>
    </div>
    <div className='hidden md:block'>
    <div className=' flex gap-[82px]  text-[#072C27] font-[700] h-[42px]  items-center' >
    <div className=' flex list-none space-x-[29px]'>
      <li>About Us</li>
      <li>Offer</li>
      <li>Our Team</li>
      <li>Blog</li>
      <li>Contact</li>

    </div>
    <div className='  bg-[#EDB86F] h-[42px] flex items-center px-[15px] hid'>
      <button className="">Make an Appointment</button>
    </div>
    </div>
    </div>
    <div className='md:hidden'><img  className="w-6" src="hamburger (1).png" alt="" /></div>
    </div>
    </div>
  )
}
