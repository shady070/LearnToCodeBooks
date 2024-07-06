import QuizPostBox from './QuizPostBox'

const Quiz = () => {
  return (
    <div className=' md:pt-[30px] '>
        <div className='flex flex-col items-center pb-[28px]'>
        <h1 className='text-white text-[20px] font-medium md:text-[32px] '>Take Quiz</h1>
        <div className='w-[100px] h-[1px] md:w-[150px] bg-white' />
        </div>
        <div>
            <QuizPostBox />
        </div>
    </div>
  )
}

export default Quiz