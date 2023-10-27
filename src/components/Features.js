import React from 'react'

export default function Features() {
    const skills=[{title:"Law Family",img:"Vector.svg",p:"I use Tailwind CSS to beautify my webpages."},
    {title:"Law Criminal" ,img:"Vector (2).svg",p:"Incorporates ReactJs for front-end logics.",cl:"bg-[#222222]"},
    {title:"Law Civil",img:"Vector.svg",p:"Have decent base of js."},
    {title:"Law Employment",img:"Vector (2).svg",p:"Can write codes in C++."},
    {title:"Law Real Estate",img:"Vector (3).svg",p:"Started my coding journey with Python :) cool?"},
    {title:"Compensation",img:"Vector (4).svg",p:"Have basic knowledge of the tool."},
    {title:"Cases success",img:"Vector (5).svg",p:"Have basic knowledge of the tool."},
    {title:"Bankruptcy consumer",img:"Vector (6).svg",p:"Have basic knowledge of the tool."}
];
  return (
    <div className='bg-[F9F6EE] m-auto flex flex-col justify-center items-center'>
        <div className=' font-[700]  flex-col flex items-center justify-center mt-10 w-[728px]'>
        <h1 className=' text-[18px] navhead text-[#EDB86F]'>Specialiation</h1>
        <h1 className='text-[48px] home text-[#092C27]'>What we do</h1>
        <p className=' text-[525755] hidden md:block navhead text-center'>Our lawyer are specialists in criminal law, civil law, commercial law, administrative law and new technologies. We are not afraid of chanllenges, including consumer bankruptcy</p>
        </div>
        
        <div className='flex flex-wrap justify-center mt-10 '>
            {
        skills.map((x)=>(
            <div className='  m-2 flex flex-col justify-between md:w-[300px] md:h-[300px] w-[200px] h-[200px] border-1 border-[#D9D9D9] border-[1px]  p-10'>
            <div className=''>
                <img src={x.img} alt="" />

            </div>
            <div className=' flex justify-between'>
            <p>{x.title}</p>
            <img src="Vector (1).svg" alt="" />
            </div>
            </div>
            
        ))
}
        
        </div>
    </div>
  )
}
