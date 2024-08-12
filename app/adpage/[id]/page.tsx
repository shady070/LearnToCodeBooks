"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import AdBanner from "@/components/AdsBanner";

const Page = () => {
  const [timer, setTimer] = useState(10);
  const [isCounting, setIsCounting] = useState(true);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [adClickCount, setAdClickCount] = useState(0); // Track the number of ad clicks
  const [isDownloadEnabled, setIsDownloadEnabled] = useState(false); // Enable download after clicks

  useEffect(() => {
    if (isCounting && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else if (timer === 0) {
      setIsCounting(false);
    }
  }, [timer, isCounting]);

  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchPostDetails = async () => {
        try {
          const req = await fetch(
            `https://freeresources.learntocodebooks.com/wp-json/wp/v2/recentpost/${id}?acf_format=standard&_fields=acf`
          );
          const postData = await req.json();
          setFileUrl(postData.acf.zip_file);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching post details:", error);
          setLoading(false);
        }
      };

      fetchPostDetails();
    }
  }, [id]);

  const handleAdClick = () => {
    setAdClickCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount >= 3 && !isCounting) {
        setIsDownloadEnabled(true);
      }
      return newCount;
    });
  };

  if (loading) {
    return <div className="spinner1"></div>;
  }

  return (
    <div className="md:px-[65px] px-[30px] py-[80px] bg-[#12151C] scroll-smooth md:py-[42px] md:pt-[130px]">
      {fileUrl && (
        <div className="py-[10px] flex justify-center flex-col items-center">
          <AdBanner
            dataAdFormat="auto"
            dataFullWidthResponsive={true}
            dataAdSlot="5686730197"
            onAdClick={handleAdClick}
          />
          <AdBanner
            dataAdFormat="auto"
            dataFullWidthResponsive={true}
            dataAdSlot="7923781229"
            onAdClick={handleAdClick}
          />
          <AdBanner
            dataAdFormat="auto"
            dataFullWidthResponsive={true}
            dataAdSlot="5495158507"
            onAdClick={handleAdClick}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <button
              disabled={!isDownloadEnabled}
              className={`text-white bg-[#1DA1F2] px-[20px] py-[10px] rounded-md text-[24px] md:text-[34px] ${isDownloadEnabled ? "cursor-pointer" : "cursor-not-allowed"}`}
              onClick={() => {
                if (fileUrl) {
                  const link = document.createElement("a");
                  link.href = fileUrl;
                  link.setAttribute("download", "file.zip");
                  document.body.appendChild(link);
                  link.click();
                  link.parentNode?.removeChild(link);
                }
              }}
            >
              {isCounting
                ? `Your Download Link Will Be Ready in ${timer} seconds`
                : isDownloadEnabled
                ? "Download"
                : `Click on ${3 - adClickCount} more ad(s) to enable download`}
            </button>
            <div className="pt-[10px]">
              <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="5686730197"
                onAdClick={handleAdClick}
              />
              <div className="pt-[10px]">
                <AdBanner
                  dataAdFormat="auto"
                  dataFullWidthResponsive={true}
                  dataAdSlot="2863026234"
                  onAdClick={handleAdClick}
                />
              </div>
              <div>
                <AdBanner
                  dataAdFormat="auto"
                  dataFullWidthResponsive={true}
                  dataAdSlot="7923781229"
                  onAdClick={handleAdClick}
                />
              </div>
              <div>
                <AdBanner
                  dataAdFormat="auto"
                  dataFullWidthResponsive={true}
                  dataAdSlot="5495158507"
                  onAdClick={handleAdClick}
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