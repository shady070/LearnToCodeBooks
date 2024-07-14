import React from 'react'
import ExercisePostBox from './ExercisePostBox'

const Exercises = () => {
  return (
    <div className='hidden md:pt-[30px]'>
      {/* Exercises is hidden for now  */} 
        <div className='flex flex-col items-center pb-[28px]'>
        <h1 className='text-white text-[20px] font-medium md:text-[32px] '>Exercises</h1>
        <div className='w-[100px] h-[1px] md:w-[150px] bg-white' />
        </div>
        <div>
            <ExercisePostBox />
        </div>
    </div>
  )
}

export default Exercises