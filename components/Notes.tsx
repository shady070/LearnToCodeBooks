import React from 'react'
import NotesPostBox from './NotesPostBox'

const Notes = () => {
  return (
    <div>
    <div className='flex flex-col pb-[28px]'>
      <h1 className='text-white text-[20px] font-bold md:text-[32px] '>Notes</h1>
      <div className='w-[70px] h-[2px] md:w-[100px] bg-white' />
    </div>
    <NotesPostBox />
  </div>
  )
}

export default Notes