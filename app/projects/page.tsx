import ProjectPostBox from "@/components/ProjectPostBox"


const page = () => {
  return (
    <div className="bg-black px-[30px] md:px-[95px] pt-[70px] lg:pt-[100px] lg:pb-[40px] pb-[28px]">
    <div className='flex flex-col pb-[28px]'>
      <h1 className='text-white text-[20px] font-bold md:text-[32px] '>Projects</h1>
      <div className='w-[90px] h-[2px] md:w-[140px] bg-white' />
    </div>
    <ProjectPostBox />
  </div>
  )
}

export default page