import React from 'react'

export default function Home() {
  return (
    <div className='home flex md:flex-row flex-col items-center mt-[74px] ' id="hom1">
      <div className= ' md:w-[708px] w-[293px] mx-[119px] '>
        <p className=' text-[#092C27] text-[40px] md:text-[90px]'>Overcome legal abstacles to your <span className=' text-[#EDB96F]'>success!</span></p>
        <p className='text-[18px] md:w-[552px] font-[600] mt-[26px] '>Law without obstacles for your success. Professional support to help you overcome legal difficulties and achieve your goals.</p>
        <button id="" className='navhead bg-[#EDB86F]  mt-[58px] px-[15px] py-[10px] font-[700]'>Book free consultation</button>
      </div>

        <div>
          <img className='md:w-[550px]  z-50 md:absolute md:h-[672px] w-[400px]' src="image_1-removebg-preview 1.png" alt="" />
          <div className=' rounded-t-full md:w-[500px]  relative md:h-[672px] w-[400px] bg-[#EDB96F]'> </div>
        </div>
         


    </div>
  )
}
