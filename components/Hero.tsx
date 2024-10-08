import AdBanner from "@/components/AdsBanner";
import RecentPostBox from './RecentPostBox'


const Hero = () => {
  return (
    <div className=' py-[30px] min-h-screen'>
      <div className='flex flex-col items-center pb-[28px]'>
        <h1 className='text-white text-[20px] font-medium md:text-[32px] mt-[40px] md:mt-[60px]'>Recent Posts</h1>
        <div className='w-[130px] h-[1px] md:w-[220px] bg-white' />
      </div>
     <div>
      <RecentPostBox />
     </div>
     <div className="pt-[20px]">
           <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="5613366550"
      />
     </div>

    </div>
  )
}

export default Hero