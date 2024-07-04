
const page = () => {
  return (
    <div className="bg-[#12151C] px-[30px] md:px-[95px] text-white pt-[70px] lg:pt-[100px] lg:pb-[40px] pb-[28px] flex flex-col items-center">
        <div className="flex flex-col items-center text-center">
            <h1 className='text-[40px] md:w-[552px] font-medium '>Let’s Connect with You and Your ideas</h1>
            <p className='text-[24px] md:w-[456px] font-extralight'>I’m here to listen, advise, and help you. Schedule your call today.</p>
        </div>
    <div>
        <div className="md:pt-[95px] pt-[40px]">
            <h1 className='text-[24px] font-medium'>Name</h1>
            <input className="bg-transparent md:w-[520px] w-[250px] h-[40px] px-[10px]" placeholder='Enter Your Name' name="Name"></input>
            <hr className='md:w-[520px] w-[250px]' />
        </div>
        <div className="pt-[45px]">
            <h1 className='text-[24px] font-medium'>Email</h1>
            <input className="bg-transparent md:w-[520px] w-[250px] h-[40px] px-[10px]" placeholder='Enter Your Email' name="Email"></input>
            <hr className='md:w-[520px] w-[250px]' />
        </div>
        <div className="pt-[45px]">
            <h1 className='text-[24px] font-medium'>Message</h1>
            <textarea className="bg-transparent md:w-[520px] w-[250px] h-[240px] px-[10px] py-[10px]" placeholder='I want to know about your site....' name="Email"></textarea>
            <hr className='md:w-[520px] w-[250px]' />
        </div>
    </div>
        <button className="mt-[45px] w-[138px] h-[48px] bg-[#FB7712] rounded-lg">Submit</button>
    </div>
  )
}

export default page