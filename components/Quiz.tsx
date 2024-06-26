import QuizPostBox from './QuizPostBox'

const Quiz = () => {
  return (
    <div className=' pb-[30px] '>
        <div className='flex flex-col items-center pb-[28px]'>
        <h1 className='text-white text-[20px] font-bold md:text-[32px] '>Take Quiz</h1>
        <div className='w-[152px] h-[2px] md:w-[180px] bg-white' />
        </div>
        <div>
            <QuizPostBox />
        </div>
    </div>
  )
}

export default Quiz