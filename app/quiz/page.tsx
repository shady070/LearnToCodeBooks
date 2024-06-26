import QuizPostBox from "@/components/QuizPostBox"


const page = () => {
  return (
    <div className="bg-black px-[30px] md:px-[95px] pt-[70px] lg:pt-[100px] lg:pb-[40px] pb-[28px]">
    <div className='flex flex-col pb-[28px]'>
      <h1 className='text-white text-[20px] font-bold md:text-[32px] '>Take Quiz</h1>
      <div className='w-[105px] h-[2px] md:w-[160px] bg-white' />
    </div>
    <QuizPostBox />
  </div>
  )
}

export default page