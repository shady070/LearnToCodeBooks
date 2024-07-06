import React from 'react'
import NotesPostBox from './NotesPostBox'

const Notes = () => {
  return (
    <div>
    <div className='flex flex-col pb-[28px]'>
      <h1 className='text-white text-[20px] font-medium md:text-[32px] '>Notes</h1>
      <div className='w-[60px] h-[1px] md:w-[90px] bg-white' />
    </div>
    <NotesPostBox />
  </div>
  )
}

export default Notes