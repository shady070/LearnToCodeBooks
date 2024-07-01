import NotesPostBox from './NotesPostBox'
import ProjectPostBox from './ProjectPostBox'

const Projects = () => {
  return (
    <div className='pb-[30px] md:pt-[20px]'>
    <div className='flex flex-col pb-[28px]'>
      <h1 className='text-white text-[20px] font-bold md:text-[32px] '>Projects</h1>
      <div className='w-[90px] h-[2px] md:w-[140px] bg-white' />
    </div>
    <ProjectPostBox />
  </div>
  )
}

export default Projects