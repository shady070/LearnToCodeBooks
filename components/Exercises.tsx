import React from 'react'
import ExercisePostBox from './ExercisePostBox'

const Exercises = () => {
  return (
    <div className='md:pt-[30px]'>
        <div className='flex flex-col items-center pb-[28px]'>
        <h1 className='text-white text-[20px] font-bold md:text-[32px] '>Exercises</h1>
        <div className='w-[152px] h-[2px] md:w-[180px] bg-white' />
        </div>
        <div>
            <ExercisePostBox />
        </div>
    </div>
  )
}

export default Exercises