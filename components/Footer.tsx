import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";



const Footer = () => {
  return (
    <div className="bg-[#1B222C] md:pt-[60px] pt-[20px] flex flex-col items-center justify-center ">
      <div className="text-[38px] flex gap-[25px] text-white pb-[20px]">
        <FaInstagram className="hover:text-[#FB8B01] active:text-[#FB7712]" />
        <FaFacebook className="hover:text-[#FB8B01] active:text-[#FB7712]" />
        <FaXTwitter className="hover:text-[#FB8B01] active:text-[#FB7712]" />
      </div>
      <div>
        <ul className="flex flex-wrap w-[300px] md:w-full gap-[10px] items-center justify-center pb-[10px] md:gap-[25px] md:pt-[30px] md:text-[20px] text-white">
          <Link href="/contact">Contact Us</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <a href="#">Exercises</a>
          <a href="#">Projects</a>
        </ul>
      </div>
      <div className="md:text-[20px] text-[12px] text-white md:mt-[30px] pb-[10px]">
        <h1>© 2024 <a href='https://www.bytebrush.dev' target='_blank' className="underline">ByteBrush.</a> All Rights Reserved.</h1>
      </div>
    </div>
  )
}

export default Footer