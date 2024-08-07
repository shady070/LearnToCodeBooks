import AdBanner from "@/components/AdsBanner";
import ProjectPostBox from './ProjectPostBox'

const Projects = () => {
  return (
    <div className='pb-[30px] md:pt-[20px]'>
    <div className='flex flex-col pb-[28px]'>
      <h1 className='text-white text-[20px] font-medium md:text-[32px] '>Projects</h1>
      <div className='w-[80px] h-[1px] md:w-[130px] bg-white' />
    </div>
    <ProjectPostBox />
    <div className="pt-[20px]">
    <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="2616238940"
      />
     </div>
  </div>
  )
}

export default Projects