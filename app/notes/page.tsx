import NotesPostBox from "@/components/NotesPostBox"


const page = () => {
  return (
    <div className="bg-[#12151C] px-[30px] md:px-[95px] pt-[70px] lg:pt-[100px] lg:pb-[40px] pb-[28px]">
    <div className='flex flex-col pb-[28px]'>
      <h1 className='text-white text-[20px] font-medium md:text-[32px] '>Notes</h1>
      <div className='w-[70px] h-[2px] md:w-[100px] bg-white' />
    </div>
    <NotesPostBox />
  </div>
  )
}

export default page