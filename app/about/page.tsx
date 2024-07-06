import Image from "next/image"


const page = () => {
  return (
    <div className="bg-[#12151C] px-[30px] md:px-[95px] text-white pt-[70px] lg:pt-[100px] lg:pb-[40px] pb-[28px] scroll-smooth">
      <div className="lg:flex">
          <div>
              <h1 className='lg:text-[226px] text-[100px]'>About <br /> Us</h1>
            </div>
            <div className="lg:pt-[95px]">
                  <p className="text-[24px] lg:pl-[35px] lg:pb-[52px] pb-[20px] font-thin  leading-relaxed">We Help People learn code more efficiently with help of our 
                grate quiz, posts, notes, and the free courses provided.</p>
                <div>
                <Image className="rounded-[28px] "
                src="/Code.png"
                height={531}
                width={712}
                alt="Image"
                />
            </div>
          </div>
      </div>
      <div>
        <h1 className="font-thin leading-relaxed text-[24px] pt-[20px] lg:pt-[0px] ">At LearntoCodeBooks.com, we are dedicated to empowering individuals to learn coding more efficiently through our extensive resources and tools. Our platform offers a unique combination of interactive quizzes, insightful posts, comprehensive notes, and free </h1>
      </div>
      <div className="lg:flex lg:pt-[44px] pt-[20px] gap-[48px]">
        <Image className="rounded-[28px] bg-no-repeat bg-cover bg-center"
                  width={640}
                  height={600}
                  src="/Branding.png"
                  alt="Image"
                  />
        <h1 className="font-thin leading-relaxed	text-[24px] pt-[20px] lg:pt-[0px]">courses that cater to all learning styles. Whether you are a beginner just starting your coding journey or an experienced developer looking to expand your skill set, our resources are designed to support your growth every step of the way. Our carefully curated quizzes are a cornerstone of our learning methodology, helping users to reinforce their understanding of key</h1>
      </div>
      <h1 className="font-thin leading-relaxed	text-[24px] pt-[10px]">concepts through practice and repetition. These quizzes are designed to challenge your knowledge, provide immediate feedback, and guide you toward mastery. Alongside our quizzes, our posts delve into various coding topics, offering in-depth explanations, tips, and real-world examples to help you gain a deeper understanding of complex subjects. </h1>
    </div>
  )
}

export default page