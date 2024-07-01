import React from 'react'
import RecentPostBox from './RecentPostBox'


const Hero = () => {
  return (
    <div className=' py-[30px] '>
      <div className='flex flex-col items-center pb-[28px]'>
        <h1 className='text-white text-[20px] font-bold md:text-[32px] mt-[40px] md:mt-[60px]'>Recent Posts</h1>
        <div className='w-[152px] h-[2px] md:w-[230px] bg-white' />
      </div>
     <div>
      <RecentPostBox />
     </div>
    </div>
  )
}

export default Hero