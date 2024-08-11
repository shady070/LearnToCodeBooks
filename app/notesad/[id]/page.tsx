
"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import AdBanner from "@/components/AdsBanner";

const Page = () => {
  const [timer, setTimer] = useState(20); 
  const [isCounting, setIsCounting] = useState(true); 
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  useEffect(() => {
    if (isCounting && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else if (timer === 0 && isCounting) {
      setIsCounting(false);
      // Trigger download here
      if (fileUrl) {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'file.zip');
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      }
    }
  }, [timer, isCounting, fileUrl]);

  const pathname = usePathname();
  const id = pathname.split("/").pop(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchPostDetails = async () => {
        try {
          const req = await fetch(`https://freeresources.learntocodebooks.com/wp-json/wp/v2/notes/${id}?acf_format=standard&_fields=acf`);
          const postData = await req.json();
          setFileUrl(postData.acf.zip_file);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching post details:', error);
          setLoading(false);
        }
      };

      fetchPostDetails();
    }
  }, [id]);

  if (loading) {
    return <div className="spinner1"></div>;
  }

  return (
    <div className="md:px-[65px] px-[30px] py-[80px] bg-[#12151C] scroll-smooth md:py-[42px] md:pt-[130px]">
      {fileUrl && (
        /* Download btn */
        <div className="py-[10px] flex justify-center">
                <AdBanner
                  dataAdFormat="auto"
                  dataFullWidthResponsive={true}
                  dataAdSlot="5686730197"
                />
                <AdBanner
                  dataAdFormat="auto"
                  dataFullWidthResponsive={true}
                  dataAdSlot="7923781229"
                />
                 <div>
                  <AdBanner
                    dataAdFormat="auto"
                    dataFullWidthResponsive={true}
                    dataAdSlot="7923781229"
                  />
                </div>
                <div>
                  <AdBanner
                    dataAdFormat="auto"
                    dataFullWidthResponsive={true}
                    dataAdSlot="5495158507"
                  />
                </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
            <button disabled={isCounting} className="text-white bg-[#1DA1F2] px-[20px] py-[10px] rounded-md text-[24px] md:text-[34px]">
              {isCounting ? `Your Download Will Begin in ${timer} seconds` : 'Download'}
            </button>
              <div className="pt-[10px]">
                <AdBanner
                  dataAdFormat="auto"
                  dataFullWidthResponsive={true}
                  dataAdSlot="5686730197"
                />
                <div className="pt-[10px]">
                  <AdBanner
                    dataAdFormat="auto"
                    dataFullWidthResponsive={true}
                    dataAdSlot="2863026234"
                  />
                </div>
                <div>
                  <AdBanner
                    dataAdFormat="auto"
                    dataFullWidthResponsive={true}
                    dataAdSlot="7923781229"
                  />
                </div>
                <div>
                  <AdBanner
                    dataAdFormat="auto"
                    dataFullWidthResponsive={true}
                    dataAdSlot="5495158507"
                  />
                </div>
              </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Page;