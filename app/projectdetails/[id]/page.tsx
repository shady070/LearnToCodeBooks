"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DOMPurify from 'dompurify';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Post } from "../../../types";
import { motion } from "framer-motion";
import AdBanner from "@/components/AdsBanner";


const Page = () => {
  const [timer, setTimer] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
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

  const startTimer = () => {
    setTimer(15);
    setIsCounting(true);
  };

  
  const pathname = usePathname();
  const id = pathname.split("/").pop(); 
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchPostDetails = async () => {
        try {
          const req = await fetch(`https://freeresources.learntocodebooks.com/wp-json/wp/v2/projects/${id}?acf_format=standard&_fields=acf`);
          const postData = await req.json();
          setPost(postData);
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

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div className="md:px-[65px] px-[30px] py-[80px] bg-[#12151C] scroll-smooth  md:py-[42px] md:pt-[130px]">
    <div>
      <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.3, duration:0.7 }} className="text-[32px] text-white font-medium">{post.acf.title}</motion.h1>
      <motion.p initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.4, duration:0.8 }} className="md:text-[24px] pt-[16px] pb-[16px] text-white font-light">{post.acf.subtitle}</motion.p>
    </div>
    <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>
      <img className="w-full md:h-[481px] h-[200px] object-cover md:rounded-[20px] rounded-md " src={post.acf.post_thumbnail} alt={post.acf.title} />
    </motion.div>
    <div className="text-[32px] pt-[10px] text-white md:pt-[25px]">
      <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.6, duration:0.8 }}>{post.acf.inline_title}</motion.h1>
    </div>
    <div className="w-full md:text-[24px] text-white pt-[20px] font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.7, duration:0.8 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.details.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    <div className="text-[32px] text-white pb-[20px] md:pt-[25px]">
      <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.3, duration:0.7 }}>{post.acf.inline_title_1}</motion.h1 >
    </div>
    <div className="w-full md:text-[24px] pb-[20px] text-white font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    <div className="text-[32px] text-white pb-[20px] md:pt-[25px]">
      <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.3, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.inline_title_2.replace(/\r\n/g, '<br/>')) }}></motion.h1>
    </div>
    <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="5613366550"
      />
    {post.acf.code && (
      <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>
        <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
          {post.acf.code}
        </SyntaxHighlighter>
      </motion.div>
    )}
    {post.acf.inline_title_3 && (
    <div className="text-[32px] text-white pb-[20px] md:pt-[25px]">
      <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.3, duration:0.7 }}>{post.acf.inline_title_3}</motion.h1 >
    </div>
    )}
    {post.acf.more_text_1 && (
    <div className="w-full md:text-[24px] pb-[20px] text-white font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_1.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    )}
    {post.acf.code_1 && (
      <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>
       <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      {post.acf.code_1}
       </SyntaxHighlighter>
      </motion.div>
    )}
    {post.acf.inline_title_4 && (
    <div className="text-[32px] text-white pb-[20px] md:pt-[25px]">
      <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.3, duration:0.7 }}>{post.acf.inline_title_4}</motion.h1>
    </div>
    )}
    {post.acf.more_text_2 && (
    <div className="w-full md:text-[24px] pb-[20px] text-white font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_2.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    )}
    {post.acf.code_2 && (
      <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>
      <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
        {post.acf.code_2}
       </SyntaxHighlighter>
      </motion.div>

    )}
    {post.acf.inline_title_5 && (
    <div className="text-[32px] text-white pb-[20px] md:pt-[25px]">
      <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.3, duration:0.7 }}>{post.acf.inline_title_5}</motion.h1>
    </div>
    )}
    {post.acf.more_text_3 && (
    <div className="w-full md:text-[24px] pb-[20px] text-white font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_3.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    )}
      <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="5613366550"
      />
    {post.acf.code_3 && (
      <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>
      <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      {post.acf.code_3}
      </SyntaxHighlighter>
      </motion.div>
    )}
    {post.acf.inline_title_6 && (
    <div className="text-[32px] text-white pb-[20px] md:pt-[25px]">
      <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.3, duration:0.7 }}>{post.acf.inline_title_6}</motion.h1>
    </div>
    )}
    <div className="w-full md:text-[24px] pb-[20px] text-white font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_4.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    {post.acf.code_4 && ( 
      <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>
       <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      {post.acf.code_4}
      </SyntaxHighlighter>
      </motion.div>
    )}
    {post.acf.inline_title_7 && (
    <div className="text-[32px] text-white pb-[20px] md:pt-[25px]">
      <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.3, duration:0.7 }}>{post.acf.inline_title_7}</motion.h1>
    </div>
   )}
    {post.acf.more_text_5 && (
    <div className="w-full md:text-[24px] pb-[20px] text-white font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_5.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    )}
    {post.acf.code_5 && (
      <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>
       <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      {post.acf.code_5}
       </SyntaxHighlighter>   
      </motion.div>
    )}
      <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="5613366550"
      />
    {post.acf.inline_title_8 && (
    <div className="text-[32px] text-white pb-[20px] md:pt-[25px]">
      <motion.h1 initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>{post.acf.inline_title_8}</motion.h1>
    </div>
    )}
    {post.acf.more_text_6 && (
    <div className="w-full md:text-[24px] pb-[20px] text-white font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_6.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    )}
    {post.acf.code_6 && (
      <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} >
      <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      {post.acf.code_6}
      </SyntaxHighlighter>
      </motion.div>
    )}
    {post.acf.inline_title_9 && (
    <div className="text-[32px] text-white pb-[20px] md:pt-[25px]">
      <motion.h1 initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>{post.acf.inline_title_9}</motion.h1>
    </div>
    )}
    {post.acf.more_text_7 && (
    <div className="w-full md:text-[24px] pb-[20px] text-white font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_7.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    )}
    {post.acf.code_7 && (
      <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>
      <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
      {post.acf.code_7}
     </SyntaxHighlighter>
      </motion.div>
    )}
    {post.acf.inline_title_10 && (
    <div className="text-[32px] text-white pb-[20px] md:pt-[25px]">
      <motion.h1 initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} >{post.acf.inline_title_10}</motion.h1>
    </div>
    )}
    {post.acf.more_text_8 && (
    <div className="w-full md:text-[24px] pb-[20px] text-white font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_8.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    )}
    {post.acf.code_8 && (
      <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>
        <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
          {post.acf.code_8}
        </SyntaxHighlighter>
      </motion.div>
    )}
    {post.acf.more_text_9 && (
    <div className="w-full md:text-[24px] pb-[20px] text-white font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_9.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    )}
      <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="5613366550"
      />
    {post.acf.code_9 && (
      <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>
      <SyntaxHighlighter language="javascript" style={okaidia} className="w-full md:text-[24px] text-white md:pt-[30px] font-light">
        {post.acf.code_9}
      </SyntaxHighlighter>
      </motion.div>
    )}
    {post.acf.more_text_10 && (
    <div className="w-full md:text-[24px] pb-[20px] text-white font-light">
      <motion.p initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.acf.more_text_10.replace(/\r\n/g, '<br/>')) }}></motion.p>
    </div>
    )}
      <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="5613366550"
      />
                 {post.acf.zip_file && (
        <div className="py-[10px] flex justify-center">
          <motion.div initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.7 }}>
            <button onClick={startTimer} disabled={isCounting} className="text-white bg-black px-[20px] py-[10px] rounded-md text-[24px] md:text-[34px]">
              {isCounting ? `Wait ${timer} seconds` : 'Download'}
            </button>
            {isCounting && 
            <div className="pt-[10px]">
            <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="5613366550"
            />
            <div className="pt-[10px]">
            <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="2616238940"
            />
            </div>
            <div>
            <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="4601072757"
            />
            </div>
            </div>}
          </motion.div>
        </div>
      )}
  </div>
  );
};

export default Page;
